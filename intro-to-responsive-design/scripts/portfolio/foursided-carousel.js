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

  var nex = document.getElementsByClassName("foursided-carousel-next");
  var pre = document.getElementsByClassName("foursided-carousel-prev");

  var dots = document.getElementsByClassName("dot");


  var dot1 = document.getElementById("dot1");
  var dot2 = document.getElementById("dot2");
  var dot3 = document.getElementById("dot3");
  var dot4 = document.getElementById("dot4");

  dot1.onclick = function(evt) {
    console.log("dot1 is pressed... ");
    for (var i = 0; i < dots.length; i++) {

      if (isExpressionInArrs(dots[i].className,"dot--active")) {
        if (dots[i].id === "dot2") {
          currdeg += 90;
        }
        if (dots[i].id === "dot3") {
          currdeg += 180;
        }   
        if (dots[i].id === "dot4") {
          currdeg += 270;
        }     
        //console.log("active is present .... in dots["+i+"].className "+dots[i].className);
        dots[i].className = dots[i].className.replace(" dot--active","");
        //console.log("replace active in dots["+i+"].className "+dots[i].className);
        evt.currentTarget.className += " dot--active";
      }
    }

    document.getElementById("foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }

  dot2.onclick = function(evt) {
    console.log("dot2 is pressed... ");

    for (var i = 0; i < dots.length; i++) {

      if (isExpressionInArrs(dots[i].className,"dot--active")) {
        if (dots[i].id === "dot1") {
          currdeg -= 90;
        }
        if (dots[i].id === "dot3") {
          currdeg += 90;
        }   
        if (dots[i].id === "dot4") {
          currdeg += 180;
        }     
        //console.log("active is present .... in dots["+i+"].className "+dots[i].className);
        dots[i].className = dots[i].className.replace(" dot--active","");
        //console.log("replace active in dots["+i+"].className "+dots[i].className);
        evt.currentTarget.className += " dot--active";
      }
    }

    document.getElementById("foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }

  dot3.onclick = function(evt) {
    console.log("dot3 is pressed... ");

    for (var i = 0; i < dots.length; i++) {

      if (isExpressionInArrs(dots[i].className,"dot--active")) {
        if (dots[i].id === "dot1") {
          currdeg -= 180;
        }
        if (dots[i].id === "dot2") {
          currdeg -= 90;
        }   
        if (dots[i].id === "dot4") {
          currdeg += 90;
        }     
        //console.log("active is present .... in dots["+i+"].className "+dots[i].className);
        dots[i].className = dots[i].className.replace(" dot--active","");
        //console.log("replace active in dots["+i+"].className "+dots[i].className);
        evt.currentTarget.className += " dot--active";
      }
    }

    document.getElementById("foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }

  dot4.onclick = function(evt) {
    console.log("dot4 is pressed... ");

    for (var i = 0; i < dots.length; i++) {

      if (isExpressionInArrs(dots[i].className,"dot--active")) {
        if (dots[i].id === "dot1") {
          currdeg -= 270;
        }
        if (dots[i].id === "dot2") {
          currdeg -= 180;
        }   
        if (dots[i].id === "dot3") {
          currdeg -= 90;
        }     
        //console.log("active is present .... in dots["+i+"].className "+dots[i].className);
        dots[i].className = dots[i].className.replace(" dot--active","");
        //console.log("replace active in dots["+i+"].className "+dots[i].className);
        evt.currentTarget.className += " dot--active";
      }
    }

    document.getElementById("foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  }

  nex[0].onclick = function(evt) {
    console.log("n is clicked");
    currdeg = currdeg - 90; console.log("currdeg: "+currdeg);
    document.getElementById("foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";


    for (var i = 0; i < dots.length; i++) {

      if (isExpressionInArrs(dots[i].className,"dot--active")) {
        //console.log("active is present .... in dots["+i+"].className "+dots[i].className);
        dots[i].className =dots[i].className.replace(" dot--active","");
        //console.log("replace active in dots["+i+"].className "+dots[i].className);
        if (dots[i].id === "dot1" || dots[i].id === "dot2" || dots[i].id === "dot3") {
          dots[i+1].className += " dot--active";
          break;
        } else {
          if (dots[i].id === "dot4") {
            //console.log(" dot id is dot4.............");
            dots[0].className += " dot--active";
            break;
          }
        }
      }
    }
  }

  pre[0].onclick = function(evt) {
    console.log("p is clicked");
    currdeg = currdeg + 90; //console.log("currdeg: "+currdeg);
    document.getElementById("foursided-carousel-axis").style.transform = "rotateY("+currdeg+"deg)";
  
    for (var i = 0; i < dots.length; i++) {

      if (isExpressionInArrs(dots[i].className,"dot--active")) {
        //console.log("active is present .... in dots["+i+"].className "+dots[i].className);
        dots[i].className =dots[i].className.replace(" dot--active","");
        //console.log("replace active in dots["+i+"].className "+dots[i].className);
        if (dots[i].id === "dot4" || dots[i].id === "dot3" || dots[i].id === "dot2") {
          dots[i-1].className += " dot--active";
          break;
        } else {
          if (dots[i].id === "dot1") {
            //console.log(" dot id is dot4.............");
            dots[3].className += " dot--active";
            break;
          }
        }
      }
    }
  }
  
  //console.log("currdeg: "+currdeg);

})(window);