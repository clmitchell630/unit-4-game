
//------initialization-------
console.log(" (\\  (\\\n (^___^)\nc(_(\")(\")\n  Hello!");
console.log("this is game.js");

//variables
var score = 0;
var wins = 0;
var loss = 0;

//pick random number between 19 and 120
var matchNum = randomRange(19, 120);

//print number in #randomNumber
$("#randomNumber").text(matchNum);

//assign random number to each of the rupee buttons between 1 and 12
//#green, #blue, #yellow, and #red
var buttonNum = randomRange(1, 12);
var rupees = {
    green: 0, blue: 0, yellow: 0, red: 0
}

for (var key in rupees) {
    rupees[key] = randomRange(1, 12);
}

//#score is set to 0
$("#score").text("0");

//------game------

//button is clicked then adds button value to #score
$(".rupeeStyle").on("click", rupeeValue);

/*  if #score < #randomNumber then continue playing.
    if #score = #randomNumber then you win. 
    if #score > #randomNumber then you lose "dun dun dunnnn". 
*/

//print result in #result

//re-initialize

//-------functions------
function randomRange(y, x) {
    return Math.floor(Math.random() * (x - y) + y);
}

function rupeeValue(e) {
    //add rupee value to score
    //console.log(e);
    //console.log("I'm the rupee color: " + $(this)[0].id);
    score = score + rupees[$(this)[0].id];

}
