(function(window) {
  /** carousel 3d-5 */
  var nex5 = document.getElementsByClassName("c-3d-5-next");
  var pre5 = document.getElementsByClassName("c-3d-5-prev");
  var nex5a = document.getElementsByClassName("c-3d-5-next-a");
  var pre5a = document.getElementsByClassName("c-3d-5-prev-a");  
  var currdeg5 = 0;

  var itemsIn3d5 = document.getElementsByClassName("c-3d-5-indy");

  itemsIn3d5[0].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d5.length; i++) {

      if (isExpressionInArrs(itemsIn3d5[i].className,"itemsIn3d-5--active")) {
        if (itemsIn3d5[i].id === "c-3d-5-item-2") {
          currdeg5 += 120;
        }
        if (itemsIn3d5[i].id === "c-3d-5-item-3") {
          currdeg5 += 240;
        }
        itemsIn3d5[i].className = itemsIn3d5[i].className.replace(" itemsIn3d-5--active","");
        evt.currentTarget.className += " itemsIn3d-5--active";
      }
    }
    document.getElementsByClassName("c-3d-5-axis")[0].style.transform = "rotateY("+currdeg5+"deg)";
  }

  itemsIn3d5[1].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d5.length; i++) {

      if (isExpressionInArrs(itemsIn3d5[i].className,"itemsIn3d-5--active")) {
        if (itemsIn3d5[i].id === "c-3d-5-item-1") {
          currdeg5 -= 120;
        }
        if (itemsIn3d5[i].id === "c-3d-5-item-3") {
          currdeg5 += 120;
        }
        itemsIn3d5[i].className = itemsIn3d5[i].className.replace(" itemsIn3d-5--active","");
        evt.currentTarget.className += " itemsIn3d-5--active";
      }
    }
    document.getElementsByClassName("c-3d-5-axis")[0].style.transform = "rotateY("+currdeg5+"deg)";
  }

  itemsIn3d5[2].onclick = function(evt) {
    for (var i = 0; i < itemsIn3d5.length; i++) {

      if (isExpressionInArrs(itemsIn3d5[i].className,"itemsIn3d-5--active")) {
        if (itemsIn3d5[i].id === "c-3d-5-item-1") {
          currdeg5 -= 240;
        }
        if (itemsIn3d5[i].id === "c-3d-5-item-2") {
          currdeg5 -= 120;
        }
        itemsIn3d5[i].className = itemsIn3d5[i].className.replace(" itemsIn3d-5--active","");
        evt.currentTarget.className += " itemsIn3d-5--active";
      }
    }
    document.getElementsByClassName("c-3d-5-axis")[0].style.transform = "rotateY("+currdeg5+"deg)";
  }

  nex5[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg5 -= 120; //console.log("currdeg: "+currdeg5);
    document.getElementsByClassName("c-3d-5-axis")[0].style.transform = "rotateY("+currdeg5+"deg)";

    for (var i = 0; i < itemsIn3d5.length; i++) {
      if (isExpressionInArrs(itemsIn3d5[i].className,"itemsIn3d-5--active")) {
        itemsIn3d5[i].className = itemsIn3d5[i].className.replace(" itemsIn3d-5--active","");
        if (itemsIn3d5[i].id === "c-3d-5-item-1" || itemsIn3d5[i].id === "c-3d-5-item-2") {
          itemsIn3d5[i+1].className += " itemsIn3d-5--active";
          break;
        } else {
          if (itemsIn3d5[i].id === "c-3d-5-item-3") {
            itemsIn3d5[0].className += " itemsIn3d-5--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-5")[0].style.transform = "scale(1.5)";
  }

  pre5[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg5 = currdeg5 + 120; ////console.log("currdeg: "+currdeg5);
    document.getElementsByClassName("c-3d-5-axis")[0].style.transform = "rotateY("+currdeg5+"deg)";

    for (var i = 0; i < itemsIn3d5.length; i++) {
      if (isExpressionInArrs(itemsIn3d5[i].className,"itemsIn3d-5--active")) {
        itemsIn3d5[i].className = itemsIn3d5[i].className.replace(" itemsIn3d-5--active","");
        if (itemsIn3d5[i].id === "c-3d-5-item-3" || itemsIn3d5[i].id === "c-3d-5-item-2") {
          itemsIn3d5[i-1].className += " itemsIn3d-5--active";
          break;
        } else {
          if (itemsIn3d5[i].id === "c-3d-5-item-1") {
            itemsIn3d5[2].className += " itemsIn3d-5--active";
            break;
          }
        }
      }
    }

    document.getElementsByClassName("c-3d-5")[0].style.transform = "scale(1.5)";
  }

  nex5a[0].onclick = function(evt) {
    //console.log("n-a is clicked");    
    currdeg5 -= 120; //console.log("currdeg: "+currdeg5);
    document.getElementsByClassName("c-3d-5-axis")[0].style.transform = "rotateY("+currdeg5+"deg)";

    for (var i = 0; i < itemsIn3d5.length; i++) {
      if (isExpressionInArrs(itemsIn3d5[i].className,"itemsIn3d-5--active")) {
        itemsIn3d5[i].className = itemsIn3d5[i].className.replace(" itemsIn3d-5--active","");
        if (itemsIn3d5[i].id === "c-3d-5-item-1" || itemsIn3d5[i].id === "c-3d-5-item-2") {
          itemsIn3d5[i+1].className += " itemsIn3d-5--active";
          break;
        } else {
          if (itemsIn3d5[i].id === "c-3d-5-item-3") {
            itemsIn3d5[0].className += " itemsIn3d-5--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-5")[0].style.transform = "scale(1.5)";
  }

  pre5a[0].onclick = function(evt) {
    //console.log("p is clicked");
    currdeg5 = currdeg5 + 120; ////console.log("currdeg: "+currdeg5);
    document.getElementsByClassName("c-3d-5-axis")[0].style.transform = "rotateY("+currdeg5+"deg)";

    for (var i = 0; i < itemsIn3d5.length; i++) {
      if (isExpressionInArrs(itemsIn3d5[i].className,"itemsIn3d-5--active")) {
        itemsIn3d5[i].className = itemsIn3d5[i].className.replace(" itemsIn3d-5--active","");
        if (itemsIn3d5[i].id === "c-3d-5-item-3" || itemsIn3d5[i].id === "c-3d-5-item-2") {
          itemsIn3d5[i-1].className += " itemsIn3d-5--active";
          break;
        } else {
          if (itemsIn3d5[i].id === "c-3d-5-item-1") {
            itemsIn3d5[2].className += " itemsIn3d-5--active";
            break;
          }
        }
      }
    }

    //document.getElementsByClassName("c-3d-5")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("c-3d-5-item")[0].onclick = function(evt) {
    document.getElementsByClassName("c-3d-5")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-5-item")[1].onclick = function(evt) {
    document.getElementsByClassName("c-3d-5")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-5-item")[2].onclick = function(evt) {
    document.getElementsByClassName("c-3d-5")[0].style.transform = "scale(1)";
  }

})(window);