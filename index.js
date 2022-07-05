// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint...   2015-12-24T23:00:00.000Z
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp", (req, res) => {
  let date = new Date();
  res.json({
    "unix": date.getTime(), "utc" : date.toUTCString()
  });
});

app.get("/api/timestamp/:date_string", (req, res) => {
  let stringOfDate = req.params.date_string;
  // console.log("string of date" + " " + stringOfDate);
  let parsedDate = parseInt(stringOfDate)
  // console.log("parsed date" + " " + parsedDate);

  if(parsedDate > 10000) {
    let inUnix = new Date(parsedDate);
    res.json({
      "unix": inUnix.getTime(),
      "utc": inUnix.toUTCString()
    })
  }

  let valueOfDate = new Date(stringOfDate);

  if(valueOfDate == "Invalid Date") {
    res.json({
      "unix": valueOfDate.getTime(),
      "utc": valueOfDate.toUTCString()
    })
  }



});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
