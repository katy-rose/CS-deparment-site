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

//Number of students that applied
$query = mysqli_query($conn, "SELECT COUNT(StudentID) FROM Students");
$numStudents = $query->fetch_row();
//Get number of students accepted
$query = mysqli_query($conn, "SELECT COUNT(StudentID) FROM Students WHERE GPA > 3.2 AND SATScore > 1200");
$acceptedStudents = $query->fetch_row();
//Get students over 20 years old / 7300 days
$query = mysqli_query($conn, "SELECT COUNT(StudentID) FROM students WHERE DATEDIFF(CURRENT_DATE(), DateofBirth) > 7300");
$studentsOver20 = $query->fetch_row();
//Get average GPA
$query = mysqli_query($conn, "SELECT AVG(GPA) FROM Students");
$avgGPA = $query->fetch_row();
//Get students with GPA > 3.8 and SAT score > 1400
$query = mysqli_query($conn, "SELECT COUNT(StudentID) FROM Students WHERE GPA > 3.8 AND SATScore > 1400");
$greatStudents = $query->fetch_row();


?>

<!DOCTYPE html>
<html>
<head>
	<title>UTD Computer Science</title>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<body onload="getDate()">

<div class="header">
	<h1>The University of Texas at Dallas Department of Computer Science</h1>
</div>

<div class="container">
	<a href="index.html">Home</a>
	<a href="faculty.html">Faculty</a>
	<a href="students.html">Students</a>
	<a href="admissions.html">Admissions</a>
	<a href="contact.html">Contact</a>
	<a href="research.html">Research</a>
</div>

<div class="loginContainer">
	<a href="register.html">Register</a>
	<a href="login.html">Login</a>
	<a href="logout.php">Logout</a>
</div>


	<div class="left">
		<img src="images/logo.jfif" id="logo">	
	</div>

	<div class="middle">
		<h2 id="midHeader">Admissions Statistics</h2>
		<p>Number of students applied to program: <?php echo $numStudents[0] ?></p>
		<p>Number of students accepted into program: <?php echo $acceptedStudents[0] ?></p>
		<p>Applicants over 20 years old: <?php echo $studentsOver20[0] ?></p>
		<p>Average GPA of applicants: <?php echo $avgGPA[0] ?></p>
		<p>Applicants with GPA higher than 3.8 and SAT score greater than 1400: <?php echo $greatStudents[0] ?></p>
	</div>

	<div class="right">
		<h2>Events</h2>
		<h4>June 11</h4>
		<ul>
			<li>Web Programming Tutorial - Richard Min</li>
			<li>Azure AI Engineering Online Workshop</li>
		</ul>
		<h4>June 13</h4>
		<ul>
			<li>Architecting on AWS: Hands-on Workshop</li>
			<li>Deep-dive into Testing</li>
		</ul>
		<h4>June 14</h4>
		<ul>
			<li>Architecting on AWS: Hands-on Workshop</li>
			<li>HTML and JavaScript Review</li>
		</ul>
		<h4>June 15</h4>
		<ul>
			<li>Front End Development with Angular</li>
		</ul>
		<h4>June 16</h4>
		<ul>
			<li>Front End Development with Angular</li>
		</ul>
		<h4>June 17</h4>
		<ul>
			<li>Front End Development with Angular</li>
		</ul>
		<h4>June 18</h4>
		<ul>
			<li>Web Programming Tutorial - Richard Min</li>
		</ul>
		<h4>June 20</h4>
		<ul>
			<li>Front End Development with Angular</li>
			<li>AWS Saturday Training Series</li>
			<li>Architecting on AWS: Hands-on Workshop</li>
		</ul>
	</div>


<div class="footer">
	<a href="contact.html">Contact</a>
	<p>Copyright © 2020 - The University of Texas at Dallas - Erik Jonsson School of Engineering & Computer Science - Department of Computer Science</p>
	<p>Katherine Thompson KRT021000</p>
	<p id="date"></p>
	<button type="button" onclick="changeBackground()">Change Background</button>
	<button type="button" onclick="increaseFont()">Increase Font Size</button>
</div>

<script type="text/javascript" src="utd.js"></script>
</body>
</html>