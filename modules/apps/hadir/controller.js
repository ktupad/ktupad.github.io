x='hadir';
ktupad.app(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/apps/hadir/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
id:'body',
page:1,
rpp:1,
controller:'modules/apps/hadir/controller.js?',

view:function(){
  // document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">Admin</span></div>';
  // k[x].table.id='blog-body';

k[x].ajax.path=this.url.path;
k[x].crud.table();
},

blogGet:function(id) {
  if(!id){id=7;}
  k[x].ajax.path = this.url.path;
  k[x].ajax.data = {mod:'blogGet',id:id};
  k[x].ajax.get(function callback(json) { res = JSON.parse(json);
  k[x].app.blogView(res);
  // alert(json)
  });
},

blogView:function(res) {
arr = res.data;
document.getElementById('blog-body').innerHTML = '<div class = "artikel">'+bbcode.view(arr[0].isi)+'</div>';
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">hadir</span></div>';
},

managerGet:function(){
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'managerGet'};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
  k[x].app.managerView(res);
});
},

managerView:function(res) {
arr = res.data;
out = '<div class = "l-6 s-12 artikel" >'+chart.pie(arr).svg+'</div> ';
out += '<div class = "l-6 s-12 artikel"> '+chart.pie(arr).key+'</div>';
document.getElementById('blog-body').innerHTML = out;
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">Chart</span></div>';
},

hadirGet:function(id){

  k[x].app.hadirView(res);
//
// k[x].ajax.path = this.url.path;
// k[x].ajax.data = {mod:'hadirGet',id:id};
// k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
// k[x].app.hadirView(res);
// });
},

hadirView:function(res) {
  out = '<canvas id="canvas"></canvas>';
  out += '<div id="results"  class="hide"></div>';
  out += '<div class="row center">';
  out += '<input type=button value="Hadir" onClick="k[x].app.hadirShot()"></div>';
  // out += '<input type=button value="Hadir" onClick="k.hadir.app.saveSnap()">';

  document.getElementById('blog-body').innerHTML = out;
  document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">Take Picture</span></div>';
  // k[x].modal.data=out;
  // k[x].modal.view();
  //


  const video = document.createElement("video");
  const canvasElement = document.getElementById("canvas");
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

},

hadirShot:function() {
var canvas = document.getElementById('canvas');
var dataURL = canvas.toDataURL('image/jpeg', 0.5);
console.log(dataURL);
document.getElementById('results').innerHTML ='<img id="imageprev" src="'+dataURL+'"/>';
this.simpan(dataURL);
},


simpan:function() {
img= document.getElementById('imageprev').src;
data={mod:img};
  var http = new XMLHttpRequest();
  http.open("POST", 'addon/cam/upload.php', true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.onreadystatechange = function() {
  if(http.readyState == 4 && http.status == 200) {
     // callback(http.responseText);
    // console.log(http.responseText);
    // track.stop();
ktupad.img=http.responseText;
    // ktupad.close('modal');
k[x].app.hadirPost();

  }}

  http.responseType = "text";
  http.onprogress = function(e) { if (e.lengthComputable) { } };
  http.onloadstart = function(e) { };
  http.onloadend = function(e)  { };
  http.send(JSON.stringify(data));
},


hadirPost:function() {
  img='[img=img]addon/cam/'+ktupad.img+'[/img]';
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'hadirPost',img:img};
k[x].ajax.get(function callback(json) { res = JSON.parse(json);
k[x].app.hadirDetailGet();
// alert(json)
});
},

hadirDetailGet:function(id){
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'hadirDetailGet'};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
k[x].app.hadirDetailView(res);
});
},

hadirDetailView:function(res) {
  arr = res.data;
  out = '';
  for (var i in arr) {
  out += '<div class = "l-3 s-6 artikel"> \
  <div class = "row">'+bbcode.view(arr[i].keterangan)+'</div> \
  <div class = "row">'+arr[i].tanggal+'</div>\
   </div>';
  }
  document.getElementById('blog-body').innerHTML = out;
  document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">Gallery</span></div>';

},



homeGet:function(){
  ktupad.loadCSS('modules/apps/hadir/view.css');
  ktupad.loadView("modules/apps/hadir/index.html","template-blog",function(){
  // ktupad.loadController('modules/apps/hadir/controller.js?hadir/blogGet');
  k[x].app.homeView();
  });
},

homeView:function() {
document.getElementById('content').innerHTML = document.getElementById('view-blog').innerHTML;
out = '<ul>';
// out += '<li><a  href="#" onclick = "k[x].app.blogGet(9)">Home</a></li>';
out += '<li><a  href="#" onclick = "k[x].app.hadirGet(\'Take\')">Take Picture</a></li>';
out += '<li><a  href="#" onclick = "k[x].app.hadirDetailGet(\'Gallery\')">Galery</a></li>';
// out += '<li><a  href="#" onclick = "k[x].app.blogGet(4)">About</a></li>';
out += '<li style="float:right"><a  href="#" onclick = "k[x].app.managerGet()">Chart</a></li>';
out += '<li style="float:right"><a  href="#" onclick = "k[x].app.view()">Admin</a></li>';
out += '</ul>';
document.getElementById('blog-menu').innerHTML = out;
document.getElementById('blog-back').innerHTML = svg.ico('return');

mod=ktupad.getURL('mod');
if(mod){ this[mod]();}
else{ this.blogGet(9);}

},
};
