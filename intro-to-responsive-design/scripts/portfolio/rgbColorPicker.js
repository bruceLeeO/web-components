(function(window) {

	var rgbColor = {};

	rgbColor.updateRed = function(val) {
	  document.getElementById('redInput').value=val;
	  var rVal=document.getElementsByClassName("rgbred");
	  var newRGB = "rgb("+val+",0,0)";
	  rVal[0].style.background=newRGB;

	  updateRGB(document.getElementById('redInput').value,document.getElementById('greenInput').value,document.getElementById('blueInput').value);
	}

	rgbColor.updateGreen = function(val) {
	  document.getElementById('greenInput').value=val;
	  var rVal=document.getElementsByClassName("rgbgreen");
	  var newRGB = "rgb(0,"+val+",0)";
	  rVal[0].style.background=newRGB;

	  updateRGB(document.getElementById('redInput').value,document.getElementById('greenInput').value,document.getElementById('blueInput').value);
	}

	rgbColor.updateBlue = function(val) {
	  document.getElementById('blueInput').value=val;
	  var rVal=document.getElementsByClassName("rgbblue");
	  var newRGB = "rgb(0,0,"+val+")";
	  rVal[0].style.background=newRGB;

	  updateRGB(document.getElementById('redInput').value,document.getElementById('greenInput').value,document.getElementById('blueInput').value);
	}

	var updateRGB = function(r,g,b) {
	  var rgbVal=document.getElementsByClassName("rgbColor");
	  var newRGB = "rgb("+r+","+g+","+b+")";
	  rgbVal[0].style.background=newRGB;
	}

	window.rgbColor = rgbColor;
})(window);