var states = ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
"WI", "MO", "AR", "OK", "KS", "VA", "LA"];

function getValues(obj, varName) {
  var values = [];
  for (o in obj) {
    values.push(obj[o][varName]);
  }
  return values;
}

function normalize(val, min, max) {
  normalizedArray = [];

  var normVal = (val - min) / (max - min);
  normalizedArray.push(normVal);

  return normalizedArray;
}

function getData(url, varName, palette, callback) {
  HTTP.get(Meteor.absoluteUrl(url), function(err,result) {
    var data = {},
      jsonData = result.data,
      stateData = EJSON.parse(jsonData.data)
      ;

    var response = {};
    response.question = jsonData.question;

    var values = getValues(stateData, varName),
      max = Math.max.apply(null, values),
      min = Math.min.apply(null, values),
      paletteHi = palette.high,
      paletteLo = palette.low
      ;

    states.forEach(function(d) {
      try {
        var val = stateData[d][varName];
        var normVal = normalize(val, min, max);
        data[d] = {
          color: d3.interpolate(paletteLo, paletteHi)(normVal)
        };
        data[d][varName] = val;
      } catch (e) {
        data[d] = {'color': '#fff'};
        Meteor.Error("can't find state");
      }
      
    });

    response.data = data;
    console.log(response.data);
    callback(response);
  });
}

function tooltipHtml(n, d, varName){ /* function to create html content string in tooltip div. */
  return "<h4>"+n+"</h4><table>"+
    "<tr><td>Yes</td><td>"+(d[varName])+"</td></tr>"+
    "</table>";
}

var uStates = {};

uStates.draw = function(id, data, varName, toolTip){   
  function mouseOver(d){
    d3.select("#tooltip").transition().duration(200).style("opacity", .9);      
    
    d3.select("#tooltip").html(toolTip(d.n, data[d.id], varName))  
      .style("left", (d3.event.pageX) + "px")     
      .style("top", (d3.event.pageY - 28) + "px");
  }
  
  function mouseOut(){
    d3.select("#tooltip").transition().duration(500).style("opacity", 0);      
  }
  
  // console.log(data);
  d3.select(id).selectAll(".state")
    .data(uStatePaths).enter().append("path")
    .attr("class", "state")
    .attr("d", function(d){ return d.d;})
    .style("fill", function(d){
      console.log(data);
      return data[d.id].color; 
    })
    .on("mouseover", mouseOver).on("mouseout", mouseOut);
}


//sample data
// var sampleData ={}; /* Sample random data. */ 

// states.forEach(function(d){ 
//   var low=Math.round(100*Math.random()), 
//     mid=Math.round(100*Math.random()), 
//     high=Math.round(100*Math.random());
//   sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
//       avg:Math.round((low+mid+high)/3), color:d3.interpolate("#D5FFCF", "#1E5F16")(low/100)}; 
// });

var metadata = [
  {
    id: "brfss1",
    question: 'During the past month, did you participate in any physical activities?',
    jsonFilepath: "data/brfss1.json",
    varName: "Yes",
    colorPalette: {low: "#D5FFCF", high: "#1E5F16"},
  },
  {
    id: "brfss2",
    question: 'Consumed fruit more than one time per day',
    jsonFilepath: 'data/brfss2.json',
    varName: 'One or more times per day',
    colorPalette: {low: "#D5FFCF", high: "#1E5F16"},
  },
  {
    id: "brfss3",
    question: 'Consumed vegetables more than one time per day',
    jsonFilepath: 'data/brfss3.json',
    varName: 'One or more times per day',
    colorPalette: {low: "#D5FFCF", high: "#1E5F16"},
  },
  {
    id: "brfss4",
    question: 'Participated in 150 minutes or more of Aerobic Physical Activity per week',
    jsonFilepath: 'data/brfss4.json',
    varName: 'Yes',
    colorPalette: {low: "#D5FFCF", high: "#1E5F16"},
  },
  {
    id: "brfss5",
    question: 'Adults who are current smokers',
    jsonFilepath: 'data/brfss5.json',
    varName: 'Yes',
    colorPalette: {low: "#CDABAB", high: "#662929"},
  },
];

//template helpers and methods
Template.brfss.onRendered(function () {
  /* draw states on id #statesvg */

  Session.set('dataId', 'brfss1');

  this.autorun(function() {

    var dataId = Session.get('dataId'),
      data = _.where(metadata, {id: dataId})[0],
      url = data.jsonFilepath,
      varName = data.varName,
      question = data.question,
      palette = data.colorPalette
      ;

    console.log(data);

    var svg = d3.select(".graph-container")
        .append('svg')
          .attr('id', 'statesvg')
          .attr('width', 960)
          .attr('height', 600);

    Meteor.call('getData', url, varName, palette, function(err, result) {
      console.log('client data', result);

      var stateData = result.data;
      // var question = result.question;
      var data = {};

      var values = getValues(stateData, varName),
      max = Math.max.apply(null, values),
      min = Math.min.apply(null, values),
      paletteHi = palette.high,
      paletteLo = palette.low
      ;

      states.forEach(function(d) {
        console.log(stateData[d])
        try {
          var val = stateData[d][varName];
          var normVal = normalize(val, min, max);
          data[d] = {
            color: d3.interpolate(paletteLo, paletteHi)(normVal)
          };
          data[d][varName] = val;
        } catch (e) {
          data[d] = {'color': '#fff'};
          Meteor.Error("can't find state");
        }
        
      });

      Session.set('question', question);
      uStates.draw("#statesvg", data, varName, tooltipHtml);
    });

    // getData(url, varName, palette, function(result) {
    //   console.log(result.data);
    //   Session.set('question', question);
    //   uStates.draw("#statesvg", result.data, varName, tooltipHtml);
    // });
  });

  // getData("/data/brfss1.json", 'Yes', function(result) {
  //   console.log(result.data);
  //   Session.set('question', result.question);
  //   uStates.draw("#statesvg", result.data, 'Yes', tooltipHtml);
  // });
});

Template.brfss.helpers({
  title : function(arg) {
    if (arg) {
      return arg;
    }
    return false;
  },
  chartTitle : function () {
    return Session.get('question');
  },
  surveyQuestions: function() {
    return metadata;
  }
});

Template.brfss.events({
  'click .brfss' : function (event, template) {
    var dataId = $(event.target).attr('id');
    var currentId = Session.get('dataId');

    if (dataId !== currentId) {
      d3.select('svg').remove();
      // console.log(dataId);
      Session.set('dataId', dataId);
    }
  },
})