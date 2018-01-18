(function(window) {

  //var carousel = $(".carousel"),
  var carousel = document.getElementsByClassName("carousel"),
      currdeg  = 0;
  console.log("carousel: "+carousel);
  //$(".next").on("click", { d: "n" }, rotate);
  //$(".prev").on("click", { d: "p" }, rotate);

  var n = document.getElementsByClassName("next");
  var p = document.getElementsByClassName("prev");

  console.log("n: "+n);
  console.log("n[0]: "+n[0]);

  n[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg = currdeg - 60;
    document.getElementById("carouselo").style.transform = "rotateY("+currdeg+"deg)";
  }

  p[0].onclick = function(evt) {
    console.log("p is clicked");
    currdeg = currdeg + 60;
    document.getElementById("carouselo").style.transform = "rotateY("+currdeg+"deg)";
  }
  
  console.log("currdeg: "+currdeg);
  //carousel.style.transform = "rotateY("+currdeg+"deg)";

})(window);