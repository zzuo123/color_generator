const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

function change_color() {
    const colorIndex = parseInt(Math.random() * colors.length);
    var x = document.getElementsByTagName("body")[0];
    x.style.backgroundColor = colors[colorIndex];
}