let size = 100;
document.body.style.height = 10000 + "px";
const div = document.createElement("div");
document.body.appendChild(div);
div.style.width = 100 + "%";
div.style.position = "fixed";
div.style.top = 0;
div.style.left = 0;
div.style.backgroundColor = "green";
div.style.height = size + "px";

let grow = true;

const changeHeight = function () {
    if (size >= window.innerWidth / 3) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }

    if (grow) {
        size += 10;
        div.style.backgroundColor = "green";

    } else {
        size -= 10;
        div.style.backgroundColor = "red";
    }
    div.style.height = size + "px";
}

window.addEventListener("scroll", changeHeight);