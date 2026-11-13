var x = 100;
function Add_numbers_1() {
    document.getElementById("result1").textContent = 20 + x;
};

function Add_numbers_2() {
    document.getElementById("result2").textContent = x + 100;
};


function Add_numbers_3() {
    var X=50;
    document.getElementById("result3").textContent = x + 2;
};

function Add_numbers_4() {
    var X=10;
    document.getElementById("result4").textContent = X + 20;
};

function Add_numbers_5() {
    var X=10;
    console.log(X + 200);
    document.getElementById("result5").textContent = X + 200;
  
};
function Add_numbers_6() {
    var X=10;
    console.log(X + 20);
    
};

function get_date(){
    if (new Date().getHours() < 24) {
        document.getElementById("Value").textContent = "How are you today?";
    } else {
        document.getElementById("Value").textContent = "Good evening!";
    }
};

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";        
    }
    else{
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").textContent = Vote;
};

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time > 0 && Time < 12) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is Afternoon time!";
    }
    else {
        Reply = "It is evening time.";
    };
    document.getElementById("Time_of_day").innerHTML = Reply;
}