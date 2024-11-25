// var gamePatt =[];
// var buttonColours= ["red", "blue", "green", "yellow"];

// function nextSequence(){
//     var x= Math.random();
//     var ran= Math.floor(x*4);
//     return ran;
// }

// function chosenColour(nextSequence){
//     for(var i=0;i<=3;i++){
//         if(i===nextSequence){
//             var randomChosenColour = buttonColours[i];
//             gamePatt.push(randomChosenColour);
//         }
//         $("#"+randomChosenColour);
//     }
// }
// function starting(){
var userClickedPatt =[];
var gamePatt =[];
var buttonColours= ["red", "blue", "green", "yellow"];
var start = false;
var lvl = 0;


function nextSequence(){
    lvl+=1;
    $("#level-title").text("Level " + lvl);
    userClickedPatt = [];
    var x= Math.random();
    var ran= Math.floor(x*4);

        var randomChosenColour = buttonColours[ran];
        gamePatt.push(randomChosenColour);
    
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSnd(randomChosenColour); 
}
function playSnd(nm) {

    var audio = new Audio("./" + nm + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}
$(document).keydown(function() {
    if (!start) {
      $("#level-title").text("Level " + lvl);
      nextSequence();
      start = true;
    }
    });

    function checkAns(currentLvl) {
        if (gamePatt[currentLvl] === userClickedPatt[currentLvl]) {
    
          console.log("Success");
            if (userClickedPatt.length === gamePatt.length){
    
            setTimeout(function () {
              nextSequence();
            }, 1100);
    
          }
    
        } 
        else {
    
          console.log("Wrong, try again");
    
        
        playSnd("wrong");
        $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
        $("h1").css("color","white");
        }, 200);

        $("#level-title").text("Game Over, Refresh page to Restart");
}

    
    }

 $(".btn").click(function(){
            var innHtml= this.innerhtml;
            var userColour = $(this).attr("id");
            playSnd(userColour);
            userClickedPatt.push(userColour);
            animatePress(userColour);
            checkAns(userClickedPatt.length-1);
        });
// }