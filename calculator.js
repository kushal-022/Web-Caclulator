const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  // console.log(req.body.num2);  gives access to num1 and num2 to us using body parser .

  var num1 = Number(req.body.num1) ;
  var num2 = Number(req.body.num2) ;
  var result = num1 + num2 ;


  res.send("The result of the addition is : " + result);

});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = ( weight / (height * height)) ;

  res.send("Your BMI is " + bmi);

});

app.listen(3000, function() {
  console.log("Port 3000 started successfully .");
})
