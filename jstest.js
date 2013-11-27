text_map = {
    16: "Inner circle",
    53: "First circle",
    85: "Second circle",
    116: "Third circle",
    146: "Fourth circle",
    196: "Fifth circle"
};

function mouseMoveFunction(event) {
    var x = event.clientX - 8;
    var y = event.clientY - 8;
//    print_thing("x", "x = " + x);
//    print_thing("y", "y = " + y);
    for (var i = 0; i < 500; i++) {
        if (isInsideCircle(200 - x, 200 - y, i)) {
            print_thing("radius", "Min radius is " + i);
            break;
        }
    }
    Object.keys(text_map).some(function(key) {
        if (isInsideCircle(200 - x, 200 - y, key)) {
            print_thing("Text", text_map[key]);
            return true;
        }
        return false;
    });
}
function print_thing(name, thing) {
    var parent = document.getElementById("output");
    var child = document.getElementById(name);
    if (!child) {
        var child = document.createElement("p");
        child.setAttribute('id', name);
        parent.appendChild(child);
    }
    child.innerHTML = thing;
}
function isInsideCircle(x, y, radius) {
    return Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(radius, 2);
}