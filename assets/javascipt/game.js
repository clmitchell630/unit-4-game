
//------initialization-------
console.log(" (\\  (\\\n (^___^)\nc(_(\")(\")\n  Hello!");
console.log("this is game.js");

var wins = 0;
var loss = 0;
var score;
var matchNum;
var rupees = {
    green: 0, blue: 0, yellow: 0, red: 0
}

init();


//------game------

//button is clicked then adds button value to #score
$(".rupeeStyle").on("click", rupeeValue);

/*  if #score < #randomNumber then continue playing.
    if #score = #randomNumber then you win. 
    if #score > #randomNumber then you lose "dun dun dunnnn". 
    print result in #result
    re-initialize
*/
if (score > matchNum) {
    loss++;
    $("#result").text("You lose!");
    $("#loss").text(loss);
    init();
}
else if (score === matchNum) {
    wins++;
    $("#result").text("You Win!");
    $("#wins").text(wins);
    init();
}

//-------functions------
function randomRange(y, x) {
    return Math.floor(Math.random() * (x - y) + y);
}

function rupeeValue(e) {
    //add rupee value to score
    score = score + rupees[$(this)[0].id];
    $("#score").text(score);

    //console.log(e);
    console.log("I'm the rupee color: " + $(this)[0].id);
    console.log("My value is: " + rupees[$(this)[0].id]);
    console.log("The score is now: " + score);
}

function init() {

    score = 0;
   
    //pick random number between 19 and 120
    matchNum = randomRange(19, 120);

    //print number in #randomNumber
    $("#randomNumber").text(matchNum);

    //assign random number to each of the rupee buttons between 1 and 12
    //#green, #blue, #yellow, and #red
    for (var key in rupees) {
        rupees[key] = randomRange(1, 12);
    }

    //#score is set to 0
    $("#score").text("0");

}