(function(window) {
  /** carousel 3d-7 */
  var nex7 = document.getElementsByClassName("c-3d-7-next");
  var pre7 = document.getElementsByClassName("c-3d-7-prev");
  var nex7a = document.getElementsByClassName("c-3d-7-next-a");
  var pre7a = document.getElementsByClassName("c-3d-7-prev-a");  
  var currdeg7 = 0;

  var itemsIn3d7 = document.getElementsByClassName("c-3d-7-indy");

  itemsIn3d7[0].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d7.length; i++) {

      if (isExpressionInArrs(itemsIn3d7[i].className,"itemsIn3d-7--active")) {
        if (itemsIn3d7[i].id === "c-3d-7-item-2") {
          currdeg7 += 120;
        }
        if (itemsIn3d7[i].id === "c-3d-7-item-3") {
          currdeg7 += 240;
        }
        itemsIn3d7[i].className = itemsIn3d7[i].className.replace(" itemsIn3d-7--active","");
        evt.currentTarget.className += " itemsIn3d-7--active";
      }
    }
    document.getElementsByClassName("c-3d-7-axis")[0].style.transform = "rotateY("+currdeg7+"deg)";
  }

  itemsIn3d7[1].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d7.length; i++) {

      if (isExpressionInArrs(itemsIn3d7[i].className,"itemsIn3d-7--active")) {
        if (itemsIn3d7[i].id === "c-3d-7-item-1") {
          currdeg7 -= 120;
        }
        if (itemsIn3d7[i].id === "c-3d-7-item-3") {
          currdeg7 += 120;
        }
        itemsIn3d7[i].className = itemsIn3d7[i].className.replace(" itemsIn3d-7--active","");
        evt.currentTarget.className += " itemsIn3d-7--active";
      }
    }
    document.getElementsByClassName("c-3d-7-axis")[0].style.transform = "rotateY("+currdeg7+"deg)";
  }

  itemsIn3d7[2].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d7.length; i++) {

      if (isExpressionInArrs(itemsIn3d7[i].className,"itemsIn3d-7--active")) {
        if (itemsIn3d7[i].id === "c-3d-7-item-1") {
          currdeg7 -= 240;
        }
        if (itemsIn3d7[i].id === "c-3d-7-item-2") {
          currdeg7 -= 120;
        }
        itemsIn3d7[i].className = itemsIn3d7[i].className.replace(" itemsIn3d-7--active","");
        evt.currentTarget.className += " itemsIn3d-7--active";
      }
    }
    document.getElementsByClassName("c-3d-7-axis")[0].style.transform = "rotateY("+currdeg7+"deg)";
  }

  nex7[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg7 -= 120; //console.log("currdeg: "+currdeg7);
    document.getElementsByClassName("c-3d-7-axis")[0].style.transform = "rotateY("+currdeg7+"deg)";

    for (var i = 0; i < itemsIn3d7.length; i++) {
      if (isExpressionInArrs(itemsIn3d7[i].className,"itemsIn3d-7--active")) {
        itemsIn3d7[i].className = itemsIn3d7[i].className.replace(" itemsIn3d-7--active","");
        if (itemsIn3d7[i].id === "c-3d-7-item-1" || itemsIn3d7[i].id === "c-3d-7-item-2") {
          itemsIn3d7[i+1].className += " itemsIn3d-7--active";
          break;
        } else {
          if (itemsIn3d7[i].id === "c-3d-7-item-3") {
            itemsIn3d7[0].className += " itemsIn3d-7--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-7")[0].style.transform = "scale(1.5)";
  }

  pre7[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg7 = currdeg7 + 120; ////console.log("currdeg: "+currdeg7);
    document.getElementsByClassName("c-3d-7-axis")[0].style.transform = "rotateY("+currdeg7+"deg)";

    for (var i = 0; i < itemsIn3d7.length; i++) {
      if (isExpressionInArrs(itemsIn3d7[i].className,"itemsIn3d-7--active")) {
        itemsIn3d7[i].className = itemsIn3d7[i].className.replace(" itemsIn3d-7--active","");
        if (itemsIn3d7[i].id === "c-3d-7-item-3" || itemsIn3d7[i].id === "c-3d-7-item-2") {
          itemsIn3d7[i-1].className += " itemsIn3d-7--active";
          break;
        } else {
          if (itemsIn3d7[i].id === "c-3d-7-item-1") {
            itemsIn3d7[2].className += " itemsIn3d-7--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-7")[0].style.transform = "scale(1.5)";
  }

  nex7a[0].onclick = function(evt) {
    //console.log("n-a is clicked");    
    currdeg7 -= 120; //console.log("currdeg: "+currdeg7);
    document.getElementsByClassName("c-3d-7-axis")[0].style.transform = "rotateY("+currdeg7+"deg)";

    for (var i = 0; i < itemsIn3d7.length; i++) {
      if (isExpressionInArrs(itemsIn3d7[i].className,"itemsIn3d-7--active")) {
        itemsIn3d7[i].className = itemsIn3d7[i].className.replace(" itemsIn3d-7--active","");
        if (itemsIn3d7[i].id === "c-3d-7-item-1" || itemsIn3d7[i].id === "c-3d-7-item-2") {
          itemsIn3d7[i+1].className += " itemsIn3d-7--active";
          break;
        } else {
          if (itemsIn3d7[i].id === "c-3d-7-item-3") {
            itemsIn3d7[0].className += " itemsIn3d-7--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-7")[0].style.transform = "scale(1.5)";
  }

  pre7a[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg7 = currdeg7 + 120; ////console.log("currdeg: "+currdeg7);
    document.getElementsByClassName("c-3d-7-axis")[0].style.transform = "rotateY("+currdeg7+"deg)";

    for (var i = 0; i < itemsIn3d7.length; i++) {
      if (isExpressionInArrs(itemsIn3d7[i].className,"itemsIn3d-7--active")) {
        itemsIn3d7[i].className = itemsIn3d7[i].className.replace(" itemsIn3d-7--active","");
        if (itemsIn3d7[i].id === "c-3d-7-item-3" || itemsIn3d7[i].id === "c-3d-7-item-2") {
          itemsIn3d7[i-1].className += " itemsIn3d-7--active";
          break;
        } else {
          if (itemsIn3d7[i].id === "c-3d-7-item-1") {
            itemsIn3d7[2].className += " itemsIn3d-7--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-7")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("c-3d-7-item")[0].onclick = function(evt) {
    document.getElementsByClassName("c-3d-7")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-7-item")[1].onclick = function(evt) {
    document.getElementsByClassName("c-3d-7")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-7-item")[2].onclick = function(evt) {
    document.getElementsByClassName("c-3d-7")[0].style.transform = "scale(1)";
  }

})(window);