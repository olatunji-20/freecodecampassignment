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


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", (req, res) => {
  
  let inputDate = new Date(req.params.date);

  if(typeof(inputDate) === object) {
    let unixTime = inputDate.getTime();
  let utcTime = inputDate.toUTCString()
  res.send({
    "unix": unixTime,
    "utc": utcTime
  });
  
  console.log(unixTime)
  console.log(utcTime)
  console.log(typeof(1451001600000))

  }else if(typeof(inputDate) == number) {
    console.log(inputDate)
    res.send(inputDate)
  }
  
});

// app.get("/api/1451001600000", (req, res) => {
//   let time = 1451001600000;
//   let utcTime = time.toUTCString()
//   res.json({
//     "unix": 1451001600000,
//     "utc": utcTime
//   })
// })




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
