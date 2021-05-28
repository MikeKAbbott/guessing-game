
/*
New instances of all the classes 
*/
$(window).on('load', function () {
    window.Drive = new LocalStorage();
    window.Game = new Game();
    window.Word = new Word();
    window.stopWatch = new stopWatch();
})