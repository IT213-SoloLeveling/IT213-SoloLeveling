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
       
        window.location.href = "indexl.html";
    }

 
    
    function updateStock(gameName) {
        
        const stockInput = document.querySelector(`#stock_${gameName.replace(/\s+/g, '').toLowerCase()}`);
        const newStock = stockInput.value;
        
        
        console.log(`Updating stock for ${gameName} to ${newStock}`);
    }

    
function openEditGameModal() {
   
    document.getElementById('gameTitle').value = "Current Game Title";
    document.getElementById('gamePrice').value = "Current Price";
    document.getElementById('gameAvailability').value = "Current Availability";

    
    document.getElementById('editModal').style.display = "block";
}


function closeEditGameModal() {
    
    document.getElementById('editModal').style.display = "none";
}



function updateGame() {
    
    var updatedTitle = document.getElementById('gameTitle').value;
    var updatedPrice = document.getElementById('gamePrice').value;
    var updatedAvailability = document.getElementById('gameAvailability').value;

    
    console.log("Game Updated:", updatedTitle, updatedPrice, updatedAvailability);

    
    closeEditGameModal(); 
}


function closeEditGameModal() {
    // Close modal
    document.getElementById('editModal').style.display = "none";
}


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


function openChangePasswordModal() {
    document.getElementById('changePasswordModal').style.display = 'block';
}


function openOrderHistoryModal() {
    document.getElementById('orderHistoryModal').style.display = 'block';
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function storeFormData(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    let contactEntries = JSON.parse(localStorage.getItem('contactEntries')) || [];

    
    const newEntry = { name, email, message };
    contactEntries.push(newEntry);

    
    localStorage.setItem('contactEntries', JSON.stringify(contactEntries));

    
    document.getElementById('successMessage').style.display = 'block';

    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}


function loadFormData() {
    
    const contactEntries = JSON.parse(localStorage.getItem('contactEntries')) || [];

    
    if (contactEntries.length > 0) {
        const lastEntry = contactEntries[contactEntries.length - 1];
        document.getElementById('name').value = lastEntry.name;
        document.getElementById('email').value = lastEntry.email;
        document.getElementById('message').value = lastEntry.message;
    }
}


window.onload = loadFormData;

function searchGames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    console.log('Search Input:', input); 
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        console.log('Card Title:', title); 
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}



