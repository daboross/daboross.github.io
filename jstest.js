
var text_map;
var outside;
var req = new XMLHttpRequest();
req.open("GET", "jstest.json", true);
req.responseType = "text";
req.onload = function() {
    var response = JSON.parse(this.response);
    text_map = response["circles"];
    outside = response["other"];
};
req.send();
function mouseMoveFunction(event) {
    var x = event.clientX - 8;
    var y = event.clientY - 8;
    if (!Object.keys(text_map).some(function(key) {
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
/*
 for (var i = 0; i < 300; i++) {
 if (isInsideCircle(200 - x, 200 - y, i)) {
 print_thing("radius", "Min radius is " + i);
 break;
 }
 }
 */