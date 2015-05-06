Meteor.methods({
	getData: function (url, varName, palette) {

		var result = HTTP.get(Meteor.absoluteUrl(url)).data;

    var response = {};
    response.question = result.question;
    response.data = EJSON.parse(result.data);

    return response;
    // callback(response);
	}
});