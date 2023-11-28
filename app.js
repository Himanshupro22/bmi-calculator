let button = document.querySelector("button");

button.addEventListener("click", function () {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  error = "Please enter some values";
  height /= 100;
  height *= height;
  bmi = weight / height;
 bmi = bmi.toFixed(2)

 
//   console.log(bmi);

  if (bmi <= 18.4) {
    measure =
      "Your BMI is " + bmi + " which means " + "  you are <b>Underweight</b> ";

      
  }

   else if (bmi >= 18.5 && bmi <= 24.9) {
    measure = "Your BMI is " + bmi + " which means " + "You are <b>Normal</b>";
  } 
  
  else if (bmi >= 25 && bmi <= 29.9) {
    measure =
      "Your BMI is " + bmi + " which means " + "You are <b>OverWeight</b>";

  } 
  
  else if (bmi >= 30) {
    measure = "Your BMI is " + bmi + " which means " + "You are <b>Obese</b>";
  }

  // Error

  if (weight === 0) {
    document.getElementById("results").innerHTML = error;
  } else if (height === 0) {
    document.getElementById("results").innerHTML = error;
  } else {
    document.getElementById("results").innerHTML = measure;
    
  }
  if (weight < 0) {
    document.getElementById("results").innerHTML =
      "Negative Values not Allowed";
  }
});
