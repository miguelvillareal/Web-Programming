// Miguel Villareal CS 212 Project 3
function blankCheck()
{
	var username = document.getElementById("username").value;

	var name = document.getElementById("name").value;

	var email = document.getElementById("email").value;

	var password = document.getElementById("password").value;

	var passwordConfirmation = document.getElementById("password-confirmation").value;

	var checkIfGood = false;

  var usernameErr= "";

  var nameErr = "";

  var emailErr = "";

  var passErr = "";

  var passConErr = "";

	if(username == "")
	{
		var usernameErr= " username: ";
		checkIfGood = true;
	}
	if(name == "")
	{
		var nameErr= " name: ";
		checkIfGood = true;
	}
	if(email == "")
	{
		var emailErr= " email address: ";
		checkIfGood = true;
	}
	if(password == "")
	{
		var passErr= " password: ";
		checkIfGood = true;
	}
	if(passwordConfirmation == "")
	{
		var passConErr= " password confirmation: ";
		checkIfGood = true;
	}
	if(checkIfGood == true)
	{
		document.getElementById("required-field-error").innerHTML = "Missing required values:" + usernameErr + nameErr+ emailErr + passErr+ passConErr;
	}
	if(checkIfGood == false)
	{
		document.getElementById("required-field-error").innerHTML = "";
	}
}
// Checks The Email Input
function emailCheck()
{
	var email = document.getElementById("email").value;

	var emailInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	var emailReturn = emailInput.test(email);

  if(emailReturn == true)
	{
		document.getElementById("invalid-email-error").innerHTML = "";
	}
	if(emailReturn == false)
	{
		document.getElementById("invalid-email-error").innerHTML = "Invalid Email";
	}
}
// Checks The PassWord Input
function passwordCheck()
{
	var password = document.getElementById("password").value;

	var passwordconfirmation = document.getElementById("password-confirmation").value;

  var password = document.getElementById("password").value;

	var checkUpper= /[A-Z]/;

	var checkNum = /[0-9]/;

	if(password != passwordconfirmation)
	{
		document.getElementById("password-mismatch-error").innerHTML = "Mismatched Passwords";
	}
	else{
		document.getElementById("password-mismatch-error").innerHTML = "";
	}

	if(password.length >= 8 && password.match(checkUpper) && password.match(checkNum))
	{
		document.getElementById("unmet-password-constraints-error").innerHTML = "";
	}
	else
	{
		document.getElementById("unmet-password-constraints-error").innerHTML = "Passwords must be at least 8 characters in length, contain one capital letter, and contain one number";
	}
}
// Checks The Completed form to make sure it is cmplete
function formCheck()
{
  var username = document.getElementById("username").value;

  var name = document.getElementById("name").value;

  var email = document.getElementById("email").value;

  var password = document.getElementById("password").value;

  var password_confirmation = document.getElementById("password-confirmation").value;

  if ((username == "") || (name = "") || (email == "") || (password == "") || (password_confirmation == ""))
  {
    window.alert("Not complete");
  }
  else
  {
    window.alert("You Are Registered.");
  }
}
