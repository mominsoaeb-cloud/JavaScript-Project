function full_Sentence() {
    var part_1 = "I have";
    var part_2 = " made this ";
    var part_3 = "into a complete "
    var part_4 = "sentence."
    var whole_sentence = part_1.concat(part_2, part_3, part_4).toLowerCase();
    document.getElementById("Concatenate").innerHTML = whole_sentence;

};

function slice_Method() {
    var Sentence = "All work and no play makes Johny a dull boy.";
    var Section = Sentence.slice(27,33).toUpperCase();
    document.getElementById("Slice").innerHTML=Section;
};

function Search_Function() {
    let text = "Research and learn Search and UpperCase Method";
    let position = text.search("Search");
    document.getElementById("Search__Result").innerHTML = "Found at index: " + position;
};

function string_method() {
    var X = 182;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
};

function Precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);

};

function Fixed_Num() {
    var X = 5.52665;
    let result = X.toFixed(2);
    document.getElementById("Fixed").innerHTML = "Formatted number: " + result;
};

function Value_Function() {
    let y = new String("Hello World!");
    let result_1 = y.valueOf();
    document.getElementById("Value").innerHTML = "Primitive Value: " + result_1; 
};