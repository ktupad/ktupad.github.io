x='barang';
ktupad.app(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/apps/barang/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
id:'body',
page:1,
rpp:1,
controller:'modules/apps/barang/controller.js?',

view:function(){
  document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">Admin</span></div>';
  k[x].table.id='blog-body';

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
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">barang</span></div>';
},

managerGet:function(){
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'managerGet'};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
 // k[x].app.managerView(res);
 k[x].app.managerView(res);
});
},

managerView:function(res) {
arr = res.data;
out = '<div class = "l-5 s-12 artikel" >'+chart.pie(arr).svg+'</div> ';
out += '<div class = "l-7 s-12 artikel"> '+chart.pie(arr).key+'</div>';
document.getElementById('blog-body').innerHTML = out;
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">Chart</span></div>';
},

barangGet:function(id){
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'barangGet',id:id};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
k[x].app.barangView(res);
});
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">'+id+'</span></div>';
},

barangView:function(res) {
arr = res.data;
out = '';
for (var i in arr) {
out += '<div class = "l-3 s-6 artikel"> \
<div class = "row">'+bbcode.view(arr[i].keterangan)+'</div> \
<div class = "row"><b>\
<a href = "#" onClick = "k[x].app.barangDetailGet(\''+arr[i].id+'\')">'+arr[i].nama+'</a> \
</b></div> \
<div class = "row">Qty: '+arr[i].banyak+'</div>\
<div class = "row"><b>Rp.'+arr[i].harga+'</b></div>\
<button onClick = "k[x].app.barangDetailGet(\''+arr[i].id+'\')">Detail</button> \
</div>';
}
document.getElementById('blog-body').innerHTML = out;
},

barangDetailGet:function(id){
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'barangDetailGet',id:id};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
k[x].app.barangDetailView(res);
});
},

barangDetailView:function(res) {
i=0;
arr = res.data;
out = '';
out += '<div class = "row artikel">\
<p class="l-8 -12">'+bbcode.view(arr[i].keterangan)+'</p>\
<p class="l-4 -12"><b>'+arr[i].nama+'</b></br> \
Qty: '+arr[i].banyak+'</br>\
<b>Rp.'+arr[i].harga+'</b></p></div>';
document.getElementById('blog-body').innerHTML = out;
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">'+arr[i].nama+'</span></div>';
},

homeGet:function(){
 ktupad.loadCSS('modules/apps/barang/view.css');
 ktupad.loadView("modules/apps/barang/index.html","template-blog",function(){
 // ktupad.loadController('modules/apps/barang/controller.js?barang/blogGet');
 k[x].app.homeView();
 });
},

homeView:function() {
document.getElementById('content').innerHTML = document.getElementById('view-blog').innerHTML;
out = '<ul>';
// out += '<li><a href="#" onclick = "k[x].app.blogGet(8)">Home</a></li>';
out += '<li><a href="#" onclick = "k[x].app.barangGet(\'roti\')">Roti</a></li>';
out += '<li><a href="#" onclick = "k[x].app.barangGet(\'kopi\')">Kopi</a></li>';
// out += '<li><a href="#" onclick = "k[x].app.blogGet(4)">About</a></li>';
out += '<li style="float:right"><a href="#" onclick = "k[x].app.managerGet()">Chart</a></li>';
out += '<li style="float:right"><a  href="#" onclick = "k[x].app.view()">Admin</a></li>';
out += '</ul>';
document.getElementById('blog-menu').innerHTML = out;
document.getElementById('blog-back').innerHTML = svg.ico('return');
// this.blogGet(8);

// http://localhost/neo/?app=barang&mod=view
mod=ktupad.getURL('mod');
if(mod){ this[mod]();}
else{ this.blogGet(8);}


},
};
