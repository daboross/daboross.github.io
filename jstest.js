function mouseMoveFunction(event) {
    print_thing("x = " + event.clientX);
    print_thing(" y = " + event.clientY);
}
function print_thing(thing) {
    var parent = document.getElementById("output");
    var child = document.createElement("p");
    child.innerHTML = thing;
    if (parent.childElementCount > 1) {
        parent.removeChild(parent.firstChild);
    }
    parent.appendChild(child);
}