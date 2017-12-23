
(function(window){

	var validator = {};

	validator.isEmailAddress = function (email) {
		for (var i = 0; i < email.length; i++) {
			//koko@ko.com ==> true
			//@koko.com ==> false
			//koko@ ==> false
			if (email[i] == "@") {
				if (i == 0) {
					console.log("email length = "+email.length+" i+1 = "+(i+1));
					console.log("email starts with @, thus, it's invalid...");
					return false;
				} else if (email.length == (i+1) ) {
					console.log("email length = "+email.length+" i+1 = "+(i+1));
					console.log("email ends with @, thus, it's invalid...");
					return false;
				} else {
					console.log("email seems to be valid... @ between 2 strings");
					return true;
				}
			}
		}
		console.log("email missing @, thus, invalid");
		return false;
	}

	validator.isBeforeToday = function (input) {

		//if (typeof input === "string") {

		//}
		var inputDate = new Date(input);
		console.log("Input date is "+inputDate);
		var currDate = new Date();
		console.log("Current date is "+currDate);
		if (currDate.getTime() > inputDate.getTime()){
			console.log("date is before today");
			return true;
		}
		return false;
	}

	validator.isEmpty = function (str) {
		if (str.length == 0 || str == "" || str == " ") {
			console.log("field is empty...");
			return true;
		}
		return false;
	}

	
	window.validator = validator; //expose to global	

})(window);

