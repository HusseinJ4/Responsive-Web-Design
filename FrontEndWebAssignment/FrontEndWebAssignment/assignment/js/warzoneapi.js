var unirest = require("unirest");

var req = unirest("GET", "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/HusseinJ4/psn");

req.headers({
	"x-rapidapi-key": "1fd6fe8b65mshfcfbd06c1463ad9p1a29f9jsn6d49e3701353",
	"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
