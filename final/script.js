// JavaScript Document
const pho = $("#photo").on("click", pfunc);
const mo =$("#motion").on("click", mfunc);
const ill =$("#illu").on("click", ifunc);

function pfunc() {
 $("#one").fadeIn(1000);
 $("#two").fadeIn(3000);
 $("#three").fadeIn(5000);
 $("#four").fadeIn(7000);
}

function mfunc() {
$("#one").fadeOut(1000);
 $("#two").fadeOut(1000);
 $("#three").fadeOut(1000);
 $("#four").fadeOut(1000);
  $("#content").fadeOut(1000);
$("#a").fadeIn(1000);
 $("#b").fadeIn(3000);
 $("#c").fadeIn(5000);
 $("#d").fadeIn(7000);
}

function mfunc2() { 
$("#a").animate({left:'200px'});
 $("#b").animate({left:'200px'});
 $("#c").animate({left:'200px'});
 $("#d").animate({left:'200px'});
}