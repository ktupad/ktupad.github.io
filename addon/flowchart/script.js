

const video = document.createElement("video");
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");

navigator.mediaDevices
// .getUserMedia({ video: { facingMode: "environment" } })
.getUserMedia({ video: { facingMode: "user" } })
.then(function(stream) {
scanning = true;
canvasElement.hidden = false;
video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
video.srcObject = stream;
video.play();
tick();
});

function tick() {
canvasElement.height = video.videoHeight;
canvasElement.width = video.videoWidth;
canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
scanning && requestAnimationFrame(tick);
}

function shot() {
var canvas = document.getElementById('qr-canvas');
var dataURL = canvas.toDataURL('image/jpeg', 0.5);
console.log(dataURL);

document.getElementById('results').innerHTML ='<img id="imageprev" src="'+dataURL+'"/>';
simpan(dataURL);
}


function simpan() {
img= document.getElementById('imageprev').src;

data={mod:img};

  var http = new XMLHttpRequest();
  http.open("POST", 'upload.php', true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.onreadystatechange = function() {
  if(http.readyState == 4 && http.status == 200) {
     // callback(http.responseText);
    console.log(http.responseText);
  }}

  http.responseType = "text";
  http.onprogress = function(e) { if (e.lengthComputable) { } };
  http.onloadstart = function(e) { };
  http.onloadend = function(e)  { };
  http.send(JSON.stringify(data));
}
