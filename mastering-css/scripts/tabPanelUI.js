(function(window){

  //console.log("start....");
  var tabPanel = {}; // object literal
  //console.log("middle...");
  
  /* The contents of your JS file */
  tabPanel.openItem = function(evt, item) {
    //console.log("inside");
    var i, tabContent, tabLinks;
    //console.log("after");
    tabContent = document.getElementsByClassName("tabContent");
    //console.log(tabContent[0]);
    //console.log(tabContent[1]);
    //console.log(tabContent[2]);
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    //console.log(tabContent[0]);
    //console.log(tabContent[1]);
    //console.log(tabContent[2]);
    tabLinks = document.getElementsByClassName("tabLinks");
    //console.log(tabLinks[0]);
    //console.log(tabLinks[1]);
    //console.log(tabLinks[2]);
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    //console.log(tabLinks[0]);
    //console.log(tabLinks[1]);
    //console.log(tabLinks[2]);
    
    document.getElementById(item).style.display = "block";
    
    console.log(item);
    
    //console.log(tabContent[0]);
    //console.log(tabContent[1]);
    //console.log(tabContent[2]);
    
    evt.currentTarget.className += " active";
    
    //console.log(tabLinks[0]);
    //console.log(tabLinks[1]);
    //console.log(tabLinks[2]);
  
  };

  window.tabPanel = tabPanel; // expose to global
})(window);