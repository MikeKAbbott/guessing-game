/*
stopWatch class that handles the time of the game. Time is triggered once the game starts,
ends when the game is over. Counts up from 0. 
*/
function stopWatch() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.time;
    this.watch = document.getElementById('clock');
    this.init();
}

/*
*   Function    : restartGame
*   Parameters  : None
*   Returns     : None
*   Description : Lazy way to restart the game, reload the users window.
*/
stopWatch.prototype.init = function () {
    this.addEventListeners();
}

/*
*   Function    : restartGame
*   Parameters  : None
*   Returns     : None
*   Description : Lazy way to restart the game, reload the users window.
*/
stopWatch.prototype.addEventListeners = function () {
    return;
}

/*
*   Function    : restartGame
*   Parameters  : None
*   Returns     : None
*   Description : Lazy way to restart the game, reload the users window.
*/
stopWatch.prototype.add = function () {
    stopWatch.seconds++;
    if (stopWatch.seconds >= 60) {
        stopWatch.seconds = 0;
        stopWatch.minutes++;
        if (stopWatch.minutes >= 60) {
            stopWatch.minutes = 0;
            stopWatch.hours++;
        }
    }
    stopWatch.watch.textContent = "Time: " + (stopWatch.hours ? (stopWatch.hours > 9 ? stopWatch.hours : "0" + stopWatch.hours) : "00") + ":" + (stopWatch.minutes ? (stopWatch.minutes > 9 ? stopWatch.minutes : "0" + stopWatch.minutes) : "00") + ":" + (stopWatch.seconds > 9 ? stopWatch.seconds : "0" + stopWatch.seconds);
    stopWatch.startTime();
}

/*
*   Function    : restartGame
*   Parameters  : None
*   Returns     : None
*   Description : Lazy way to restart the game, reload the users window.
*/
stopWatch.prototype.clear = function () {
    stopWatch.watch.textContent = "Time: 00:00:00";
}

/*
*   Function    : startTime
*   Parameters  : None
*   Returns     : None
*   Description : 
*/
stopWatch.prototype.startTime = function () {
    stopWatch.time = setTimeout(stopWatch.add, 1000);
}

/*
*   Function    : stopTime
*   Parameters  : None
*   Returns     : None
*   Description : Clears the current time time by clearing the interval
*/
stopWatch.prototype.stopTime = function () {
    clearInterval(stopWatch.time);
}