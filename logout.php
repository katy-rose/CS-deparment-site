<?php

session_start();

if (session_destroy()) {
	header("Location: logoutSuccess.html");
}
else
	header("Location: logoutFailed.html");
?>