//Variables to change background color and increase font size
var body = document.getElementsByTagName("body");
var middle = document.querySelector(".middle");
var right = document.querySelector(".right");
var footer = document.querySelector(".footer");


//variables for Students page survey
var beginPage = document.querySelector(".surveyStart");
var q = document.querySelectorAll(".question");
var prevButton = document.querySelector("#prevButton");
var nextButton = document.querySelector("#nextButton");
var skipButton = document.querySelector("#skipButton");
var questionNum = 0;
var startTime;
var endTime;

//Get date and time to place into footer
function getDate() {
	var d = new Date();
	var day = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();

	var h = d.getHours();
	var m = d.getMinutes();
	m = timeFix(m);
	var s = d.getSeconds();
	s = timeFix(s);
	var dateStr = day + "/" + month + "/" + year + " Time: " + h + ":" + m + ":" + s;
	document.getElementById("date").innerHTML = dateStr;
	var t = setTimeout(getDate, 500);
}

function timeFix(t) {
	if (t < 10)
		t = "0" + t;
	return t;
}

//Change background color
function changeBackground() {
	for (var i = 0; i < body.length; i++)
		body[i].style.backgroundColor = "#c7cfc6";
}

//Double font size
function increaseFont() {
	middle.style.fontSize = "2em";
	right.style.fontSize = "2em";
	footer.style.fontSize = "2em";
}



// ***********FACULTY PAGE ************
function showText(text) {
	if (text.style.display === "block")
		text.style.display = "none";
	else
		text.style.display = "block";
}




// ****************CONTACT PAGE ******************
//Contact form text input changes color
function inputColor(input) {
	input.style.backgroundColor = "#c7cfc6";
}

//Validate input values on contact form
function validateContact() {

	var formCorrect = true;
	var fname = document.getElementById("first name").value;
	var lname = document.getElementById("last name").value;
	var phoneNumber = document.getElementById("telephone").value;
	var email = document.getElementById("email").value;
	var comments = document.getElementById("comments").value;
	var letters = /^[A-Za-z]+$/;
	var phoneNumCheck = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;

	//Clear any previous error messages on the screen
	document.getElementById("fnameAlpha").innerHTML = "";
	document.getElementById("lnameAlpha").innerHTML = "";
	document.getElementById("radioWrong").innerHTML = "";
	document.getElementById("emailWrong").innerHTML = "";
	document.getElementById("numWrong").innerHTML = "";
	document.getElementById("commentsWrong").innerHTML = "";

	
	//Check if names were entered
	if (!fname || !lname){
		document.getElementById("fnameAlpha").innerHTML = " Please enter a first and last name.";
		formCorrect = false;
	}
	//Validate if first and last name contain numbers
	else if (!fname.match(letters)) {
		document.getElementById("fnameAlpha").innerHTML = " Please enter alpha characters only.";
		formCorrect = false;
	}
	else if (!lname.match(letters)) {
		document.getElementById("lnameAlpha").innerHTML = " Please enter alpha characters only.";
		formCorrect = false;
	}
	//Validate if first and last name match
	else if (fname.match(lname)) {
		document.getElementById("lnameAlpha").innerHTML = " First and last name must be different.";
		formCorrect = false;
	}
	//Capitalize first letter of names
	else {
		fname = fname[0].toUpperCase() + fname.slice(1);
		lname = lname[0].toUpperCase() + lname.slice(1);
	}
	
	//Validate gender is selected
	if (!document.getElementById("male").checked && !document.getElementById("female").checked &&
		!document.getElementById("Other").checked) {
		document.getElementById("radioWrong").innerHTML = "Please select a gender.";
		formCorrect = false;
	}

	//Validate if email contains @ and .
	if ((email.search("@") < 0) || (email.search(".") < 0)){
		document.getElementById("emailWrong").innerHTML = " Please enter email in format bob@utdallas.edu";
		formCorrect = false;
	}
	//Validate if phone number in correct format
	if (!phoneNumber.match(phoneNumCheck)) {
		document.getElementById("numWrong").innerHTML = " Please enter phone number in format (XXX)-XXX-XXXX";
		formCorrect = false;
	}

	//Check if comment longer than 10 characters
	if (comments.length < 10) {
		document.getElementById("commentsWrong").innerHTML = "Please enter 10 or more characters.";
		formCorrect = false;
	}


	if (formCorrect) {
		document.getElementById("contactForm").reset();
		document.getElementById("submitSuccess").innerHTML = "Contact form submitted.";
		document.getElementById("fnameAlpha").innerHTML = "";
		document.getElementById("lnameAlpha").innerHTML = "";
		document.getElementById("radioWrong").innerHTML = "";
		document.getElementById("emailWrong").innerHTML = "";
		document.getElementById("numWrong").innerHTML = "";
		document.getElementById("commentsWrong").innerHTML = "";

		//Assignment 4 make JSON object
		var obj = {firstName: fname, lastName: lname, phone: phoneNumber, emailAddress: email, 
					contactComments: comments};
		var contactJSON = JSON.stringify(obj);
	}

}

// *********************ADMISSIONS PAGE **************************
function validateAdmissions() {

	var formValid = true;
	var letters = /^[A-Za-z]+$/;
	var numbers = /^[0-9]*$/;
	var gpaExp = /^[0-4]\.\d\d$/;
	var dobExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

	//check if first name empty
	if (document.admissionsForm.first.value == "") {
		document.getElementById("firstError").innerHTML = " Please enter a first name.";
		formValid = false;
	}
	//Check if name is alpha only
	if (!document.admissionsForm.first.value.match(letters)) {
		document.getElementById("firstError").innerHTML = " Please enter letters only.";
		formValid = false;
	}
	//check if last name empty
	if (document.admissionsForm.last.value == "") {
		document.getElementById("lastError").innerHTML = " Please enter a last name.";
		formValid = false;
	}
	//Check if name is alpha only
	if (!document.admissionsForm.last.value.match(letters)) {
		document.getElementById("lastError").innerHTML = " Please enter letters only.";
		formValid = false;
	}
	//Check if SAT empty
	if (document.admissionsForm.SAT.value == "") {
		document.getElementById("SATError").innerHTML = " Please enter an SAT value.";
		formValid = false;
	}
	//Check if SAT numbers only
	if (!document.admissionsForm.SAT.value.match(numbers)) {
		document.getElementById("SATError").innerHTML = " Please enter numbers only.";
		formValid = false;
	}
	//check if GPA empty
	if (document.admissionsForm.GPA.value == "") {
		document.getElementById("GPAError").innerHTML = " Please enter a GPA value.";
		formValid = false;
	}
	//check if gpa in expected form 3.11
	if (!document.admissionsForm.GPA.value.match(gpaExp)) {
		document.getElementById("GPAError").innerHTML = " Please enter value in format 3.12.";
		formValid = false;
	}
	//check if dob empty
	if (document.admissionsForm.dateOfBirth.value == "") {
		document.getElementById("DOBError").innerHTML = " Please enter a date of birth.";
		formValid = false;
	}
	
	if (document.admissionsForm.address.value == "") {
		document.getElementById("addressError").innerHTML = " Please enter an address.";
		formValid = false;
	}
	//check if zip is empty
	if (document.admissionsForm.zipcode.value == "") {
		document.getElementById("zipcodeError").innerHTML = " Please enter a zipcode.";
		formValid = false;
	}
	//check if zip is numbers only
	if (!document.admissionsForm.zipcode.value.match(numbers)) {
		document.getElementById("zipcodeError").innerHTML = " Please enter numbers only.";
		formValid = false;
	}

	if (formValid)
		return true
	else
		return false;
}


//********************REGISTER PAGE*********************//
function validateRegister() {

	var formValid = true;
	var letters = /^[A-Za-z]+$/;
	//check if all fields have been input
	if (document.registerForm.firstName.value == "" || document.registerForm.lastName.value == "" ||
		document.registerForm.email.value == "" || document.registerForm.psw.value == "" || 
		document.registerForm.pswRepeat.value == "") {
		document.getElementById("emptyError").innerHTML = " Please fill in all fields.";
		formValid = false;
	}
	//check if first name is letters only
	if (!document.registerForm.firstName.value.match(letters)) {
		document.getElementById("fNameError").innerHTML = " Please use letters only."
		formValid = false;
	}
	//check if last name is letters only
	if (!document.registerForm.lastName.value.match(letters)) {
		document.getElementById("lNameError").innerHTML = " Please use letters only."
		formValid = false;
	}
	//check if password is at least 8 characters
	if (document.registerForm.psw.value.length < 8) {
		document.getElementById("pswError").innerHTML = " Password must be at least 8 characters long.";
		formValid = false;
	}
	//check if passwords match
	if (document.registerForm.psw.value !== document.registerForm.pswRepeat.value) {
		document.getElementById("pswRepeatError").innerHTML = " Passwords must match.";
		formValid = false;
	}
	//check if email valid 
	if (document.registerForm.email.value.search(".edu") < 0 || 
		document.registerForm.email.value.search("@") < 0) {
		document.getElementById("emailError").innerHTML = " Please enter email in format bob@utd.edu.";
		formVald = false;
	}

	if (formValid)
		return true;
	else
		return false;

}



// ****************STUDENTS PAGE ***************
function beginSurvey() {
	startTime = new Date().getTime();
	beginPage.style.display = "none";
	q[0].style.display = "block";
	nextButton.style.display = "inline";
	skipButton.style.display = "inline";
}

function next() {
	prevButton.style.display = "inline";
	q[questionNum].style.display = "none";
	questionNum++;
	q[questionNum].style.display = "block";
	if (questionNum === 6) {
		prevButton.style.display = "none";
		nextButton.style.display = "none";
		skipButton.style.display = "none";
		endTime = new Date().getTime();
		var timeDiff = endTime - startTime;
		var totalTime = calcTime(timeDiff);
		document.getElementById("surveyTime").innerHTML = totalTime;

		//Assignment 4: show survey summary
		$(".question").css("display", "block");
		$(".radio").css("display", "none");
		$(".surveySummary").css("display", "block");
		showSurveyResults();

	}
}

function previous() {
	q[questionNum].style.display = "none";
	questionNum--;
	if (questionNum === 0) {
		prevButton.style.display = "none";
		q[questionNum].style.display = "block";
	}
	else {
		q[questionNum].style.display = "block";
	}
}

function skip() {
	prevButton.style.display = "inline";
	q[questionNum].style.display = "none";
	questionNum++;
	q[questionNum].style.display = "block";
	if (questionNum === 6) {
		prevButton.style.display = "none";
		nextButton.style.display = "none";
		skipButton.style.display = "none";
		endTime = new Date().getTime();
		var timeDiff = endTime - startTime;
		var totalTime = calcTime(timeDiff);
		document.getElementById("surveyTime").innerHTML = totalTime;

		//Assignment 4: show survey summary
		$(".question").css("display", "block");
		$(".radio").css("display", "none");
		$(".surveySummary").css("display", "block");
		showSurveyResults();
	}
}

function calcTime(ms) {
	var minutes = Math.floor((ms / 1000 / 60) % 60);
	var seconds = Math.floor((ms / 1000) % 60);
	return "Survey completed in " + minutes + " minutes and " + seconds + " seconds.";
}

//jQuery change opacity of radio buttons when one is clicked
$("input[name=classification]").click(function(){
    $("input[name=classification]:checked+label").css("opacity", "1");
  $("input[name=classification]:not(:checked)+label").css("opacity", "0.5");
});
$("input[name=school]").click(function(){
    $("input[name=school]:checked+label").css("opacity", "1");
  $("input[name=school]:not(:checked)+label").css("opacity", "0.5");
});
$("input[name=inPerson]").click(function(){
    $("input[name=inPerson]:checked+label").css("opacity", "1");
  $("input[name=inPerson]:not(:checked)+label").css("opacity", "0.5");
});
$("input[name=online]").click(function(){
    $("input[name=online]:checked+label").css("opacity", "1");
  $("input[name=online]:not(:checked)+label").css("opacity", "0.5");
});
$("input[name=gap]").click(function(){
    $("input[name=gap]:checked+label").css("opacity", "1");
  $("input[name=gap]:not(:checked)+label").css("opacity", "0.5");
});
$("input[name=CC]").click(function(){
    $("input[name=CC]:checked+label").css("opacity", "1");
  $("input[name=CC]:not(:checked)+label").css("opacity", "0.5");
});

function showSurveyResults() {
	//get selected radio buttons
	var radioValue = new Array;
	radioValue[0] = $("input[name='classification']:checked").val();
	radioValue[1] = $("input[name='school']:checked").val();
	radioValue[2] = $("input[name='inPerson']:checked").val();
	radioValue[3] = $("input[name='online']:checked").val();
	radioValue[4] = $("input[name='gap']:checked").val();
	radioValue[5] = $("input[name='CC']:checked").val();

	//Determine if any questions were skipped/unanswered
	radioValue = checkIfUndefined(radioValue);

	//Display selections from survey
	$("#classification").html(radioValue[0]);
	$("#school").html(radioValue[1]);
	$("#inPerson").html(radioValue[2]);
	$("#online").html(radioValue[3]);
	$("#gap").html(radioValue[4]);
	$("#CC").html(radioValue[5]);
}

function checkIfUndefined(value) {

	for (var i = 0; i < value.length; i++) {
		if (value[i] === undefined)
			value[i] = "No answer chosen"
	}
	return value;
}

