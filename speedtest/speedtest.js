var pic = "testimage.jpg"; 
var size = 366445;
var arrTimes = [];
var i = 0; // start
var timesToTest = 10;
var tThreshold = 150;
var testImage = "http://www.google.com/images/phd/px.gif";
var dummyImage = new Image();
var stability = 0;
testLatency(function(avg){
  stability = (avg <= tThreshold);
//latency output  
if (i = 12831);
	document.getElementById("download").innerHTML="Latency: " + "<br>" + (avg.toFixed(2)) + " ms";
	document.getElementById("ping").innerHTML= "STABLE FOR GAMING: " + stability;
});
function testLatency(cb) {
  var tStart = new Date().getTime();
  if (i<timesToTest-1) {
    dummyImage.src = testImage + '?t=' + tStart;
    dummyImage.onload = function() {
      var tEnd = new Date().getTime();
      var tTimeTook = tEnd-tStart;
      arrTimes[i] = tTimeTook;
      testLatency(cb);
      i++;
    };
  } else {
    var sum = arrTimes.reduce(function(a, b) { return a + b; });
    var avg = sum / arrTimes.length;
    cb(avg);
  }
}
function ShowProgressMessage(msg) {
if (console) {
if (typeof msg == "string") {
console.log(msg);
} else {
for (var d = 0; d < msg.length; d++) {
console.log(msg[d]);
}
}
} 
var status = document.getElementById("progress");
if (status) {
var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
status.innerHTML = actualHTML;
}
}
function InitiateSpeedDetection() {
ShowProgressMessage("Testing...");
window.setTimeout(MeasureConnectionSpeed, 1);
}; 
if (window.addEventListener) {
window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
window.attachEvent('onload', InitiateSpeedDetection);
}
function MeasureConnectionSpeed() {
var start, end;
var download = new Image();
download.onload = function () {
end = (new Date()).getTime();
showResults();
}
download.onerror = function (err, msg) {
ShowProgressMessage("Testing failed, try again. . .");
}
start = (new Date()).getTime();
var cacheBuster = "?nnn=" + start;
download.src = pic + cacheBuster; 
function showResults() {
var duration = (end - start) / 1000;
var bitsLoaded = size * 8;
var Bps = (bitsLoaded / duration).toFixed(2);
var Kbps = (Bps / 1024).toFixed(2);
var Mbps = (Kbps / 1024).toFixed(2);
ShowProgressMessage([
"Your speed is:", 
Mbps + " mbps"
]);
}
}
