(function(window){

	// current skills out of 100 possible percent score
	//console.log("frontendSkillBarChart....");
	var frontendSkills = new Array();
	frontendSkills[0] = "blank, 100" // blank sets the high limit 
	frontendSkills[1] = "JavaScript, 74";
	frontendSkills[2] = "HTML5, 74";
	frontendSkills[3] = "CSS3, 72";
	frontendSkills[4] = "ReactJS, 30";
	frontendSkills[5] = "jQuerry, 25";

	//console.log("backendSkills bar chart....");
	var backendSkills = new Array();
	backendSkills[0] = "blank, 100" // blank sets the high limit 
	backendSkills[1] = "JavaScript, 70";
	backendSkills[2] = "NodeJS, 27";
	backendSkills[3] = "NoSQL, 28";
	backendSkills[4] = "SQL, 70";
	backendSkills[5] = "Python, 72";

	//console.log("otherSkills bar chart....");
	var otherSkills = new Array();
	otherSkills[0] = "blank, 100" // blank sets the high limit 
	otherSkills[1] = "Written Communication, 84";
	otherSkills[2] = "Problem Solving, 98";
	otherSkills[3] = "Project Management, 80";
	otherSkills[4] = "Research, 92";
	otherSkills[5] = "Public Speaking, 72";	

	// global declaration
	var svg, svgContainer;
	
	// the chart dimension settings
	var svgcWidth, svgcHeight, svgcMargin, svgcSpace;
	var svgcMarginSpace, svgcMarginheight;

	// the bar properties declaration
	var bcWidth, bcMargin, totalChartBars, maximumDataValue, bcWidthMargin;

	// the axis properties
	var totalLabelOnYAxis;

	// function to set bar charts
	//function barChartSettings()
	function barChartSettings(skillArr) {
		//console.log("setting the barchart....");
		//svgcMargin = 40;
		//svgcSpace = 100;
		svgcMargin = 60;
		svgcSpace = 40;		
		//svgcHeight = svg.height.baseVal.value - 2 * svgcMargin - svgcSpace;
		svgcHeight = svg.height.baseVal.value - 2 * svgcMargin - svgcSpace;
		svgcWidth = svg.width.baseVal.value - 2 * svgcMargin - svgcSpace;
		svgcMarginSpace = svgcMargin + svgcSpace;
		svgcMarginHeight = svgcMargin + svgcHeight;
		
		//console.log("svgcHeight = "+svgcHeight);
		//console.log("svgcWidth = "+svgcWidth);
		//console.log("svgcMarginSpace = "+svgcMarginSpace);
		//console.log("svgcMarginHeight = "+svgcMarginHeight);
		//The Bar Properties
		bcMargin = 6;
		totalChartBars = skillArr.length;
		bcWidth = (svgcWidth / totalChartBars) - bcMargin;
		//console.log("bcWidth = "+bcWidth);
		//Maximum value to plot on chart
		maximumDataValue = 0;
		for (var i = 0; i < totalChartBars; i++) {
		    var arrVal = skillArr[i].split(",");
		    var barVal = parseInt(arrVal[1]);
		    if (parseInt(barVal) > parseInt(maximumDataValue))
		      maximumDataValue = barVal;
		}
		totalLabelOnYAxis = 4;		
	}

	//Function to Draw X and Y Axis
	function drawXYAxis(x1, y1, x2, y2) {
	    var dataAxis = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	    dataAxis.setAttribute("x1", x1);
	    dataAxis.setAttribute("y1", y1);
	    dataAxis.setAttribute("x2", x2);
	    dataAxis.setAttribute("y2", y2);
	    dataAxis.style.stroke = "black";
	    dataAxis.style.strokeWidth = "4px";
	    svg.appendChild(dataAxis);
	}

	//Function to Draw Markers on the Axis
	function drawAxisMarkers(skillArr) {
		var numMarkers = parseInt(maximumDataValue/totalLabelOnYAxis);
		//console.log("numMarkers = "+numMarkers)
		// On y Axis
		for (var i = 0; i < totalLabelOnYAxis +1; i++) {
		    markerVal = i * numMarkers;
		    markerValHt = i * numMarkers * svgcHeight;
		    //console.log("markerVal = "+markerVal+" markerValHt = "+markerValHt); 
		    var xMarkers = svgcMarginSpace - 5;
		    var yMarkers = svgcMarginHeight - (markerValHt / maximumDataValue);
		    //console.log("xMarkers = "+xMarkers+" yMarkers = "+yMarkers);
		    //alert("xMarkers = "+xMarkers+" yMarkers = "+yMarkers);
		    textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
		    textelement.setAttribute('dx', xMarkers-40);
		    textelement.setAttribute('dy',yMarkers);
		    // replace numerical value with informative text " proficiency-level" indicator
		    txtNode = "";
		    //console.log("bool test: "+ (markerVal == 0));
		    switch (true) {
		    	case (markerVal == 0):
		    		//console.log("markerVal in case (markerVal == 0): "+markerVal);
		    		// do nothing at level 0
		    		break;
		    	case (markerVal == 25):
		    		//console.log("markerVal in case (markerVal == 25): "+markerVal);
		    		txtNode = "Learning";
		    		break;
		    	case (markerVal == 50):
		    		//console.log("markerVal in case (markerVal == 50): "+markerVal);
		    	  txtNode = "Competent";
		    	  break;
		    	case (markerVal == 75):
		    		//console.log("markerVal in case (markerVal == 75): "+markerVal);
		    	  txtNode = "Proficient";
		    	  break;
		    	case (markerVal == 100):
		    		//console.log("markerVal in case (markerVal == 100): "+markerVal);
		    		txtNode = "Expert";
		    		break;
		    }
		    //console.log("txtNode: "+txtNode);
		    textelement.setAttribute('font-family','sans-serif');
		    textelement.setAttribute('font-size','14');
		    txtnode = document.createTextNode(txtNode);
		    //console.log("txtnode = "+txtnode.nodeValue);
		    textelement.appendChild(txtnode);
		    svg.appendChild(textelement);
		}

		//On x Axis
		for (var i = 0; i < totalChartBars; i++) {
		    arrVal = skillArr[i].split(",");
		    name = arrVal[0];
		    //console.log("name = "+name);
		    if (name == "blank") {
		    	//console.log("name is "+name+", so skip it....");
		    } else {
			    markerXPosition = svgcMarginSpace + bcMargin + (i * (bcWidth + bcMargin)) + (bcWidth / 2);
			    markerYPosition = svgcMarginHeight + 20;
			    rotateDegree = 45;
			    //console.log("X: "+markerXPosition+", Y: "+markerYPosition);		   
			    textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
			    textelement.setAttribute('dx', markerXPosition);
			    textelement.setAttribute('dy', markerYPosition);
			    // rotate the markers on the x-axis
			    switch (true) {
			    	case (totalChartBars - (totalChartBars - i) == 1):
			    		//console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
			    		//textelement.setAttribute('transform',"rotate(45 165 200)");
			    		//textelement.setAttribute('transform',"rotate(45 200 140)");
			    		textelement.setAttribute('transform',"rotate(45 168 180)");
			    		break;
			    	case (totalChartBars - (totalChartBars - i) == 2):
			    		//console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
			    		//textelement.setAttribute('transform',"rotate(45 205 200)");
			    		//textelement.setAttribute('transform',"rotate(45 230 140)");
			    		textelement.setAttribute('transform',"rotate(45 200 180)");
			    		break;
			    	case (totalChartBars - (totalChartBars - i) == 3):
			    		//console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
			    		//textelement.setAttribute('transform',"rotate(45 260 140)");
			    		//textelement.setAttribute('transform',"rotate(45 250 290)");
			    		textelement.setAttribute('transform',"rotate(45 235 180)");
			    		break;	
	 					case (totalChartBars - (totalChartBars - i) == 4):
			    		//console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
			    		//textelement.setAttribute('transform',"rotate(45 290 200)");
			    		textelement.setAttribute('transform',"rotate(45 268 180)");
			    		break;
	 					case (totalChartBars - (totalChartBars - i) == 5):
			    		//console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
			    		//textelement.setAttribute('transform',"rotate(45 335 200)");
			    		//textelement.setAttribute('transform',"rotate(45 320 140)");
			    		textelement.setAttribute('transform',"rotate(45 300 180)");
			    		break;		    				    			    		
			    }		    
			    textelement.setAttribute('font-family','sans-serif');
			    textelement.setAttribute('font-size','12');
			    txtnode = document.createTextNode(name);
			    //console.log("txtnode = "+txtnode.nodeValue);
			    textelement.appendChild(txtnode);
			    svg.appendChild(textelement);
		    }
		}
  }

	//Method to Draw Axis Label
	function drawAxisLableAndMarkers(skillArr) {
		//console.log("draw the bar axis labell and markers....");
	    //Y-Axis
	    // remove Y-Axis -- drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace, svgcMargin);
	    //X-Axis
	    drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace + bcWidth+500, svgcMarginHeight);
	    drawAxisMarkers(skillArr);
	}	

	//Method to Draw rectangle
	function drawRectangleForChart(x,y,wd,ht,index) {
	    var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
	    //rect.className = "bc-tooltip";
	    rect.setAttributeNS(null, 'x', x);
	    rect.setAttributeNS(null, 'y', y);
	    rect.setAttributeNS(null, 'width', wd);
	    rect.setAttributeNS(null, 'height', ht);
	    // switch color on new rectangle bar chart
	    switch (true) {
	      case (index == 1):
	        rect.setAttributeNS(null, 'fill', "red");
	        break;	
	      case (index == 2):
	        rect.setAttributeNS(null, 'fill', "blue");
	        break;  
	      case (index == 3):
	        rect.setAttributeNS(null, 'fill', "green");
	        break; 
	      case (index == 4):
	        rect.setAttributeNS(null, 'fill', "yellow");
	        break;   
	      case (index == 5):
	        rect.setAttributeNS(null, 'fill', "orange");
	        break;                        
	    }
	    svg.appendChild(rect);
	} 

	function addToolTip(x,y,wd,ht,index) {
		//var tooltip = document.createElementNS("http://www.w3.org/2000/svg", 'span');
		var tooltip = document.createElement('span');
		tooltip.className = "bc-tooltip";    
	    //var tooltiptext = document.createElementNS("http://www.w3.org/2000/svg", 'span');
	    var tooltiptext = document.createElement('span');
	    tooltiptext.className = "bc-tooltiptext";
	    
	    //console.log(" inside tooltipheight, ht, = "+ht);
	    //console.log("y = "+y);
	    switch (true) {
	      case (ht < 70):

	      	//console.log("doing learning...");
	      	tooltip.setAttribute('style', 'position: absolute; /*border: 1px solid blue;*/ width: '+wd+'px; height: '+ht+'px; left: '+(x-8)+'px; top: '+y+'px;');
	        //tooltip.innerHTML = ht;
	        tooltiptext.innerHTML = ht+'% Learning - going through course work at BOV Academy.  Soon I will be competent';	        
	        break;	
	      case (ht < 80):
	      	//console.log("doing competent...");
	      	tooltip.setAttribute('style', 'position: absolute; /*border: 1px solid blue;*/ width: '+wd+'px; height: '+ht+'px; left: '+(x-8)+'px; top: '+y+'px;');
	        //tooltip.innerHTML = ht;
	        tooltiptext.innerHTML = ht+'% Competent - I know enough to get the job done';	        
	        break;  
	      case (ht < 90):
	      	//console.log("i am a bad ass...");
	      	tooltip.setAttribute('style', 'position: absolute; /*border: 1px solid blue;*/ width: '+wd+'px; height: '+ht+'px; left: '+(x-8)+'px; top: '+y+'px;');
	        //tooltip.innerHTML = ht;
	        tooltiptext.innerHTML = ht+'% Proficient - I can handle complex problem';	        
	        break; 
	      case (ht <= 100):
	      //console.log("i am purrfect");
	      	tooltip.setAttribute('style', 'position: absolute; /*border: 1px solid blue;*/ width: '+wd+'px; height: '+ht+'px; left: '+(x-8)+'px; top: '+y+'px;');
	        //tooltip.innerHTML = ht;
	        tooltiptext.innerHTML = ht+'% Expert - I can write a book and do pretty much everything';	        
	        break;                           
	    }

	    tooltip.appendChild(tooltiptext);
	    svgContainer.appendChild(tooltip);		
	}

	//Function to draw barchart for all entries in the Population Array
	function drawChartWithCalculation(skillArr) {
		//console.log("draw chart with calculation....");
		for (var i = 0; i < totalChartBars; i++) {
		    var arrchartVal = skillArr[i].split(",");
		    bcVal = parseInt(arrchartVal[1]);
		    //console.log("bcVal = "+bcVal);
		    bcHt = (bcVal * svgcHeight / maximumDataValue);
		    bcX = svgcMarginSpace + (i * (bcWidth + bcMargin)) + bcMargin+10;
		    bcY = (svgcMarginHeight - bcHt - 2);
		    if (i == 0) {
		    	// the first arrs is a blank and is used for setting the top value so it is skipped
		    	//console.log ("i is "+i+", so skip...");
		    } else {
		    	//drawRectangleForChart(bcX, bcY, bcWidth, bcHt, true);	
		    	drawRectangleForChart(bcX, bcY, bcWidth, bcHt, i);	
		    }
		}
		// here is where you put the span for tooltip
		for (var i = 0; i < totalChartBars; i++) {
		    var arrchartVal = skillArr[i].split(",");
		    bcVal = parseInt(arrchartVal[1]);
		    //console.log("bcVal = "+bcVal);
		    bcHt = (bcVal * svgcHeight / maximumDataValue);
		    bcX = svgcMarginSpace + (i * (bcWidth + bcMargin)) + bcMargin+10;
		    bcY = (svgcMarginHeight - bcHt - 2);
		    if (i == 0) {
		    	// the first arrs is a blank and is used for setting the top value so it is skipped
		    	//console.log ("i is "+i+", so skip...");
		    } else {
		    	//drawRectangleForChart(bcX, bcY, bcWidth, bcHt, true);	
		    	//console.log("just b4 adding tool tip");
		    	addToolTip(bcX, bcY, bcWidth, bcHt, i);	
		    }
		}		
	}

	//function to clear the SVG contents
	function clearGraph(svg) {
		//console.log("clearing the barchart...");
	    while (svg.lastChild) {
	      svg.removeChild(svg.lastChild);
	    }
	}

	//Function to Draw Barchart
	//function drawBarChart()
	function drawBarChart(chart1, chart2, sArr) {
		//svg = document.getElementsByTagName('svg')[0];
		//svg =document.getElementById("svgcont");
		svg =document.getElementById(chart2);
		svgContainer = document.getElementById(chart1);
		//var rdbarchart = document.getElementById('rdbarchart');
		//rdbarchart.addEventListener('click', function () {
	    clearGraph(svg);
	    barChartSettings(sArr);
	    drawAxisLableAndMarkers(sArr);
	    drawChartWithCalculation(sArr);
		//}, false);
	}

	//window.onload = drawBarChart;
	//console.log("loading the barchart...."); 
	drawBarChart("svgcontainer1", "svgbc1", frontendSkills);
	drawBarChart("svgcontainer2", "svgbc2", backendSkills);
	drawBarChart("svgcontainer3", "svgbc3", otherSkills);
})(window);