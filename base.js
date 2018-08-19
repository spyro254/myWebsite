const burgerOpen = function(burgerId) {
    let burger = document.getElementById(burgerId);
    burger.classList.add('burger-line--open');
    burgerItemOpen('burgerContainer');
}

const burgerClose = function(burgerId) {
    let burger = document.getElementById(burgerId);
    burger.classList.remove('burger-line--open');
    burgerItemClose('burgerContainer');
}

const burgerItemOpen = function(burgerId) {
    let burger = document.getElementById(burgerId);
    let burgerItemArray = Array.from(burger.getElementsByClassName('burger-item'))
    for (each of burgerItemArray) {
        each.classList.add('burger-item--show');
    }
}

const burgerItemClose = function(burgerId) {
    let burger = document.getElementById(burgerId);
    let burgerItemArray = Array.from(burger.getElementsByClassName('burger-item'))
    for (each of burgerItemArray) {
        each.classList.remove('burger-item--show');
    }
}

window.onload = function() {
    burger = document.getElementById('burgerContainer');
    burger.addEventListener('mouseover', function(){burgerOpen('burgerLine')});
    burger.addEventListener('mouseout', function(){burgerClose('burgerLine')});
}
