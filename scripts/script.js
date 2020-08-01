let list = [];

let colorlist = document.createElement("ul");
document.querySelector("#history").appendChild(colorlist);

let backButton = document.getElementById("back");
backButton.addEventListener("click", () => { deleteColor(); });

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => { clearColor(); });

window.addEventListener("keydown", event => {
    if (event.key == " ") {
        addColor();
    } else if (event.key == "b" || event.key == "B") {
        deleteColor();
    } else if (event.key == "c") {
        clearColor();
    }
});

// touch support
var moved = false;
window.addEventListener("touchstart", () => { moved = false; });
window.addEventListener("touchmove", () => { moved = true; });
window.addEventListener("touchend", (event) => {
    if (moved == false && (event.target.toString() == "[object HTMLHtmlElement]" || event.target.toString() == "[object HTMLBodyElement]")) {
        addColor();
    }
});

function clearColor() {
    removeAllChildNodes(colorlist);
    list = [];
    document.body.style.background = "#FFFFFF";
}

function deleteColor() {
    if (list.length > 1) {
        list.pop();
        let newcol = list.pop();
        document.body.style.background = newcol;
        list.push(newcol);
        colorlist.removeChild(colorlist.lastChild);
    } else if (list.length == 1) {
        document.body.style.background = "#FFFFFF";
        list.pop();
        colorlist.removeChild(colorlist.lastChild);
    }
}

function addColor() {
    let color = getRandomColor()
    document.body.style.background = color;
    list.push(color);
    let li = document.createElement("li");
    li.style.backgroundColor = color;
    li.style.border = "2px solid black";
    li.appendChild(document.createTextNode(color));
    colorlist.appendChild(li);
    window.scrollTo(0, document.body.scrollHeight);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}