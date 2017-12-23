(function(window) {

	/* utility function to convert str to camel type */
	var convertStrToCamel = function(str) {
		var line = "";
		for (var i = 0; i < str.length; i++) {
			if (i === 0) {
				line += str[i].toLowerCase();
			}
			else if (str[i] === " ") {
				line += str[i+1].toUpperCase();
				i++;
			}
			else {
				line += str[i];
			}
		}
		return line;
	}

  var i, acc;

  acc = document.getElementsByClassName("topnav-link");

  for (i = 0; i < acc.length; i++){ 
    acc[i].onclick = function(evt) {

    	/* remove any existing active class, ie, refresh the menu bar*/
			for (i = 0; i < acc.length; i++) {
			  acc[i].className = acc[i].className.replace(" active", "");
			}

			/* debug log, useful during development */
      //console.log(this.firstChild.nodeValue);
      var idName = convertStrToCamel(this.firstChild.nodeValue);
      
      /* debug log to make sure idNane is correctly formatted*/
      //console.log(idName);

      document.getElementById(idName).focus();
      
      /* add active class to current targeted class */
      evt.currentTarget.className += " active";
    }
  }

})(window);