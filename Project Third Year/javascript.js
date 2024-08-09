window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const nav = document.querySelector('.nav');
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
}

let list = document.querySelectorAll('.list');
let card = document.querySelectorAll('.card');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for (let k = 0; k < card.length; k++) {
            card[k].classList.remove('active');
            card[k].classList.add('hide');

            if (card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                card[k].classList.remove('hide');
                card[k].classList.add('active');
            }
        }
    });
}

function showLogin() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'block';
}

function showSignup() {
    const signupForm = document.getElementById('signupForm');
    signupForm.style.display = 'block';
}

function closeForm(formId) {
    var form = document.getElementById(formId);
    form.style.display = "none";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeAllForms();
    }
});

function closeForm(formId) {
    var form = document.getElementById(formId);
    form.style.display = "none";
}

function closeAllForms() {
    closeForm("loginForm");
    closeForm("signupForm");
}

document.addEventListener('DOMContentLoaded', function() {
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const item = this.closest('.card').querySelector('h4').textContent;
            const price = this.closest('.card').querySelector('.info span').textContent;
            handleBuyNow(item, price);
        });
    });
});

function handleBuyNow(item, price) {
    const url = `checkout.html?item=${encodeURIComponent(item)}&price=${encodeURIComponent(price)}`;
    window.location.href = url;
}

function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Show the success message
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';

        // Clear the form inputs
        const form = document.getElementById('signupFormElement');
        form.reset();

        // Hide the success message after 3 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
    }

    function closeForm(formId) {
        document.getElementById(formId).style.display = 'none'; // Hide the form container
    }