(function(window) {

  var i, mml;

  mml = document.getElementsByClassName("mobilemenu-link");

  for (i = 0; i < mml.length; i++){ 
    mml[i].onclick = function(evt) {

    	/* remove any existing active class */
			for (i = 0; i < mml.length; i++) {
			  mml[i].className = mml[i].className.replace(" mobilemenu-link--active", "");
			}
      
      /* add active class to current targeted class */
      evt.currentTarget.className += " mobilemenu-link--active";
    }
  }

})(window);