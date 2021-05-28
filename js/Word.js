/*
TODO: webscrape the words;
*/

/*
Word class that handles everything to do with the current word guessin game. Gives the current
word to guess, gets the users guess, checks if the guess is right
*/
function Word() {
    
    //normal words from English words on TV and movies https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/TV/2006/1-1000
    this.normalWords = ['course','against','ready','daughter','work','friends','minute','though','supposed','honey','point','start','check','alone','matter','office','hospital','three','already','anyway','important','tomorrow','almost','later','found','trouble','excuse','hello','money','different','between','every','party','either','enough','year','house','story','crazy','mind','break','tonight','person','sister','pretty','trust','funny','gift','change','business','train','under','close','reason','today','beautiful','brother','since','bank','yourself','without','until','forget','anyone','promise','happy','bake','worry','school','afraid','cause','doctor','exactly','second','phone','look','feel','somebody','stuff','elephant','morning','heard','world','chance','call','watch','whatever','perfect','dinner','family','heart','least','answer','woman','bring','probably','question','stand','truth','problem','patch','pass','famous','true','power','cool','last','fish','remote','race','noon','wipe','grow','jumbo','learn','itself','chip','print','young','argue','clean','remove','flip','flew','replace','kangaroo','side','walk','gate','finger','target','judge','push','thought','wear','desert','relief','basic','bright','deal','father','machine','know','step','exercise','present','wing','lake','beach','ship','wait','fancy','eight','hall','rise','river','round','girl','winter','speed','long','oldest','lock','kiss','lava','garden','fight','hook','desk','test','serious','exit','branch','keyboard','naked','science','trade','quiet','home','prison','blue','window','whose','spot','hike','laptop','dark','create','quick','face','freeze','plug','menu','terrible','accept','door','touch','care','rescue','ignore','real','title','city','fast','season','town','picture','tower','zero','engine','lift','respect','time','mission','play','discover','nail','half','unusual','ball','tool','heavy','night','farm','firm','gone','help','easy','library','group','jungle','taste','large','imagine','normal','outside','paper','nose','long','queen','olive','doing','moon','hour','protect','hate','dead','double','nothing','restaurant','reach','note','tell','baby','future','tall','drop','speak','rule','pair','ride','ticket','game','hair','hurt','allow','oven','live','horse','bottle','rock','public','find','garage','green','heat','plan','mean','little','spend','nurse','practice','wish','uncle','core','stop','number','nest','magazine','pool','message','active','throw','pull','level','wrist','bubble','hold','movie','huge','ketchup','finish','pilot','teeth','flag','head','private','together','jewel','child','decide','listen','garbage','jealous','wide','straight','fall','joke','table','spread','laundry','deep','quit','save','worst','email','glass','scale','safe','path','camera','excellent','place','zone','luck','tank','sign','report','myself','knee','need','root','light','sure','page','life','space','magic','size','tape','food','wire','period','mistake','full','paid','horrible','special','hidden','rain','field','kick','ground','screen','risky','junk','juice','human','nobody','mall','bathroom','high','class','street','cold','metal','nervous','bike','internet','wind','lion','summer','president','empty','square','jersey','worm','popular','loud','online','something','photo','knot','mark','zebra','road','storm','grab','record','said','floor','theater','kitchen','action','equal','nice','dream','sound','fifth','comfy','talk','police','draw','bunch','idea','jerk','copy','success','team','favor','open','neat','whale','gold','free','mile','lying','meat','nine','wonderful','hero','quilt','info','radio','move','early','remember','understand','month','everyone','quarter','center','universe','name','zoom','inside','label','yell','jacket','nation','support','lunch','twice','hint','jiggle','boot','alive','build','date','room','fire','music','leader','rest','plant','connect','land','body','belong','trick','wild','quality','band','health','website','love','hand','okay','yeah','dozen','glove','give','thick','flow','project','tight','join','cost','trip','lower','magnet','parent','grade','angry','line','rich','owner','block','shut','neck','write','hotel','danger','impossible','illegal','show','come','want','truck','click','chocolate','none','done','bone','hope','share','cable','leaf','water','teacher','dust','orange','handle','unhappy','guess','past','frame','knob','winner','ugly','lesson','bear','gross','midnight','grass','middle','birthday','rose','useless','hole','drive','loop','color','sell','unfair','send','crash','knife','wrong','guest','strong','weather','kilometer','undo','catch','neighbor','stream','random','continue','return','begin','kitten','thin','pick','whole','useful','rush','mine','toilet','enter','wedding','wood','meet','stolen','hungry','card','fair','crowd','glow','ocean','peace','match','hill','welcome','across','drag','island','edge','great','unlock','feet','iron','wall','laser','fill','boat','weird','hard','happen','tiny','event','math','robot','recently','seven','tree','rough','secret','nature','short','mail','inch','raise','warm','gentle','glue','roll','search','regular','here','count','hunt','keep','week']
    
    //harder words from vocabulary.com
    this.hardWords = ["abject", "aberration", "abjure", "abnegation", "abrogate", "abscond", "abstruse", "accede", "accost", "accretion", "acumen", "adamant", "admonish", "adumbrate", "adverse", "advocate", "affluent", "aggrandize", "alacrity", "alias", "ambivalent", "amenable", "amorphous", "anachronistic", "anathema", "annex", "antediluvian", "antiseptic", "apathetic", "antithesis", "apocryphal", "approbation", "arbitrary", "arboreal", "arcane", "archetypal", "arrogate", "ascetic", "aspersion", "assiduous", "atrophy", "bane", "bashful", "beguile", "bereft", "blandishment", "bilk", "bombastic", "cajole", "callous", "calumny", "camaraderie", "candor", "capitulate", "carouse", "carp", "caucus", "cavort", "circumlocution", "circumscribe", "circumvent", "clamor", "cleave", "cobbler", "cogent", "cognizant", "commensurate", "complement", "compunction", "concomitant", "conduit", "conflagration", "congruity", "connive", "consign", "constituent", "construe", "contusion", "contrite", "contentious", "contravene", "convivial", "corpulence", "covet", "cupidity", "dearth", "debacle", "debauch", "debunk", "defunct", "demagogue", "denigrate", "derivative", "despot", "diaphanous", "didactic", "dirge", "disaffected", "discomfit", "disparate", "dispel", "disrepute", "divisive", "dogmatic", "dour", "duplicity", "duress", "eclectic", "edict", "ebullient", "egregious", "elegy", "elicit", "embezzlement", "emend", "emollient", "empirical", "emulate", "enervate", "enfranchise", "engender", "ephemeral", "epistolary", "equanimity", "equivocal", "espouse", "evanescent", "evince", "exacerbate", "exhort", "execrable", "exigent", "expedient", "expiate", "expunge", "extraneous", "extol", "extant", "expurgate", "fallacious", "fatuous", "fetter", "flagrant", "foil", "forbearance", "fortuitous", "fractious", "garrulous", "gourmand", "grandiloquent", "gratuitous", "hapless", "hegemony", "heterogenous", "iconoclast", "idiosyncratic", "impecunious", "impetuous", "impinge", "impute", "inane", "inchoate", "incontrovertible", "incumbent", "inexorable", "inimical", "injunction", "inoculate", "insidious", "instigate", "insurgent", "interlocutor", "intimation", "inure", "invective", "intransigent", "inveterate", "irreverence", "knell", "laconic", "largesse", "legerdemain", "libertarian", "licentious", "linchpin", "litigant", "maelstrom", "maudlin", "maverick", "mawkish", "maxim", "mendacious", "modicum", "morass", "mores", "munificent", "multifarious", "nadir", "negligent", "neophyte", "noisome", "noxious", "obdurate", "obfuscate", "obstreperous", "officious", "onerous", "ostensible", "ostracism", "palliate", "panacea", "paradigm", "pariah", "partisan", "paucity", "pejorative", "pellucid", "penchant", "penurious", "pert", "pernicious", "pertinacious", "phlegmatic", "philanthropic", "pithy", "platitude", "plaudit", "plenitude", "plethora", "portent", "potentate", "preclude", "predilection", "preponderance", "presage", "probity", "proclivity", "profligate", "promulgate", "proscribe", "protean", "prurient", "puerile", "pugnacious", "pulchritude", "punctilious", "quaint", "quixotic", "quandary", "recalcitrant", "redoubtable", "relegate", "remiss", "reprieve", "reprobate", "rescind", "requisition", "rife", "sanctimonious", "sanguine", "scurrilous", "semaphore", "serendipity", "sobriety", "solicitous", "solipsism", "spurious", "staid", "stolid", "subjugate", "surfeit", "surreptitious", "swarthy", "tangential", "tome", "toady", "torpid", "travesty", "trenchant", "trite", "truculent", "turpitude", "ubiquitous", "umbrage", "upbraid", "utilitarian", "veracity", "vestige", "vicissitude", "vilify", "virtuoso", "vitriolic", "vituperate", "vociferous", "wanton", "winsome", "yoke", "zephyr", "wily", "tirade"];
    
    this.guesses = [];
    this.currentWord;
    this.guessList = document.getElementById('guesses');
    this.userInput = document.getElementById('user-input');
    this.counter = 0;
    this.winner = false;
    this.init();
}

/*
*   Function    : init
*   Parameters  : None
*   Returns     : None
*   Description : Initializes the Word class.
*/
Word.prototype.init = function () {
    this.addEventListeners();
}

/*
*   Function    : addEventListeners
*   Parameters  : None
*   Returns     : None
*   Description : Adds event listeners to the dom.
*/
Word.prototype.addEventListeners = function () {
    $(document).on('click', '#guess-button', this.guessWord);
    $(document).on('keyup', '#user-input', this.guessWord);

}

/*
*   Function    : getInput
*   Parameters  : None
*   Returns     : String containg user input
*   Description : Grabs the value of the user input.
*/
Word.prototype.getInput = function () {
    return Word.userInput.value;
}

/*
*   Function    : clearInput
*   Parameters  : None
*   Returns     : None
*   Description : reset the userInput attribute
*/
Word.prototype.clearInput = function(){
    Word.userInput.value = "";
}

/*
*   Function    : invalidINput
*   Parameters  : None
*   Returns     : Boolean whether or not player entered a valid input.
*   Description : Checks for valid user input.
*/
Word.prototype.validate = function(){
    
    //make sure the word is non numeric, and it hasn't been guessed yet
    if (Word.userInput.value.search(/[0-9]/) > -1 || Word.guesses.includes(Word.userInput.value)){

        //add a class that lets the user know its an incorrect input
        //remove it after a certian amount of time
        Word.userInput.classList.add("error");
        setTimeout(function() {
            Word.userInput.classList.remove('error');
            Word.clearInput();
        }, 1000);  
        return false;
    }
    return true;
}

/*
*   Function    : guessWord
*   Parameters  : None
*   Returns     : None
*   Description : Function guessWord fires once the player makes a guess.
                  First check if the game is still going, then get the user input 
                  and check if its the correct guess. If it is. Game over function is fired.
                  Else check if the guess has already been made. If it hasnt, add the guess to
                  an array of already made guesses. Add Li dom element, give the player a hint.
                  Reset the user input. 
*/
Word.prototype.guessWord = function (event) {

    //for either a button click or enter key
    if ((event.which === 13 || event.type === "click")) {

        //obviously check is winner is false
        if (!Word.winner) {
            var guess = Word.getInput();

            //need to make sure its a valid input
            if(Word.validate()){

                //looking for winning answer
                if (Word.isWinner(guess)) {
                    Game.gameOver(guess);
                    alert('The game is over!');
                } else {

                    //increment guesses, and the guess and git a hint
                    Word.counter++;
                    Word.guesses.push(guess);
                    Word.giveHint(guess);
                }
            }

            //show results
            $("#guess-count").html(`Guesses: ${Word.counter}`)
            Word.clearInput();
        }
    }
}

/*
*   Function    : isWinner
*   Parameters  : Guess -> players guess.
*   Returns     : Boolean of whether or not the guessed word is correct.
*   Description : 
*/
Word.prototype.isWinner = function (guess) {
    Word.winner = guess.toLowerCase() == Word.currentWord ? true : false;
    return guess.toLowerCase() == Word.currentWord;
}

/*
*   Function    : giveHint
*   Parameters  : guess
*   Returns     : None
*   Description : Appends a hint to the dom after each guess.
*/
Word.prototype.giveHint = function (guess) {
    var lastItem = Word.guessList.lastChild;
    var compare = [guess, Word.currentWord];
    compare.sort()
    if ($('li').length > 5) {
        $("li").first().remove();
    }
    if (compare[0] == guess) {
        Word.guessList.innerHTML += (`<li><p>The word is <b>after: </b><span class="mka-txt-color-yellow">${guess}</span></p></li>`);
    } else {
        Word.guessList.innerHTML += (`<li><p>The word is <b>before: </b><span class="mka-txt-color-yellow">${guess}<span></p></li>`);
    }
}

/*
*   Function    : setWord
*   Parameters  : None
*   Returns     : the word generated
*   Description : Randomly sets a new word once the game starts.
*/
Word.prototype.setWord = function () {
    let word =  Game.difficulty == "normal" ? Word.normalWords[Math.floor(Math.random() * Word.normalWords.length)] : Word.hardWords[Math.floor(Math.random() * Word.hardWords.length)]
    Word.currentWord = word;
    return word;    
}
