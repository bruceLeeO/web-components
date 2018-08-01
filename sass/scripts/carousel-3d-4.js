(function(window) {
  /** carousel 3d-4 */
  var nex4 = document.getElementsByClassName("c-3d-4-next");
  var pre4 = document.getElementsByClassName("c-3d-4-prev");
  var nex4a = document.getElementsByClassName("c-3d-4-next-a");
  var pre4a = document.getElementsByClassName("c-3d-4-prev-a");  
  var currdeg4 = 0;

  var itemsIn3d4 = document.getElementsByClassName("c-3d-4-indy");

  itemsIn3d4[0].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d4.length; i++) {

      if (isExpressionInArrs(itemsIn3d4[i].className,"itemsIn3d-4--active")) {
        if (itemsIn3d4[i].id === "c-3d-4-item-2") {
          currdeg4 += 90;
        }
        if (itemsIn3d4[i].id === "c-3d-4-item-3") {
          currdeg4 += 180;
        }
        if (itemsIn3d4[i].id === "c-3d-4-item-4") {
          currdeg4 += 270;
        }
        itemsIn3d4[i].className = itemsIn3d4[i].className.replace(" itemsIn3d-4--active","");
        evt.currentTarget.className += " itemsIn3d-4--active";
      }
    }
    document.getElementsByClassName("c-3d-4-axis")[0].style.transform = "rotateY("+currdeg4+"deg)";
  }

  itemsIn3d4[1].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d4.length; i++) {

      if (isExpressionInArrs(itemsIn3d4[i].className,"itemsIn3d-4--active")) {
        if (itemsIn3d4[i].id === "c-3d-4-item-1") {
          currdeg4 -= 90;
        }
        if (itemsIn3d4[i].id === "c-3d-4-item-3") {
          currdeg4 += 90;
        }
        if (itemsIn3d4[i].id === "c-3d-4-item-4") {
          currdeg4 += 180;
        }
        itemsIn3d4[i].className = itemsIn3d4[i].className.replace(" itemsIn3d-4--active","");
        evt.currentTarget.className += " itemsIn3d-4--active";
      }
    }
    document.getElementsByClassName("c-3d-4-axis")[0].style.transform = "rotateY("+currdeg4+"deg)";
  }

  itemsIn3d4[2].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d4.length; i++) {

      if (isExpressionInArrs(itemsIn3d4[i].className,"itemsIn3d-4--active")) {
        if (itemsIn3d4[i].id === "c-3d-4-item-1") {
          currdeg4 -= 180;
        }
        if (itemsIn3d4[i].id === "c-3d-4-item-2") {
          currdeg4 -= 90;
        }
        if (itemsIn3d4[i].id === "c-3d-4-item-4") {
          currdeg4 += 90;
        }
        itemsIn3d4[i].className = itemsIn3d4[i].className.replace(" itemsIn3d-4--active","");
        evt.currentTarget.className += " itemsIn3d-4--active";
      }
    }
    document.getElementsByClassName("c-3d-4-axis")[0].style.transform = "rotateY("+currdeg4+"deg)";
  }

  itemsIn3d4[3].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d4.length; i++) {

      if (isExpressionInArrs(itemsIn3d4[i].className,"itemsIn3d-4--active")) {
        if (itemsIn3d4[i].id === "c-3d-4-item-1") {
          currdeg4 -= 270;
        }
        if (itemsIn3d4[i].id === "c-3d-4-item-2") {
          currdeg4 -= 180;
        }
        if (itemsIn3d4[i].id === "c-3d-4-item-3") {
          currdeg4 -= 90;
        }
        itemsIn3d4[i].className = itemsIn3d4[i].className.replace(" itemsIn3d-4--active","");
        evt.currentTarget.className += " itemsIn3d-4--active";
      }
    }
    document.getElementsByClassName("c-3d-4-axis")[0].style.transform = "rotateY("+currdeg4+"deg)";
  }

  nex4[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg4 -= 90; //console.log("currdeg: "+currdeg4);
    document.getElementsByClassName("c-3d-4-axis")[0].style.transform = "rotateY("+currdeg4+"deg)";

    for (var i = 0; i < itemsIn3d4.length; i++) {
      if (isExpressionInArrs(itemsIn3d4[i].className,"itemsIn3d-4--active")) {
        itemsIn3d4[i].className = itemsIn3d4[i].className.replace(" itemsIn3d-4--active","");
        if (itemsIn3d4[i].id === "c-3d-4-item-1" || itemsIn3d4[i].id === "c-3d-4-item-2" || itemsIn3d4[i].id === "c-3d-4-item-3") {
          itemsIn3d4[i+1].className += " itemsIn3d-4--active";
          break;
        } else {
          if (itemsIn3d4[i].id === "c-3d-4-item-4") {
            itemsIn3d4[0].className += " itemsIn3d-4--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-4")[0].style.transform = "scale(1.5)";
  }

  pre4[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg4 = currdeg4 + 90; ////console.log("currdeg: "+currdeg4);
    document.getElementsByClassName("c-3d-4-axis")[0].style.transform = "rotateY("+currdeg4+"deg)";

    for (var i = 0; i < itemsIn3d4.length; i++) {
      if (isExpressionInArrs(itemsIn3d4[i].className,"itemsIn3d-4--active")) {
        itemsIn3d4[i].className = itemsIn3d4[i].className.replace(" itemsIn3d-4--active","");
        if (itemsIn3d4[i].id === "c-3d-4-item-4" || itemsIn3d4[i].id === "c-3d-4-item-3" || itemsIn3d4[i].id === "c-3d-4-item-2") {
          itemsIn3d4[i-1].className += " itemsIn3d-4--active";
          break;
        } else {
          if (itemsIn3d4[i].id === "c-3d-4-item-1") {
            itemsIn3d4[3].className += " itemsIn3d-4--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-4")[0].style.transform = "scale(1.5)";
  }

  nex4a[0].onclick = function(evt) {
    //console.log("n-a is clicked");    
    currdeg4 -= 90; //console.log("currdeg: "+currdeg4);
    document.getElementsByClassName("c-3d-4-axis")[0].style.transform = "rotateY("+currdeg4+"deg)";

    for (var i = 0; i < itemsIn3d4.length; i++) {
      if (isExpressionInArrs(itemsIn3d4[i].className,"itemsIn3d-4--active")) {
        itemsIn3d4[i].className = itemsIn3d4[i].className.replace(" itemsIn3d-4--active","");
        if (itemsIn3d4[i].id === "c-3d-4-item-1" || itemsIn3d4[i].id === "c-3d-4-item-2" || itemsIn3d4[i].id === "c-3d-4-item-3") {
          itemsIn3d4[i+1].className += " itemsIn3d-4--active";
          break;
        } else {
          if (itemsIn3d4[i].id === "c-3d-4-item-4") {
            itemsIn3d4[0].className += " itemsIn3d-4--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-4")[0].style.transform = "scale(1.5)";
  }

  pre4a[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg4 = currdeg4 + 90; ////console.log("currdeg: "+currdeg4);
    document.getElementsByClassName("c-3d-4-axis")[0].style.transform = "rotateY("+currdeg4+"deg)";

    for (var i = 0; i < itemsIn3d4.length; i++) {
      if (isExpressionInArrs(itemsIn3d4[i].className,"itemsIn3d-4--active")) {
        itemsIn3d4[i].className = itemsIn3d4[i].className.replace(" itemsIn3d-4--active","");
        if (itemsIn3d4[i].id === "c-3d-4-item-4" || itemsIn3d4[i].id === "c-3d-4-item-3" || itemsIn3d4[i].id === "c-3d-4-item-2") {
          itemsIn3d4[i-1].className += " itemsIn3d-4--active";
          break;
        } else {
          if (itemsIn3d4[i].id === "c-3d-4-item-1") {
            itemsIn3d4[3].className += " itemsIn3d-4--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-4")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("c-3d-4-item")[0].onclick = function(evt) {
    document.getElementsByClassName("c-3d-4")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-4-item")[1].onclick = function(evt) {
    document.getElementsByClassName("c-3d-4")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-4-item")[2].onclick = function(evt) {
    document.getElementsByClassName("c-3d-4")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-4-item")[3].onclick = function(evt) {
    document.getElementsByClassName("c-3d-4")[0].style.transform = "scale(1)";
  }

})(window);