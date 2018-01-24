(function(window) {

  var i, api;

  api = document.getElementsByClassName("accordionproject-item__listitemlink");

  for (i = 0; i < api.length; i++){ 
    api[i].onclick = function(evt) {

    	/* remove any existing active class */
			for (i = 0; i < api.length; i++) {
			  api[i].className = api[i].className.replace(" listitemlink--active", "");
			}
      /* add active class to current targeted class */
      evt.currentTarget.className += " listitemlink--active";
    }
  }

})(window);