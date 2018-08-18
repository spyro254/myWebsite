

const navOnHover = function() {
    let burger = document.getElementById('test-burger');
    console.log(burger.querySelector(".div"));
    for (ele of burger.childNodes) {
        if (ele.tagName === "DIV") {
            ele.classList.add("burger--open")
        }
    }
}

window.onload = function() {
    document.getElementById('test-burger').addEventListener('mouseover', navOnHover())
}
