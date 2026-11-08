function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark"
    }; // Dictionary created with properties Species, Color, Breed, Age, and Sound
    delete Animal.Color // This line deletes the Color property from the Animal object
    document.getElementById("Dictionary").innerHTML =  "Animal is Dog and its color is " + Animal.Color;// this line will display "Animal is Dog and its color is undefined" because the Color property has been deleted from the Animal object
}