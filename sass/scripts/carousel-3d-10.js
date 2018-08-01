(function(window) {
	/** carousel 3d-10 */
  var nex10 = document.getElementsByClassName("c-3d-10-next");
  var pre10 = document.getElementsByClassName("c-3d-10-prev");
  var nex10a = document.getElementsByClassName("c-3d-10-next-a");
  var pre10a = document.getElementsByClassName("c-3d-10-prev-a");  
  var currdeg10 = 0;

  var itemsIn3d10 = document.getElementsByClassName("c-3d-10-indy");

  itemsIn3d10[0].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        if (itemsIn3d10[i].id === "c-3d-10-item-2") {
          currdeg10 += 60;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-3") {
          currdeg10 += 120;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-4") {
          currdeg10 += 180;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-5") {
          currdeg10 += 240;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-6") {
          currdeg10 += 300;
        }                
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        evt.currentTarget.className += " itemsIn3d-10--active";
      }
    }
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
  }

  itemsIn3d10[1].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        if (itemsIn3d10[i].id === "c-3d-10-item-1") {
          currdeg10 -= 60;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-3") {
          currdeg10 += 60;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-4") {
          currdeg10 += 120;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-5") {
          currdeg10 += 180;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-6") {
          currdeg10 += 240;
        }               
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        evt.currentTarget.className += " itemsIn3d-10--active";
      }
    }
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
  }

  itemsIn3d10[2].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        if (itemsIn3d10[i].id === "c-3d-10-item-1") {
          currdeg10 -= 120;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-2") {
          currdeg10 -= 60;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-4") {
          currdeg10 += 60;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-5") {
          currdeg10 += 120;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-6") {
          currdeg10 += 180;
        }                
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        evt.currentTarget.className += " itemsIn3d-10--active";
      }
    }
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
  }

  itemsIn3d10[3].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        if (itemsIn3d10[i].id === "c-3d-10-item-1") {
          currdeg10 -= 180;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-2") {
          currdeg10 -= 120;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-3") {
          currdeg10 -= 60;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-5") {
          currdeg10 += 60;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-6") {
          currdeg10 += 120;
        }                
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        evt.currentTarget.className += " itemsIn3d-10--active";
      }
    }
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
  }

  itemsIn3d10[4].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        if (itemsIn3d10[i].id === "c-3d-10-item-1") {
          currdeg10 -= 240;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-2") {
          currdeg10 -= 180;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-3") {
          currdeg10 -= 120;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-4") {
          currdeg10 -= 60;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-6") {
          currdeg10 += 60;
        }                
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        evt.currentTarget.className += " itemsIn3d-10--active";
      }
    }
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
  }

  itemsIn3d10[5].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        if (itemsIn3d10[i].id === "c-3d-10-item-1") {
          currdeg10 -= 300;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-2") {
          currdeg10 -= 240;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-3") {
          currdeg10 -= 180;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-4") {
          currdeg10 -= 120;
        }
        if (itemsIn3d10[i].id === "c-3d-10-item-5") {
          currdeg10 -= 60;
        }                
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        evt.currentTarget.className += " itemsIn3d-10--active";
      }
    }
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
  }

  nex10[0].onclick = function(evt) {

    //document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "scale(1)";
    currdeg10 -= 60; //console.log("currdeg: "+currdeg10);
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
    //document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        if (itemsIn3d10[i].id === "c-3d-10-item-1" || itemsIn3d10[i].id === "c-3d-10-item-2" || itemsIn3d10[i].id === "c-3d-10-item-3" || itemsIn3d10[i].id === "c-3d-10-item-4" || itemsIn3d10[i].id === "c-3d-10-item-5") {
          itemsIn3d10[i+1].className += " itemsIn3d-10--active";
          break;
        } else {
          if (itemsIn3d10[i].id === "c-3d-10-item-6") {
            itemsIn3d10[0].className += " itemsIn3d-10--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1.5)";
  }

  pre10[0].onclick = function(evt) {
    //console.log("p is clicked");
    //document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "scale(1)";
    currdeg10 = currdeg10 + 60; ////console.log("currdeg: "+currdeg10);
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
    //document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        if (itemsIn3d10[i].id === "c-3d-10-item-6" || itemsIn3d10[i].id === "c-3d-10-item-5" || itemsIn3d10[i].id === "c-3d-10-item-4" || itemsIn3d10[i].id === "c-3d-10-item-3" || itemsIn3d10[i].id === "c-3d-10-item-2") {
          itemsIn3d10[i-1].className += " itemsIn3d-10--active";
          break;
        } else {
          if (itemsIn3d10[i].id === "c-3d-10-item-1") {
            itemsIn3d10[5].className += " itemsIn3d-10--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1.5)";
  }

  nex10a[0].onclick = function(evt) {

    //document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "scale(1)";
    currdeg10 -= 60; //console.log("currdeg: "+currdeg10);
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
    //document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        if (itemsIn3d10[i].id === "c-3d-10-item-1" || itemsIn3d10[i].id === "c-3d-10-item-2" || itemsIn3d10[i].id === "c-3d-10-item-3" || itemsIn3d10[i].id === "c-3d-10-item-4" || itemsIn3d10[i].id === "c-3d-10-item-5") {
          itemsIn3d10[i+1].className += " itemsIn3d-10--active";
          break;
        } else {
          if (itemsIn3d10[i].id === "c-3d-10-item-6") {
            itemsIn3d10[0].className += " itemsIn3d-10--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1.5)";
  }

  pre10a[0].onclick = function(evt) {
    //console.log("p is clicked");
    //document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "scale(1)";
    currdeg10 = currdeg10 + 60; ////console.log("currdeg: "+currdeg10);
    document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg)";
    //document.getElementsByClassName("c-3d-10-axis")[0].style.transform = "rotateY("+currdeg10+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d10.length; i++) {

      if (isExpressionInArrs(itemsIn3d10[i].className,"itemsIn3d-10--active")) {
        itemsIn3d10[i].className = itemsIn3d10[i].className.replace(" itemsIn3d-10--active","");
        if (itemsIn3d10[i].id === "c-3d-10-item-6" || itemsIn3d10[i].id === "c-3d-10-item-5" || itemsIn3d10[i].id === "c-3d-10-item-4" || itemsIn3d10[i].id === "c-3d-10-item-3" || itemsIn3d10[i].id === "c-3d-10-item-2") {
          itemsIn3d10[i-1].className += " itemsIn3d-10--active";
          break;
        } else {
          if (itemsIn3d10[i].id === "c-3d-10-item-1") {
            itemsIn3d10[5].className += " itemsIn3d-10--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("c-3d-10-item")[0].onclick = function(evt) {
    document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-10-item")[1].onclick = function(evt) {
    document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-10-item")[2].onclick = function(evt) {
    document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-10-item")[3].onclick = function(evt) {
    document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-10-item")[4].onclick = function(evt) {
    document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1)";
  }  

  document.getElementsByClassName("c-3d-10-item")[5].onclick = function(evt) {
    document.getElementsByClassName("c-3d-10")[0].style.transform = "scale(1)";
  }
})(window);