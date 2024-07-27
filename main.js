function bmiCalculator (weight, height) {
    var bmi = (weight)/(height*height)
    var index = Math.floor(bmi);
    if(index <= 18.5){
        alert("Your BMI is" + index + ", so you are underweight.")
    }else if(index > 18 && index <= 25){
        alert("Your BMI is "+ index + ", so you have a normal weight.")
    }else{
        alert( "Your BMI is " + index + ", so you are overweight.")
    }
    return index;
}

var w = prompt("weight");
var h = prompt("height");
bmiCalculator(w,h);
