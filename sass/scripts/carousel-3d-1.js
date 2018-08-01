(function(window) {
	/** carousel 3d-1 */
  var nex1 = document.getElementsByClassName("c-3d-1-next");
  var pre1 = document.getElementsByClassName("c-3d-1-prev");
  var nex1a = document.getElementsByClassName("c-3d-1-next-a");
  var pre1a = document.getElementsByClassName("c-3d-1-prev-a");  
  var currdeg1 = 0;

  var itemsIn3d1 = document.getElementsByClassName("c-3d-1-indy");

  itemsIn3d1[0].onclick = function(evt){
    console.log("hitting item1Of3d1 onclick....");
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
    document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
  }

  itemsIn3d1[1].onclick = function(evt){    
    console.log("hitting item2Of3d1 onclick....");    
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
    document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
  }

  itemsIn3d1[2].onclick = function(evt){
    console.log("hitting item3Of3d1 onclick....");    
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
    document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
  }

  itemsIn3d1[3].onclick = function(evt){
    console.log("hitting item4Of3d1 onclick....");    
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
    document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
  }

  nex1[0].onclick = function(evt) {
    console.log("n is clicked");
    //document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "scale(1)";
    currdeg1 -= 90; //console.log("currdeg: "+currdeg1);
    document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
    //document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg) scale(2)";

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

    document.getElementsByClassName("c-3d-1")[0].style.transform = "scale(1.5)";
  }

  pre1[0].onclick = function(evt) {
    console.log("p is clicked");
    //document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "scale(1)";
    currdeg1 = currdeg1 + 90; ////console.log("currdeg: "+currdeg1);
    document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
    //document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg) scale(2)";

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

    document.getElementsByClassName("c-3d-1")[0].style.transform = "scale(1.5)";
  }

  nex1a[0].onclick = function(evt) {
    console.log("n-a is clicked");
    //document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "scale(1)";
    currdeg1 -= 90; //console.log("currdeg: "+currdeg1);
    document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
    //document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg) scale(2)";

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

    //document.getElementsByClassName("c-3d-1")[0].style.transform = "scale(1.5)";
  }

  pre1a[0].onclick = function(evt) {
    console.log("p-a is clicked");
    //document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "scale(1)";
    currdeg1 = currdeg1 + 90; ////console.log("currdeg: "+currdeg1);
    document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg)";
    //document.getElementsByClassName("c-3d-1-axis")[0].style.transform = "rotateY("+currdeg1+"deg) scale(2)";

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

    //document.getElementsByClassName("c-3d-1")[0].style.transform = "scale(1.5)";
  }

  document.getElementsByClassName("c-3d-1-item")[0].onclick = function(evt) {
    document.getElementsByClassName("c-3d-1")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-1-item")[1].onclick = function(evt) {
    document.getElementsByClassName("c-3d-1")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-1-item")[2].onclick = function(evt) {
    document.getElementsByClassName("c-3d-1")[0].style.transform = "scale(1)";
  }

  document.getElementsByClassName("c-3d-1-item")[3].onclick = function(evt) {
    document.getElementsByClassName("c-3d-1")[0].style.transform = "scale(1)";
  }

})(window);