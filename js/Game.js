/*
TODO: 1. the guess is an actual word.
*/


/*
Game class starts and ends the game based. This includes the start 
game function that triggers once teh start game button is pressed 
and end game function that triggers when the player 
guesses the correct word, or gives up.
*/
function Game() {
    this.difficulty;
    this.todaysDate = new Date().toDateString();
    this.init();
}

/*
*   Function    : init
*   Parameters  : None
*   Returns     : None
*   Description : Initializes the game class
*/
Game.prototype.init = function () {
    this.addEventListeners();
}

/*
*   Function    : setDifficulty
*   Parameters  : None
*   Returns     : None
*   Description : grabs the difficulty selected by the user and sets the class attribute
*/
Game.prototype.setDifficulty = function(){  
    Game.difficulty = $("#difficulty-normal").prop("checked") ? "normal" : "hard";
}

/*
*   Function    : addEventListeners
*   Parameters  : None
*   Returns     : None
*   Description : Adds the start and give up button to the event listener
*/
Game.prototype.addEventListeners = function () {
    $(document).on('click', '#give-up', this.gameOver);
    $(document).on('click', '#start-button', this.startGame);
    $(document).on('click', '#restart-button', this.restartGame);
}

/*
*   Function    : startGame
*   Parameters  : None
*   Returns     : None
*   Description : Checks if difficulty was selected and starts the guessing game.
*/
Game.prototype.startGame = function () {
    
    //check for set difficulty and local storage
    if(($("#difficulty-normal").prop("checked") || $("#difficulty-hard").prop("checked")) && !Drive.findItem(this.todaysDate)){
        
        //show the input field and guess button
        for (node of this.parentNode.childNodes) {
            node.hidden = false;
        }

        //initiate the game
        Game.setDifficulty();
        Word.setWord();
        
        //hide the difficulty, and start button and restart button
        $(this).hide();
        $('fieldset').hide();
        $('#restart-button').hide();
        
        //show the give up buttom
        $('#give-up').show();
        stopWatch.startTime();
    }

    //check if user already played the game today
    else if(Drive.findItem(this.todaysDate)){
        let html = "<h3 class='mka-txt-color-yellow' id='msg'> You already played today! </h3>";
        if(!$("#msg").length){
            $("#start-button").before(html);
        }
    }
}

/*
*   Function    : gameOver
*   Parameters  : guess
*   Returns     : None
*   Description : Checks the results and ends the game.
*/
Game.prototype.gameOver = function (guess) {

    //obviously stop the time
    stopWatch.stopTime();
    
    //create game over message
    let html = Word.winner ? `<div class="winner mka-margin-top-sm">Congrats! You guessed <span class="mka-txt-color-yellow">${guess}</span>!</div>` : `<div class="mka-margin-top-sm">Looks like you gave up! The word was <span class="mka-txt-color-yellow">${Word.currentWord}</span></div>`;

    //create new local storage item
    Drive.storeItem(this.todaysDate, true);
    
    //hide game nodes
    Word.guessList.hidden = true;
    for (node of $('#clock').nextAll()) {
        $(node).hide();
    }
    $('#give-up').hide();

    //show game and add game nodes;
    $('#restart-button').show();
    $('#main-content').append(html);
}

/*
*   Function    : restartGame
*   Parameters  : None
*   Returns     : None
*   Description : Lazy way to restart the game, reload the users window.
*/
Game.prototype.restartGame = function () {
    window.location.reload();
    Drive.clearStorage();
}
