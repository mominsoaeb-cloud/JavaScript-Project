function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}// addition function which calculates 2 plus 2 and displays the result in an HTML element with the ID "Math"

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}// substraction function which calculates 5 minus 2 and displays the result in an HTML element with the ID "Math2"

function multiplication() {
    var multiplication = 6 * 9;
    document.getElementById("Math3").innerHTML = "6 * 9 = " + multiplication;
}// multiplication function which calculates 6 multiplied by 9 and displays the result in an HTML element with the ID "Math3"

function division() {
    var division = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + division;
}// division function which calculates 48 divided by 6 and displays the result in an HTML element with the ID "Math4"

function simple_Math() {
    var simple_Math = (1 + 2) * 10;
    document.getElementById("Math5").innerHTML = "(1 + 2) * 10 = " + simple_Math;
} // simple math function which calculates (1 + 2) * 10 and displays the result in an HTML element with the ID "Math5"

function modulus_operator() {
    var modulus_operator = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: = " + modulus_operator;
} // modulus operator which calculates the remainder of 25 divided by 6 and displays the result in an HTML element with the ID "Math6"

function negation_operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x; // negation operator which negates the value of x and displays the result in an HTML element with the ID "Math7"
}

function increment() {
    var x = 5;
    x++;
    document.getElementById("Math8").innerHTML = "5 incremented by 1 is = " + x; // increment function adding 1 to the value of x and displaying the result in an HTML element with the ID "Math8"
}

function decrement() {
    var x = 5.25;
    x--;
    document.getElementById("Math9").innerHTML = "5.25 decremented by 1 is = " + x; // decrement function which decremets the value of x by 1 and displays the result in an HTML element with the ID "Math9"
}

window.alert(Math.random() * 100);//Display random number 