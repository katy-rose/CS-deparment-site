<?php

session_start();

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
	include('statisticsData.php'); 
}

else {
	header('Location: pleaseLogin.html');
}
	

	