(function(window) {
  /*
  window.onload = function() {
    console.log("loading....");
    document.getElementById('loading').hide();
  };*/
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      console.log(document.readyState);
      document.getElementById("PreLoaderBar").style.display = "none";
    }
  }

  go();

  window.addEventListener('resize', go);

  function go() {

    document.querySelector('.width').innerText = document.documentElement.clientWidth;

    /**
     * close the mobile menu while browser is being widened
     */
    if (document.documentElement.clientWidth >= 600 && document.documentElement.clientWidth <= 625) {
      document.getElementById("sidenav").style.maxHeight = "0";
    }

    /**
     *  close the mobile menu just in case user decide to maximize the browser
     */
    if (document.documentElement.clientWidth > 1010) {
    	document.getElementById("sidenav").style.maxHeight = "0";
    }

    /**
     * load or append the calculator component and rgbcolor carousel component to the accordion component
     */
    if (document.documentElement.clientWidth < 600) {
      
      if (document.getElementById("calculator-id") != null) {  

        var ci = document.getElementById("calculator-id");  
        var ac = document.getElementById("accordion-calculator");  

        /**
         *  since calculator components already exist, append it to accordion components
         */
        ac.appendChild(ci);  

      } else {

        /**
         * build the calculator component when browser fires up
         */
        var calculatorComponent = buildCalculatorComponent();
        
        /**
         * load the calculator component on the accordion component 
         */   
        document.getElementById("accordion-calculator").appendChild(calculatorComponent);      
                
      }  

      if (document.getElementById("rgb-id") != null) {

        var ri = document.getElementById("rgb-id");
        var ar = document.getElementById("accordion-rgbcolor");

        /**
         *  since calculator components already exist, append it to tab components
         */        
        ar.appendChild(ri);

      } else {

        /**
         * build the rgbcolor carousel component when browser fires up
         */        
        var rgbCarouselComponent = buildRGBCarouselComponent();

        /**
         * load the rgbcolor carousel component on the tab component
         */ 
        document.getElementById("accordion-rgbcolor").appendChild(rgbCarouselComponent);
      }      
         
    }

    /**
     * load or append the calculator component, rgbcolor carousel component to the tab component
     */
    if (document.documentElement.clientWidth > 600) {


      if (document.getElementById("calculator-id") != null) {

        var ci = document.getElementById("calculator-id");
        var tc = document.getElementById("tab-calculator");

        /**
         *  since calculator components already exist, append it to tab components
         */        
        tc.appendChild(ci);       

      } else {

        /**
         * build the calculator component when browser fires up
         */
        var calculatorComponent = buildCalculatorComponent();

        /**
         * load the calculator component on the tab component
         */   
        document.getElementById("tab-calculator").appendChild(calculatorComponent);
                  
      }

      if (document.getElementById("rgb-id") != null) {

        var ri = document.getElementById("rgb-id");
        var tr = document.getElementById("tab-rgbcolor");

        /**
         *  since calculator components already exist, append it to tab components
         */        
        tr.appendChild(ri);

      } else {

        /**
         * build the rgbcolor carousel component when browser fires up
         */        
        var rgbCarouselComponent = buildRGBCarouselComponent();

        /**
         * load the rgbcolor carousel component on the tab component
         */ 
        document.getElementById("tab-rgbcolor").appendChild(rgbCarouselComponent);
      }

    }

  }

  function buildCalculatorComponent() {
    var cal = document.createElement("div");
    cal.className = "foursided-carousel foursided-carousel-font";
    cal.id = "calculator-id";
    cal.innerHTML = '<div class="foursided-carousel-axis" id="foursided-carousel-axis">\
                      <div class="foursided-carousel-outerside foursided-first">\
                        <div class="foursided-carousel-media">\
                          <img width="200" height="300" class="foursided-carousel-media__img" src="../../img/portfolio/calculator/calculator.jpg">\
                        </div>\
                      </div>\
                      <div class="foursided-carousel-outerside foursided-second">\
                        <div class="foursided-carousel-media">\
                          <img width="200" height="300" class="foursided-carousel-media__img" src="../../img/portfolio/calculator/calculator-2.jpg">\
                        </div>\
                      </div>\
                      <div class="foursided-carousel-outerside foursided-third">\
                        <div class="foursided-carousel-media">\
                          <img width="200" height="300" class="foursided-carousel-media__img" src="../../img/portfolio/calculator/calculator-3.jpg">\
                        </div>\
                      </div>\
                      <div class="foursided-carousel-outerside foursided-fourth">\
                        <div class="foursided-carousel-media">\
                          <div class="calculator">\
                           <div class="calculator-panel">\
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
                           </div>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <div class="foursided-carousel-next"><svg class="icon-medium"><use xlink:href="#icon-chevron-right"></use></svg></div>\
                    <div class="foursided-carousel-prev"><svg class="icon-medium"><use xlink:href="#icon-chevron-left"></use></svg></div>\
                    <div class="foursided-carousel-dots">\
                      <span class="dot dot--active" id="dot1">1</span>\
                      <span class="dot" id="dot2">2</span>\
                      <span class="dot" id="dot3">3</span>\
                      <span class="dot" id="dot4">4</span>\
                    </div>\
                  </div>';
    return cal;   
  }

  function buildRGBCarouselComponent() {
    var rgb = document.createElement("div");
    rgb.className = "foursided-carousel foursided-carousel-font";
    rgb.id = "rgb-id";
    rgb.innerHTML = '<div class="foursided-carousel-axis" id="rgb-foursided-carousel-axis">\
                      <div class="foursided-carousel-outerside foursided-first">\
                        <div class="foursided-carousel-media">\
                          <img width="200" height="300" class="foursided-carousel-media__img" src="../../img/portfolio/rgb/rgb-color-picker.jpg">\
                        </div>\
                      </div>\
                      <div class="foursided-carousel-outerside foursided-second">\
                        <div class="foursided-carousel-media">\
                          <img width="200" height="300" class="foursided-carousel-media__img" src="../../img/portfolio/rgb/rgb-color-picker-2.jpg">\
                        </div>\
                      </div>\
                      <div class="foursided-carousel-outerside foursided-third">\
                        <div class="foursided-carousel-media">\
                          <img width="200" height="300" class="foursided-carousel-media__img" src="../../img/portfolio/rgb/rgb-color-picker-3.jpg">\
                        </div>\
                      </div>\
                      <div class="foursided-carousel-outerside foursided-fourth">\
                        <div class="foursided-carousel-media">\
                          <div class="rgbForm rgb-font">\
                            <h2 class="rgb-header-title">RGB Color Picker</h2>\
                            <p class="rgbdesc">RGB color values are supported in all browsers.  An RGB color value is specified with:<span class="rgb-tooltip">rgb(red, green, blue)\
                              <span class="rgb-tooltiptext">Each param (red, green, blue) defines the intensity of the color as an integer between 0 and 255 (e.g. rgb(0,0,255) is rendered blue since blue param is set to its highest whereas the others are set to 0).</span></span>.</p>\
                            <div class="rgbform-group">\
                              <label class="rgbLabel">r: </label>\
                              <input class="rgbInputRange" type="range" name="rangeInput" min="0" max="255" onchange="rgbColor.updateRed(this.value);">\
                              <input class="rgbInputText rgbred" type="text" id="redInput" value="255" disabled>\
                            </div>\
                            <div class="rgbform-group">\
                              <label class="rgbLabel">g: </label>\
                              <input class="rgbInputRange" type="range" name="rangeInput" min="0" max="255" onchange="rgbColor.updateGreen(this.value);">\
                              <input class="rgbInputText rgbgreen" type="text" id="greenInput" value="255" disabled>\
                            </div>\
                            <div class="rgbform-group">\
                              <label class="rgbLabel">b: </label>\
                              <input class="rgbInputRange" type="range" name="rangeInput" min="0" max="255" onchange="rgbColor.updateBlue(this.value);">\
                              <input class="rgbInputText rgbblue" type="text" id="blueInput" value="255" disabled>\
                            </div>\
                            <div class="rgbform-group">\
                              <label class="rgbLabel">rgb: </label>\
                              <input class="rgbInputText rgbColor" type="text" id="rgbOutput" disabled>\
                            </div>\
                          </div>\
                        </div>\
                      </div>\
                  </div>\
                  <div class="rgb-foursided-carousel-next"><svg class="icon-medium"><use xlink:href="#icon-chevron-right"></use></svg></div>\
                  <div class="rgb-foursided-carousel-prev"><svg class="icon-medium"><use xlink:href="#icon-chevron-left"></use></svg></div>\
                  <div class="foursided-carousel-dots">\
                    <span class="rgb-dot dot--active" id="rgb-dot1">1</span>\
                    <span class="rgb-dot" id="rgb-dot2">2</span>\
                    <span class="rgb-dot" id="rgb-dot3">3</span>\
                    <span class="rgb-dot" id="rgb-dot4">4</span>\
                  </div>\
                </div>';
    return rgb;
  }

})(window);