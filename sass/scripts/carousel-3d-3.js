(function(window) {
  /** carousel 3d-3 */
  var nex3 = document.getElementsByClassName("c-3d-3-next");
  var pre3 = document.getElementsByClassName("c-3d-3-prev");
  var nex3a = document.getElementsByClassName("c-3d-3-next-a");
  var pre3a = document.getElementsByClassName("c-3d-3-prev-a");  
  var currdeg3 = 0;

  var itemsIn3d3 = document.getElementsByClassName("c-3d-3-indy");

  itemsIn3d3[0].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d3.length; i++) {

      if (isExpressionInArrs(itemsIn3d3[i].className,"itemsIn3d-3--active")) {
        if (itemsIn3d3[i].id === "c-3d-3-item-2") {
          currdeg3 += 90;
        }
        if (itemsIn3d3[i].id === "c-3d-3-item-3") {
          currdeg3 += 180;
        }
        if (itemsIn3d3[i].id === "c-3d-3-item-4") {
          currdeg3 += 270;
        }
        itemsIn3d3[i].className = itemsIn3d3[i].className.replace(" itemsIn3d-3--active","");
        evt.currentTarget.className += " itemsIn3d-3--active";
      }
    }
    document.getElementsByClassName("c-3d-3-axis")[0].style.transform = "rotateY("+currdeg3+"deg)";
  }

  itemsIn3d3[1].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d3.length; i++) {

      if (isExpressionInArrs(itemsIn3d3[i].className,"itemsIn3d-3--active")) {
        if (itemsIn3d3[i].id === "c-3d-3-item-1") {
          currdeg3 -= 90;
        }
        if (itemsIn3d3[i].id === "c-3d-3-item-3") {
          currdeg3 += 90;
        }
        if (itemsIn3d3[i].id === "c-3d-3-item-4") {
          currdeg3 += 180;
        }
        itemsIn3d3[i].className = itemsIn3d3[i].className.replace(" itemsIn3d-3--active","");
        evt.currentTarget.className += " itemsIn3d-3--active";
      }
    }
    document.getElementsByClassName("c-3d-3-axis")[0].style.transform = "rotateY("+currdeg3+"deg)";
  }

  itemsIn3d3[2].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d3.length; i++) {

      if (isExpressionInArrs(itemsIn3d3[i].className,"itemsIn3d-3--active")) {
        if (itemsIn3d3[i].id === "c-3d-3-item-1") {
          currdeg3 -= 180;
        }
        if (itemsIn3d3[i].id === "c-3d-3-item-2") {
          currdeg3 -= 90;
        }
        if (itemsIn3d3[i].id === "c-3d-3-item-4") {
          currdeg3 += 90;
        }
        itemsIn3d3[i].className = itemsIn3d3[i].className.replace(" itemsIn3d-3--active","");
        evt.currentTarget.className += " itemsIn3d-3--active";
      }
    }
    document.getElementsByClassName("c-3d-3-axis")[0].style.transform = "rotateY("+currdeg3+"deg)";
  }

  itemsIn3d3[3].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d3.length; i++) {

      if (isExpressionInArrs(itemsIn3d3[i].className,"itemsIn3d-3--active")) {
        if (itemsIn3d3[i].id === "c-3d-3-item-1") {
          currdeg3 -= 270;
        }
        if (itemsIn3d3[i].id === "c-3d-3-item-2") {
          currdeg3 -= 180;
        }
        if (itemsIn3d3[i].id === "c-3d-3-item-3") {
          currdeg3 -= 90;
        }
        itemsIn3d3[i].className = itemsIn3d3[i].className.replace(" itemsIn3d-3--active","");
        evt.currentTarget.className += " itemsIn3d-3--active";
      }
    }
    document.getElementsByClassName("c-3d-3-axis")[0].style.transform = "rotateY("+currdeg3+"deg)";
  }

  nex3[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg3 -= 90; //console.log("currdeg: "+currdeg3);
    document.getElementsByClassName("c-3d-3-axis")[0].style.transform = "rotateY("+currdeg3+"deg)";

    for (var i = 0; i < itemsIn3d3.length; i++) {
      if (isExpressionInArrs(itemsIn3d3[i].className,"itemsIn3d-3--active")) {
        itemsIn3d3[i].className = itemsIn3d3[i].className.replace(" itemsIn3d-3--active","");
        if (itemsIn3d3[i].id === "c-3d-3-item-1" || itemsIn3d3[i].id === "c-3d-3-item-2" || itemsIn3d3[i].id === "c-3d-3-item-3") {
          itemsIn3d3[i+1].className += " itemsIn3d-3--active";
          break;
        } else {
          if (itemsIn3d3[i].id === "c-3d-3-item-4") {
            itemsIn3d3[0].className += " itemsIn3d-3--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-3")[0].style.transform = "scale(1.5)";
  }

  pre3[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg3 = currdeg3 + 90; ////console.log("currdeg: "+currdeg3);
    document.getElementsByClassName("c-3d-3-axis")[0].style.transform = "rotateY("+currdeg3+"deg)";

    for (var i = 0; i < itemsIn3d3.length; i++) {
      if (isExpressionInArrs(itemsIn3d3[i].className,"itemsIn3d-3--active")) {
        itemsIn3d3[i].className = itemsIn3d3[i].className.replace(" itemsIn3d-3--active","");
        if (itemsIn3d3[i].id === "c-3d-3-item-4" || itemsIn3d3[i].id === "c-3d-3-item-3" || itemsIn3d3[i].id === "c-3d-3-item-2") {
          itemsIn3d3[i-1].className += " itemsIn3d-3--active";
          break;
        } else {
          if (itemsIn3d3[i].id === "c-3d-3-item-1") {
            itemsIn3d3[3].className += " itemsIn3d-3--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-3")[0].style.transform = "scale(1.5)";
  }

  nex3a[0].onclick = function(evt) {
    //console.log("n-a is clicked");    
    currdeg3 -= 90; //console.log("currdeg: "+currdeg3);
    document.getElementsByClassName("c-3d-3-axis")[0].style.transform = "rotateY("+currdeg3+"deg)";

    for (var i = 0; i < itemsIn3d3.length; i++) {
      if (isExpressionInArrs(itemsIn3d3[i].className,"itemsIn3d-3--active")) {
        itemsIn3d3[i].className = itemsIn3d3[i].className.replace(" itemsIn3d-3--active","");
        if (itemsIn3d3[i].id === "c-3d-3-item-1" || itemsIn3d3[i].id === "c-3d-3-item-2" || itemsIn3d3[i].id === "c-3d-3-item-3") {
          itemsIn3d3[i+1].className += " itemsIn3d-3--active";
          break;
        } else {
          if (itemsIn3d3[i].id === "c-3d-3-item-4") {
            itemsIn3d3[0].className += " itemsIn3d-3--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-3")[0].style.transform = "scale(1.5)";
  }

  pre3a[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg3 = currdeg3 + 90; ////console.log("currdeg: "+currdeg3);
    document.getElementsByClassName("c-3d-3-axis")[0].style.transform = "rotateY("+currdeg3+"deg)";

    for (var i = 0; i < itemsIn3d3.length; i++) {
      if (isExpressionInArrs(itemsIn3d3[i].className,"itemsIn3d-3--active")) {
        itemsIn3d3[i].className = itemsIn3d3[i].className.replace(" itemsIn3d-3--active","");
        if (itemsIn3d3[i].id === "c-3d-3-item-4" || itemsIn3d3[i].id === "c-3d-3-item-3" || itemsIn3d3[i].id === "c-3d-3-item-2") {
          itemsIn3d3[i-1].className += " itemsIn3d-3--active";
          break;
        } else {
          if (itemsIn3d3[i].id === "c-3d-3-item-1") {
            itemsIn3d3[3].className += " itemsIn3d-3--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-3")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("c-3d-3-item")[0].onclick = function(evt) {
    document.getElementsByClassName("c-3d-3")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-3-item")[1].onclick = function(evt) {
    document.getElementsByClassName("c-3d-3")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-3-item")[2].onclick = function(evt) {
    document.getElementsByClassName("c-3d-3")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-3-item")[3].onclick = function(evt) {
    document.getElementsByClassName("c-3d-3")[0].style.transform = "scale(1)";
  }

})(window);