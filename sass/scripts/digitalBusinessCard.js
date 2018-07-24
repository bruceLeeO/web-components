/* digital business card flip logic */
var currDeg = 0;
var rotateCard = document.getElementsByClassName("digital-business-card-rotate-icon");
rotateCard[0].onclick = function() {
  //console.log("rotate card....");
  currDeg = currDeg + 180;
  document.getElementById("dbcard-axis").style.transform = "rotateX("+currDeg+"deg)";
  //console.log("rotate card after....");
}
rotateCard[1].onclick = function() {
  //console.log("rotate card....");
  currDeg = currDeg + 180;
  document.getElementById("dbcard-axis").style.transform = "rotateX("+currDeg+"deg)";
  //console.log("rotate card after....");
}