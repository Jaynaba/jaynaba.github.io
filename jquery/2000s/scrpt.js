const leftbutton = $("#left").on("click", lfunc);
const rightbutton =$("#right").on("click", rfunc);


function lfunc() {
$("#con").fadeOut(1000)
 $("#perez").fadeIn(1000);
 $("#swan").fadeIn(3000);
 $("#pants").fadeIn(5000);
 $("#skirt").fadeIn(7000);
 $("body").css("background-color", "#68A0F2");
}

function rfunc() {
	$("#perez").fadeOut(1000);
 $("#swan").fadeOut(2000);
 $("#pants").fadeOut(2500);
 $("#skirt").fadeOut(2700);
$("#con").fadeIn(1000);
$("body").css("background-color", "red");

}
