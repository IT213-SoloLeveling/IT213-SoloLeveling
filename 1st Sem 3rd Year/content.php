<?php
    // Start the session
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

    // Fetch error message and control whether to show the login overlay
    $error = '';
    $show_login = false;
    if (isset($_SESSION['error_message'])) {
        $error = $_SESSION['error_message'];
        unset($_SESSION['error_message']); // Clear it after displaying
        $show_login = isset($_SESSION['show_login']) ? $_SESSION['show_login'] : false;
        unset($_SESSION['show_login']); // Clear the flag after displaying
    }
?>

<ul class="bakgrawnd">
    <?php foreach ($gamingPcSets as $pcSet) : ?>
    <li class="cardani">
        <img src="images/<?= $pcSet['image']; ?>" alt="<?= $pcSet['brand']; ?>" />
        <p class="brand-text" style="font-size: 25px;"><strong><?= $pcSet['brand']; ?></strong></p>
        <p class="type-text">Type: <?= $pcSet['type']; ?></p>
        <p>Country: <span style="font-style: italic;"><?= $pcSet['country']; ?></span></p>
    </li>
    <?php endforeach ?>    
</ul>

<div class="overlay" id="login-overlay" style="<?= $show_login ? 'display: flex;' : 'display: none;' ?>">
    <div class="login-form">
        <span class="close-btn" id="close-login">&times;</span> <!-- Close button -->
        <h2>Login</h2>

        <form action="check_login.php" method="POST"> 
            <div class="input-box">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-box">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            <img id="imgcap" onclick="reloadCaptcha();return false;" src= "inc/captcha.php" alt="CAPTCHA" width="100" height="30"><br/>
        <label>CAPTCHA  : <input id="captcha" placeholder="captcha" style="width:110px" name="captcha">		
        
			</div>

            <!-- Display the error message above the login button if it exists -->
            <?php if (!empty($error)): ?>
                <div style="color: red; margin-bottom: 10px; text-align: center;">
                    <?= $error ?>
                </div>
            <?php endif; ?>

            <button type="submit" class="login-btn">Login</button>
        </form>
    </div>
</div>




<style>
    body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        background-color: #0b6844; /* Optional background */
    }

    .bakgrawnd {
        text-align: center;
        justify-content: center;
        display: flex;
        gap: 20px;
        list-style-type: none;
        padding: 300px;
        margin: 0;
    }

    .cardani {
        text-align: center;
        background-color: #dbd9d9;
        padding: 20px;
        border-radius: 8px;
        width: 290px;
        height: 400px;
    }

    .cardani img {
        width: 250px; 
        height: 200px; 
        box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.3);
        border-radius: 15px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .cardani img:hover{
        transform: scale(1.1); 
    }

    @keyframes slideInOnHover {
    0% {
        opacity: 0;
        transform: translateX(-30px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.cardani:hover p.brand-text {
    animation: slideInOnHover 1.5s ease-in-out forwards;
}

    .overlay {
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
    display: none; /* Hidden by default */
    justify-content: center; 
    align-items: center; 
    z-index: 1000; /* Ensure it covers all content */
}

 /* Login form styling */
 .login-form {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 100%;
    max-width: 400px;
    position: relative;
}

/* Close button styling */
.close-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
}

.login-form h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #0b6844;
}

.login-form .input-box {
    margin-bottom: 15px;
    text-align: left;
}

.login-form .input-box label {
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;
}

.login-form .input-box input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

.login-btn {
    background-color: #0b6844;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.login-btn:hover {
    background-color: #09573a;
}


    /* Responsive design for different screen sizes */
    @media (max-width: 1200px) {
        .collage-item {
            max-width: 300px;
        }
    }

    @media (max-width: 900px) {
        .collage-item {
            max-width: 250px;
        }
    }

    @media (max-width: 600px) {
        .collage-item {
            max-width: 200px;
        }
    }

    @media (max-width: 400px) {
        .collage-item {
            max-width: 150px;
        }
    }

</style>

<script>
    // Get elements
    const loginLink = document.getElementById('login-link');
    const loginOverlay = document.getElementById('login-overlay');
    const closeLoginBtn = document.getElementById('close-login');

    // Function to show the login overlay
    function showLoginOverlay() {
        loginOverlay.style.display = 'flex'; // Display the overlay as flex to center content
    }

    // Function to hide the login overlay
    function hideLoginOverlay() {
        loginOverlay.style.display = 'none'; // Hide the overlay
    }

    // Show the login form when the login link is clicked
    loginLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of the link (which is navigation)
        showLoginOverlay(); // Show the login overlay
    });

    // Close the login form when the close button is clicked
    closeLoginBtn.addEventListener('click', function() {
        hideLoginOverlay(); // Hide the overlay
    });

    // Close the login form when clicking outside the form
    window.addEventListener('click', function(e) {
        if (e.target === loginOverlay) {
            hideLoginOverlay(); // Hide overlay if clicked outside the form
        }
    });

    function hideLoginOverlay() {
        loginOverlay.style.display = 'none'; // Hide the overlay
    }

    // Close the login form when the close button is clicked
    closeLoginBtn.addEventListener('click', function() {
        hideLoginOverlay(); // Hide the overlay
    });

    // Close the login form when clicking outside the form
    window.addEventListener('click', function(e) {
        if (e.target === loginOverlay) {
            hideLoginOverlay(); // Hide overlay if clicked outside the form
        }
    });


</script>
