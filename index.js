var randomNumber1;
var randomNumber2;//generating random number//


function relaodPage(){
 randomNumber1=Math.floor(Math.random()*6)+1;//generating random number//
var randomDiceImage = "dice"+randomNumber1+".png";//this line is to select random dice images from folder , done by creating concatenated name//
var randomImagesSource= "images/"+randomDiceImage;//to change the image from static dice6 image to random image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesSource);

 randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImagesSource2= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesSource2);

}




function results(){
    
    relaodPage();
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="player 1 wins";
    }
    else if(randomNumber2>randomNumber1 ){
        document.querySelector("h1").innerHTML="player 2 wins";
    }
    else{
        document.querySelector("h1").innerHTML="draw";
    }
 
    
}



