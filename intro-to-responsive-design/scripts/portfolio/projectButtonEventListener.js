(function(window) {

	var calculatorTabBtn = document.getElementById("Calculator");
	var calculatorAccordionBtn = document.getElementById("Accordioncalculator");

	calculatorTabBtn.addEventListener("click",function(){
		projects.loadTabCalculatorCarousel();
	},false);

	calculatorAccordionBtn.addEventListener("click",function(){
		projects.loadAccordionCalculatorCarousel();
	},false);




})(window);
