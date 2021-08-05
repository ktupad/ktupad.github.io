x='blog';
ktupad.app(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/apps/blog/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
id:'body',
page:1,
rpp:1,
controller:'modules/apps/blog/controller.js?',

view:function(){
k[x].ajax.path=this.url.path;
k[x].crud.table();
},

blogHomeGet:function(id) {
  if(!id){id=7;}
  k[x].ajax.path = this.url.path;
  k[x].ajax.data = {mod:'blogHomeGet',id:id};
  k[x].ajax.get(function callback(json) { res = JSON.parse(json);
  k[x].app.blogHomeView(res);
  });
},

blogHomeView:function(res) {

  document.getElementById('blog-judul').innerHTML = document.getElementById('blog-home').innerHTML ;
  slide = res.slide;
  home = res.home;

  document.getElementById('judul').innerHTML = bbcode.view(slide[0].isi);
  document.getElementById('gading-1').innerHTML = bbcode.view(slide[1].isi);
  document.getElementById('gading-2').innerHTML = bbcode.view(slide[2].isi);
  document.getElementById('gading-3').innerHTML = bbcode.view(slide[3].isi);

document.getElementById('blog-body').innerHTML = '<div class = "artikel">'+bbcode.view(home[0].isi)+'</div>';
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
out = '<div class = "l-6 s-12 artikel" >'+chart.pie(arr).svg+'</div> ';
out += '<div class = "l-6 s-12 artikel"> '+chart.pie(arr).key+'</div>';
document.getElementById('blog-body').innerHTML = out;
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">Chart</span></div>';
},

blogGet:function(id){
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'blogGet',id:id};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
k[x].app.blogView(res);
});
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">'+id+'</span></div>';

},

blogView:function(res) {
arr = res.data;
out = '';
for (var i in arr) {
  out += '<div class = "l-4 s-12 artikel">';
  out += '<div class = "row"><span class = "judul"><a href = "#" onClick = "k[x].app.blogDetailGet(\''+arr[i].id+'\')">'+arr[i].judul+'</a></span></div>';
  out += '<div class = "row">'+bbcode.view(arr[i].isi)+'</div>';
  out += '</div>';
}
document.getElementById('blog-body').innerHTML = out;
},

blogDetailGet:function(id){
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'blogDetailGet',id:id};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
k[x].app.blogDetailView(res);
});

},

blogDetailView:function(res) {
  i=0;
  arr = res.data;
  out = '';
  out += '<div class = "row artikel">'+bbcode.view(arr[i].isi)+'</div>';
  document.getElementById('blog-body').innerHTML = out;
  document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">'+arr[i].judul+'</span></div>';

},

homeGet:function(){
  ktupad.loadCSS('modules/apps/blog/view.css');
  ktupad.loadView("modules/apps/blog/index.html","template-blog",function(){
  // ktupad.loadController('modules/apps/blog/controller.js?blog/blogGet');
  k[x].app.homeView();
  });
},

homeView:function() {
document.getElementById('content').innerHTML = document.getElementById('view-blog').innerHTML;
out = '<ul>';
// out += '<li><a  href="#" onclick = "k[x].app.blogHomeGet(8)">Home</a></li>';
out += '<li><a  href="#" onclick = "k[x].app.blogGet(\'app\')">App</a></li>';
out += '<li><a  href="#" onclick = "k[x].app.blogGet(\'addon\')">Addon</a></li>';
// out += '<li><a  href="#" onclick = "k[x].app.blogGet(4)">About</a></li>';
out += '<li style="float:right"><a  href="#" onclick = "k[x].app.managerGet()">Chart</a></li>';
out += '</ul>';
document.getElementById('blog-menu').innerHTML = out;
document.getElementById('blog-back').innerHTML = svg.ico('return');
this.blogHomeGet(8);
},
};
