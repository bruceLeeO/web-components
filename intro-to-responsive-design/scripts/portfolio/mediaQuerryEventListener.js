(function(window) {

  go();

  window.addEventListener('resize', go);

  function go() {
    document.querySelector('.width').innerText = document.documentElement.clientWidth;

    //console.log("clientWidth: "+document.documentElement.clientWidth);

    if (document.documentElement.clientWidth === 600) {
      console.log("its 600...");
    }


  }




})(window);