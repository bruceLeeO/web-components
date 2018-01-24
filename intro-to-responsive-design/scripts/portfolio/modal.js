(function(window) {
  var mod = document.getElementById("modal");
  var btn = document.getElementById("modal-button");
  var btn2 = document.getElementById("modal-button-2");
  var x = document.getElementsByClassName("modal-content__close")[0];
  btn.onclick = function() {
  	mod.style.display = "block";
  }
  btn2.onclick = function() {
  	mod.style.display = "block";
  }
  x.onclick = function() {
  	mod.style.display = "none";
  }
	window.onclick = function(evt) {
	    if (evt.target == mod) {
	        mod.style.display = "none";
	    }
	} 
})(window);