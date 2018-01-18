(function(window) {

  var i, ti;

  ti = document.getElementsByClassName("accordionindex");

  for (i = 0; i < ti.length; i++){ 
    ti[i].onclick = function(evt) {
    	  	
    	/**
    	 *  replace any active class on the loop
    	 *  unset display on any tabcontent element
    	 */
			for (i = 0; i < ti.length; i++) {

        /**
         * useful debug log, prints entire class snippet
         * print out class name, return true if have children
         * get the value and print out the id attribute
         */
				//console.log(ti[i]);
				//console.log(ti[i].className);
				//console.log(ti[i].hasChildNodes());
				//console.log(ti[i].childNodes[0].childNodes[0].nodeValue);
				//console.log(evt.currentTarget.id);
				
				/**
				 * replace any active class on the loop
				 */
			  ti[i].className = ti[i].className.replace(" tabindex--active", "");

			  /**
			   * perform a hack, referencing another id attribute with 
			   * lowercase name to unset its display styling
			   */
			  //console.log(ti[i].id.toLowerCase());
			  document.getElementById(ti[i].id.toLowerCase()).style.display = "";
			}

			/**
			 * set the current element active
			 *
			 */
      evt.currentTarget.className += " tabindex--active";
      console.log("evt.currentTarget.className: "+evt.currentTarget.className);
      /**
       * perform another hack, using the current id attribute, reference 
       * another id attribute with the lowercase name and then set its 
       * display "on" to display the content
       */
      document.getElementById(evt.currentTarget.id.toLowerCase()).style.display = "block";
      
      /* useful debug log to print out the referenced id */ 
      //console.log(document.getElementById(evt.currentTarget.id.toLowerCase()));
    }
  }

})(window);