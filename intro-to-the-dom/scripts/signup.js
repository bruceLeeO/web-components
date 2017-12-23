var signupForm = document.getElementById("signup");
var email = document.getElementById("email");
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var password = document.getElementById("pswd");
var dob = document.getElementById("dob");

//var alertMsg = "";
var errorMsg = "";

signupForm.addEventListener("submit",function(event){
	console.log("preventing default...");	
	event.preventDefault();

	firstName.className = "valid";
	lastName.className = "valid";
	email.className = "valid";

	errorMsg = "";

	if (validator.isEmpty(firstName.value)){
		console.log("first name is empty");
		firstName.className = "invalid";
		//alertMsg+="Please provide your first name\n";
		errorMsg+="Please provide your first name<br>";
	} else { 
		if (firstName.value.length < 2){
			console.log("first name should be at least 2 characters long");
			firstName.className = "invalid";
			//alertMsg+="first name should be at least 2 characters long\n";
			errorMsg+="first name should be at least 2 characters long<br>";
		}
	}

	if (validator.isEmpty(lastName.value)){
		console.log("last name is empty");
		lastName.className = "invalid";
		//alertMsg+="Please provide your last name\n";
		errorMsg+="Please provide your last name<br>";
	} else { 
		if (lastName.value.length < 2){
			console.log("last name should be at least 2 characters long");
			lastName.className = "invalid";
			//alertMsg+="last name should be at least 2 characters long\n";
			errorMsg+="last name should be at least 2 characters long<br>";
		}
	}

	if (validator.isEmpty(email.value)){
		console.log("email is empty");
		email.className = "invalid";
		//alertMsg+="Please provide your email";
		errorMsg+="Please provide your email<br>";
	} else if (!validator.isEmailAddress(email.value)){
		console.log("email is invalid");
		email.className = "invalid";
		//alertMsg+="Please provide a valid email address";
		errorMsg+="Please provide a valid email address<br>";
	} else if (validator.isEmailAddress(email.value)){
		console.log("email is valid");
		email.className = "valid";
	}

	if (validator.isEmpty(dob.value)){
		console.log("dob is empty");
		dob.className = "invalid";
		errorMsg+="Please provide your date of birth<br>";
	} else {
		if (validator.isBeforeToday(dob.value)){
			console.log("dob is valid");
			dob.className + "valid";
		} else {
			dob.className = "invalid";
			errorMsg+="Date of birth is not before today<br>";
		}
	}

	if (validator.isEmpty(password.value)){
		console.log("password is empty");
		password.className = "invalid";
		//alertMsg+="Please provide your password\n";
		errorMsg+="Please provide your password<br>";
	} else {
		if (password.value.length < 6 || password.value.length > 8){
			console.log("password should be 6 to 8 characters long");
			password.className = "invalid";
			//alertMsg+="password should be 6 to 8 characters long";
			errorMsg+="password should be 6 to 8 characters long";
		}
	}
	
	document.getElementById("errorMsg").innerHTML = errorMsg;

},false);

firstName.addEventListener("input", function(event){
	console.log("listening to first name");
	if (!validator.isEmpty(this.value)){
		firstName.className = "valid";
	}
},false);

lastName.addEventListener("input",function(event){
	console.log("listening to last name");
	if (!validator.isEmpty(this.value)){
		lastName.className = "valid";
	}
},false);

email.addEventListener("input",function(event){
	console.log("listening to email");
	if (validator.isEmailAddress(this.value)){
		email.className = "valid";
	}
},false);


dob.addEventListener("input",function(event){
	console.log("listening to dob");
	if (validator.isBeforeToday(this.value)){
		dob.className = "valid"
	}
},false);

password.addEventListener("input",function(event){
	console.log("listening to password");
	if (!validator.isEmpty(this.value)){
		password.className = "valid";
	}
},false);