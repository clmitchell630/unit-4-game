# RupeeCollector!!

A number game where you discover the random values of the rupees and add them up to match the given random number!

## How to play:

*   You will be given a random number at the start of the game.

*   There are four rupees below. By clicking on a rupee you will add a speciic amount of points to your total score.

*   You win the game by matching your total score to the random number, you lose the game if your total score goes above the random number.

*   The value of each rupee is hidden from you until you click on it.

*   Each time the game starts, the game will change the values of each rupee.

## Pseudocode:

*   Initialization
    -   Set variables
    -   Pick random number between 19 and 120
        *   Print random number
    -   Assign random number to each of the rupee buttons between 1 and 12
        *   Assigned to:
            -   Green
            -   Blue
            -   Yellow
            -   Red
    -   Score text started at 0
*   Game
    -   Button is clicked then adds button value to #score
    -   Win/Loss conditions
        *   if #score < #randomNumber then continue playing
        *   if #score = #randomNumber then you win.
        *   if #score > #randomNumber then you lose.
    -   Print result in #result
*   Re-initialize
    -   Pick new random number and print it
    -   Assign new random numbers to rupees
    -   Reset #score to 0