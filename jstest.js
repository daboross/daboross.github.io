var text_map = {
    "16": "Inner circle",
    "53": "First circle",
    "69": "Second circle",
    "85": "Third circle",
    "116": "Fourth circle",
    "146": "Fifth circle",
    "196": "Sixth circle"
};
var outside = "Outside";
var circles = null;

function isInsideCircle(x, y, radius) {
    return Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(radius, 2);
}

function print_thing(name, thing) {
    var parent = document.getElementById("output");
    var child = document.getElementById(name);
    if (!child) {
        child = document.createElement("p");
        child.setAttribute('id', name);
        parent.appendChild(child);
    }
    child.innerHTML = thing;
}

function mouseMoveFunction(event) {
    var x = event.clientX - circles.offsetLeft;
    var y = event.clientY - circles.offsetTop;
    if (!Object.keys(text_map).some(function (key) {
            key = parseInt(key);
            if (isInsideCircle(200 - x, 200 - y, key)) {
                print_thing("Text", text_map[key]);
                return true;
            }
            return false;
        })) {
        print_thing("Text", outside);
    }
}

function init() {
    circles = document.getElementById("circles")
    circles.onmousemove = mouseMoveFunction;
}