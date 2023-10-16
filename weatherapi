const { log } = require("console");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?appid=1db849ab2828c5547e48ecfe417c1e99&units=standard&q=Imadol#";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      // Handle the response data here
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description
      console.log(weatherDescription);
    });
  });


  // Sending a response to the client outside of the https.get callback
  res.send("Server is running on port 3000.");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
