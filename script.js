/*
TODO: 1. the guess is an actual word
      4. new way to get words
      5. add difficulty
*/

/*
Game class starts and ends the game based. This includes the start game function that triggers
once teh start game button is pressed and end game function that triggers when the player 
guesses the correct word, or gives up.
*/
function Game(){
    this.init();
}

//Initializes the event listeners
Game.prototype.init = function(){
    this.addEventListeners();
}

//Adds the start and give up button to the event listener
Game.prototype.addEventListeners = function(){
    $(document).on('click','#give-up',this.gameOver);
    $(document).on('click','#start-button',this.startGame);
}

/*
Triggers once the start game button is fired. Hides the start button,
makes all other fields visible.
*/
Game.prototype.startGame = function(){
    for(node of this.parentNode.childNodes){
        node.hidden = false;
    }
    this.hidden = true;
    stopWatch.startTime();
}
/* 
Function gameOver triggers if the player guesses the correct word or the player gives up.
Stops the clock, hides the guesses, and displays the results
*/
Game.prototype.gameOver = function(guess){
    html = Word.winner ? `<span class="winner">Congrats! You guessed ${guess}!</span>` :  `<span>Looks like you gave up! The word was <b>${Word.todaysWord}</b></span>`;
    Word.guessList.hidden = true;
    stopWatch.stopTime();
    $('.grid').append(html);
}
/*
stopWatch class that handles the time of the game. Time is triggered once the game starts,
ends when the game is over. Counts up from 0. 
*/
function stopWatch(){
    this.init();
}
stopWatch.prototype.init = function(){
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.time;
    this.watch = document.getElementById('clock');
    this.addEventListeners();
}
stopWatch.prototype.addEventListeners = function(){
    $(document).on('click','#guess-button',this.startTime);
}
/*
Counting function that adds seconds, minutes, and hours. 
*/
stopWatch.prototype.add = function(){
    stopWatch.seconds ++;
    if(stopWatch.seconds >= 60){
        stopWatch.seconds = 0;
        stopWatch.minutes++;
        if(stopWatch.minutes >= 60){
            stopWatch.minutes = 0;
            stopWatch.hours++;
        }
    }
    stopWatch.watch.textContent = "Time: " + (stopWatch.hours ? (stopWatch.hours > 9 ? stopWatch.hours : "0" + stopWatch.hours) : "00") + ":" + (stopWatch.minutes ? (stopWatch.minutes > 9 ? stopWatch.minutes : "0" + stopWatch.minutes) : "00") + ":" + (stopWatch.seconds > 9 ? stopWatch.seconds : "0" + stopWatch.seconds);
    stopWatch.startTime();
}

/*
Resets the clock 
*/
stopWatch.prototype.clear = function(){
    stopWatch.watch.textContent = "Time: 00:00:00";
}

/*
starts the timer, with the add helper function
*/
stopWatch.prototype.startTime = function(event){
    stopWatch.time = setTimeout(stopWatch.add,1000);
}

/*
stops the timer 
*/
stopWatch.prototype.stopTime = function(){
    clearTimeout(stopWatch.time);
}


/*
Word class that handles everything to do with the current word guessin game. Gives the current
word to guess, gets the users guess, checks if the guess is right
*/
function Word() {
    this.words = ["Number", "Letter", "More", "pour", "habit", "jest", "eject", "consensus", "particular", "ordinary", "characteristic", "hobby", "barrel", "sympathetic", "pest", "sphere", "dribble", "cooperative", "architecture", "printer", "exceed", "beat", "joy"]
    this.guesses = [];
    this.todaysWord = this.todaysWord();
    this.guessList = document.getElementById('guesses');
    this.userInput = document.getElementById('user-input');
    this.counter = 0;
    this.winner = false;
    this.init();
}
Word.prototype.init = function () {
    this.addEventListeners();
}
/*
Adds event listeners to the guess button and user input 
*/
Word.prototype.addEventListeners = function () {
    $(document).on('click', '#guess-button', this.guessWord);
    $(document).on('keyup', '#user-input', this.guessWord);
    
}
/*
get user input 
*/
Word.prototype.getInput = function () {
    return Word.userInput.value;
}

/*
Function guessWord fires once the player makes a guess.
First check if the game is still going, then get the user input 
and check if its the correct guess. If it is. Game over function is fired.
Else check if the guess has already been made. If it hasnt, add the guess to
an array of already made guesses. Add Li dom element, give the player a hint.
Reset the user input. 
*/
Word.prototype.guessWord = function (event) {
    if ((event.which === 13 || event.type === "click")) {
        if (!Word.winner) {
            var guess = Word.getInput();
            if (Word.isWinner(guess)) {
                Word.winner = true;
                Game.gameOver(guess);
            } 
            else {
                if (!Word.guesses.includes(guess)) {
                    Word.guesses.push(guess);
                    html = `<li>${guess}</li>`
                    Word.guessList.innerHTML += html;
                    $("#guess-count").html(`Guesses: ${++Word.counter}`)
                    Word.giveHint();
                } else {
                    alert('you already guessed that word!')
                }
            }
            Word.userInput.value = "";
        }
        else {
            alert('The game is over!')
        } 
    }
}

/*
Check if the guess is a winner 
*/
Word.prototype.isWinner = function (guess) {
    return guess == Word.todaysWord;
}

/*
Give the player a hint with his guess
*/
Word.prototype.giveHint = function () {
    var lastItem = Word.guessList.lastChild;
    var guess = lastItem.innerHTML;
    var compare = [guess, Word.todaysWord];
    compare.sort()
    if($('li').length > 1){
        $(lastItem).prev().children().remove('span');
    }
    if (compare[0] == guess){
        $(lastItem).prepend('<span>The word is <b>after: </b></span> ');
    } else {
        $(lastItem).prepend('<span>The word is <b>before: </b><span> ');
    }
}

/*
Select a random word from the list
*/
Word.prototype.todaysWord = function () {
    return this.words[Math.floor(Math.random() * this.words.length)];
}

/*
New instances of all the classes 
*/
$(window).on('load', function () {
    window.Game = new Game();
    window.Word = new Word();
    window.stopWatch = new stopWatch();
})
