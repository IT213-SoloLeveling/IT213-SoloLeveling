<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get username and password from form
    $uname = trim($_POST['username']);
    $pword = trim($_POST['password']);
	$captcha=$_POST['captcha']; 

    
    $valid_username = 'admin';
    $valid_password = 'test';

    
    if ($uname === $valid_username && $pword === $valid_password) {
        // Correct credentials: Log the user in
        $_SESSION['logged_in'] = 'yes';
        $_SESSION['username'] = $uname;
        header("location: index.php"); 
    } else {
        
        $_SESSION['error_message'] = 'Invalid username or password.';
        $_SESSION['error_message'] = $captcha."----".$_SESSION["code"];
		$_SESSION['show_login'] = true; 
        header("location: index.php?page=login"); 
    }
    exit();
}
