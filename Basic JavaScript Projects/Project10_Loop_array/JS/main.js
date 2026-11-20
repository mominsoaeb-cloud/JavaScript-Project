function Loop_Function() {
    var X = "";
    var Counter = 1;
    while (Counter < 11) {
        X += "<br>" + Counter;
        Counter++;
    }
    document.getElementById("Loop").innerHTML = X;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];

function for_Loop() {
    var content = "";

    for (var Y = 0; Y < Instruments.length; Y++) {
        content += Instruments[Y] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = content;
}


function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "Sleeping";
    Cat_Picture[1] = "Playing";
    Cat_Picture[2] = "Eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + ".";
}

function constant_function() {
    const Pet = "Cat";
    document.getElementById("Constant").innerHTML = "My pet is a " + Pet + "." + "<br>";
}

var X = 10;
var scopeText = X + "<br>";
{
    let X = 50;
    scopeText += X + "<br>";
}
document.getElementById("Scope").innerHTML = scopeText;


let car = {
    make: "Toyota",
    model: "Auris",
    year: "2010",
    color: "Black",
    description: function() {
        return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
    }
};

function show_car_description() {
    document.getElementById("Car_Object").innerHTML = car.description();
}

function break_Function() {
    let breakText = "";
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        breakText += "The number is " + i + "<br>";
    }
    document.getElementById("Break").innerHTML = breakText;
}

function continue_Function() {
    let continueText = "";
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        continueText += "The number is " + i + "<br>";
    }
    document.getElementById("Continue").innerHTML = continueText;
}