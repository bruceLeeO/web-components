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
       * build or load the tabpanel carousel component
       */
      if (document.getElementById("tabpanel-id") != null) {  

        var tpi = document.getElementById("tabpanel-id");  
        var atp = document.getElementById("accordion-tabpanel");  

        /**
         *  since tabpanel components already exist, append it to accordion components
         */
        atp.appendChild(tpi);  

      } else {

        /**
         * build the tabpanel component when browser fires up
         */
        var tabpanelComponent = buildTabpanelComponent();
        
        /**
         * load the tabpanel component on the accordion component 
         */   
        document.getElementById("accordion-tabpanel").appendChild(tabpanelComponent);      
                
      }

      /**
       * build or load the accordion carousel component
       */
      if (document.getElementById("accordion-id") != null) {  

        var ai = document.getElementById("accordion-id");  
        var aa = document.getElementById("accordion-accordion");  

        /**
         *  since accordion components already exist, append it to accordion components
         */
        aa.appendChild(ai);  

      } else {

        /**
         * build the accordion component when browser fires up
         */
        var accordionComponent = buildAccordionComponent();
        
        /**
         * load the accordion component on the accordion component 
         */   
        document.getElementById("accordion-accordion").appendChild(accordionComponent);      
                
      }

      /**
       * build or load the business-card carousel component
       */
      if (document.getElementById("business-card-id") != null) {  

        var ai = document.getElementById("business-card-id");  
        var aa = document.getElementById("accordion-business-card");  

        /**
         *  since business-card components already exist, append it to business-card components
         */
        aa.appendChild(ai);  

      } else {

        /**
         * build the business-card component when browser fires up
         */
        var businessCardComponent = buildBusinessCardComponent();
        
        /**
         * load the business-card component on the business-card component 
         */   
        document.getElementById("accordion-business-card").appendChild(businessCardComponent);      
                
      }

      /**
       * build or load the ui-framework carousel component
       */
      if (document.getElementById("ui-framework-id") != null) {  

        var aufi = document.getElementById("ui-framework-id");  
        var auf = document.getElementById("accordion-ui-framework");  

        /**
         *  since ui-framework components already exist, append it to ui-framework components
         */
        auf.appendChild(aufi);  

      } else {

        /**
         * build the ui-framework component when browser fires up
         */
        var uiFrameworkComponent = buildUIFrameworkComponent();
        
        /**
         * load the ui-framework component on the ui-framework component 
         */   
        document.getElementById("accordion-ui-framework").appendChild(uiFrameworkComponent);      
                
      }

      /**
       * build or load the Books.MD carousel component
       */
      if (document.getElementById("books-md-id") != null) {  

        var bmi = document.getElementById("books-md-id");  
        var abmi = document.getElementById("accordion-books-md-id");  

        /**
         *  since ui-framework components already exist, append it to ui-framework components
         */
        abmi.appendChild(bmi);  

      } else {

        /**
         * build the Books.MD component when browser fires up
         */
        var booksMDComponent = buildBooksMDComponent();
        
        /**
         * load the ui-framework component on the ui-framework component 
         */   
        document.getElementById("accordion-books-md-id").appendChild(booksMDComponent);      
                
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
       
      /**
       * build or load the product-listing carousel component
       */
      if (document.getElementById("product-listing-id") != null) {  

        var pli = document.getElementById("product-listing-id");  
        var apl = document.getElementById("accordion-product-listing");  

        /**
         *  since product-listing components already exist, append it to accordion components
         */
        apl.appendChild(pli);  

      } else {

        /**
         * build the product-listing component when browser fires up
         */
        var productListingComponent = buildProductListingComponent();
        
        /**
         * load the product-listing component on the accordion component 
         */   
        document.getElementById("accordion-product-listing").appendChild(productListingComponent);      
                
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
       * build or load the tabpanel carousel components
       */
      if (document.getElementById("tabpanel-id") != null) {

        var tpi = document.getElementById("tabpanel-id");
        var ttp = document.getElementById("tab-tabpanel");

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        ttp.appendChild(tpi);       

      } else {

        /**
         * build the image-gallery component when browser fires up
         */
        var tabpanelComponent = buildTabpanelComponent();

        /**
         * load the image-gallery component on the tab component
         */   
        document.getElementById("tab-tabpanel").appendChild(tabpanelComponent);
                  
      }

      /**
       * build or load the accordion carousel components
       */
      if (document.getElementById("accordion-id") != null) {

        var ai = document.getElementById("accordion-id");
        var ta = document.getElementById("tab-accordion");

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        ta.appendChild(ai);       

      } else {

        /**
         * build the image-gallery component when browser fires up
         */
        var accordionComponent = buildAccordionComponent();

        /**
         * load the image-gallery component on the tab component
         */   
        document.getElementById("tab-accordion").appendChild(accordionComponent);
                  
      }

      /**
       * build or load the business-card carousel components
       */
      if (document.getElementById("business-card-id") != null) {

        var bci = document.getElementById("business-card-id");
        var tbc = document.getElementById("tab-business-card");

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        tbc.appendChild(bci);       

      } else {

        /**
         * build the image-gallery component when browser fires up
         */
        var businessCardComponent = buildBusinessCardComponent();

        /**
         * load the image-gallery component on the tab component
         */   
        document.getElementById("tab-business-card").appendChild(businessCardComponent);
                  
      }

      /**
       * build or load the ui-framework carousel components
       */
      if (document.getElementById("ui-framework-id") != null) {

        var ufi = document.getElementById("ui-framework-id");
        var tuf = document.getElementById("tab-ui-framework");

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        tuf.appendChild(ufi);       

      } else {

        /**
         * build the image-gallery component when browser fires up
         */
        var uiframeworkComponent = buildUIFrameworkComponent();

        /**
         * load the image-gallery component on the tab component
         */   
        document.getElementById("tab-ui-framework").appendChild(uiframeworkComponent);
                  
      }

      /**
       * build or load the books-md carousel components
       */
      if (document.getElementById("books-md-id") != null) {

        var bmi = document.getElementById("books-md-id");
        var tbmi = document.getElementById("tab-books-md-id");

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        tbmi.appendChild(bmi);       

      } else {

        /**
         * build the image-gallery component when browser fires up
         */
        var booksMDComponent = buildBooksMDComponent();

        /**
         * load the image-gallery component on the tab component
         */   
        document.getElementById("tab-books-md-id").appendChild(booksMDComponent);
                  
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

      /**
       * build or load the product-listing carousel components
       */
      if (document.getElementById("product-listing-id") != null) {

        var pli = document.getElementById("product-listing-id");
        var tpl = document.getElementById("tab-product-listing");

        /**
         *  since product-listing components already exist, append it to tab components
         */        
        tpl.appendChild(pli);       

      } else {

        /**
         * build the product-listing component when browser fires up
         */
        var productListingComponent = buildProductListingComponent();

        /**
         * load the product-listing component on the tab component
         */   
        document.getElementById("tab-product-listing").appendChild(productListingComponent);
                  
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

  function buildTabpanelComponent() {
    var cal = document.createElement("div");
    cal.className = "carousel-3d-3";
    cal.id = "tabpanel-id";
    cal.innerHTML ='<div class="carousel-3d-3-axis">\
                      <div class="carousel-3d-3-item f1-of-3d-3">\
                        <div class="carousel-3d-3-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/tab/tab-nonjs.jpg" alt="Tab Ui Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-3-item f2-of-3d-3">\
                        <div class="carousel-3d-3-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/tab/tab-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-3-item f3-of-3d-3">\
                        <div class="carousel-3d-3-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/tab/tab-nonjs2.jpg" alt="Tab UI Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-3-item f4-of-3d-3">\
                        <div class="carousel-3d-3-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/tab/tab-nonjs2.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-3-item--indicator itemsIn3d-3--active" id="c-3d-3-item-1"></span>\
                    <span class="carousel-3d-3-item--indicator" id="c-3d-3-item-2"></span>\
                    <span class="carousel-3d-3-item--indicator" id="c-3d-3-item-3"></span>\
                    <span class="carousel-3d-3-item--indicator" id="c-3d-3-item-4"></span>\
                    <span class="carousel-3d-3-item--next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-3-item--prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-3-item--next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-3-item--prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildAccordionComponent() {
    var cal = document.createElement("div");
    cal.className = "carousel-3d-4";
    cal.id = "accordion-id";
    cal.innerHTML ='<div class="carousel-3d-4-axis">\
                      <div class="carousel-3d-4-item f1-of-3d-4">\
                        <div class="carousel-3d-4-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/accordion/non-js/accordion1.jpg" alt="Tab Ui Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-4-item f2-of-3d-4">\
                        <div class="carousel-3d-4-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/accordion/non-js/accordion2.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-4-item f3-of-3d-4">\
                        <div class="carousel-3d-4-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/accordion/accordion3.jpg" alt="Tab UI Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-4-item f4-of-3d-4">\
                        <div class="carousel-3d-4-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/accordion/accordion4.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-4-item--indicator itemsIn3d-4--active" id="c-3d-4-item-1"></span>\
                    <span class="carousel-3d-4-item--indicator" id="c-3d-4-item-2"></span>\
                    <span class="carousel-3d-4-item--indicator" id="c-3d-4-item-3"></span>\
                    <span class="carousel-3d-4-item--indicator" id="c-3d-4-item-4"></span>\
                    <span class="carousel-3d-4-item--next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-4-item--prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-4-item--next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-4-item--prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildBusinessCardComponent() {
    var cal = document.createElement("div");
    cal.className = "carousel-3d-5";
    cal.id = "business-card-id";
    cal.innerHTML ='<div class="carousel-3d-5-axis">\
                      <div class="carousel-3d-5-item f1-of-3d-5">\
                        <div class="carousel-3d-5-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/digital-business-card/digital-business-card-nonjs-1.jpg" alt="Digital Business Card UI Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-5-item f2-of-3d-5">\
                        <div class="carousel-3d-5-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/digital-business-card/digital-business-card-nonjs-2.jpg" alt="Digital Business Card UI Component">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-5-item f3-of-3d-5">\
                        <div class="carousel-3d-5-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/digital-business-card/digital-business-card-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-5-item--indicator itemsIn3d-5--active" id="c-3d-5-item-1"></span>\
                    <span class="carousel-3d-5-item--indicator" id="c-3d-5-item-2"></span>\
                    <span class="carousel-3d-5-item--indicator" id="c-3d-5-item-3"></span>\
                    <span class="carousel-3d-5-item--next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-5-item--prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-5-item--next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-5-item--prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildUIFrameworkComponent() {
    var cal = document.createElement("div");
    cal.className = "carousel-3d-6";
    cal.id = "ui-framework-id";
    cal.innerHTML ='<div class="carousel-3d-6-axis">\
                      <div class="carousel-3d-6-item f1-of-3d-6">\
                        <div class="carousel-3d-6-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/ui-framework/ui-framework-nonjs-1.jpg" alt="Orchestra UI Framework">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-6-item f2-of-3d-6">\
                        <div class="carousel-3d-6-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/ui-framework/ui-framework-nonjs-2.jpg" alt="Orchestra UI Framework">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-6-item f3-of-3d-6">\
                        <div class="carousel-3d-6-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/ui-framework/ui-framework-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-6-item--indicator itemsIn3d-6--active" id="c-3d-6-item-1"></span>\
                    <span class="carousel-3d-6-item--indicator" id="c-3d-6-item-2"></span>\
                    <span class="carousel-3d-6-item--indicator" id="c-3d-6-item-3"></span>\
                    <span class="carousel-3d-6-item--next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-6-item--prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-6-item--next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-6-item--prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

  function buildBooksMDComponent() {
    var cal = document.createElement("div");
    cal.className = "carousel-3d-7";
    cal.id = "books-md-id";
    cal.innerHTML ='<div class="carousel-3d-7-axis">\
                      <div class="carousel-3d-7-item f1-of-3d-7">\
                        <div class="carousel-3d-7-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/books-md/books-md-nonjs-1.jpg" alt="Books.MD Site">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-7-item f2-of-3d-7">\
                        <div class="carousel-3d-7-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/books-md/books-md-nonjs-2.jpg" alt="Books.MD Site 2">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-7-item f3-of-3d-7">\
                        <div class="carousel-3d-7-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/books-md/books-md-nonjs.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-7-item--indicator itemsIn3d-7--active" id="c-3d-7-item-1"></span>\
                    <span class="carousel-3d-7-item--indicator" id="c-3d-7-item-2"></span>\
                    <span class="carousel-3d-7-item--indicator" id="c-3d-7-item-3"></span>\
                    <span class="carousel-3d-7-item--next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-7-item--prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-7-item--next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-7-item--prev-a">\
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

  function buildProductListingComponent() {
    var cal = document.createElement("div");
    cal.className = "carousel-3d-9";
    cal.id = "product-listing-id";
    cal.innerHTML ='<div class="carousel-3d-9-axis">\
                      <div class="carousel-3d-9-item f1-of-3d-9">\
                        <div class="carousel-3d-9-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/product-listing/product-listing-1.jpg" alt="Product Listing Site 1">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-9-item f2-of-3d-9">\
                        <div class="carousel-3d-9-content">\
                          <div>\
                            <img width="375" height="200" src="../img/pa2/product-listing/product-listing-2.jpg" alt="Product Listing Site 2">\
                          </div>\
                        </div>\
                      </div>\
                      <div class="carousel-3d-9-item f3-of-3d-9">\
                        <div class="carousel-3d-9-content">\
                          <div>\
                            <video width="375" height="280" controls autoplay loop>\
                              <source src="../img/pa2/product-listing/product-listing.mp4">\
                            </video>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                    <span class="carousel-3d-9-item--indicator itemsIn3d-9--active" id="c-3d-9-item-1"></span>\
                    <span class="carousel-3d-9-item--indicator" id="c-3d-9-item-2"></span>\
                    <span class="carousel-3d-9-item--indicator" id="c-3d-9-item-3"></span>\
                    <span class="carousel-3d-9-item--next">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-9-item--prev">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                    <span class="carousel-3d-9-item--next-a">\
                      <svg class="tab-next-chevron form-icon-small"><use xlink:href="#icon-chevron-right"></use></svg>\
                    </span>\
                    <span class="carousel-3d-9-item--prev-a">\
                      <svg class="form-icon-small"><use xlink:href="#icon-chevron-left"></use></svg>\
                    </span>\
                  </div>';

    return cal;    
  }

})(window);