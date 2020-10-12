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

//Get values from form
$fname = mysqli_real_escape_string($conn, $_POST['firstName']);
$lname = mysqli_real_escape_string($conn, $_POST['lastName']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$pwd = mysqli_real_escape_string($conn, $_POST['psw']);


//Query
$sql = "INSERT INTO users (FirstName, LastName, Email, Password)
		VALUES ('$fname', '$lname', '$email', '$pwd')";

if ($conn->query($sql) === TRUE) {
	//echo "New record created successfully.";
	header('location: registerSuccess.html');
}
else {
	//echo "Error: " . $sql . "<br>" . $conn->error;
	header('location: registerFailed.html');
}

$conn->close();


?>