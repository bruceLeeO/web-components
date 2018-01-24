(function(window){

 /* The contents of your JS file */
  var ai = document.getElementsByClassName("accordionproject-list");
  var i;

  for (i = 0; i < ai.length; i++) {
    ai[i].onclick = function() {
      this.classList.toggle("active");
      console.log(this);
      var panel = this.nextElementSibling;
      console.log(panel.style.maxHeight);
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    }
  }
})(window);

