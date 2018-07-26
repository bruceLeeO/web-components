(function(window) {

  console.log("populating carousel is intended to run only once at start up....");
  populateCarousel();

  var onTrackWithAccordionComponent = false;
  var onParWithTabComponent = false;    
	window.addEventListener('resize', goAppendCarouselToChild);

  function goAppendCarouselToChild() { 
    //console.log("do nothing.... for now...");
  
    /**
     * append the carousel component to the accordion component
     */
    if (document.documentElement.clientWidth < 700) {
      onParWithTabComponent = false;
      //console.log("document.documentElement.clientWidth = "+document.documentElement.clientWidth);

      if (onTrackWithAccordionComponent) {
        //console.log("ontrack with accordion... do nothing...");
      } else {
        //console.log("it is not on track with accordion, onTrackWithAccordionComponent = "+onTrackWithAccordionComponent);
        onTrackWithAccordionComponent = true;

        /**
         *  since menu components already exist, append it to accordion components
         */
        document.getElementById("accordion-menu").appendChild(document.getElementById("menu-id"));  

        /**
         *  since image-gallery components already exist, append it to accordion components
         */
        document.getElementById("accordion-image-gallery").appendChild(document.getElementById("image-gallery-id"));

        /**
         *  since tabpanel components already exist, append it to accordion components
         */
        document.getElementById("accordion-tabpanel").appendChild(document.getElementById("tabpanel-id"));

        /**
         *  since accordion components already exist, append it to accordion components
         */
        document.getElementById("accordion-accordion").appendChild(document.getElementById("accordion-id"));  

        /**
         *  since business-card components already exist, append it to business-card components
         */
        document.getElementById("accordion-business-card").appendChild(document.getElementById("business-card-id"));  

        /**
         *  since ui-framework components already exist, append it to ui-framework components
         */
        document.getElementById("accordion-ui-framework").appendChild(document.getElementById("ui-framework-id"));  

        /**
         *  since ui-framework components already exist, append it to ui-framework components
         */
        document.getElementById("accordion-books-md-id").appendChild(document.getElementById("books-md-id"));  

        /**
         *  since calculator components already exist, append it to accordion components
         */
        document.getElementById("accordion-calculator").appendChild(document.getElementById("calculator-id"));  

        /**
         *  since product-listing components already exist, append it to accordion components
         */
        document.getElementById("accordion-product-listing").appendChild(document.getElementById("product-listing-id"));       
      
      }
    
    } else {
    
      /**
       * client window width is > than 700, append the carousel component to the tab component
       */

      onTrackWithAccordionComponent = false;
      
      if (onParWithTabComponent) {
        //console.log("on par with tab component... do nothing...");
      } else {
        //console.log("it is not on par with tab, onParWithTabComponent = "+onParWithTabComponent);
        onParWithTabComponent = true;

        //console.log("document.documentElement.clientWidth = "+document.documentElement.clientWidth);

        /**
         *  since menu components already exist, append it to tab components
         */        
        document.getElementById("tab-menu").appendChild(document.getElementById("menu-id"));       

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        document.getElementById("tab-image-gallery").appendChild(document.getElementById("image-gallery-id"));       

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        document.getElementById("tab-tabpanel").appendChild(document.getElementById("tabpanel-id"));       

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        document.getElementById("tab-accordion").appendChild(document.getElementById("accordion-id"));       

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        document.getElementById("tab-business-card").appendChild(document.getElementById("business-card-id"));       

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        document.getElementById("tab-ui-framework").appendChild(document.getElementById("ui-framework-id"));       

        /**
         *  since image-gallery components already exist, append it to tab components
         */        
        document.getElementById("tab-books-md-id").appendChild(document.getElementById("books-md-id"));       

        /**
         *  since calculator components already exist, append it to tab components
         */        
        document.getElementById("tab-calculator").appendChild(document.getElementById("calculator-id"));       

        /**
         *  since product-listing components already exist, append it to tab components
         */        
        document.getElementById("tab-product-listing").appendChild(document.getElementById("product-listing-id"));       

      }
    }
  }

	function populateCarousel() {

    console.log("populate carousel once....");

    /**
     * load the carousel component to the accordion component
     */
    if (document.documentElement.clientWidth < 700) {

      /**
       * load the menu component on the accordion component 
       */   
      document.getElementById("accordion-menu").appendChild(buildMenuComponent());
              
      /**
       * load the image-gallery component on the accordion component 
       */   
      document.getElementById("accordion-image-gallery").appendChild(buildImageGalleryComponent());      
              
      /**
       * load the tabpanel component on the accordion component 
       */   
      document.getElementById("accordion-tabpanel").appendChild(buildTabpanelComponent());      
                    
      /**
       * load the accordion component on the accordion component 
       */   
      document.getElementById("accordion-accordion").appendChild(buildAccordionComponent());      

      /**
       * load the business-card component on the business-card component 
       */   
      document.getElementById("accordion-business-card").appendChild(buildBusinessCardComponent());
      
      /**
       * load the ui-framework component on the ui-framework component 
       */   
      document.getElementById("accordion-ui-framework").appendChild(buildUIFrameworkComponent());      

      /**
       * load the ui-framework component on the ui-framework component 
       */   
      document.getElementById("accordion-books-md-id").appendChild(buildBooksMDComponent());      

      /**
       * load the calculator component on the accordion component 
       */   
      document.getElementById("accordion-calculator").appendChild(buildCalculatorComponent());      
      
      /**
       * load the product-listing component on the accordion component 
       */   
      document.getElementById("accordion-product-listing").appendChild(buildProductListingComponent());      
              
    }  else {       
    
      /**
       * if client width is greater than 700, load the carousel component to the tab component
       */

      /**
       * load the menu component on the tab component
       */   
      document.getElementById("tab-menu").appendChild(buildMenuComponent());
                
      /**
       * load the image-gallery component on the tab component
       */   
      document.getElementById("tab-image-gallery").appendChild(buildImageGalleryComponent());
                
      /**
       * load the image-gallery component on the tab component
       */   
      document.getElementById("tab-tabpanel").appendChild(buildTabpanelComponent());
                
      /**
       * load the image-gallery component on the tab component
       */   
      document.getElementById("tab-accordion").appendChild(buildAccordionComponent());
                
      /**
       * load the image-gallery component on the tab component
       */   
      document.getElementById("tab-business-card").appendChild(buildBusinessCardComponent());
                
      /**
       * load the image-gallery component on the tab component
       */   
      document.getElementById("tab-ui-framework").appendChild(buildUIFrameworkComponent());
                
      /**
       * load the image-gallery component on the tab component
       */   
      document.getElementById("tab-books-md-id").appendChild(buildBooksMDComponent());
                
      /**
       * load the calculator component on the tab component
       */   
      document.getElementById("tab-calculator").appendChild(buildCalculatorComponent());
                
      /**
       * load the product-listing component on the tab component
       */   
      document.getElementById("tab-product-listing").appendChild(buildProductListingComponent());
         
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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
		                        <video width="375" height="280" autoplay loop muted>\
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
                            <video width="375" height="280" autoplay loop muted>\
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