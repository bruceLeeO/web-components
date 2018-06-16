(function(window) {

	go2();

	window.addEventListener('resize', go2);

	function go2() {

	/**
	 * scale it down to .75 when below 500px width
	 */
	//if (document.documentElement.clientWidth < 500) {
	//	console.log("document.documentElement.clientWidth < 500 "+document.documentElement.clientWidth);
	//	document.getElementsByClassName("carousel-3d-8")[0].style.maxWidth = "300px";
	//	document.getElementsByClassName("carousel-3d-8")[0].style.height = "200px"
	//}

    /**
     * load or append the carousel component to the accordion component
     */
    if (document.documentElement.clientWidth < 700) {

      //console.log("document.documentElement.clientWidth = "+document.documentElement.clientWidth);

      /**
       * build or load the menu carousel component
       */
      if (document.getElementById("menu-id") != null) {  

        var mi = document.getElementById("menu-id");  
        var am = document.getElementById("accordion-menu");  

        /**
         *  since menu components already exist, append it to accordion components
         */
        am.appendChild(mi);  

      } else {

        /**
         * build the menu component when browser fires up
         */
        var menuComponent = buildMenuComponent();
        
        /**
         * load the menu component on the accordion component 
         */   
        document.getElementById("accordion-menu").appendChild(menuComponent);      
                
      }

      /**
       * build or load the image-gallery carousel component
       */
      if (document.getElementById("image-gallery-id") != null) {  

        var igi = document.getElementById("image-gallery-id");  
        var aig = document.getElementById("accordion-image-gallery");  

        /**
         *  since image-gallery components already exist, append it to accordion components
         */
        aig.appendChild(igi);  

      } else {

        /**
         * build the image-gallery component when browser fires up
         */
        var imageGalleryComponent = buildImageGalleryComponent();
        
        /**
         * load the image-gallery component on the accordion component 
         */   
        document.getElementById("accordion-image-gallery").appendChild(imageGalleryComponent);      
                
      }

      /**
       * build or load the calculator carousel component
       */
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
         
    }

    /**
     * load or append the carousel component to the tab component
     */
    if (document.documentElement.clientWidth > 700) {

    	//console.log("document.documentElement.clientWidth = "+document.documentElement.clientWidth);

    	/**
    	 * build or load the menu carousel components
    	 */
      if (document.getElementById("menu-id") != null) {

        var mi = document.getElementById("menu-id");
        var tm = document.getElementById("tab-menu");

        /**
         *  since menu components already exist, append it to tab components
         */        
        tm.appendChild(mi);       

      } else {

        /**
         * build the menu component when browser fires up
         */
        var menuComponent = buildMenuComponent();

        /**
         * load the menu component on the tab component
         */   
        document.getElementById("tab-menu").appendChild(menuComponent);
                  
      }

      /**
       * build or load the image-gallery carousel components
       */
      if (document.getElementById("image-gallery-id") != null) {

        var igi = document.getElementById("image-gallery-id");
        var tig = document.getElementById("tab-image-gallery");

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        tig.appendChild(igi);       

      } else {

        /**
         * build the image-gallery component when browser fires up
         */
        var imageGalleryComponent = buildImageGalleryComponent();

        /**
         * load the image-gallery component on the tab component
         */   
        document.getElementById("tab-image-gallery").appendChild(imageGalleryComponent);
                  
      }

    	/**
    	 * build or load the calculator carousel components
    	 */
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

    }

	}

  function buildMenuComponent() {
    var cal = document.createElement("div");
    cal.className = "carousel-3d-1";
    cal.id = "menu-id";
    cal.innerHTML ='<div class="carousel-3d-1-axis">\
                      <div class="carousel-3d-1-item f1-of-3d-1">\
                        <div class="carousel-3d-1-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/drop-down-menu/drop-down-menu.jpg" alt="Drop-down Menu">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-1-item f2-of-3d-1">\
                        <div class="carousel-3d-1-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/drop-down-menu/drop-down-menu.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-1-item f3-of-3d-1">\
                        <div class="carousel-3d-1-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/flipnav/flipnav.jpg" alt="Flipnav Menu">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-1-item f4-of-3d-1">\
                        <div class="carousel-3d-1-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/flipnav/flipnav.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-1-item--indicator itemsIn3d-1--active" id="c-3d-1-item-1"></span>\
                    <span class="carousel-3d-1-item--indicator" id="c-3d-1-item-2"></span>\
                    <span class="carousel-3d-1-item--indicator" id="c-3d-1-item-3"></span>\
                    <span class="carousel-3d-1-item--indicator" id="c-3d-1-item-4"></span>\
                    <span class="carousel-3d-1-item--next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-1-item--prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-1-item--next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-1-item--prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildImageGalleryComponent() {
    var cal = document.createElement("div");
    cal.className = "carousel-3d-2";
    cal.id = "image-gallery-id";
    cal.innerHTML ='<div class="carousel-3d-2-axis">\
                      <div class="carousel-3d-2-item f1-of-3d-2">\
                        <div class="carousel-3d-2-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/image-gallery/image-gallery-nonjs.jpg" alt="Non JS Image Gallery">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-2-item f2-of-3d-2">\
                        <div class="carousel-3d-2-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/image-gallery/image-gallery-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-2-item f3-of-3d-2">\
                        <div class="carousel-3d-2-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/image-gallery/image-gallery.jpg" alt="Image Gallery JS">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-2-item f4-of-3d-2">\
                        <div class="carousel-3d-2-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/image-gallery/image-gallery.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-2-item--indicator itemsIn3d-2--active" id="c-3d-2-item-1"></span>\
                    <span class="carousel-3d-2-item--indicator" id="c-3d-2-item-2"></span>\
                    <span class="carousel-3d-2-item--indicator" id="c-3d-2-item-3"></span>\
                    <span class="carousel-3d-2-item--indicator" id="c-3d-2-item-4"></span>\
                    <span class="carousel-3d-2-item--next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-2-item--prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-2-item--next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-2-item--prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildCalculatorComponent() {
    var cal = document.createElement("div");
    cal.className = "carousel-3d-8";
    cal.id = "calculator-id";
    cal.innerHTML ='<div class="carousel-3d-8-axis">\
		                  <div class="carousel-3d-8-item f1-of-3d-8">\
		                    <div class="carousel-3d-8-content">\
		                      <div>\
		                        <img width="375" height="200" src="../img/pa2/calculator/real-calculator1.jpg" alt="Real Calculator">\
		                      </div>\
		                    </div>\
		                  </div>\
		                  <div class="carousel-3d-8-item f2-of-3d-8">\
		                    <div class="carousel-3d-8-content">\
		                      <div>\
		                        <img src="../img/pa2/calculator/real-calculator2.jpg" alt="Real Calculator">\
		                      </div>\
		                    </div>\
		                  </div>\
		                  <div class="carousel-3d-8-item f3-of-3d-8">\
		                    <div class="carousel-3d-8-content">\
		                      <div>\
		                        <video width="375" height="280" controls autoplay loop>\
		                          <source src="../img/pa2/calculator/real-calc-video.mp4">\
		                        </video>\
		                      </div>\
		                    </div>\
		                  </div>\
		                  <div class="carousel-3d-8-item f4-of-3d-8">\
		                    <div class="carousel-3d-8-content">\
		                      <div class="calculator">\
		                        <div class="calculator-panel">\
		                          <h2 class="calculator-title"><span>Calculator</span></h2>\
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
		                          <span><small>2018 v.1.02</small></span>\
		                        </div>\
		                      </div>\
		                    </div>\
		                  </div>\
		                </div>\
		                <span class="carousel-3d-8-item--indicator itemsIn3d-8--active" id="c-3d-8-item-1"></span>\
		                <span class="carousel-3d-8-item--indicator" id="c-3d-8-item-2"></span>\
		                <span class="carousel-3d-8-item--indicator" id="c-3d-8-item-3"></span>\
		                <span class="carousel-3d-8-item--indicator" id="c-3d-8-item-4"></span>\
		                <span class="carousel-3d-8-item--next">\
		                  <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
		                </span>\
		                <span class="carousel-3d-8-item--prev">\
		                  <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
		                </span>\
		                <span class="carousel-3d-8-item--next-a">\
		                  <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
		                </span>\
		                <span class="carousel-3d-8-item--prev-a">\
		                  <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
		                </span>\
		              </div>';

    return cal;    
  }	

})(window);