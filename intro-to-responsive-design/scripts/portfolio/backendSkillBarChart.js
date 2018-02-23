(function(window){

	// current skills out of 100 possible percent score
	console.log("frontendSkillBarChart....");
	var skillArr = new Array();
	skillArr[0] = "blank, 100" // blank sets the high limit 
	skillArr[1] = "JavaScript, 78";
	skillArr[2] = "HTML, 75";
	skillArr[3] = "CSS, 70";
	skillArr[4] = "ReactJS, 10";
	skillArr[5] = "jQuerry, 20";

	// global declaration
	var svg2;
	
	// the chart dimension settings
	var svgcWidth, svgcHeight, svgcMargin, svgcSpace;
	var svgcMarginSpace, svgcMarginheight;

	// the bar properties declaration
	var bcWidth, bcMargin, totalChartBars, maximumDataValue, bcWidthMargin;

	// the axis properties
	var totalLabelOnYAxis;

	// function to set bar charts
	function barChartSettings() {
		svgcMargin = 20;
		svgcSpace = 60;
		svgcHeight = svg.height.baseVal.value - 2 * svgcMargin - svgcSpace;
		svgcWidth = svg.width.baseVal.value - 2 * svgcMargin - svgcSpace;
		svgcMarginSpace = svgcMargin + svgcSpace;
		svgcMarginHeight = svgcMargin + svgcHeight;
		console.log("svgcHeight = "+svgcHeight);
		//The Bar Properties
		bcMargin = 15;
		totalChartBars = skillArr.length;
		bcWidth = (svgcWidth / totalChartBars) - bcMargin;
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
    svg2.appendChild(dataAxis);
	}

	//Function to Draw Markers on the Axis
	function drawAxisMarkers() {
		var numMarkers = parseInt(maximumDataValue/totalLabelOnYAxis);
		console.log("numMarkers = "+numMarkers)
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
	    console.log("bool test: "+ (markerVal == 0));
	    switch (true) {
	    	case (markerVal == 0):
	    		console.log("markerVal in case (markerVal == 0): "+markerVal);
	    		// do nothing at level 0
	    		break;
	    	case (markerVal == 25):
	    		console.log("markerVal in case (markerVal == 25): "+markerVal);
	    		txtNode = "Learning";
	    		break;
	    	case (markerVal == 50):
	    		console.log("markerVal in case (markerVal == 50): "+markerVal);
	    	  txtNode = "Competent";
	    	  break;
	    	case (markerVal == 75):
	    		console.log("markerVal in case (markerVal == 75): "+markerVal);
	    	  txtNode = "Proficient";
	    	  break;
	    	case (markerVal == 100):
	    		console.log("markerVal in case (markerVal == 100): "+markerVal);
	    		txtNode = "Expert";
	    		break;
	    }
	    console.log("txtNode: "+txtNode);
	    textelement.setAttribute('font-family','sans-serif');
	    textelement.setAttribute('font-size','14');
	    txtnode = document.createTextNode(txtNode);
	    console.log("txtnode = "+txtnode.nodeValue);
	    textelement.appendChild(txtnode);
	    svg2.appendChild(textelement);
		}

		//On x Axis
		for (var i = 0; i < totalChartBars; i++) {
	    arrVal = skillArr[i].split(",");
	    name = arrVal[0];
	    console.log("name = "+name);
	    if (name == "blank") {
	    	console.log("name is "+name+", so skip it....");
	    } else {
		    markerXPosition = svgcMarginSpace + bcMargin + (i * (bcWidth + bcMargin)) + (bcWidth / 2);
		    markerYPosition = svgcMarginHeight + 20;
		    rotateDegree = 45;
		    console.log("X: "+markerXPosition+", Y: "+markerYPosition);		   
		    textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');
		    textelement.setAttribute('dx', markerXPosition);
		    textelement.setAttribute('dy', markerYPosition);
		    // rotate the markers on the x-axis
		    switch (true) {
		    	case (totalChartBars - (totalChartBars - i) == 1):
		    		console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
		    		textelement.setAttribute('transform',"rotate(45 165 200)");
		    		break;
		    	case (totalChartBars - (totalChartBars - i) == 2):
		    		console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
		    		textelement.setAttribute('transform',"rotate(45 205 200)");
		    		break;
		    	case (totalChartBars - (totalChartBars - i) == 3):
		    		console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
		    		textelement.setAttribute('transform',"rotate(45 250 200)");
		    		break;	
 					case (totalChartBars - (totalChartBars - i) == 4):
		    		console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
		    		textelement.setAttribute('transform',"rotate(45 290 200)");
		    		break;
 					case (totalChartBars - (totalChartBars - i) == 5):
		    		console.log("(totalChartBars - (totalChartBars - i): "+(totalChartBars - (totalChartBars - i)));
		    		textelement.setAttribute('transform',"rotate(45 335 200)");
		    		break;		    				    			    		
		    }		    
		    textelement.setAttribute('font-family','sans-serif');
		    textelement.setAttribute('font-size','12');
		    txtnode = document.createTextNode(name);
		    console.log("txtnode = "+txtnode.nodeValue);
		    textelement.appendChild(txtnode);
		    svg2.appendChild(textelement);
	    }
		}
  }

	//Method to Draw Axis Label
	function drawAxisLableAndMarkers() {
    //Y-Axis
    // remove Y-Axis -- drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace, svgcMargin);
    //X-Axis
    drawXYAxis(svgcMarginSpace, svgcMarginHeight, svgcMarginSpace + bcWidth+500, svgcMarginHeight);
    drawAxisMarkers();
	}	

	//Method to Draw rectangle
	function drawRectangleForChart(x,y,wd,ht,index) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
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
    
    svg2.appendChild(rect);
	} 

	//Function to draw barchart for all entries in the Population Array
	function drawChartWithCalculation() {
		for (var i = 0; i < totalChartBars; i++) {
	    var arrchartVal = skillArr[i].split(",");
	    bcVal = parseInt(arrchartVal[1]);
	    console.log("bcVal = "+bcVal);
	    bcHt = (bcVal * svgcHeight / maximumDataValue);
	    bcX = svgcMarginSpace + (i * (bcWidth + bcMargin)) + bcMargin+10;
	    bcY = (svgcMarginHeight - bcHt - 2);
	    if (i == 0) {
	    	// the first arrs is a blank and is used for setting the top value so it is skipped
	    	console.log ("i is "+i+", so skip...");
	    } else {
	    	//drawRectangleForChart(bcX, bcY, bcWidth, bcHt, true);	
	    	drawRectangleForChart(bcX, bcY, bcWidth, bcHt, i);	
	    }
	    
		}
	}

	//function to clear the SVG contents
	function clearGraph() {
    while (svg2.lastChild) {
      svg2.removeChild(svg2.lastChild);
    }
	}

	//Function to Draw Barchart
	function drawBarChart() {
		//svg = document.getElementsByTagName('svg')[0];
		svg2 =document.getElementById("svgcont2");
		//var rdbarchart = document.getElementById('rdbarchart');
		//rdbarchart.addEventListener('click', function () {
	    clearGraph();
	    barChartSettings();
	    drawAxisLableAndMarkers();
	    drawChartWithCalculation();
		//}, false);
	}

	window.onload = drawBarChart; 
})(window);