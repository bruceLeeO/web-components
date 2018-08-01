(function(window) {
  /** carousel 3d-9 */
  var nex9 = document.getElementsByClassName("c-3d-9-next");
  var pre9 = document.getElementsByClassName("c-3d-9-prev");
  var nex9a = document.getElementsByClassName("c-3d-9-next-a");
  var pre9a = document.getElementsByClassName("c-3d-9-prev-a");  
  
  var currdeg9 = 0;

  var itemsIn3d9 = document.getElementsByClassName("c-3d-9-indy");

  itemsIn3d9[0].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d9.length; i++) {

      if (isExpressionInArrs(itemsIn3d9[i].className,"itemsIn3d-9--active")) {
        if (itemsIn3d9[i].id === "c-3d-9-item-2") {
          currdeg9 += 120;
        }
        if (itemsIn3d9[i].id === "c-3d-9-item-3") {
          currdeg9 += 240;
        }
        itemsIn3d9[i].className = itemsIn3d9[i].className.replace(" itemsIn3d-9--active","");
        evt.currentTarget.className += " itemsIn3d-9--active";
      }
    }
    document.getElementsByClassName("c-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
  }

  itemsIn3d9[1].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d9.length; i++) {

      if (isExpressionInArrs(itemsIn3d9[i].className,"itemsIn3d-9--active")) {
        if (itemsIn3d9[i].id === "c-3d-9-item-1") {
          currdeg9 -= 120;
        }
        if (itemsIn3d9[i].id === "c-3d-9-item-3") {
          currdeg9 += 120;
        }
        itemsIn3d9[i].className = itemsIn3d9[i].className.replace(" itemsIn3d-9--active","");
        evt.currentTarget.className += " itemsIn3d-9--active";
      }
    }
    document.getElementsByClassName("c-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
  }

  itemsIn3d9[2].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d9.length; i++) {

      if (isExpressionInArrs(itemsIn3d9[i].className,"itemsIn3d-9--active")) {
        if (itemsIn3d9[i].id === "c-3d-9-item-1") {
          currdeg9 -= 240;
        }
        if (itemsIn3d9[i].id === "c-3d-9-item-2") {
          currdeg9 -= 120;
        }
        itemsIn3d9[i].className = itemsIn3d9[i].className.replace(" itemsIn3d-9--active","");
        evt.currentTarget.className += " itemsIn3d-9--active";
      }
    }
    document.getElementsByClassName("c-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
  }

  nex9[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg9 -= 120; //console.log("currdeg: "+currdeg9);
    document.getElementsByClassName("c-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";

    for (var i = 0; i < itemsIn3d9.length; i++) {
      if (isExpressionInArrs(itemsIn3d9[i].className,"itemsIn3d-9--active")) {
        itemsIn3d9[i].className = itemsIn3d9[i].className.replace(" itemsIn3d-9--active","");
        if (itemsIn3d9[i].id === "c-3d-9-item-1" || itemsIn3d9[i].id === "c-3d-9-item-2") {
          itemsIn3d9[i+1].className += " itemsIn3d-9--active";
          break;
        } else {
          if (itemsIn3d9[i].id === "c-3d-9-item-3") {
            itemsIn3d9[0].className += " itemsIn3d-9--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-9")[0].style.transform = "scale(1.5)";
  }

  pre9[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg9 = currdeg9 + 120; ////console.log("currdeg: "+currdeg9);
    document.getElementsByClassName("c-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";

    for (var i = 0; i < itemsIn3d9.length; i++) {
      if (isExpressionInArrs(itemsIn3d9[i].className,"itemsIn3d-9--active")) {
        itemsIn3d9[i].className = itemsIn3d9[i].className.replace(" itemsIn3d-9--active","");
        if (itemsIn3d9[i].id === "c-3d-9-item-3" || itemsIn3d9[i].id === "c-3d-9-item-2") {
          itemsIn3d9[i-1].className += " itemsIn3d-9--active";
          break;
        } else {
          if (itemsIn3d9[i].id === "c-3d-9-item-1") {
            itemsIn3d9[2].className += " itemsIn3d-9--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-9")[0].style.transform = "scale(1.5)";
  }

  nex9a[0].onclick = function(evt) {
    //console.log("n-a is clicked");    
    currdeg9 -= 120; //console.log("currdeg: "+currdeg9);
    document.getElementsByClassName("c-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";

    for (var i = 0; i < itemsIn3d9.length; i++) {
      if (isExpressionInArrs(itemsIn3d9[i].className,"itemsIn3d-9--active")) {
        itemsIn3d9[i].className = itemsIn3d9[i].className.replace(" itemsIn3d-9--active","");
        if (itemsIn3d9[i].id === "c-3d-9-item-1" || itemsIn3d9[i].id === "c-3d-9-item-2") {
          itemsIn3d9[i+1].className += " itemsIn3d-9--active";
          break;
        } else {
          if (itemsIn3d9[i].id === "c-3d-9-item-3") {
            itemsIn3d9[0].className += " itemsIn3d-9--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-9")[0].style.transform = "scale(1.5)";
  }

  pre9a[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg9 = currdeg9 + 120; ////console.log("currdeg: "+currdeg9);
    document.getElementsByClassName("c-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";

    for (var i = 0; i < itemsIn3d9.length; i++) {
      if (isExpressionInArrs(itemsIn3d9[i].className,"itemsIn3d-9--active")) {
        itemsIn3d9[i].className = itemsIn3d9[i].className.replace(" itemsIn3d-9--active","");
        if (itemsIn3d9[i].id === "c-3d-9-item-3" || itemsIn3d9[i].id === "c-3d-9-item-2") {
          itemsIn3d9[i-1].className += " itemsIn3d-9--active";
          break;
        } else {
          if (itemsIn3d9[i].id === "c-3d-9-item-1") {
            itemsIn3d9[2].className += " itemsIn3d-9--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-9")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("c-3d-9-item")[0].onclick = function(evt) {
    document.getElementsByClassName("c-3d-9")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-9-item")[1].onclick = function(evt) {
    document.getElementsByClassName("c-3d-9")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-9-item")[2].onclick = function(evt) {
    document.getElementsByClassName("c-3d-9")[0].style.transform = "scale(1)";
  }

})(window);