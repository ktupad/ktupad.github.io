x='kuis';
ktupad.app(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/apps/kuis/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
id:'body',
page:1,
rpp:1,
controller:'modules/apps/kuis/controller.js?',

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
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">kuis</span></div>';
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

kuisGet:function(id){
ktupad.kuisNama=id;
k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'kuisGet',id:id};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(res);
k[x].app.kuisView(res);
// alert(res)
});
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">'+id+'</span></div>';
},

kuisView:function(res) {
data = res.data;
ktupad.kuisdata = data;
out = '';
out += '<div class = "row artikel">';
out += '<p>Soal pilihan ganda:</p>';
out += '<div id = "modal" class = "depan hide"></div>  ';
for (var i in data) {
out += '<form class = "jawab2">';
no = parseInt(i)+1;
nah = bbcode.view(data[i].pertanyaan);
out+= '<p id = "bbcode">'+ no +'.'+ nah +'</p>';
str = data[i].jawaban;
str = str.replace(/(\r\n|\n|\r)/gm,"");
pil = str.split(";");
for (var n in pil) {
pecah = pil[n].split("|");
out += '<input type = "radio" class  = "check" name = "choose" value = "'+pecah[0]+'">'+pecah[0]+'. '+pecah[1] ;
out+= '</br>';
}
out += '</p>';
out += ' </form>';
}
out += '<input type = "button" class = "btn-form show" name = "drone" value = "Kirim" onclick = "k[x].app.kuisClick()" >';
out += ' </div>';
document.getElementById('blog-body').innerHTML = out;
},

kuisClick:function() {
data =  ktupad.kuisdata;
var  x = document.getElementsByClassName("jawab2");
n = 0;
a = [];
for (var i in data) {
jwb = x[i].elements.choose.value;
a.push(jwb);
}
ktupad.kuisJawab = a;
this.kuisPost();
// alert(a);
},

kuisPost:function() {
kuis =  ktupad.kuisNama;
jawab = ktupad.kuisJawab;

k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'kuisPost',kuis:kuis,jawab:jawab};
k[x].ajax.get(function callback(json) { res = JSON.parse(json);
nilai = res.nilai;
alert("Nilai Anda: "+ nilai);
});
},

homeGet:function(){
  ktupad.loadCSS('modules/apps/kuis/view.css');
  ktupad.loadView("modules/apps/kuis/index.html","template-blog",function(){
  // ktupad.loadController('modules/apps/kuis/controller.js?kuis/blogGet');
  k[x].app.homeView();
  });
},

homeView:function() {
document.getElementById('content').innerHTML = document.getElementById('view-blog').innerHTML;
out = '<ul>';
// out += '<li><a  href="#" onclick = "k[x].app.blogGet(12)">Home</a></li>';
out += '<li><a  href="#" onclick = "k[x].app.kuisGet(\'Geografi\')">Geografi</a></li>';
out += '<li><a  href="#" onclick = "k[x].app.kuisGet(\'Math\')">Math</a></li>';
// out += '<li><a  href="#" onclick = "k[x].app.blogGet(4)">About</a></li>';
out += '<li style="float:right"><a  href="#" onclick = "k[x].app.managerGet()">Chart</a></li>';
out += '<li style="float:right"><a  href="#" onclick = "k[x].app.view()">Admin</a></li>';
out += '</ul>';
document.getElementById('blog-menu').innerHTML = out;
document.getElementById('blog-back').innerHTML = svg.ico('return');

mod=ktupad.getURL('mod');
if(mod){ this[mod]();}
else{ this.blogGet(12);}

},
};
