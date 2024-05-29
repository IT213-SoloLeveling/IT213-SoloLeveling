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

window.addEventListener('scroll', function() {
    var anime = document.querySelectorAll('.animeX');

    for (var s = 0; s < anime.length; s++) {
        var windowheight = window.innerHeight;
        var animetop = anime[s].getBoundingClientRect().top;
        var animepoint = 150;

        if (animetop < windowheight - animepoint) {
            anime[s].classList.add('active');
        } else {
            anime[s].classList.remove('active');
        }
    }
});

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

function toggleMenu() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Function to handle buy now button click
function handleBuyNow(item, price) {
    console.log("Item: ", item);
    console.log("Price: ", price);
    const url = `checkout.html?item=${encodeURIComponent(item)}&price=${encodeURIComponent(price)}`;
    window.location.href = url;
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

function logout() {
        // Perform logout action
        // Redirect to index.html or any other desired page
        window.location.href = "indexl.html";
    }

 
    // Function to update the stock of a game
    function updateStock(gameName) {
        // Get the input field value
        const stockInput = document.querySelector(`#stock_${gameName.replace(/\s+/g, '').toLowerCase()}`);
        const newStock = stockInput.value;
        
        // You can implement your logic here to update the stock of the game
        console.log(`Updating stock for ${gameName} to ${newStock}`);
    }

    // Open edit modal
// Open edit game modal
function openEditGameModal() {
    // Fetch current game data and populate form fields
    document.getElementById('gameTitle').value = "Current Game Title";
    document.getElementById('gamePrice').value = "Current Price";
    document.getElementById('gameAvailability').value = "Current Availability";

    // Display modal
    document.getElementById('editModal').style.display = "block";
}

// Close edit game modal
function closeEditGameModal() {
    // Close modal
    document.getElementById('editModal').style.display = "none";
}


// Update game
function updateGame() {
    // Get updated data from form fields
    var updatedTitle = document.getElementById('gameTitle').value;
    var updatedPrice = document.getElementById('gamePrice').value;
    var updatedAvailability = document.getElementById('gameAvailability').value;

    // Update displayed game listings
    // This will be a placeholder for updating game listings on the frontend
    console.log("Game Updated:", updatedTitle, updatedPrice, updatedAvailability);

    // Close modal
    closeEditGameModal(); // Renamed the function here
}

// Close edit game modal
function closeEditGameModal() {
    // Close modal
    document.getElementById('editModal').style.display = "none";
}

// Remove game
function openRemoveGameModal(gameTitle) {
    var modal = document.getElementById("removeGameModal");
    var gameTitleSpan = document.getElementById("gameTitle");
    gameTitleSpan.innerText = gameTitle;
    modal.style.display = "block";
}

function closeRemoveGameModal() {
    var modal = document.getElementById("removeGameModal");
    modal.style.display = "none";
}

function openPersonalInfoModal() {
    document.getElementById('personalInfoModal').style.display = 'block';
}

// Function to open Change Password Modal
function openChangePasswordModal() {
    document.getElementById('changePasswordModal').style.display = 'block';
}

// Function to open Order History Modal
function openOrderHistoryModal() {
    document.getElementById('orderHistoryModal').style.display = 'block';
}

// Function to close modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function storeFormData(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Retrieve existing entries from local storage
    let contactEntries = JSON.parse(localStorage.getItem('contactEntries')) || [];

    // Add new entry
    const newEntry = { name, email, message };
    contactEntries.push(newEntry);

    // Save updated entries back to local storage
    localStorage.setItem('contactEntries', JSON.stringify(contactEntries));

    // Display success message
    document.getElementById('successMessage').style.display = 'block';

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Load form data from local storage
function loadFormData() {
    // Retrieve entries from local storage
    const contactEntries = JSON.parse(localStorage.getItem('contactEntries')) || [];

    // Display last entry if available
    if (contactEntries.length > 0) {
        const lastEntry = contactEntries[contactEntries.length - 1];
        document.getElementById('name').value = lastEntry.name;
        document.getElementById('email').value = lastEntry.email;
        document.getElementById('message').value = lastEntry.message;
    }
}

// Load form data when the page loads
window.onload = loadFormData;




