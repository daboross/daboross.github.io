//console.log("---- main.js ----");
//function xhrGet(reqUri, callback, type) {
//    var req = new XMLHttpRequest();
//    req.open("GET", reqUri, true);
//    req.responseType = type;
//    req.onload = function() {
//        callback(this);
//    };
//    req.send();
//}
//;
//getValue = function(json, path) {
//    var paths = path.split('.');
//    var currentValue = json[paths[0]];
//    for (var i = 1; i < paths.length; i++) {
//        currentValue = currentValue[paths[i]];
//    }
//    return currentValue;
//};
//reqWeapons = function() {
//    xhrGet("weapons.json", function() {
//        var json = JSON.parse(this.response);
//        getValue(json, 'name.daboross');
//    }, "text");
//};
//reqMusic = function() {
//    var req = new XMLHttpRequest();
//    req.open("GET", "bg_menu.ogg", true);
//    req.responseType = 'arraybuffer';
//    req.onload = function() {
//
//        try {
//            var context = new webkitAudioContext();
//
//            var mainNode = context.createGainNode(0);
//            mainNode.connect(context.destination);
//
//            var clip = context.createBufferSource();
//
//            context.decodeAudioData(soundRequest.response, function(buffer) {
//                clip.buffer = buffer;
//                clip.gain.value = 1.0;
//                clip.connect(mainNode);
//                clip.loop = true;
//                clip.noteOn(0);
//            }, function(data) {
//            });
//        }
//        catch (e) {
//            console.warn('Web Audio API is not supported in this browser');
//        }
//    };
//    req.send();
//};
//var manipulateDOM = function() {
//    var body = document.getElementById("body");
//    var div = document.createElement("div");
//    div.id = "gameContent";
//    var canvas = document.createElement("canvas");
//    canvas.id = "gameCanvas";
//    canvas.textContent="asdffdsa";
//    div.appendChild(canvas);
//    body.appendChild(div);
//};
