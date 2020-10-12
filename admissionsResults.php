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

	$id = $_SESSION['ID'];


	$query = mysqli_query($conn, "SELECT * FROM Students WHERE StudentID=$id");

	//get number of returns from query
	$rows = mysqli_num_rows($query);
	if ($rows == 1){
		$array = $query->fetch_assoc();
		$gpa = $array["GPA"];
		$SAT = $array["SATScore"];

		//check if student is admitted based on scores
		if ($gpa > 3.2 && $SAT > 1200){
			header('Location: admitted.html');
		}
		else {
			header('Location: rejected.html');
		}

	}
	else //else if query results not equal to 1, ask them to apply
		header('Location: admissionsMustApplyFirst.html');

	$conn->close();

} else { //Ask user to login first
    //echo "Please log in first to see this page.";
    header('Location: pleaseLogin.html');
}


?>