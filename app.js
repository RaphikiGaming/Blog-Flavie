var slide = 1;
var duree = 6000;

if(slide == 1){
	setTimeout(toSlide2, duree);
}

function toSlide1(){
	document.querySelector(".slide1").style.left = "0%";
	document.querySelector(".slide2").style.left = "100%";
	setTimeout(toSlide2, duree);
}
function toSlide2(){
	document.querySelector(".slide1").style.left = "-100%";
	document.querySelector(".slide2").style.left = "0%";
	setTimeout(toSlide1, duree);
}
