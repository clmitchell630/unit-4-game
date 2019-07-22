
//------initialization-------
console.log(" (\\  (\\\n (^___^)\nc(_(\")(\")\n  Hello!");
console.log("this is game.js");
//pick random number between 19 and 120

//print number in #randomNumber

//assign random number to each of the rupee buttons between 1 and 12
//#green, #blue, #yellow, and #red

//#score is set to 0

//------game------

//button is clicked then adds button value to #score

/*  if #score < #randomNumber then continue playing.
    if #score = #randomNumber then you win. 
    if #score > #randomNumber then you lose "dun dun dunnnn". 
*/

//print result in #result

//re-initialize


$("#green").on("click", function () {
    var matchNum = Math.floor(Math.random() * (120 - 19) + 19);
    var buttonNum = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("match number is: " + matchNum);
    console.log("button number is: " + buttonNum);
});


