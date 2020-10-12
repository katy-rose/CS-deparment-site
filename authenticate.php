<?php

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

//get values from form
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['psw']);

//run query to find users with input email and password
$query = mysqli_query($conn, "SELECT * FROM users WHERE Email='$email' AND Password='$password'");

//get number of returns from query
$rows = mysqli_num_rows($query);
if ($rows == 1){
	$array = $query->fetch_assoc();
	$id = $array["ID"];
	$fname = $array["FirstName"];
	$lname = $array["LastName"];

	session_start();
	$_SESSION['ID'] = $id;
	$_SESSION['email'] = $email;
	$_SESSION['firstName'] = $fname;
	$_SESSION['lastName'] = $lname;
	$_SESSION['loggedin'] = TRUE;
	header('location: loginSucess.html');
	
}
else
	header('location: loginFailed.html');

$conn->close();
?>