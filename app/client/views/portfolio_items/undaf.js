var topics = [
  'global governance',
  'food security',
  'jobs',
  'infrastructure',
  'climate change',
  'energy',
  'income inequality',
  'gender equality',
  'urbanization',
  'corporate social responsibility',
  'health',
  'oceans and seas',
  'water and sanitation',
  'ecosystem conservation',
  'social inclusion',
  'poverty',
  'education',
]

var undafData = [
    {
        'key': 'India UNDAF 2000',
        'color': "#89c7dd",
        'values': [
          {'y': 0.642135, 'x': 0},
          {'y': 0.677592, 'x': 1},
          {'y': 0.510449, 'x': 2},
          {'y': 0.588322, 'x': 3},
          {'y': 0.510449, 'x': 4},
          {'y': 0.588322, 'x': 5},
          {'y': 0.697539, 'x': 6},
          {'y': 0.512969, 'x': 7},
          {'y': 0.588322, 'x': 8},
          {'y': 0.522393, 'x': 9},
          {'y': 0.391916, 'x': 10},
          {'y': 0.099854, 'x': 11},
          {'y': 0.588322, 'x': 12},
          {'y': 0.099854, 'x': 13},
          {'y': 0.512969, 'x': 14},
          {'y': 0.596369, 'x': 15},
          {'y': 0.345845, 'x': 16},
        ]
    },
    {
        'key': 'India UNDAF 2008-2012',
        'color': "#4F99B4",
        'values': [
          {'y': 0.705267, 'x': 0},
          {'y': 0.713994, 'x': 1},
          {'y': 0.603383, 'x': 2},
          {'y': 0.481851, 'x': 3},
          {'y': 0.603383, 'x': 4},
          {'y': 0.481851, 'x': 5},
          {'y': 0.834016, 'x': 6},
          {'y': 0.625497, 'x': 7},
          {'y': 0.481851, 'x': 8},
          {'y': 0.633189, 'x': 9},
          {'y': 0.330213, 'x': 10},
          {'y': 0.090404, 'x': 11},
          {'y': 0.481851, 'x': 12},
          {'y': 0.090404, 'x': 13},
          {'y': 0.625497, 'x': 14},
          {'y': 0.450572, 'x': 15},
          {'y': 0.057477, 'x': 16},
        ]
    },
    {
        'key': 'India UNDAF 2013-2017',
        'color': "#2b6c84",
        'values': [
          {'y': 0.738355, 'x': 0},
          {'y': 0.765497, 'x': 1},
          {'y': 0.626258, 'x': 2},
          {'y': 0.525340, 'x': 3},
          {'y': 0.626258, 'x': 4},
          {'y': 0.525340, 'x': 5},
          {'y': 0.794234, 'x': 6},
          {'y': 0.505091, 'x': 7},
          {'y': 0.525340, 'x': 8},
          {'y': 0.513500, 'x': 9},
          {'y': 0.390896, 'x': 10},
          {'y': 0.131333, 'x': 11},
          {'y': 0.525340, 'x': 12},
          {'y': 0.131333, 'x': 13},
          {'y': 0.505091, 'x': 14},
          {'y': 0.504828, 'x': 15},
          {'y': 0.232058, 'x': 16},
        ]
    },
    {
        'key': 'Botswana UNDAF 2010-2016',
        'color': "#48ad52",
        'values': [
          {'y': 0.819374, 'x': 0},
          {'y': 0.832976, 'x': 1},
          {'y': 0.693063, 'x': 2},
          {'y': 0.590343, 'x': 3},
          {'y': 0.693063, 'x': 4},
          {'y': 0.590343, 'x': 5},
          {'y': 0.781762, 'x': 6},
          {'y': 0.362785, 'x': 7},
          {'y': 0.590343, 'x': 8},
          {'y': 0.372261, 'x': 9},
          {'y': 0.454222, 'x': 10},
          {'y': 0.103409, 'x': 11},
          {'y': 0.590343, 'x': 12},
          {'y': 0.103409, 'x': 13},
          {'y': 0.362785, 'x': 14},
          {'y': 0.338330, 'x': 15},
          {'y': 0.134725, 'x': 16},
        ]
    },
    {
        'key': 'Nepal UNDAF 2013-2017',
        'color': "#d19d45",
        'values': [
          {'y': 0.665612, 'x': 0},
          {'y': 0.680069, 'x': 1},
          {'y': 0.575721, 'x': 2},
          {'y': 0.430683, 'x': 3},
          {'y': 0.575721, 'x': 4},
          {'y': 0.430683, 'x': 5},
          {'y': 0.821687, 'x': 6},
          {'y': 0.649113, 'x': 7},
          {'y': 0.430683, 'x': 8},
          {'y': 0.655977, 'x': 9},
          {'y': 0.312897, 'x': 10},
          {'y': 0.108236, 'x': 11},
          {'y': 0.430683, 'x': 12},
          {'y': 0.108236, 'x': 13},
          {'y': 0.649113, 'x': 14},
          {'y': 0.587516, 'x': 15},
          {'y': 0.217565, 'x': 16},
        ]
    }
]

Meteor.subscribe('data');

//Generate some nice data.
function exampleData() {
  return Meteor.stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
    return {
      key: 'Stream #' + i,
      values: data
    };
  });
}

// var chart = nv.models.multiBarChart()
//   .duration(350)
//   .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
//   .rotateLabels(0)      //Angle to rotate x-axis labels.
//   .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
//   .groupSpacing(0.3)    //Distance between each group of bars.
//   .stacked(true)
// ;

var chart = nv.models.multiBarHorizontalChart()
  .x(function(d) { return topics[d.x] })
  .y(function(d) { return d.y })
  .margin({top: 30, left: 300, bottom: 50, right: 100})
  // .groupSpacing(0.75)
  // .showValues(true)           //Show bar value next to each bar.
  .tooltips(true)             //Show tooltips on hover.
  .showControls(true)        //Allow user to switch between "Grouped" and "Stacked" mode.
  .width(1000)
  // .groupSpacing(0.5)
  // .barColor(function (d, i) {
  //   var chartColors = ["#D67777","#4F99B4","#111111"];
  //   // console.log(d);
  //   return chartColors[d.doc];
  // })
  ;

chart.tooltipContent(function (key, i, e, graph) {
  // console.log(key, i, e, graph);
  var header = "<p><h4>" + i + "</h4></p>"
  var caption = "<p>" + key + "</p>"
  var value = "<p>Alignment Score: " + graph.value + "</p>"
  return  header + caption + value
});

Template.undaf.onRendered(function () {

  window.scroll(0, 0);

  nv.addGraph(function() {

      // chart.xAxis.tickValues(topics);

      // chart.xAxis
      //     .tickFormat(d3.format(',f'));

      chart.yAxis
          .tickFormat(d3.format(',.1f'));

      chart.multibar.barColor = function() {
        return false;
      };

      chart.legend.color(function(d,i) {
        console.log(d);
        console.log(i);
      });

      // console.log(chart.multibar.barColor());
      // console.log(undafData);
      d3.select('#chart svg')
          .datum(undafData)
          .call(chart);

      nv.utils.windowResize(function() { 
        chart.update; 
      });

      return chart;
  });

  // this.autorun(function() {
  //   d3.select('#chart svg')
  //       .datum(exampleData())
  //       .call(chart);

  //   chart.update;
  // });

});

Template.undaf.helpers({
  title : function(arg) {
    if (arg) {
      return arg;
    }
    return false;
  }
});

Template.undaf.events({
  'click #generate-data': function() {
    console.log(exampleData());
    d3.select('#chart svg')
      .datum(exampleData())
      .call(chart);
  }
});