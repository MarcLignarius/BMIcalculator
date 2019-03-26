var height = parseInt(prompt("Please enter your height in inches"));
var weight = parseInt(prompt("Please enter your weight in pounds"));
var BMI = function(height, weight){
  return (weight / (Math.pow(height, 2))) * 703;
}
var result = BMI(height,weight);
alert("Your BMI is " + result.toFixed(2));
