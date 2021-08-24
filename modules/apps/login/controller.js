x='login';
ktupad.app(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/apps/login/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
id:'body',
page:1,
rpp:1,
controller:'modules/apps/login/controller.js?',

view:function(){
  // document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">Admin</span></div>';
  // k[x].table.id='blog-body';

k[x].ajax.path=this.url.path;
k[x].crud.table();
},

loginGet:function(id) {
var data = window.localStorage.getItem('loginData');
if (data) {info = 'Profile'; btn = 'SignOut'; }
else { info = 'SignIn'; btn = 'SignIn'; }
if(id=='SignUp'){ info = 'SignUp'; btn = 'SignUp';}

out = '<label for = "nama">Nama</label><input type = "text" id = "nama" name = "nama" value = "">';
out += '<label for = "pin">PIN</label><input type = "password" id = "pin" name = "pin" value = "">';
out += '<input type = "submit" value = "none" style = "display:none;">';
out += '<button id = "btn" class = "btn-form" onclick = "k[x].app[btn]()">'+btn+'</button>';

document.getElementById('blog-body').innerHTML = '<div class = "row artikel">'+out+'</div>';
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">'+info+'</span></div>';
},

SignUp:function() {
nama = document.getElementById('nama').value;
pin = document.getElementById('pin').value;

k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'signup',nama:nama,pin:pin};
k[x].ajax.get(callback);
function callback(json) { res = JSON.parse(json); debug(json);
if (res.info == 'Berhasil SignUp') { ktupad.info(res.info);
window.localStorage.setItem('loginData', json);
k[x].app.loginGet('SignIn');
}
else { ktupad.info('SignUp Gagal');}
}
},

SignIn:function() {
nama = document.getElementById('nama').value;
pin = document.getElementById('pin').value;

k[x].ajax.path = this.url.path;
k[x].ajax.data = {mod:'signin',nama:nama,pin:pin};
k[x].ajax.get(function callback(json) { res = JSON.parse(json); debug(json);
ktupad.info(res.info);
if (res.info == 'Berhasil') { ktupad.info('Selamat datang, '+res.data);
window.localStorage.setItem('loginData', json);
k[x].app.loginGet('SignIn');
}
else { ktupad.info('SignIn Gagal');}
}
);
},

SignOut:function() {
window.localStorage.removeItem('loginData');
this.loginGet('SignIn');
},

blogGet:function(id) {
 if(!id){id=7;}
 k[x].ajax.path = this.url.path;
 k[x].ajax.data = {mod:'blogGet',id:id};
 k[x].ajax.get(function callback(json) { res = JSON.parse(json);
 k[x].app.blogView(res);
 });
},

blogView:function(res) {
arr = res.data;
document.getElementById('blog-body').innerHTML = '<div class = "artikel">'+bbcode.view(arr[0].isi)+'</div>';
document.getElementById('blog-judul').innerHTML = '<div class = "row artikel"><span class = "judul2">login</span></div>';
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

homeGet:function(){
 ktupad.loadCSS('modules/apps/login/view.css');
 ktupad.loadView("modules/apps/login/index.html","template-blog",function(){
 k[x].app.homeView();
 });
},

homeView:function() {
document.getElementById('content').innerHTML = document.getElementById('view-blog').innerHTML;
out = '<ul>';
// out += '<li><a href="#" onclick = "k[x].app.blogGet(14)">Home</a></li>';
out += '<li><a href="#" onclick = "k[x].app.loginGet(\'SignIn\')">SignIn</a></li>';
out += '<li><a href="#" onclick = "k[x].app.loginGet(\'SignUp\')">SignUp</a></li>';
out += '<li style="float:right"><a href="#" onclick = "k[x].app.managerGet()">Chart</a></li>';
out += '<li style="float:right"><a  href="#" onclick = "k[x].app.view()">Admin</a></li>';
out += '</ul>';
document.getElementById('blog-menu').innerHTML = out;
document.getElementById('blog-back').innerHTML = svg.ico('return');

mod=ktupad.getURL('mod');
if(mod){ this[mod]();}
else{ this.blogGet(14);}

},
};
