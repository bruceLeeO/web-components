(function(window) {

  go();

  window.addEventListener('resize', go);

  function go() {
    document.querySelector('.width').innerText = document.documentElement.clientWidth;

    //console.log("clientWidth: "+document.documentElement.clientWidth);

    /**
     * close the mobile menu while browser is being widened
     */
    if (document.documentElement.clientWidth >= 600 && document.documentElement.clientWidth <= 625) {
      console.log("its between 600 and 625px...");
      document.getElementById("sidenav").style.maxHeight = "0";
    }

    /**
     *  close the mobile menu just in case user decide to maximize the browser
     */
    if (document.documentElement.clientWidth > 1010) {
    	console.log("screen is over 1010px... ");
    	document.getElementById("sidenav").style.maxHeight = "0";
    }

  }




})(window);