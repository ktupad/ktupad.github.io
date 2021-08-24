
x='antrian';
ktupad.app(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/apps/antrian/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
id:'body',
page:1,
rpp:1,
controller:'modules/apps/antrian/controller.js?',

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
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">antrian</span></div>';
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

antrianGet:function(id){
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'antrianGet',id:id};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
k[x].app.antrianView(res);
});
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">'+id+'</span></div>';
},

antrianView:function(res) {
out = '';
out += '<div class = "row artikel">\
<div class="modal row center"  id="tiket">\
<h1>Tiket Antrian</h1>\
<button id="btn-getparkir" class="btn-large" onClick="k[x].app.antrianPost()"><h1>'+res[0].isi+'</h1></button>\
</div>';
out += ' </div>';
document.getElementById('blog-body').innerHTML = out;
},

antrianPost:function() {
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'antrianPost'};
k[x].ajax.get(function callback(json) { res = JSON.parse(json);
k[x].app.antrianGet();
// alert(json)
});
},

antrianDetailGet:function(id){
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'antrianDetailGet'};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
k[x].app.antrianDetailView(res);
});
},

antrianDetailView:function(res) {
arr = res.data;
 out = '';
out += '<div class = row" >';
for (var i in arr) {
out += '<div class = "l-8 s-12 artikel">\
<div class = "row"><b class="judul2">'+arr[i].kode+'</b></div>\
</div>\
<div class = "l-4 s-12 artikel">\
<i class = "svgIco svgBlack" onClick = "k[x].app.antrianUpdate('+arr[i].id+')">'+svg.ico('remove')+'</i>\
<i class = "svgIco svgBlack" onClick = "k[x].app.antrianUpdate('+arr[i].id+')">'+svg.ico('minus')+'</i>\
<i class = "svgIco svgBlack" onClick = "k[x].app.antrianUpdate('+arr[i].id+')">'+svg.ico('plus')+'</i>';
out += '</div>';
}
out += '</div>';
document.getElementById('blog-body').innerHTML = out;
},

antrianUpdate:function(id) {
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'antrianUpdate',id:id};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
k[x].app.antrianDetailGet();
});
},


homeGet:function(){
  ktupad.loadCSS('modules/apps/antrian/view.css');
  ktupad.loadView("modules/apps/antrian/index.html","template-blog",function(){
  // ktupad.loadController('modules/apps/antrian/controller.js?antrian/blogGet');
  k[x].app.homeView();
  });
},

homeView:function() {
document.getElementById('content').innerHTML = document.getElementById('view-blog').innerHTML;
out = '<ul>';
// out += '<li><a  href="#" onclick = "k[x].app.blogGet(11)">Home</a></li>';
out += '<li><a  href="#" onclick = "k[x].app.antrianGet(\'Urutan\')">Tiket</a></li>';
out += '<li><a  href="#" onclick = "k[x].app.antrianDetailGet(\'Urutan\')">Urutan</a></li>';
// out += '<li><a  href="#" onclick = "k[x].app.blogGet(4)">About</a></li>';
out += '<li style="float:right"><a  href="#" onclick = "k[x].app.managerGet()">Chart</a></li>';
out += '<li style="float:right"><a  href="#" onclick = "k[x].app.view()">Admin</a></li>';
out += '</ul>';
document.getElementById('blog-menu').innerHTML = out;
document.getElementById('blog-back').innerHTML = svg.ico('return');

mod=ktupad.getURL('mod');
if(mod){ this[mod]();}
else{ this.blogGet(11);}

},
};
