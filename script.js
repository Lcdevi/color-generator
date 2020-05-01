let cont = document.getElementById("container");
let contRGB = document.getElementById("containerRGB");
let sqr = document.getElementById("sqr");
let sqr2 = document.getElementById("sqr2");
let sqr3 = document.getElementById("sqr3");
let sqr4 = document.getElementById("sqr4");
let rgb4ID = document.getElementById("rgb4ID");
let backcolorbtn = document.getElementById("backcolorbtn");
let twoColors = document.getElementById("2colorsbtn");
let threeColors = document.getElementById("3colorsbtn");
let fourColors = document.getElementById("4colorsbtn");
let body = document.querySelector("body");
let initbackcolor = body.style.background = "white";

  function changeColor (nbr=0){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randColor = "rgb(" + red + "," + green + "," + blue + ")";
//    console.log(randColor);
//    console.log(sqr);
//    console.log(rgb4ID);
      if (nbr === sqr) {
        nbr.style.background=randColor;
        rgbID.textContent = randColor;
        rgbID.style.color = randColor;
      } else if (nbr === sqr2) {
        nbr.style.background=randColor;
        rgb2ID.textContent = randColor;
        rgb2ID.style.color = randColor;
      } else if (nbr === sqr3) {
        nbr.style.background=randColor;
        rgb3ID.textContent = randColor;
        rgb3ID.style.color = randColor;
      } else if (nbr === sqr4) {
        nbr.style.background=randColor;
        rgb4ID.textContent = randColor;
        rgb4ID.style.color = randColor;
      }
    }


//CHANGE COLOR OF THE DIVS
sqr.addEventListener("click", function(e){
  let sqr = document.getElementById("sqr");
  changeColor(nbr=sqr);
}, false);

sqr2.addEventListener("click", function(e){
  let sqr2 = document.getElementById("sqr2");
  changeColor(nbr=sqr2);
  }, false);

sqr3.addEventListener("click", function(e){
  let sqr3 = document.getElementById("sqr3");
  changeColor(nbr=sqr3);
  }, false);

sqr4.addEventListener("click", function(e){
  changeColor(nbr=sqr4);
  }, false);

//BUTTONS CHANGE BACKGROUND COLOR OF BODY
backcolorbtn.addEventListener("click", function(){
  if (initbackcolor === "white"){
    initbackcolor = body.style.background = "grey";
    body.style.color = "white";
    cont.style.color = "black";
  } else if (initbackcolor === "grey") {
    initbackcolor = body.style.background = "black";
  } else {initbackcolor = body.style.background = "white";
body.style.color = "black";}
}, false);

//BUTTON 2,3,4 COLORS
twoColors.addEventListener("click", function(){
  rgb4ID.textContent = "";
  rgb3ID.textContent = "";
  cont.removeChild(sqr3);
  cont.removeChild(sqr4);
})

threeColors.addEventListener("click", function(){
  rgb4ID.textContent = "";
  cont.appendChild(sqr3);
  cont.removeChild(sqr4);
})

fourColors.addEventListener("click", function(){
  cont.appendChild(sqr3);
  cont.appendChild(sqr4);
})

  //  let nbr=0;
  //  let red =0;
  //  let green = Math.floor(Math.random() * 256);
  //  let blue = Math.floor(Math.random() * 256);
  //  let randColor = "rgb(" + red + "," + green + "," + blue + ")";
  //  nbr.style.background=randColor;
   //console.log(randColor);

  //SHOW RGB CODE
  /*
  let rgb = document.getElementById("rgbID");
  let rgb2 = document.getElementById("rgb2ID");
  */
