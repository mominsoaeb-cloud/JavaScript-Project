document.write("10" + 5 );
document.write("<br>");

function my_function() {
    document.getElementById("Test").innerHTML = 0/0;
    
};

function my_function1() {
    document.getElementById("Test2").innerHTML = isNaN('This is String');
};

function my_function2() {
    document.getElementById("Test3").innerHTML = isNaN('007');
};

function my_function3() {
    document.getElementById("Test4").innerHTML = 1E5151510;
};

function my_function4() {
    document.getElementById("Test5").innerHTML = -2E31033333;
};


document.write(10 > 2);
document.write("<br>");

document.write(10 < 2);
document.write("<br>");

console.log(50+60);
document.write("<br>");

document.write(10 == 10);
document.write("<br>");

document.write(3 == 11);
document.write("<br>");

document.write(typeof 10);
document.write("<br>");

document.write(typeof "Hello");
document.write("<br>");


document.write(10 === 10);
document.write("<br>");

document.write(3 === 11);
document.write("<br>");

document.write(10>5 && 5>1);
document.write("<br>");

document.write(10>15 && 5>10);
document.write("<br>");

document.write(10>5 || 5>10);
document.write("<br>");

document.write(10>15 || 5>10);
document.write("<br>");


function not_function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
};

function not_function1() {
    document.getElementById("Not1").innerHTML = !(5 > 10);
};
