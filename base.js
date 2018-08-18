

const XnavOnHover = function() {
    let burger = document.getElementById('test-burger');
    console.log(burger.querySelector(".div"));
    for (ele of burger.childNodes) {
        if (ele.tagName === "DIV") {
            ele.classList.add("burger--open")
        }
    }
}

const navOnHover = function() {
    let burgerLines = document.getElementById('burger-lines');
    burgerLines.classList.add('burger--open')
}

window.onload = function() {
    document.getElementById('test-burger').addEventListener('mouseover', navOnHover)
}
