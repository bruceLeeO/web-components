(function(window) {
  /** carousel 3d-6 */
  var nex6 = document.getElementsByClassName("c-3d-6-next");
  var pre6 = document.getElementsByClassName("c-3d-6-prev");
  var nex6a = document.getElementsByClassName("c-3d-6-next-a");
  var pre6a = document.getElementsByClassName("c-3d-6-prev-a");  
  var currdeg6 = 0;

  var itemsIn3d6 = document.getElementsByClassName("c-3d-6-indy");

  itemsIn3d6[0].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d6.length; i++) {

      if (isExpressionInArrs(itemsIn3d6[i].className,"itemsIn3d-6--active")) {
        if (itemsIn3d6[i].id === "c-3d-6-item-2") {
          currdeg6 += 120;
        }
        if (itemsIn3d6[i].id === "c-3d-6-item-3") {
          currdeg6 += 240;
        }
        itemsIn3d6[i].className = itemsIn3d6[i].className.replace(" itemsIn3d-6--active","");
        evt.currentTarget.className += " itemsIn3d-6--active";
      }
    }
    document.getElementsByClassName("c-3d-6-axis")[0].style.transform = "rotateY("+currdeg6+"deg)";
  }

  itemsIn3d6[1].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d6.length; i++) {

      if (isExpressionInArrs(itemsIn3d6[i].className,"itemsIn3d-6--active")) {
        if (itemsIn3d6[i].id === "c-3d-6-item-1") {
          currdeg6 -= 120;
        }
        if (itemsIn3d6[i].id === "c-3d-6-item-3") {
          currdeg6 += 120;
        }
        itemsIn3d6[i].className = itemsIn3d6[i].className.replace(" itemsIn3d-6--active","");
        evt.currentTarget.className += " itemsIn3d-6--active";
      }
    }
    document.getElementsByClassName("c-3d-6-axis")[0].style.transform = "rotateY("+currdeg6+"deg)";
  }

  itemsIn3d6[2].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d6.length; i++) {

      if (isExpressionInArrs(itemsIn3d6[i].className,"itemsIn3d-6--active")) {
        if (itemsIn3d6[i].id === "c-3d-6-item-1") {
          currdeg6 -= 240;
        }
        if (itemsIn3d6[i].id === "c-3d-6-item-2") {
          currdeg6 -= 120;
        }
        itemsIn3d6[i].className = itemsIn3d6[i].className.replace(" itemsIn3d-6--active","");
        evt.currentTarget.className += " itemsIn3d-6--active";
      }
    }
    document.getElementsByClassName("c-3d-6-axis")[0].style.transform = "rotateY("+currdeg6+"deg)";
  }

  nex6[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg6 -= 120; //console.log("currdeg: "+currdeg6);
    document.getElementsByClassName("c-3d-6-axis")[0].style.transform = "rotateY("+currdeg6+"deg)";

    for (var i = 0; i < itemsIn3d6.length; i++) {
      if (isExpressionInArrs(itemsIn3d6[i].className,"itemsIn3d-6--active")) {
        itemsIn3d6[i].className = itemsIn3d6[i].className.replace(" itemsIn3d-6--active","");
        if (itemsIn3d6[i].id === "c-3d-6-item-1" || itemsIn3d6[i].id === "c-3d-6-item-2") {
          itemsIn3d6[i+1].className += " itemsIn3d-6--active";
          break;
        } else {
          if (itemsIn3d6[i].id === "c-3d-6-item-3") {
            itemsIn3d6[0].className += " itemsIn3d-6--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-6")[0].style.transform = "scale(1.5)";
  }

  pre6[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg6 = currdeg6 + 120; ////console.log("currdeg: "+currdeg6);
    document.getElementsByClassName("c-3d-6-axis")[0].style.transform = "rotateY("+currdeg6+"deg)";

    for (var i = 0; i < itemsIn3d6.length; i++) {
      if (isExpressionInArrs(itemsIn3d6[i].className,"itemsIn3d-6--active")) {
        itemsIn3d6[i].className = itemsIn3d6[i].className.replace(" itemsIn3d-6--active","");
        if (itemsIn3d6[i].id === "c-3d-6-item-3" || itemsIn3d6[i].id === "c-3d-6-item-2") {
          itemsIn3d6[i-1].className += " itemsIn3d-6--active";
          break;
        } else {
          if (itemsIn3d6[i].id === "c-3d-6-item-1") {
            itemsIn3d6[2].className += " itemsIn3d-6--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-6")[0].style.transform = "scale(1.5)";
  }

  nex6a[0].onclick = function(evt) {
    //console.log("n-a is clicked");    
    currdeg6 -= 120; //console.log("currdeg: "+currdeg6);
    document.getElementsByClassName("c-3d-6-axis")[0].style.transform = "rotateY("+currdeg6+"deg)";

    for (var i = 0; i < itemsIn3d6.length; i++) {
      if (isExpressionInArrs(itemsIn3d6[i].className,"itemsIn3d-6--active")) {
        itemsIn3d6[i].className = itemsIn3d6[i].className.replace(" itemsIn3d-6--active","");
        if (itemsIn3d6[i].id === "c-3d-6-item-1" || itemsIn3d6[i].id === "c-3d-6-item-2") {
          itemsIn3d6[i+1].className += " itemsIn3d-6--active";
          break;
        } else {
          if (itemsIn3d6[i].id === "c-3d-6-item-3") {
            itemsIn3d6[0].className += " itemsIn3d-6--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-6")[0].style.transform = "scale(1.5)";
  }

  pre6a[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg6 = currdeg6 + 120; ////console.log("currdeg: "+currdeg6);
    document.getElementsByClassName("c-3d-6-axis")[0].style.transform = "rotateY("+currdeg6+"deg)";

    for (var i = 0; i < itemsIn3d6.length; i++) {
      if (isExpressionInArrs(itemsIn3d6[i].className,"itemsIn3d-6--active")) {
        itemsIn3d6[i].className = itemsIn3d6[i].className.replace(" itemsIn3d-6--active","");
        if (itemsIn3d6[i].id === "c-3d-6-item-3" || itemsIn3d6[i].id === "c-3d-6-item-2") {
          itemsIn3d6[i-1].className += " itemsIn3d-6--active";
          break;
        } else {
          if (itemsIn3d6[i].id === "c-3d-6-item-1") {
            itemsIn3d6[2].className += " itemsIn3d-6--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-6")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("c-3d-6-item")[0].onclick = function(evt) {
    document.getElementsByClassName("c-3d-6")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-6-item")[1].onclick = function(evt) {
    document.getElementsByClassName("c-3d-6")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-6-item")[2].onclick = function(evt) {
    document.getElementsByClassName("c-3d-6")[0].style.transform = "scale(1)";
  }

})(window);