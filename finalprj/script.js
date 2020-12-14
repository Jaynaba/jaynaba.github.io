// JavaScript Document
const secbutt = $("#moti").on("click", secfunc);
const firbutt = $("#pho").on("click", firfunc);
const thrbutt = $("#illu").on("click", lsfunc);
var y = $(window).scrollTop();
/*add scroll on button clicks because the titles take up the whole page, users may not know to scroll*/
function secfunc() {
$("#unun").fadeOut();
$("#finfin").fadeOut();
$("#secsec").fadeIn();
 $('html, body').animate({ scrollTop: y + 600 })
}

function firfunc() {
$("#secsec").fadeOut();	
$("#finfin").fadeOut();
$("#unun").fadeIn();
 $('html, body').animate({ scrollTop: y + 600 })
}

function lsfunc() {
$("#secsec").fadeOut();
$("#unun").fadeOut();
$("#finfin").fadeIn();
 $('html, body').animate({ scrollTop: y + 350 })
}