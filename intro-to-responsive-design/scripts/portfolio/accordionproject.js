(function(window){

 /* handle the accordion navigation */
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

  /* handle the project item list */
  api = document.getElementsByClassName("accordionproject-item__listitemlink");

  for (i = 0; i < api.length; i++){ 
    api[i].onclick = function(evt) {

      /* remove any existing active class */
      for (i = 0; i < api.length; i++) {
        api[i].className = api[i].className.replace(" .listitemlink--active", "");
      }
      
      /* add active class to current targeted class */
      evt.currentTarget.className += " .listitemlink--active";
    }
  }
    
})(window);

