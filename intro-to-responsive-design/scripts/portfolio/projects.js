(function(window){

	var projects = {};

	projects.loadTabCalculatorCarousel = function() {
		console.log("loading tab calculator carousel....");
		console.log("document.getElementById('tab-calculator-foursided-carousel'): "+document.getElementById("tab-calculator-foursided-carousel"));
		console.log("document.getElementById('accordion-calculator-foursided-carousel'): "+document.getElementById("accordion-calculator-foursided-carousel"));
		console.log("document.getElementById('tab-calculator-carousel-id'): "+document.getElementById("tab-calculator-carousel-id"));
		console.log("document.getElementById('accordion-calculator-carousel-id'): "+document.getElementById("accordion-calculator-carousel-id"));

		if (document.getElementById("accordion-calculator-carousel-id") != null) {
      var acci = document.getElementById("accordion-calculator-carousel-id");
      acci.parentNode.removeChild(acci); 
      acci = null;
		} 		

		if (document.getElementById("accordion-calculator-foursided-carousel") != null) {
      var acfc = document.getElementById("accordion-calculator-foursided-carousel");
      acfc.parentNode.removeChild(acfc); 
      acfc = null;
		}
		
		if (document.getElementById("tab-calculator-carousel-id") == null) {

			var calCarousel = document.createElement("div");
			calCarousel.className = "calculator-carousel";
			calCarousel.id = "tab-calculator-carousel-id";
			calCarousel.innerHTML = '<div class="foursided-carousel foursided-carousel-font">\
													    	<div class="foursided-carousel-axis" id="foursided-carousel-axis">\
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
																		 <div class="calculator-panel">\
							                         <h2 class="calculator-title">Calculator</h2>\
							                       </div>\
							                       <div class="calculator-panel">\
							                         <input type="text" name="display" class="calculator-display calculator-form-input" id="display" disabled>\
							                       </div>\
							                       <div class="calculator">\
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

      if (document.getElementById("tab-calculator-foursided-carousel") == null) {
        console.log("tab-calculator-foursided-carousel is null....");
        var tcfcid = document.createElement("p");
        tcfcid.id = "tab-calculator-foursided-carousel";
        document.getElementById("tcfc").appendChild(tcfcid);        
      } /*else { 
        console.log("tab-calculator-foursided-carousel is not null, so remove the tab carousel....");
        var tcfc = document.getElementById("tab-calculator-foursided-carousel");
        tcfc.parentNode.removeChild(tcfc);            
      } */

	    document.getElementById("tab-calculator-foursided-carousel").appendChild(calCarousel);

	    //var trfc = document.getElementById("tab-rgbcolor-foursided-carousel");
	    //trfc.parentNode.removeChild(trfc);

      if (document.getElementById("accordion-calculator-foursided-carousel") == null) {
        console.log("accordion-calculator-foursided-carousel is null...");
        var acfcid = document.createElement("p");
        acfcid.id = "accordion-calculator-foursided-carousel";
        document.getElementById("acfc").appendChild(acfcid);
      } /*else {
        console.log("accordion-calculator-foursided-carousel is not null, so remove the accordion carousel....");
        var acfc = document.getElementById("accordion-calculator-foursided-carousel");
        acfc.parentNode.removeChild(acfc);   
      }*/


	    //var arfc = document.getElementById("accordion-rgbcolor-foursided-carousel");
	    //arfc.parentNode.removeChild(arfc);  
		} /*else {
			console.log("tab-calculator-carousel-id is not null");
			console.log("howabout acci, is acci null? "+document.getElementById("accordion-calculator-carousel-id"));
      if (document.getElementById("accordion-calculator-foursided-carousel") != null) {
        console.log("accordion-calculator-foursided-carousel is not null, so remove the accordion carousel....");
        var acfc = document.getElementById("accordion-calculator-foursided-carousel");
        acfc.parentNode.removeChild(acfc);   
      }		
		}*/
	}


	projects.loadAccordionCalculatorCarousel = function() {
		console.log("loading accordion calculator carousel....");
		console.log("document.getElementById('tab-calculator-foursided-carousel'): "+document.getElementById("tab-calculator-foursided-carousel"));
		console.log("document.getElementById('accordion-calculator-foursided-carousel'): "+document.getElementById("accordion-calculator-foursided-carousel"));
		console.log("document.getElementById('tab-calculator-carousel-id'): "+document.getElementById("tab-calculator-carousel-id"));
		console.log("document.getElementById('accordion-calculator-carousel-id'): "+document.getElementById("accordion-calculator-carousel-id"));
		
		if (document.getElementById("tab-calculator-carousel-id") != null) {
      var tcci = document.getElementById("tab-calculator-carousel-id");
      tcci.parentNode.removeChild(tcci); 
      tcci = null;
		} 		

		if (document.getElementById("tab-calculator-foursided-carousel") != null) {
      var tcfc = document.getElementById("tab-calculator-foursided-carousel");
      tcfc.parentNode.removeChild(tcfc); 
      tcfc = null;
		} 

		if (document.getElementById("accordion-calculator-carousel-id") == null) {

			var calCarousel = document.createElement("div");
			calCarousel.className = "calculator-carousel";
			calCarousel.id = "accordion-calculator-carousel-id";
			calCarousel.innerHTML = '<div class="foursided-carousel foursided-carousel-font">\
													    	<div class="foursided-carousel-axis" id="foursided-carousel-axis">\
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


      if (document.getElementById("accordion-calculator-foursided-carousel") == null) {
        console.log("accordion-calculator-foursided-carousel is null...");
        var acfcid = document.createElement("p");
        acfcid.id = "accordion-calculator-foursided-carousel";
        document.getElementById("acfc").appendChild(acfcid);
      } /*else {
        console.log("accordion-calculator-foursided-carousel is not null, so remove the accordion carousel....");
        var acfc = document.getElementById("accordion-calculator-foursided-carousel");
        acfc.parentNode.removeChild(acfc);   
      }*/

	    document.getElementById("accordion-calculator-foursided-carousel").appendChild(calCarousel);
	    //var trfc = document.getElementById("tab-rgbcolor-foursided-carousel");
	    //trfc.parentNode.removeChild(trfc);

	    //var arfc = document.getElementById("accordion-rgbcolor-foursided-carousel");
	    //arfc.parentNode.removeChild(arfc);  

      if (document.getElementById("tab-calculator-foursided-carousel") == null) {
        console.log("tab-calculator-foursided-carousel is null....");
        var tcfcid = document.createElement("p");
        tcfcid.id = "tab-calculator-foursided-carousel";
        document.getElementById("tcfc").appendChild(tcfcid);        
      } /*else { 
        console.log("tab-calculator-foursided-carousel is not null, so remove the tab carousel....");
        var tcfc = document.getElementById("tab-calculator-foursided-carousel");
        tcfc.parentNode.removeChild(tcfc);            
      } */

		} /*else {
			console.log("accordion-calculator-carousel-id is not null");
			console.log("howabout tcci, is tcci null? "+document.getElementById("tab-calculator-carousel-id"));
      if (document.getElementById("tab-calculator-foursided-carousel") == null) {
        console.log("tab-calculator-foursided-carousel is not null, so remove the tab carousel....");
        var tcfc = document.getElementById("tab-calculator-foursided-carousel");
        tcfc.parentNode.removeChild(tcfc);            
      } 			
		}*/
	}	


	window.projects = projects; //expose to global	

})(window);