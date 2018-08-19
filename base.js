

const XnavOnHover = function() {
    let burger = document.getElementById('test-burger');
    console.log(burger.querySelector(".div"));
    for (ele of burger.childNodes) {
        if (ele.tagName === "DIV") {
            ele.classList.add("burger--open")
        }
    }
}

const burgerOpen = function(burgerId) {
    let burger = document.getElementById(burgerId);
    burger.classList.add('burger-line--open');
    moveBurgerItem('burgerContainer');
}

const burgerClose = function(burgerId) {
    let burger = document.getElementById(burgerId);
    burger.classList.remove('burger-line--open')
}

const moveBurgerItem = function(burgerId) {
    let burger = document.getElementById(burgerId);
    let burgerItemArray = Array.from(burger.getElementsByClassName('burger-item'))
    for (each of burgerItemArray) {
        each.classList.add('burger-item--show');
    }
}

window.onload = function() {
    burger = document.getElementById('burgerContainer');
    burger.addEventListener('mouseover', function(){burgerOpen('burgerLine')});
    burger.addEventListener('mouseout', function(){burgerClose('burgerLine')});
}
