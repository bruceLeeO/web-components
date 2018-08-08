(function(window) {

	populateParagraph();

	var sectionParagraph = document.getElementsByClassName("section-paragraph");

	for (var i = 0; i < sectionParagraph.length; i++) {
		sectionParagraph[i].addEventListener("click",showRestOfParagraph,false);
	}
	//var locateTheFifthWords = function(str) {

	//  var ctn = 0;
	//  var indeces = 0;
	//  for (var i = 0; i <= str.length-1; i++){
	//    if (str[i] === " ") {
	//      ctn += 1;
	//      if (ctn === 5)
	//      	break;
	//    }
	//	indeces += 1;
	//  }
	//  return indeces;	
	//}


	function showRestOfParagraph (evt) {
	  //var el = document.getElementById(evt.currentTarget.id.toLowerCase());
	  var el = evt.currentTarget;
	  //console.log("el.className = "+el.className);
	  var styleOfContent = window.getComputedStyle(el);
	  //console.log("stylesOfContent = "+styleOfContent);
	  var heightOfContent = styleOfContent.getPropertyValue('height');

	  //console.log("heigthOfContent = "+heightOfContent);

	  //console.log("evt.currentTarget.style.height: "+evt.currentTarget);


	  //var pText = this.innerText;
	  //console.log("paragraph inner text is: "+pText);
	  //console.log("the fifth word is located at: "+locateTheFifthWords(pText));
	  //console.log("the new sliced line is: "+pText.slice(0,locateTheFifthWords(pText))+"...");

	  //var firstFiveWords = pText.slice(0,locateTheFifthWords(pText))+"...";
	  //console.log("the first five words are: "+firstFiveWords);

	  //console.log("this.className: "+this.cassName+" and this.id: "+this.id);

	  if (this.id === "section-para-1") {
			if (heightOfContent === "30px") {

				//console.log("if heightOfContent === "+heightOfContent);
			 	this.className += " section-paragraph--active";
			 	//console.log("this.claaName === "+this.className);		
			 	this.innerHTML = buildParagraphElement1().innerText+".";
				this.style.height = "auto";
			} else {
				
			 	//console.log("else heightOfContent > "+heightOfContent);
				this.className = this.className.replace(" section-paragraph--active", "");
				//console.log("this.claeName === "+this.className);
				this.style.height = "30px";
				this.innerHTML = buildParagraphElement1_a().innerText+"...";
			}
	  }

	  if (this.id === "section-para-2") {
			if (heightOfContent === "30px") {

				//console.log("if heightOfContent === "+heightOfContent);
			 	this.className += " section-paragraph--active";
			 	//console.log("this.claaName === "+this.className);		
			 	this.innerHTML = buildParagraphElement2().innerText+".";

				this.style.height = "auto";
			} else {
				
			 	//console.log("else heightOfContent > "+heightOfContent);
				this.className = this.className.replace(" section-paragraph--active", "");
				//console.log("this.claeName === "+this.className);
				this.style.height = "30px";
				this.innerHTML = buildParagraphElement2_a().innerText+"...";
			}
	  }

	  if (this.id === "section-para-3") {
			if (heightOfContent === "30px") {

				//console.log("if heightOfContent === "+heightOfContent);
			 	this.className += " section-paragraph--active";
			 	//console.log("this.claaName === "+this.className);		
			 	this.innerHTML = buildParagraphElement3().innerText+".";
				this.style.height = "auto";
			} else {
				
			 	//console.log("else heightOfContent > "+heightOfContent);
				this.className = this.className.replace(" section-paragraph--active", "");
				//console.log("this.claeName === "+this.className);
				this.style.height = "30px";
				this.innerHTML = buildParagraphElement3_a().innerText+"...";
			}
	  }
	}

	function populateParagraph() {
		document.getElementById("section-para-1").appendChild(buildParagraphElement1_a());
		document.getElementById("iPel-1-a").innerHTML += "...";

		document.getElementById("section-para-2").appendChild(buildParagraphElement2_a());
		document.getElementById("iPel-2-a").innerHTML += "...";	

		document.getElementById("section-para-3").appendChild(buildParagraphElement3_a());
		document.getElementById("iPel-3-a").innerHTML += "...";	
	}

	function buildParagraphElement1() {
    var pEl = document.createElement("p");
    pEl.className = "cPel-1";
    pEl.id = "iPel-1";
    pEl.innerHTML = 'I enjoy learning new web technology, solving programming problems, and using my web development skills to create beautiful user interface on the web'; 
    return pEl;
	}

	function buildParagraphElement1_a() {
		//console.log("buliding p1_a");
    var pEl = document.createElement("p");
    pEl.className = "cPel-1";
    pEl.id = "iPel-1-a";
    pEl.innerHTML = 'I enjoy learning new web'; 
    return pEl;
	}

	function buildParagraphElement2() {
    var pEl = document.createElement("p");
    pEl.className = "cPel-1";
    pEl.id = "iPel-2";
    pEl.innerHTML = 'I strive for excellence in what I do and that is why I am currently enrolled in the most rigorous, most comprehensive Fullstack Engineer course at BOV Academy.  I aspire to be a proficient, confident Fullstack JavaScript Developer';    
    return pEl;
	}	

	function buildParagraphElement2_a() {
		//console.log("buliding p1_a");
    var pEl = document.createElement("p");
    pEl.className = "cPel-1";
    pEl.id = "iPel-2-a";
    pEl.innerHTML = 'I strive for excellence'; 
    return pEl;
	}

	function buildParagraphElement3() {
    var pEl = document.createElement("p");
    pEl.className = "cPel-1";
    pEl.id = "iPel-3";
    pEl.innerHTML = 'When I am not busy coding and learning new skills, chances are I am having a nice cup of tea or cappuccino with friends in some nice coffee shop'; 
    return pEl;
	}	

	function buildParagraphElement3_a() {
		//console.log("buliding p1_a");
    var pEl = document.createElement("p");
    pEl.className = "cPel-1";
    pEl.id = "iPel-3-a";
    pEl.innerHTML = 'When I am not busy coding'; 
    return pEl;
	}
})(window);	