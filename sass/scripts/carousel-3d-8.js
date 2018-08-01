(function(window) {
  /** carousel 3d-8 */
  var nex8 = document.getElementsByClassName("c-3d-8-next");
  var pre8 = document.getElementsByClassName("c-3d-8-prev");
  var nex8a = document.getElementsByClassName("c-3d-8-next-a");
  var pre8a = document.getElementsByClassName("c-3d-8-prev-a");  
  var currdeg8 = 0;

  var itemsIn3d8 = document.getElementsByClassName("c-3d-8-indy");

  itemsIn3d8[0].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d8.length; i++) {

      if (isExpressionInArrs(itemsIn3d8[i].className,"itemsIn3d-8--active")) {
        if (itemsIn3d8[i].id === "c-3d-8-item-2") {
          currdeg8 += 90;
        }
        if (itemsIn3d8[i].id === "c-3d-8-item-3") {
          currdeg8 += 180;
        }
        if (itemsIn3d8[i].id === "c-3d-8-item-4") {
          currdeg8 += 270;
        }
        itemsIn3d8[i].className = itemsIn3d8[i].className.replace(" itemsIn3d-8--active","");
        evt.currentTarget.className += " itemsIn3d-8--active";
      }
    }
    document.getElementsByClassName("c-3d-8-axis")[0].style.transform = "rotateY("+currdeg8+"deg)";
  }

  itemsIn3d8[1].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d8.length; i++) {

      if (isExpressionInArrs(itemsIn3d8[i].className,"itemsIn3d-8--active")) {
        if (itemsIn3d8[i].id === "c-3d-8-item-1") {
          currdeg8 -= 90;
        }
        if (itemsIn3d8[i].id === "c-3d-8-item-3") {
          currdeg8 += 90;
        }
        if (itemsIn3d8[i].id === "c-3d-8-item-4") {
          currdeg8 += 180;
        }
        itemsIn3d8[i].className = itemsIn3d8[i].className.replace(" itemsIn3d-8--active","");
        evt.currentTarget.className += " itemsIn3d-8--active";
      }
    }
    document.getElementsByClassName("c-3d-8-axis")[0].style.transform = "rotateY("+currdeg8+"deg)";
  }

  itemsIn3d8[2].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d8.length; i++) {

      if (isExpressionInArrs(itemsIn3d8[i].className,"itemsIn3d-8--active")) {
        if (itemsIn3d8[i].id === "c-3d-8-item-1") {
          currdeg8 -= 180;
        }
        if (itemsIn3d8[i].id === "c-3d-8-item-2") {
          currdeg8 -= 90;
        }
        if (itemsIn3d8[i].id === "c-3d-8-item-4") {
          currdeg8 += 90;
        }
        itemsIn3d8[i].className = itemsIn3d8[i].className.replace(" itemsIn3d-8--active","");
        evt.currentTarget.className += " itemsIn3d-8--active";
      }
    }
    document.getElementsByClassName("c-3d-8-axis")[0].style.transform = "rotateY("+currdeg8+"deg)";
  }

  itemsIn3d8[3].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d8.length; i++) {

      if (isExpressionInArrs(itemsIn3d8[i].className,"itemsIn3d-8--active")) {
        if (itemsIn3d8[i].id === "c-3d-8-item-1") {
          currdeg8 -= 270;
        }
        if (itemsIn3d8[i].id === "c-3d-8-item-2") {
          currdeg8 -= 180;
        }
        if (itemsIn3d8[i].id === "c-3d-8-item-3") {
          currdeg8 -= 90;
        }
        itemsIn3d8[i].className = itemsIn3d8[i].className.replace(" itemsIn3d-8--active","");
        evt.currentTarget.className += " itemsIn3d-8--active";
      }
    }
    document.getElementsByClassName("c-3d-8-axis")[0].style.transform = "rotateY("+currdeg8+"deg)";
  }

  nex8[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg8 -= 90; //console.log("currdeg: "+currdeg8);
    document.getElementsByClassName("c-3d-8-axis")[0].style.transform = "rotateY("+currdeg8+"deg)";

    for (var i = 0; i < itemsIn3d8.length; i++) {
      if (isExpressionInArrs(itemsIn3d8[i].className,"itemsIn3d-8--active")) {
        itemsIn3d8[i].className = itemsIn3d8[i].className.replace(" itemsIn3d-8--active","");
        if (itemsIn3d8[i].id === "c-3d-8-item-1" || itemsIn3d8[i].id === "c-3d-8-item-2" || itemsIn3d8[i].id === "c-3d-8-item-3") {
          itemsIn3d8[i+1].className += " itemsIn3d-8--active";
          break;
        } else {
          if (itemsIn3d8[i].id === "c-3d-8-item-4") {
            itemsIn3d8[0].className += " itemsIn3d-8--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-8")[0].style.transform = "scale(1.5)";
  }

  pre8[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg8 = currdeg8 + 90; ////console.log("currdeg: "+currdeg8);
    document.getElementsByClassName("c-3d-8-axis")[0].style.transform = "rotateY("+currdeg8+"deg)";

    for (var i = 0; i < itemsIn3d8.length; i++) {
      if (isExpressionInArrs(itemsIn3d8[i].className,"itemsIn3d-8--active")) {
        itemsIn3d8[i].className = itemsIn3d8[i].className.replace(" itemsIn3d-8--active","");
        if (itemsIn3d8[i].id === "c-3d-8-item-4" || itemsIn3d8[i].id === "c-3d-8-item-3" || itemsIn3d8[i].id === "c-3d-8-item-2") {
          itemsIn3d8[i-1].className += " itemsIn3d-8--active";
          break;
        } else {
          if (itemsIn3d8[i].id === "c-3d-8-item-1") {
            itemsIn3d8[3].className += " itemsIn3d-8--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-8")[0].style.transform = "scale(1.5)";
  }

  nex8a[0].onclick = function(evt) {
    //console.log("n-a is clicked");    
    currdeg8 -= 90; //console.log("currdeg: "+currdeg8);
    document.getElementsByClassName("c-3d-8-axis")[0].style.transform = "rotateY("+currdeg8+"deg)";

    for (var i = 0; i < itemsIn3d8.length; i++) {
      if (isExpressionInArrs(itemsIn3d8[i].className,"itemsIn3d-8--active")) {
        itemsIn3d8[i].className = itemsIn3d8[i].className.replace(" itemsIn3d-8--active","");
        if (itemsIn3d8[i].id === "c-3d-8-item-1" || itemsIn3d8[i].id === "c-3d-8-item-2" || itemsIn3d8[i].id === "c-3d-8-item-3") {
          itemsIn3d8[i+1].className += " itemsIn3d-8--active";
          break;
        } else {
          if (itemsIn3d8[i].id === "c-3d-8-item-4") {
            itemsIn3d8[0].className += " itemsIn3d-8--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-8")[0].style.transform = "scale(1.5)";
  }

  pre8a[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg8 = currdeg8 + 90; ////console.log("currdeg: "+currdeg8);
    document.getElementsByClassName("c-3d-8-axis")[0].style.transform = "rotateY("+currdeg8+"deg)";

    for (var i = 0; i < itemsIn3d8.length; i++) {
      if (isExpressionInArrs(itemsIn3d8[i].className,"itemsIn3d-8--active")) {
        itemsIn3d8[i].className = itemsIn3d8[i].className.replace(" itemsIn3d-8--active","");
        if (itemsIn3d8[i].id === "c-3d-8-item-4" || itemsIn3d8[i].id === "c-3d-8-item-3" || itemsIn3d8[i].id === "c-3d-8-item-2") {
          itemsIn3d8[i-1].className += " itemsIn3d-8--active";
          break;
        } else {
          if (itemsIn3d8[i].id === "c-3d-8-item-1") {
            itemsIn3d8[3].className += " itemsIn3d-8--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-8")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("c-3d-8-item")[0].onclick = function(evt) {
    document.getElementsByClassName("c-3d-8")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-8-item")[1].onclick = function(evt) {
    document.getElementsByClassName("c-3d-8")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-8-item")[2].onclick = function(evt) {
    document.getElementsByClassName("c-3d-8")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-8-item")[3].onclick = function(evt) {
    document.getElementsByClassName("c-3d-8")[0].style.transform = "scale(1)";
  }

})(window);