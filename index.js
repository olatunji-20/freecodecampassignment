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

app.get('/api/timestamp', (req, res) => {
  let date = new Date();
  res.json({
    "unix": date.getTime(), "utc" : date.toUTCString()
  });
});

app.get('/api/timestamp/:date_string?', (req, res) => {

  let inputDate = req.params.date_string;
  let date;

  if (!isNaN(inputDate)) {
    date = new Date(parseInt(inputDate));
  } else {
    date = new Date(inputDate);
  };

  if (date.toString() === 'Invalid Date') {
    res.json({
      "error": date.toString()
    });
  } else {
    res.json({
      "unix": date.getTime(), "utc" : date.toUTCString()
    });
  }

});






// app.get("/api/:date?", (req, res) => {
//   var date = new Date(req.params.date);
//   var inUnix = date.getTime(date);
//   var inUtc = date.toUTCString(date);
  
//   console.log(date);
//   console.log(inUnix);
//   console.log(inUtc);
//   console.log(req.params);

//   res.json({
//     "unix": inUnix,
//     "utc": inUtc
//   });
// });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
