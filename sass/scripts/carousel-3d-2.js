(function(window) {
	/** carousel 3d-2 */
  var nex2 = document.getElementsByClassName("carousel-3d-2-item--next");
  var pre2 = document.getElementsByClassName("carousel-3d-2-item--prev");
  var nex2a = document.getElementsByClassName("carousel-3d-2-item--next-a");
  var pre2a = document.getElementsByClassName("carousel-3d-2-item--prev-a");  
  var currdeg2 = 0;

  var itemsIn3d2 = document.getElementsByClassName("carousel-3d-2-item--indicator");

  var item1Of3d2 = document.getElementById("c-3d-2-item-1");
  var item2Of3d2 = document.getElementById("c-3d-2-item-2");
  var item3Of3d2 = document.getElementById("c-3d-2-item-3");
  var item4Of3d2 = document.getElementById("c-3d-2-item-4");

  item1Of3d2.onclick = function(evt) {
    for (var i = 0; i < itemsIn3d2.length; i++) {

      if (isExpressionInArrs(itemsIn3d2[i].className,"itemsIn3d-2--active")) {
        if (itemsIn3d2[i].id === "c-3d-2-item-2") {
          currdeg2 += 90;
        }
        if (itemsIn3d2[i].id === "c-3d-2-item-3") {
          currdeg2 += 180;
        }
        if (itemsIn3d2[i].id === "c-3d-2-item-4") {
          currdeg2 += 270;
        }
        itemsIn3d2[i].className = itemsIn3d2[i].className.replace(" itemsIn3d-2--active","");
        evt.currentTarget.className += " itemsIn3d-2--active";
      }
    }
    document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg)";
  }

  item2Of3d2.onclick = function(evt) {
    for (var i = 0; i < itemsIn3d2.length; i++) {

      if (isExpressionInArrs(itemsIn3d2[i].className,"itemsIn3d-2--active")) {
        if (itemsIn3d2[i].id === "c-3d-2-item-1") {
          currdeg2 -= 90;
        }
        if (itemsIn3d2[i].id === "c-3d-2-item-3") {
          currdeg2 += 90;
        }
        if (itemsIn3d2[i].id === "c-3d-2-item-4") {
          currdeg2 += 180;
        }
        itemsIn3d2[i].className = itemsIn3d2[i].className.replace(" itemsIn3d-2--active","");
        evt.currentTarget.className += " itemsIn3d-2--active";
      }
    }
    document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg)";
  }

  item3Of3d2.onclick = function(evt) {
    for (var i = 0; i < itemsIn3d2.length; i++) {

      if (isExpressionInArrs(itemsIn3d2[i].className,"itemsIn3d-2--active")) {
        if (itemsIn3d2[i].id === "c-3d-2-item-1") {
          currdeg2 -= 180;
        }
        if (itemsIn3d2[i].id === "c-3d-2-item-2") {
          currdeg2 -= 90;
        }
        if (itemsIn3d2[i].id === "c-3d-2-item-4") {
          currdeg2 += 90;
        }
        itemsIn3d2[i].className = itemsIn3d2[i].className.replace(" itemsIn3d-2--active","");
        evt.currentTarget.className += " itemsIn3d-2--active";
      }
    }
    document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg)";
  }

  item4Of3d2.onclick = function(evt) {
    for (var i = 0; i < itemsIn3d2.length; i++) {

      if (isExpressionInArrs(itemsIn3d2[i].className,"itemsIn3d-2--active")) {
        if (itemsIn3d2[i].id === "c-3d-2-item-1") {
          currdeg2 -= 270;
        }
        if (itemsIn3d2[i].id === "c-3d-2-item-2") {
          currdeg2 -= 180;
        }
        if (itemsIn3d2[i].id === "c-3d-2-item-3") {
          currdeg2 -= 90;
        }
        itemsIn3d2[i].className = itemsIn3d2[i].className.replace(" itemsIn3d-2--active","");
        evt.currentTarget.className += " itemsIn3d-2--active";
      }
    }
    document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg)";
  }

  nex2[0].onclick = function(evt) {

    //document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "scale(1)";
    currdeg2 -= 90; //console.log("currdeg: "+currdeg2);
    document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg)";
    //document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d2.length; i++) {

      if (isExpressionInArrs(itemsIn3d2[i].className,"itemsIn3d-2--active")) {
        itemsIn3d2[i].className = itemsIn3d2[i].className.replace(" itemsIn3d-2--active","");
        if (itemsIn3d2[i].id === "c-3d-2-item-1" || itemsIn3d2[i].id === "c-3d-2-item-2" || itemsIn3d2[i].id === "c-3d-2-item-3") {
          itemsIn3d2[i+1].className += " itemsIn3d-2--active";
          break;
        } else {
          if (itemsIn3d2[i].id === "c-3d-2-item-4") {
            itemsIn3d2[0].className += " itemsIn3d-2--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("carousel-3d-2")[0].style.transform = "scale(1.5)";
  }

  pre2[0].onclick = function(evt) {
    //console.log("p is clicked");
    //document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "scale(1)";
    currdeg2 = currdeg2 + 90; ////console.log("currdeg: "+currdeg2);
    document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg)";
    //document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d2.length; i++) {

      if (isExpressionInArrs(itemsIn3d2[i].className,"itemsIn3d-2--active")) {
        itemsIn3d2[i].className = itemsIn3d2[i].className.replace(" itemsIn3d-2--active","");
        if (itemsIn3d2[i].id === "c-3d-2-item-4" || itemsIn3d2[i].id === "c-3d-2-item-3" || itemsIn3d2[i].id === "c-3d-2-item-2") {
          itemsIn3d2[i-1].className += " itemsIn3d-2--active";
          break;
        } else {
          if (itemsIn3d2[i].id === "c-3d-2-item-1") {
            itemsIn3d2[3].className += " itemsIn3d-2--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("carousel-3d-2")[0].style.transform = "scale(1.5)";
  }

  nex2a[0].onclick = function(evt) {

    //document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "scale(1)";
    currdeg2 -= 90; //console.log("currdeg: "+currdeg2);
    document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg)";
    //document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d2.length; i++) {

      if (isExpressionInArrs(itemsIn3d2[i].className,"itemsIn3d-2--active")) {
        itemsIn3d2[i].className = itemsIn3d2[i].className.replace(" itemsIn3d-2--active","");
        if (itemsIn3d2[i].id === "c-3d-2-item-1" || itemsIn3d2[i].id === "c-3d-2-item-2" || itemsIn3d2[i].id === "c-3d-2-item-3") {
          itemsIn3d2[i+1].className += " itemsIn3d-2--active";
          break;
        } else {
          if (itemsIn3d2[i].id === "c-3d-2-item-4") {
            itemsIn3d2[0].className += " itemsIn3d-2--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("carousel-3d-2")[0].style.transform = "scale(1.5)";
  }

  pre2a[0].onclick = function(evt) {
    //console.log("p is clicked");
    //document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "scale(1)";
    currdeg2 = currdeg2 + 90; ////console.log("currdeg: "+currdeg2);
    document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg)";
    //document.getElementsByClassName("carousel-3d-2-axis")[0].style.transform = "rotateY("+currdeg2+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d2.length; i++) {

      if (isExpressionInArrs(itemsIn3d2[i].className,"itemsIn3d-2--active")) {
        itemsIn3d2[i].className = itemsIn3d2[i].className.replace(" itemsIn3d-2--active","");
        if (itemsIn3d2[i].id === "c-3d-2-item-4" || itemsIn3d2[i].id === "c-3d-2-item-3" || itemsIn3d2[i].id === "c-3d-2-item-2") {
          itemsIn3d2[i-1].className += " itemsIn3d-2--active";
          break;
        } else {
          if (itemsIn3d2[i].id === "c-3d-2-item-1") {
            itemsIn3d2[3].className += " itemsIn3d-2--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("carousel-3d-2")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("carousel-3d-2-item")[0].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-2")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("carousel-3d-2-item")[1].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-2")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("carousel-3d-2-item")[2].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-2")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("carousel-3d-2-item")[3].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-2")[0].style.transform = "scale(1)";
  }

})(window);