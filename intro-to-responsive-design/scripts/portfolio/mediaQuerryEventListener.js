(function(window) {

  go();

  window.addEventListener('resize', go);

  function go() {

    /* useful debugging tool */
    document.querySelector('.width').innerText = document.documentElement.clientWidth;
    console.log("clientWidth: "+document.documentElement.clientWidth);
    console.log("document.getElementById('tab-calculator'): "+document.getElementById("tab-calculator"));
    console.log("document.getElementById('accordion-calculator'): "+document.getElementById("accordion-calculator"));
    console.log("document.getElementById('calculator-id'): "+document.getElementById("calculator-id"));

    /**
     * close the mobile menu while browser is being widened
     */
    if (document.documentElement.clientWidth >= 600 && document.documentElement.clientWidth <= 625) {
      console.log("its between 600 and 625px...");
      document.getElementById("sidenav").style.maxHeight = "0";
    }

    /**
     *  close the mobile menu just in case user decide to maximize the browser
     */
    if (document.documentElement.clientWidth > 1010) {
    	console.log("screen is over 1010px... ");
    	document.getElementById("sidenav").style.maxHeight = "0";
    }

    /**
     * load or append the calculator component to the accordion component
     */
    if (document.documentElement.clientWidth < 600) {
      
      if (document.getElementById("calculator-id") != null) {
        /* useful debugging tool */
        console.log("ci: "+document.getElementById("calculator-id"));
        var ci = document.getElementById("calculator-id");
        var ac = document.getElementById("accordion-calculator");
        var tc = document.getElementById("tab-calculator");        

        /**
         *  since calculator components already exist, append it to accordion components
         */
        ac.appendChild(ci);        
      } else {

        /* useful debugging tool */
        console.log("before build...");
        console.log("document.getElementById('tab-calculator'): "+document.getElementById("tab-calculator"));
        console.log("document.getElementById('accordion-calculator'): "+document.getElementById("accordion-calculator"));
        console.log("document.getElementById('calculator-id'): "+document.getElementById("calculator-id"));

        /**
         * build the calculator component when browser fires up
         */
        var calculatorComponent = buildCalculatorComponent();

        /* useful debugging tool */
        console.log("after build...");
        console.log("document.getElementById('calculator-id'): "+document.getElementById("calculator-id"));
        console.log("ac before appendChild(calculatorComponent): "+document.getElementById("accordion-calculator"));
        console.log("ac.value before appendChild(calculatorComponent): "+document.getElementById("accordion-calculator").value);
        
        /**
         * load the calculator component on the accordion component 
         */   
        document.getElementById("accordion-calculator").appendChild(calculatorComponent);
          
        /* useful debugging tool */
        console.log("ac after appendChild(calculatorComponent)build: "+document.getElementById("accordion-calculator"));
        console.log("ac.value after appendChild(calculatorComponent): "+document.getElementById("accordion-calculator").value);
                
      }  
         
    }

    /**
     * load or append the calculator component to the tab component
     */
    if (document.documentElement.clientWidth > 600) {


      if (document.getElementById("calculator-id") != null) {
        /** useful debugging tool **/
        console.log("ci: "+document.getElementById("calculator-id"));
        var ci = document.getElementById("calculator-id");
        var ac = document.getElementById("accordion-calculator");
        var tc = document.getElementById("tab-calculator");

        /**
         *  since calculator components already exist, append it to tab components
         */        
        tc.appendChild(ci);       

      } else {

        /* useful debugging tool */
        console.log("before build...");
        console.log("document.getElementById('tab-calculator'): "+document.getElementById("tab-calculator"));
        console.log("document.getElementById('accordion-calculator'): "+document.getElementById("accordion-calculator"));
        console.log("document.getElementById('calculator-id'): "+document.getElementById("calculator-id"));

        /**
         * build the calculator component when browser fires up
         */
        var calculatorComponent = buildCalculatorComponent();

        /* useful debugging tool */
        console.log("after build...");
        console.log("document.getElementById('calculator-id'): "+document.getElementById("calculator-id"));
        console.log("tc before appendChild(calculatorComponent): "+document.getElementById("tab-calculator"));
        console.log("tc.value before appendChild(calculatorComponent): "+document.getElementById("tab-calculator").value);

        /**
         * load the calculator component on the tab component
         */   
        document.getElementById("tab-calculator").appendChild(calculatorComponent);
        
        /* useful debugging tool */
        console.log("tc before appendChild(calculatorComponent): "+document.getElementById("tab-calculator"));
        console.log("tc.value before appendChild(calculatorComponent): "+document.getElementById("tab-calculator").value);
                  
      }

    }

  }

  function buildCalculatorComponent() {
    var cal = document.createElement("div");
    cal.className = "calculator";
    cal.id = "calculator-id";
    cal.innerHTML = '<div class="calculator-panel">\
                       <h2 class="calculator-title">Calculator</h2>\
                     </div>\
                     <div class="calculator-panel">\
                       <input type="text" name="display" class="calculator-display calculator-form-input" id="display" disabled>\
                     </div>\
                     <div class="calculator-panel">\
                       <div class="calculator-button" id="clear" onclick="calc.clearBtn()">C</div>\
                       <div class="calculator-button" id="percent" onclick="calc.percentBtn()">%</div>\
                       <div class="calculator-button arithmetic-symbol" id="plus-minus" onclick="calc.plusMinusBtn()">&#177</div>\
                       <div class="calculator-button" id="del" onclick="calc.delBtn()">&#9003</div>\
                     </div>\
                     <div class="calculator-panel">\
                       <div class="calculator-button" id="seven" onclick="calc.sevenBtn()">7</div>\
                       <div class="calculator-button" id="eight" onclick="calc.eightBtn()">8</div>\
                       <div class="calculator-button" id="nine" onclick="calc.nineBtn()">9</div>\
                       <div class="calculator-button arithmetic-symbol" id="divide" onclick="calc.divideBtn()">&#247</div>\
                     </div>\
                     <div class="calculator-panel">\
                       <div class="calculator-button" id="four" onclick="calc.fourBtn()">4</div>\
                       <div class="calculator-button" id="five" onclick="calc.fiveBtn()">5</div>\
                       <div class="calculator-button" id="six" onclick="calc.sixBtn()">6</div>\
                       <div class="calculator-button arithmetic-symbol" id="multiply" onclick="calc.multiplyBtn()">&#215</div>\
                     </div>\
                     <div class="calculator-panel">\
                       <div class="calculator-button" id="one" onclick="calc.oneBtn()">1</div>\
                       <div class="calculator-button" id="two" onclick="calc.twoBtn()">2</div>\
                       <div class="calculator-button" id="three" onclick="calc.threeBtn()">3</div>\
                       <div class="calculator-button arithmetic-symbol" id="minus" onclick="calc.minusBtn()">&#x2212</div>\
                     </div>\
                     <div class="calculator-panel">\
                       <div class="calculator-button" id="zero" onclick="calc.zeroBtn()">0</div>\
                       <div class="calculator-button arithmetic-symbol" id="dot" onclick="calc.dotBtn()">&#8901</div>\
                       <div class="calculator-button arithmetic-symbol" id="plus" onclick="calc.plusBtn()">+</div>\
                       <div class="calculator-button arithmetic-symbol" id="equal" onclick="calc.equalBtn()">=</div>\
                     </div>\
                     <div class="calculator-panel">\
                       <span><small>2017 v.1.01</small></span>\
                     </div>';      

    return cal;   

  }


})(window);