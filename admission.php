<?php

session_start();

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
    //echo $_SESSION['firstName'] . " " . $_SESSION['lastName'] . " " . $_SESSION['email'];

	$servername = "localhost";
	$username = "root";
	$password = "Violet2010!omg";
	$dbname = "UTD_CS";

	//Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	//Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	//Get values from form
	$ID = $_SESSION['ID'];
	$fname = $_SESSION['firstName'];
	$lname = $_SESSION['lastName'];
	$SAT = mysqli_real_escape_string($conn, $_POST['SATScore']);
	$GPA = mysqli_real_escape_string($conn, $_POST['GPA']);
	$DOB = mysqli_real_escape_string($conn, $_POST['dob']);
	$address = mysqli_real_escape_string($conn, $_POST['address']);
	$zipcode = mysqli_real_escape_string($conn, $_POST['zipcode']);

	
	//Query
	$sql = "INSERT INTO Students (StudentID, FirstName, LastName, SATScore, GPA, DateofBirth, Address, Zipcode)
			VALUES ($ID, '$fname', '$lname', $SAT, $GPA, '$DOB', '$address', $zipcode)";

	if ($conn->query($sql) === TRUE) {
		header('location: admissionSuccess.html');
	}
	else {
		//echo "Error: " . $sql . "<br>" . $conn->error;
		header('location: admissionFailed.html');
	}

	$conn->close();

} else { //Ask user to login first
    //echo "Please log in first to see this page.";
    header('Location: pleaseLogin.html');
}



?>