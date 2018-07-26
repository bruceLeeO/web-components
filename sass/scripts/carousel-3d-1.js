(function(window) {
	/** carousel 3d-1 */
  var nex1 = document.getElementsByClassName("carousel-3d-1-item--next");
  var pre1 = document.getElementsByClassName("carousel-3d-1-item--prev");
  var nex1a = document.getElementsByClassName("carousel-3d-1-item--next-a");
  var pre1a = document.getElementsByClassName("carousel-3d-1-item--prev-a");  
  var currdeg1 = 0;

  var itemsIn3d1 = document.getElementsByClassName("carousel-3d-1-item--indicator");

  var item1Of3d1 = document.getElementById("c-3d-1-item-1");
  var item2Of3d1 = document.getElementById("c-3d-1-item-2");
  var item3Of3d1 = document.getElementById("c-3d-1-item-3");
  var item4Of3d1 = document.getElementById("c-3d-1-item-4");

  item1Of3d1.onclick = function(evt) {
    for (var i = 0; i < itemsIn3d1.length; i++) {

      if (isExpressionInArrs(itemsIn3d1[i].className,"itemsIn3d-1--active")) {
        if (itemsIn3d1[i].id === "c-3d-1-item-2") {
          currdeg1 += 90;
        }
        if (itemsIn3d1[i].id === "c-3d-1-item-3") {
          currdeg1 += 180;
        }
        if (itemsIn3d1[i].id === "c-3d-1-item-4") {
          currdeg1 += 270;
        }
        itemsIn3d1[i].className = itemsIn3d1[i].className.replace(" itemsIn3d-1--active","");
        evt.currentTarget.className += " itemsIn3d-1--active";
      }
    }
    document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
  }

  item2Of3d1.onclick = function(evt) {
    for (var i = 0; i < itemsIn3d1.length; i++) {

      if (isExpressionInArrs(itemsIn3d1[i].className,"itemsIn3d-1--active")) {
        if (itemsIn3d1[i].id === "c-3d-1-item-1") {
          currdeg1 -= 90;
        }
        if (itemsIn3d1[i].id === "c-3d-1-item-3") {
          currdeg1 += 90;
        }
        if (itemsIn3d1[i].id === "c-3d-1-item-4") {
          currdeg1 += 180;
        }
        itemsIn3d1[i].className = itemsIn3d1[i].className.replace(" itemsIn3d-1--active","");
        evt.currentTarget.className += " itemsIn3d-1--active";
      }
    }
    document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
  }

  item3Of3d1.onclick = function(evt) {
    for (var i = 0; i < itemsIn3d1.length; i++) {

      if (isExpressionInArrs(itemsIn3d1[i].className,"itemsIn3d-1--active")) {
        if (itemsIn3d1[i].id === "c-3d-1-item-1") {
          currdeg1 -= 180;
        }
        if (itemsIn3d1[i].id === "c-3d-1-item-2") {
          currdeg1 -= 90;
        }
        if (itemsIn3d1[i].id === "c-3d-1-item-4") {
          currdeg1 += 90;
        }
        itemsIn3d1[i].className = itemsIn3d1[i].className.replace(" itemsIn3d-1--active","");
        evt.currentTarget.className += " itemsIn3d-1--active";
      }
    }
    document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
  }

  item4Of3d1.onclick = function(evt) {
    for (var i = 0; i < itemsIn3d1.length; i++) {

      if (isExpressionInArrs(itemsIn3d1[i].className,"itemsIn3d-1--active")) {
        if (itemsIn3d1[i].id === "c-3d-1-item-1") {
          currdeg1 -= 270;
        }
        if (itemsIn3d1[i].id === "c-3d-1-item-2") {
          currdeg1 -= 180;
        }
        if (itemsIn3d1[i].id === "c-3d-1-item-3") {
          currdeg1 -= 90;
        }
        itemsIn3d1[i].className = itemsIn3d1[i].className.replace(" itemsIn3d-1--active","");
        evt.currentTarget.className += " itemsIn3d-1--active";
      }
    }
    document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
  }

  nex1[0].onclick = function(evt) {

    //document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "scale(1)";
    currdeg1 -= 90; //console.log("currdeg: "+currdeg1);
    document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
    //document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d1.length; i++) {

      if (isExpressionInArrs(itemsIn3d1[i].className,"itemsIn3d-1--active")) {
        itemsIn3d1[i].className = itemsIn3d1[i].className.replace(" itemsIn3d-1--active","");
        if (itemsIn3d1[i].id === "c-3d-1-item-1" || itemsIn3d1[i].id === "c-3d-1-item-2" || itemsIn3d1[i].id === "c-3d-1-item-3") {
          itemsIn3d1[i+1].className += " itemsIn3d-1--active";
          break;
        } else {
          if (itemsIn3d1[i].id === "c-3d-1-item-4") {
            itemsIn3d1[0].className += " itemsIn3d-1--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("carousel-3d-1")[0].style.transform = "scale(1.5)";
  }

  pre1[0].onclick = function(evt) {
    //console.log("p is clicked");
    //document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "scale(1)";
    currdeg1 = currdeg1 + 90; ////console.log("currdeg: "+currdeg1);
    document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
    //document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d1.length; i++) {

      if (isExpressionInArrs(itemsIn3d1[i].className,"itemsIn3d-1--active")) {
        itemsIn3d1[i].className = itemsIn3d1[i].className.replace(" itemsIn3d-1--active","");
        if (itemsIn3d1[i].id === "c-3d-1-item-4" || itemsIn3d1[i].id === "c-3d-1-item-3" || itemsIn3d1[i].id === "c-3d-1-item-2") {
          itemsIn3d1[i-1].className += " itemsIn3d-1--active";
          break;
        } else {
          if (itemsIn3d1[i].id === "c-3d-1-item-1") {
            itemsIn3d1[3].className += " itemsIn3d-1--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("carousel-3d-1")[0].style.transform = "scale(1.5)";
  }

  nex1a[0].onclick = function(evt) {

    //document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "scale(1)";
    currdeg1 -= 90; //console.log("currdeg: "+currdeg1);
    document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
    //document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d1.length; i++) {

      if (isExpressionInArrs(itemsIn3d1[i].className,"itemsIn3d-1--active")) {
        itemsIn3d1[i].className = itemsIn3d1[i].className.replace(" itemsIn3d-1--active","");
        if (itemsIn3d1[i].id === "c-3d-1-item-1" || itemsIn3d1[i].id === "c-3d-1-item-2" || itemsIn3d1[i].id === "c-3d-1-item-3") {
          itemsIn3d1[i+1].className += " itemsIn3d-1--active";
          break;
        } else {
          if (itemsIn3d1[i].id === "c-3d-1-item-4") {
            itemsIn3d1[0].className += " itemsIn3d-1--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("carousel-3d-1")[0].style.transform = "scale(1.5)";
  }

  pre1a[0].onclick = function(evt) {
    //console.log("p is clicked");
    //document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "scale(1)";
    currdeg1 = currdeg1 + 90; ////console.log("currdeg: "+currdeg1);
    document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
    //document.getElementsByClassName("carousel-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg) scale(2)";

    for (var i = 0; i < itemsIn3d1.length; i++) {

      if (isExpressionInArrs(itemsIn3d1[i].className,"itemsIn3d-1--active")) {
        itemsIn3d1[i].className = itemsIn3d1[i].className.replace(" itemsIn3d-1--active","");
        if (itemsIn3d1[i].id === "c-3d-1-item-4" || itemsIn3d1[i].id === "c-3d-1-item-3" || itemsIn3d1[i].id === "c-3d-1-item-2") {
          itemsIn3d1[i-1].className += " itemsIn3d-1--active";
          break;
        } else {
          if (itemsIn3d1[i].id === "c-3d-1-item-1") {
            itemsIn3d1[3].className += " itemsIn3d-1--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("carousel-3d-1")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("carousel-3d-1-item")[0].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-1")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("carousel-3d-1-item")[1].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-1")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("carousel-3d-1-item")[2].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-1")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("carousel-3d-1-item")[3].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-1")[0].style.transform = "scale(1)";
  }

})(window);