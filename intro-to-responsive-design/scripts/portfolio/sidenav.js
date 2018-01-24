(function(window){
  var mbtn = document.getElementById("mobilenav-button");
  mbtn.onclick = function() {
    //document.getElementById("sidenav").style.transition = "max-height 0.5s ease";
    document.getElementById("sidenav").style.maxHeight = "100%";    
    //document.getElementById("sitemain").style.marginTop  = "280px";
  }

  var xbtn =document.getElementById("sidenav-header__close");
  xbtn.onclick = function() {
    document.getElementById("sidenav").style.maxHeight = "0";
    //document.getElementById("sitemain").style.marginTop = "0";
  }

})(window);