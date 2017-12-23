
(function(window){

	var calc = {};

	calc.result = "";

	calc.display = document.getElementById('display');

	calc.sevenBtn = function(){
		this.display.value += document.getElementById('seven').firstChild.nodeValue;
	}; 

	calc.eightBtn = function(){
		this.display.value += document.getElementById('eight').firstChild.nodeValue;
	};

	calc.nineBtn = function(){
		this.display.value += document.getElementById('nine').firstChild.nodeValue;
	};

	calc.plusBtn = function(){
		this.display.value += document.getElementById('plus').firstChild.nodeValue;
	};

	calc.fourBtn = function(){
		this.display.value += document.getElementById('four').firstChild.nodeValue;
	};

	calc.fiveBtn = function(){
		this.display.value += document.getElementById('five').firstChild.nodeValue;
	}; 

	calc.sixBtn = function(){
		this.display.value += document.getElementById('six').firstChild.nodeValue;
	};

	calc.oneBtn = function(){
		this.display.value += document.getElementById('one').firstChild.nodeValue;
	};

	calc.twoBtn = function(){
		this.display.value += document.getElementById('two').firstChild.nodeValue;
	};  


	calc.threeBtn = function(){
		this.display.value += document.getElementById('three').firstChild.nodeValue;
	};

	calc.minusBtn = function(){
		this.display.value += document.getElementById('minus').firstChild.nodeValue;
	};

	calc.divideBtn = function(){
		this.display.value += document.getElementById('divide').firstChild.nodeValue;
	};

	calc.zeroBtn = function(){
		this.display.value += document.getElementById('zero').firstChild.nodeValue;
	}; 
  
	calc.dotBtn = function(){
		this.display.value += document.getElementById('dot').firstChild.nodeValue;
	}; 

	calc.multiplyBtn = function(){
		//this.display.value += document.getElementById('multiply').firstChild.nodeValue;
		this.display.value += "*";
	};

	calc.clearBtn = function() {
		this.display.value = "";
	};

	calc.delBtn = function(){
		var removeNum = this.display.value.length;
		if(this.display.value !== ""){
			removeNum = removeNum - 1;
			this.display.value = this.display.value.slice(0,removeNum);
		}
	};

	calc.paramBtn = function(){
		var line = "";
	};

	calc.percentBtn = function() {
		this.display.value += document.getElementById("percent").firstChild.nodeValue;
	};

	var isItemInArrs = function(arrs,item) {
		for (var i = 0; i < arrs.length; i++) {
			if (arrs[i] === item) {
				return true;
			}
		}
		return false;
	}

	calc.equalBtn = function(){
		
		if (isItemInArrs(this.display.value,"%")) {
			console.log("fixing percent display... "+this.display.value);
			var line = "";
			for (var i = 0; i < this.display.value.length; i++) {
				if (this.display.value[i] === "%") {
					//console.log("i is at "+i+" and line is... "+line);
					line += "*";
					//console.log("i is now at "+i+" and line is now... "+line);
				} else {
					line += this.display.value[i];
				}
			}
			line += "/100";
			console.log("to... "+line);
			this.display.value = line;
		}
		
		console.log("evaluating...");
		this.result = eval(this.display.value);
		this.display.value = this.result;
	};

	window.calc = calc;

})(window);