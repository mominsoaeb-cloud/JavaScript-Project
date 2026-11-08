function myfunction() {
    let x = 10;
    let y = 20;

    const elem = document.getElementById("Multiplication");
    if (elem) {
        elem.textContent = x * y;
    }
}

function myfunction2() {
    let sentence = "I am Learing";
    sentence += " a lot from this tutorial.";
    document.getElementById("Concatenate").innerHTML = sentence;

}