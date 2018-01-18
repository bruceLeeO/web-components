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
  var tab = document.getElementById("tab");
  var acc = document.getElementById("accordion");
  
  var accId, tabId;
  go();
  window.addEventListener('resize', go);
    
  function go() {
    //console.log("pass windowresize");
    var accStyle = window.getComputedStyle(acc);
    var accDisplay = accStyle.getPropertyValue("display");
    var tabStyle = window.getComputedStyle(tab);
    var tabDisplay = tabStyle.getPropertyValue('display');
    console.log("acc.style.display: "+accDisplay);
    //console.log("tab.style.display: "+tabDisplay);
    //console.log("clientWidth: "+document.documentElement.clientWidth);
    document.querySelector('.width').innerText = document.documentElement.clientWidth;

    var ti = document.getElementsByClassName("tabindex");  
    var ai = document.getElementsByClassName("accordionindex");

    if (!(tabDisplay === "none")) {
      //console.log("tab display is flex....");
      
      for (var i = 0; i < ai.length; i++) {
        console.log("ai[i].className: "+ai[i].className);
        if (isExpressionInArrs(ai[i].className,"active")) {
          accId = ai[i].id; console.log("accId: "+accId);
          break;
        }
      }
      console.log("accId: "+accId.toLowerCase());

      for (var i = 0; i < ti.length; i++) {
        console.log("ti[i].id: "+ti[i].id);
        if (isExpressionInArrs(accId,ti[i].id.toLowerCase())) {
          console.log("ti[i].className: "+ti[i].className);
          ti[i].className += " accordionindex--active";
          document.getElementById(ti[i].id.toLowerCase()).style.display = "block";
          break;
        }
      }
    } else {
      //console.log("tab display is none....");
      for (var i = 0; i < ti.length; i++) {
        //console.log("ti[i].className: "+ti[i].className);
        if (isExpressionInArrs(ti[i].className,"active")){
          //console.log("ti[i].id: "+ti[i].id);
          tabId = ti[i].id; //console.log("tabId: "+tabId);
          break;
        }
      }
      //console.log("start evaluating ai....")
      for (var i = 0; i < ai.length; i++) {
        //console.log("going thru ai for loop");
        //console.log("ai[i].id: "+ai[i].id);
        if (isExpressionInArrs(ai[i].id,tabId.toLowerCase())) {
          //console.log("start parsing...."); //console.log("ai[i].className: "+ai[i].className);
          ai[i].className += " tabindex--active"; //console.log("ai[i].id.toLowerCase(): "+ai[i].id.toLowerCase());
          document.getElementById(ai[i].id.toLowerCase()).style.display = "block"; //console.log(ai.className);
          break;
        }
      }
    }

  }
  //window.resize(function() {


  //});
