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