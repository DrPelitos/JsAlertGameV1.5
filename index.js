function getInt(min, max){return Math.floor(Math.random() * ((max + 1) - min) );};

function makePath(){lrf = getInt(1,3);};

function choose(arr){recChoose = arr[Math.floor(Math.random()*arr.length)]; return recChoose};

function makeOutcome(){
    outcomeChooser = getInt(1,7);
    if(outcomeChooser==0){
        alert("You walk through the path without trouble.");
    };
    if(outcomeChooser==1){
        alert("You walk through the path without trouble.");
    };
    if(outcomeChooser==2){
        if(quandaleDingle==1){alert("You walk through the path, but you trip, and fall down some stairs.\n\nFortunately that wild Quandale Dingle from earlier catches you. You are saved.")} else {alert("You walk through the path, but you trip, and fall down some stairs.\n\nYou lose 15 Health."); health -= 15};
    };
    if(outcomeChooser==3){
        alert("You walk through the path and find a small bag with " + choose(['a Scubway Sandwich' ,'some MicDunald Fries' ,'a Wemby\'s Hamburger' ,'some Chick-fil-b Nuggets' ,'a Scarbucks Coffee' ,'a Bomino\'s Pizza']));
        if(prompt("Eat " + recChoose + "? (+15 Health)\n\n(yes/no)")=="yes"){
            health += 15; alert("You ate the sandwich and healed by 15.");
        } else {
            alert("You discard the sandwich and continue on your journey.");
        };
    };
    if(outcomeChooser==4){
        alert("You walk through the path and find a small sack of coins, earning you 15 coins.");
        coins += 15;
    };
    if(outcomeChooser==5){
        alert("You walk through the path and find a bag of fishing bait, filled with 20 bits of meat.");
        bait += 20;
    };
    if(outcomeChooser==6){
        if(prompt("You walk through the path and find a bowl with some strange soup.\n\nDrink it?. (yes/no)")=="yes"){
            if(choose(['0', '1'])==0){alert("You drink the soup. It tastes somewhat like pumpkin and milk. After drinking you feel stronger and better. You gain 50 health."); health += 50} else {alert("You drink the soup. It tastes like rotten meat and warm butter. After drinking you feel weak before passing out. You lose 75 health."); health -= 75};
        } else {alert("You discard the strange liquid and continue on your journey.")};
    };
};

function gameLoop(){
    while(keeprunning){
        if(health>0){
            gameRespond(prompt("what do you do?\n\nUse list to view your options"));
        } else {
            death();
        };
    };
};

function death(){
    alert("You died and have to restart.");
    outcomeChooser = 0;
    coins = 0;
    health = 100;
    lvlPassed = 0;
    lrf = 0;
    quandaleDingle=0;
    recChoose = 0;
    bait = 0;
    fish = 0;
};

function gamble(gamblemoney){
    if(gamblemoney > coins){alert("You dont have enough coins.")} 
    else {if(choose(['give', 'take'])=="give"){alert("You won " + gamblemoney +" coins!"); coins += parseInt(gamblemoney);} else {alert("You lost " + gamblemoney + " coins!"); coins -= parseInt(gamblemoney);}};
};

function goFish(){
    if(bait>0){if(prompt("You have "+ bait +" bait.\n\nDo you want to go fishing? (yes/no)")=="yes"){
        fishLoop();
    }} else {alert("You dont have any bait.")};
};

function fishLoop(){
    alert(bait + " bait.\n" + fish + " fish.");
    if(choose(['0', '1', '2'])=='0'){bait -= 1;};
    if(choose(['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'])=='0'){fish += 1;};
    if(bait>0){fishLoop()};
}

function eatFish(num){
    if(num <= fish){
    health += num * 10;
    fish -= num;
    alert("You gained " + num * 10 + " health!")} else {alert("You dont have that many fish.")};
}

function save(){
    localStorage.coins = coins;
    localStorage.health = health;
    localStorage.lvlPassed = lvlPassed;
    localStorage.bait = bait;
    localStorage.fish = fish;
    localStorage.playerName = playerName;
    localStorage.loaded = 'true';
    localStorage.inv = JSON.stringify(inv)
};

function load(){
    if(localStorage.loaded) {
        inv = JSON.parse(localStorage.inv)
        coins = parseInt(localStorage.coins);
        health = parseInt(localStorage.health);
        lvlPassed = parseInt(localStorage.lvlPassed);
        bait = parseInt(localStorage.bait);
        fish = parseInt(localStorage.fish);
        playerName = localStorage.playerName;
        if(health == 0){health = 100}
    }
};

function js(code){

}

function gameRespond(input){
    if(input==null){
        save();
        alert("Auto saving...\nGame closing...");
        keeprunning = false;
    };
    if(input=="close"){
        alert("Closing without save....")
        keeprunning = false;
    };
    if(input=="list"){
        alert("list.\nstats.\nobserve/o.\nleft/l.\nright/r.\nforward/f.\ngamble.\nfish.\neat fish.\nsave.\nload.");
    };
    if(input=="stats"){
        alert("health: " + health + "\nLevels Passed: " + lvlPassed + "\nCoins: " + coins + "\nBait:" + bait + "\nFish:" + fish);
    };
    if(input=="observe"){
        if(lrf==0){
            alert("| |\n| |\n| |");
        };
        if(lrf==1){
            alert("\\ \\| |\n  \\  |\n   | |");
        };
        if(lrf==2){
            alert("| |/ /\n|  /\n| |");
        };
    };
    if(input=="o"){
        if(lrf==0){
            alert("| |\n| |\n| |");
        };
        if(lrf==1){
            alert("\\ \\| |\n  \\  |\n   | |");
        };
        if(lrf==2){
            alert("| |/ /\n|  /\n| |");
        };
    };
    if(input=="69"){
        alert("o.O")
    };
    if(input=="dog"){
        alert("bark.");
    };
    if(input=="cat"){
        alert("meow.");
    };
    if(input=="caca"){
        if(prompt("You take a dump on the floor, and a wild Quandale Dingle appears to eat it.\n\nfight the quandale dingle? (yes/no)")=="yes"){
            alert("You fight the Quandale Dingle but its too strong for you.\n\nyou lose 50 health."); health -= 50; quandaleDingle = 0} else {alert("You leave the Quandale Dingle alone and it appreciates your mercy.\n\nmaybe you\'ll meet him again later.");quandaleDingle = 1};
    };

    if(input=="left"){
        if(lrf==1){
            makePath();
            makeOutcome();
            lvlPassed += 1;
            if(lrf==0){
                alert("| |\n| |\n| |");
            };
            if(lrf==1){
                alert("\\ \\| |\n  \\  |\n   | |");
            };
            if(lrf==2){
                alert("| |/ /\n|  /\n| |");
            };
        } else {
            alert("Sorry, you cant do that at the moment.");
        };
    };
    if(input=="forward"){
        makePath();
        if(lrf==0){
            alert("| |\n| |\n| |");
        };
        if(lrf==1){
            alert("\\ \\| |\n  \\  |\n   | |");
        };
        if(lrf==2){
            alert("| |/ /\n|  /\n| |");
        };
        lvlPassed += 1;
    };
    if(input=="right"){
        if(lrf==2){
            makePath();
            makeOutcome();
            lvlPassed += 1;
            if(lrf==0){
                alert("| |\n| |\n| |");
            };
            if(lrf==1){
                alert("\\ \\| |\n  \\  |\n   | |");
            };
            if(lrf==2){
                alert("| |/ /\n|  /\n| |");
            };
        } else {
            alert("Sorry, you cant do that at the moment.");
        };
    };
    if(input=="l"){
        if(lrf==1){
            makePath();
            makeOutcome();
            lvlPassed += 1;
            if(lrf==0){
                alert("| |\n| |\n| |");
            };
            if(lrf==1){
                alert("\\ \\| |\n  \\  |\n   | |");
            };
            if(lrf==2){
                alert("| |/ /\n|  /\n| |");
            };
        } else {
            alert("Sorry, you cant do that at the moment.");
        };
    };
    if(input=="f"){
        makePath();
        if(lrf==0){
            alert("| |\n| |\n| |");
        };
        if(lrf==1){
            alert("\\ \\| |\n  \\  |\n   | |");
        };
        if(lrf==2){
            alert("| |/ /\n|  /\n| |");
        };
        lvlPassed += 1;
    };
    if(input=="r"){
        if(lrf==2){
            makePath();
            makeOutcome();
            lvlPassed += 1;
            if(lrf==0){
                alert("| |\n| |\n| |");
            };
            if(lrf==1){
                alert("\\ \\| |\n  \\  |\n   | |");
            };
            if(lrf==2){
                alert("| |/ /\n|  /\n| |");
            };
        } else {
            alert("Sorry, you cant do that at the moment.");
        };
    };
    if(input=="gamble"){
        if(coins > 0){
            gamble(prompt("Welcome to the gamble machine!\nHow many coins would you like to bet on?"));
        } else {
            alert("You dont have any money to gamble.");
        };
    };
    if(input=="fish"){
        goFish();
    };
    if(input=="eat fish"){
        if(fish>0){
            eatFish(prompt("How many fish would you like to eat?"));
        } else {alert("You dont any fish to eat.")};
    };
    if(input=="save"){
        save()
    };
    if(input=="load"){
        load()
    };
    if(input=="name"){
        playerName = prompt("Your name is " + playerName + ".\n\nWhat would you like to change your name to?")
        if(playerName==null){playerName="magicarp"};
    };
    if(input=="wipe"){
        if (prompt("Are you sure you want to delete your progress? (yes/no)")=="yes") {localStorage.clear()}
    };
    if(input==atob('bXRmYnd5')){
        dev = 1;
        alert("ACCESS GRANTED")
    };
    if(input=="js"){
        if(dev==1){eval(JSON.stringify(prompt("run:")))}
    };
};

let inv = [];

let dev = 0;
let outcomeChooser = 0;
let coins = 0;
let health = 100;
let lvlPassed = 0;
let lrf = 0;
let quandaleDingle = 0;
let recChoose = 0;
let bait = 0;
let fish = 0;
let playerName = "unknown";
let keeprunning = true;

alert("Starting...");
alert("This game was made by Pelitos");
if(localStorage.playerName) {playerName = localStorage.playerName} else {
    playerName = prompt("What is your name?");
    if(playerName==null){playerName="magicarp"};
};
alert("Hello " + playerName + "!");
if(localStorage.loaded){load()}
gameLoop();
