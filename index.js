var randomNumber1= Math.floor(Math.random()*6)+1;

var randomimage1= "images/dice"+randomNumber1+".png";

var imageselect1 = document.querySelectorAll("img")[0];

imageselect1.setAttribute("src" , randomimage1);


var randomNumber2= Math.floor(Math.random()*6)+1;

var randomimage2= "images/dice"+randomNumber2+".png";

var imageselect2 = document.querySelectorAll("img")[1];

imageselect2.setAttribute("src" , randomimage2);


if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML=" Player 1 wins";

}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=" Player 2 wins";

}

else{
    document.querySelector("h1").innerHTML="draw";

}