(function(window) {

  var isExpressionInArrs = function(arrs,exp) {
     //console.log("arrs.... "+arrs);
     var arrLen = arrs.length;
     //console.log("exp.length: "+exp.length+" --- arrLen: "+arrLen);
    var frg = "";
     var subStr = arrs;
     while (arrLen > 0) {
        for (var i = 0; i < arrLen; i++) {
           subStr = arrs.slice(i);
           //console.log("subStr is currently.... "+subStr);
           frg = subStr.slice(0,exp.length);
           //console.log("fragments.... "+frg);
           //console.log("exp.... "+exp);
           
           if (frg === exp)
              return true;
        }      
        //console.log(arrLen);
        arrLen--;
     }
    return false;
  }

  var currdeg  = 0;

  var rgbnex = document.getElementsByClassName("rgb-foursided-carousel-next");
  var rgbpre = document.getElementsByClassName("rgb-foursided-carousel-prev");

  var rgbdots = document.getElementsByClassName("rgb-dot");


  var rgbdot1 = document.getElementById("rgb-dot1");
  var rgbdot2 = document.getElementById("rgb-dot2");
  var rgbdot3 = document.getElementById("rgb-dot3");
  var rgbdot4 = document.getElementById("rgb-dot4");

  rgbdot1.onclick = function(evt) {
    console.log("rgbdot1 is pressed... ");
    for (var i = 0; i < rgbdots.length; i++) {

      if (isExpressionInArrs(rgbdots[i].className,"dot--active")) {
        if (rgbdots[i].id === "rgb-dot2") {
          currdeg += 90;
        }
        if (rgbdots[i].id === "rgb-dot3") {
          currdeg += 180;
        }   
        if (rgbdots[i].id === "rgb-dot4") {
          currdeg += 270;
        }     
        //console.log("active is present .... in rgbdots["+i+"].className "+rgbdots[i].className);
        rgbdots[i].className = rgbdots[i].className.replace(" dot--active","");
        //console.log("replace active in rgbdots["+i+"].className "+rgbdots[i].className);
        evt.currentTarget.className += " dot--active";
      }
    }

    document.getElementById("rgb-foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }

  rgbdot2.onclick = function(evt) {
    console.log("rgbdot2 is pressed... ");

    for (var i = 0; i < rgbdots.length; i++) {

      if (isExpressionInArrs(rgbdots[i].className,"dot--active")) {
        if (rgbdots[i].id === "rgb-dot1") {
          currdeg -= 90;
        }
        if (rgbdots[i].id === "rgb-dot3") {
          currdeg += 90;
        }   
        if (rgbdots[i].id === "rgb-dot4") {
          currdeg += 180;
        }     
        //console.log("active is present .... in rgbdots["+i+"].className "+rgbdots[i].className);
        rgbdots[i].className = rgbdots[i].className.replace(" dot--active","");
        //console.log("replace active in rgbdots["+i+"].className "+rgbdots[i].className);
        evt.currentTarget.className += " dot--active";
      }
    }

    document.getElementById("rgb-foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }

  rgbdot3.onclick = function(evt) {
    console.log("rgbdot3 is pressed... ");

    for (var i = 0; i < rgbdots.length; i++) {

      if (isExpressionInArrs(rgbdots[i].className,"dot--active")) {
        if (rgbdots[i].id === "rgb-dot1") {
          currdeg -= 180;
        }
        if (rgbdots[i].id === "rgb-dot2") {
          currdeg -= 90;
        }   
        if (rgbdots[i].id === "rgb-dot4") {
          currdeg += 90;
        }     
        //console.log("active is present .... in rgbdots["+i+"].className "+rgbdots[i].className);
        rgbdots[i].className = rgbdots[i].className.replace(" dot--active","");
        //console.log("replace active in rgbdots["+i+"].className "+rgbdots[i].className);
        evt.currentTarget.className += " dot--active";
      }
    }

    document.getElementById("rgb-foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }

  rgbdot4.onclick = function(evt) {
    console.log("rgbdot4 is pressed... ");

    for (var i = 0; i < rgbdots.length; i++) {

      if (isExpressionInArrs(rgbdots[i].className,"dot--active")) {
        if (rgbdots[i].id === "rgb-dot1") {
          currdeg -= 270;
        }
        if (rgbdots[i].id === "rgb-dot2") {
          currdeg -= 180;
        }   
        if (rgbdots[i].id === "rgb-dot3") {
          currdeg -= 90;
        }     
        //console.log("active is present .... in rgbdots["+i+"].className "+rgbdots[i].className);
        rgbdots[i].className = rgbdots[i].className.replace(" dot--active","");
        //console.log("replace active in rgbdots["+i+"].className "+rgbdots[i].className);
        evt.currentTarget.className += " dot--active";
      }
    }

    document.getElementById("rgb-foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }

  rgbnex[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg = currdeg - 90; console.log("currdeg: "+currdeg);
    document.getElementById("rgb-foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";


    for (var i = 0; i < rgbdots.length; i++) {

      if (isExpressionInArrs(rgbdots[i].className,"dot--active")) {
        //console.log("active is present .... in rgbdots["+i+"].className "+rgbdots[i].className);
        rgbdots[i].className =rgbdots[i].className.replace(" dot--active","");
        //console.log("replace active in rgbdots["+i+"].className "+rgbdots[i].className);
        if (rgbdots[i].id === "rgb-dot1" || rgbdots[i].id === "rgb-dot2" || rgbdots[i].id === "rgb-dot3") {
          rgbdots[i+1].className += " dot--active";
          break;
        } else {
          if (rgbdots[i].id === "rgb-dot4") {
            //console.log(" dot id is rgbdot4.............");
            rgbdots[0].className += " dot--active";
            break;
          }
        }
      }
    }
  }

  rgbpre[0].onclick = function(evt) {
    console.log("p is clicked");
    currdeg = currdeg + 90; //console.log("currdeg: "+currdeg);
    document.getElementById("rgb-foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  
    for (var i = 0; i < rgbdots.length; i++) {

      if (isExpressionInArrs(rgbdots[i].className,"dot--active")) {
        //console.log("active is present .... in rgbdots["+i+"].className "+rgbdots[i].className);
        rgbdots[i].className =rgbdots[i].className.replace(" dot--active","");
        //console.log("replace active in rgbdots["+i+"].className "+rgbdots[i].className);
        if (rgbdots[i].id === "rgb-dot4" || rgbdots[i].id === "rgb-dot3" || rgbdots[i].id === "rgb-dot2") {
          rgbdots[i-1].className += " dot--active";
          break;
        } else {
          if (rgbdots[i].id === "rgb-dot1") {
            //console.log(" dot id is rgbdot4.............");
            rgbdots[3].className += " dot--active";
            break;
          }
        }
      }
    }
  }
  
  //console.log("currdeg: "+currdeg);

})(window);