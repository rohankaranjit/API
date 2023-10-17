//Importing required model.
const express = require("express");
const https = require("https");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//Defining a route.
app.get("/", function (req, res) {
  
    const city = req.body.cityName
    const unit = "metric"
    const appId = "1db849ab2828c5547e48ecfe417c1e99"

    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + appId + "&units=" + unit + "&q=" + city + "#";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      // Handle the response data here
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";

      
      res.write("<p> The weather description is " + weatherDescription);

      res.write("<h1> The temperature is " + temp + " degree Celsius </h1>");
      res.write("<img src= "+ imgURL +">");

      res.send();
    });
  });

});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
