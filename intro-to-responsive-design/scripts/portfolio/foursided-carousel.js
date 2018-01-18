(function(window) {

  var currdeg  = 0;

  var n = document.getElementsByClassName("foursided-carousel-next");
  var p = document.getElementsByClassName("foursided-carousel-prev");

  n[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg = currdeg - 90;
    document.getElementById("foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }

  p[0].onclick = function(evt) {
    console.log("p is clicked");
    currdeg = currdeg + 90;
    document.getElementById("foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }
  
  console.log("currdeg: "+currdeg);

})(window);