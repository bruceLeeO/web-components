(function(window) {
	/** carousel 3d-9 */
  var nex9 = document.getElementsByClassName("carousel-3d-9-item--next");
  var pre9 = document.getElementsByClassName("carousel-3d-9-item--prev");
  var nex9a = document.getElementsByClassName("carousel-3d-9-item--next-a");
  var pre9a = document.getElementsByClassName("carousel-3d-9-item--prev-a");  
  var currdeg9 = 0;

  var itemsIn3d9 = document.getElementsByClassName("carousel-3d-9-item--indicator");

  var item1Of3d9 = document.getElementById("c-3d-9-item-1");
  var item2Of3d9 = document.getElementById("c-3d-9-item-2");
  var item3Of3d9 = document.getElementById("c-3d-9-item-3");

  item1Of3d9.onclick = function(evt) {
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
    document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
  }

  item2Of3d9.onclick = function(evt) {
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
    document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
  }

  item3Of3d9.onclick = function(evt) {
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
    document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
  }

  nex9[0].onclick = function(evt) {

    //document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "scale(1)";
    currdeg9 -= 120; //console.log("currdeg: "+currdeg9);
    document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
    //document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg) scale(2)";

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

    document.getElementsByClassName("carousel-3d-9")[0].style.transform = "scale(1.5)";
  }

  pre9[0].onclick = function(evt) {
    //console.log("p is clicked");
    //document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "scale(1)";
    currdeg9 = currdeg9 + 120; ////console.log("currdeg: "+currdeg9);
    document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
    //document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg) scale(2)";

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

    document.getElementsByClassName("carousel-3d-9")[0].style.transform = "scale(1.5)";
  }

  nex9a[0].onclick = function(evt) {

    //document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "scale(1)";
    currdeg9 -= 120; //console.log("currdeg: "+currdeg9);
    document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
    //document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg) scale(2)";

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

    //document.getElementsByClassName("carousel-3d-9")[0].style.transform = "scale(1.5)";
  }

  pre9a[0].onclick = function(evt) {
    //console.log("p is clicked");
    //document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "scale(1)";
    currdeg9 = currdeg9 + 120; ////console.log("currdeg: "+currdeg9);
    document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg)";
    //document.getElementsByClassName("carousel-3d-9-axis")[0].style.transform = "rotateY("+currdeg9+"deg) scale(2)";

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

    //document.getElementsByClassName("carousel-3d-9")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("carousel-3d-9-item")[0].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-9")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("carousel-3d-9-item")[1].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-9")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("carousel-3d-9-item")[2].onclick = function(evt) {
    document.getElementsByClassName("carousel-3d-9")[0].style.transform = "scale(1)";
  }


})(window);