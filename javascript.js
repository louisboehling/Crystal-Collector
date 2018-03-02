// VARIABLES

//Crystals 
var crystal = {
    blue: {
        name: "Blue", 
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    }
};


//Scores

var currentScore = 0; 

var targetScore = 0;

var winCount = 0;

var lossCount = 0;



// FUNCTIONS 

var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// start and restarts the game 

var startGame = function () {

    // Reset current score

    currentScore = 0;

    // Set a target scroe between 19 and 120 (note that it is ( max - min + 1) + min)

    targetScore = getRandom(19, 120);

    // Set a value for for each crystal between 1 and 12

    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);    
            
    // Change html to reflect changes 

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);


    // Testing 

    console.log("____________")
    console.log("Target score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | green: " + crystal.green.value + " | yellow: " + crystal.yellow.value );
    console.log("____________")


};

// Respond to clicks on crystals

var addValues = function(crystal) {

    // Change current score
    currentScore = currentScore + crystal.value;

    // Change the HTML to relfect the current score 
    $("#yourScore").html(currentScore);

    //call checkWin

    checkWin();

    //testing 

    console.log("your score: " + currentScore);

}

//check if the user won or lost and reset the game 

var checkWin = function () {

    //check if current score is larger than the target score
    if (currentScore > targetScore) {
        alert("Sorry you lost :(");
        console.log("lost");

        //add to loss counter
        lossCount++;

        //change loss count
        $("#lossCount").html(lossCount);

        //restart
        startGame();

    }

    else if (currentScore == targetScore) {
        alert("you win !!! :)");
        console.log("win");

        //add to win counter
        winCount++;

        //change win count 
        $("#winCount").html(winCount);

        //restart
        startGame();
    }

    //special message
    else if (winCount === 3) {
        alert("Wow, you're really good at this. Rihanna would be proud -- SHINE BRIGHT LIKE A DIAMOND!");
    }

}



// GAME PROCESS
startGame(); 

$("#blue").click(function() {
    addValues(crystal.blue);
});

$("#green").click(function() {
    addValues(crystal.green);
});

$("#red").click(function() {
    addValues(crystal.red);
});

$("#yellow").click(function() {
    addValues(crystal.yellow);
});