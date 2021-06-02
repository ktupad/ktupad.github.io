var controller=function(x){
k[x].app={
url:{host:'http://localhost/new/',path:'system/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
id:'body',
page:1,
rpp:1,


aurora:function(){
  arr=['aurora-outer','aurora-agrabah','aurora-northern','aurora-northern-intense',
    'aurora-northern-dimmed','aurora-northern-dusk','aurora-northern-warm','aurora-outer',]
out='';
for(i in arr){
  out +='<div class="l-3 s-12"> <div class="box '+arr[i]+'"><div class="aurora-inner"><h1 class="aurora-title">'+arr[i]+'</h1> </div></div></div>';
}
out +='<div class="auroral-stars"></div>';

document.getElementById('content').innerHTML=out;
},

kasirreport:function(){
  m=conf.loadFunctionData;
  if(m[2]){ id=m[2]; }
  out  ='<div id="report">';
  out +='<div class="row" id="header"></div>';
  out +='<div class="row" id="body"></div>';
  out +='<div class="row" id="detail"></div>';
  out +='<div class="row" id="footer"></div>';
  document.getElementById('content').innerHTML=out;
// alert(id);
k[x].ajax.data={mod:'report',tb:'dev_report',id:id};
k[x].ajax.get(function callback(json){ res=JSON.parse(json);
debug(res);
arr=res.data;
document.getElementById('header').innerHTML='<div class="artikel">'+conf.bbcode.view(arr[0].isi)+'</div>';
});

var nah=JSON.parse(window.localStorage.getItem('data3'));

wow=this.tablereport(nah.a);
document.getElementById('body').innerHTML=wow;

wow=this.tablereport(nah.b);
document.getElementById('detail').innerHTML=wow;
},

tablereport:function(arr){
  var	col=arr[0];
  out   = '<div class="table"><table>';
  out  += '<thead><tr>';
  outf  = '<tfoot><tr><td></td>';
  for (key in col){ outf += '<td id="f'+ key +'"></td>'; out += '<th>'+ key +'</th>'; }
  out  += '</tr></thead>';
  out  += '<tbody>';
  for (i in arr){ cols=arr[i];
  out  += '<tr>';
  for (key in cols) { out += '<td id="'+cols.id+'" > '+ cols[key] +'</td>'; }
  out  += '</tr>';
  }
  out += '</tbody>';
  out += '</table></div>';
  return out;
},

qrreport:function(){
  var nah=JSON.parse(window.localStorage.getItem('data3'));
  m=conf.loadFunctionData;
  if(m[2]){ id=m[2]; }
  out  ='<div id="report">';
  out +='<div class="row" id="header"></div>';
  out +='<div class="row" id="body"></div>';
  out +='<div class="row" id="footer"></div>';
  document.getElementById('content').innerHTML=out;
// alert(id);
k[x].ajax.data={mod:'report',tb:'dev_report',id:id};
k[x].ajax.get(function callback(json){ res=JSON.parse(json);
debug(res);
arr=res.data;
document.getElementById('header').innerHTML='<div class="artikel">'+conf.bbcode.view(arr[0].isi)+'</div>';
});

var data=JSON.parse(window.localStorage.getItem('data3'));
out='';
for (key in data) { col=data[key];
out += '<img id="img'+col.id+'" ><br>'+col.id+'<br>';
}
document.getElementById('body').innerHTML=out;
for(key in data){ col=data[key];
  var qr = new QRious({ element: document.getElementById('img'+col.id),level:'L',value: col.id } );
}

},

report:function(){
  var nah=JSON.parse(window.localStorage.getItem('data3'));
  m=conf.loadFunctionData;
  if(m[2]){ id=m[2]; }
  out  ='<div id="report">';
  out +='<div class="row" id="header"></div>';
  out +='<div class="row" id="body"></div>';
  out +='<div class="row" id="footer"></div>';
  document.getElementById('content').innerHTML=out;
// alert(id);
k[x].ajax.data={mod:'report',tb:'dev_report',id:id};
k[x].ajax.get(function callback(json){ res=JSON.parse(json);
debug(res);
arr=res.data;
document.getElementById('header').innerHTML='<div class="artikel">'+conf.bbcode.view(arr[0].isi)+'</div>';
});

wow=this.tablereport(nah);
document.getElementById('body').innerHTML=wow;
},




login:function(){
  // alert(x);

  // x='pengguna';
m=conf.loadFunctionData;
// if(m[2]){ id=m[2]; }
induk='';
var data=window.localStorage.getItem('userData');
if(data) {info='Profile'; btn='SignOut'; }
else { info='SignIn'; btn='SignIn'; induk='';
  if(m[2]){ id=m[2];
    info='SignUp'; btn='SignUp';
    induk='<div><label for="induk">Induk</label><input type="text" id="induk" name="induk" value=""></div>';
   }
}

// alert(x);


// out  ='<div class="modal row"  id="login">';
out ='<h1>'+info+'</h1>';
out +=induk;
out +='<div><label for="nama">Nama</label><input type="text" id="nama" name="nama" value=""></div>';
out +='<div><label for="pin">PIN</label><input type="password" id="pin" name="pin" value=""></div>';
out +='<input type="submit" value="none" style="display:none;">';

out +='<button id="btn" class="btn-form" onclick="k.pengguna.app[btn]()">'+btn+'</button>';
// out +='</div>';

k[x].modal.data=out;
k[x].modal.view();

// document.getElementById('content').innerHTML=out;
},

SignUp:function(){

  induk=document.getElementById('induk').value;
  nama=document.getElementById('nama').value;
pin=document.getElementById('pin').value;
alert(nama);

k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:'signup',nama:nama,induk:induk,pin:pin};
k[x].ajax.get(callback);
function callback(json){
  // alert(json);

res=JSON.parse(json);
info=res.info;
n=info.split(',');
conf.info(res.info);
debug(json);
if (n[0]=='Berhasil Signup'){
window.localStorage.setItem('userData', json);
conf.loadFunction('pengguna/login');
}
}
},


SignIn:function(){
nama=document.getElementById('nama').value;
pin=document.getElementById('pin').value;
k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:'signin',nama:nama,pin:pin};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
info=res.info;
n=info.split(',');
conf.info(res.info);
debug(json);
// if (n[0]=='Berhasil Aktifasi'){
  if (n[0]=='Berhasil'){
  // alert('berhasil');
window.localStorage.setItem('userData', json);
conf.loadFunction('pengguna/login');
}
else{
  // alert('gagal');

}
}
},

SignOut:function(){
window.localStorage.removeItem('userData');
conf.loadFunction('pengguna/login');
},

verifikasi:function(){
  m=conf.loadFunctionData;
  if(m[2]){ id=m[2]; }
  // $dec=base64_decode($id);

// alert(id);

  k[x].ajax.path=k[x].app.url.path;
  k[x].ajax.data={mod:'aktifasi',nama:id};
  k[x].ajax.get(callback);
  function callback(json){
  res=JSON.parse(json);
  info=res.info;
  n=info.split(',');
  conf.info(res.info);
  debug(json);
  if (n[0]=='Berhasil'){
  // window.localStorage.setItem('userData', json);
  conf.loadFunction('pengguna/login');
  }
  }
},
// end login


tiketform:function(id){
  // alert(x);
  // alert(id);
out  ='<div class="modal row center"  id="tiket">';
out +='<h1>Ambil Nomor Antrian</h1>';
// out +='<button id="btn" class="btn-large" onclick="k[x].app.ambiltiket()"><h1>'+id+'</h1></button>';
out +='<button id="btn" class="btn-large" onclick="k.antrian.app.ambiltiket()"><h1>'+id+'</h1></button>';
out +='</div>';
document.getElementById('content').innerHTML=out;
},

tiket:function(){
  // alert(x);
var data=window.localStorage.getItem('userData');
k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:'tiket',id:'tiket'};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
// alert(x);
id=res[0].isi;
k[x].app.tiketform(id);
}
},

ambiltiket:function(){
arr=this.method('cetak');
var data=window.localStorage.getItem('userData');
k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:'ambiltiket',id:'tiket'};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
// alert(json)
id=res[0].isi;
k[x].app.tiketform(id);
window.localStorage.setItem('data3', JSON.stringify(res));
// window.open('prints/antrian.html');
// window.open('?c=report/report/1');
// window.open(arr.isi);
conf.loadFunction(arr.isi);

}
},
// end antrian

parkir:function(){
out  ='<div class="modal row center"  id="tiket">';
out +='<h1>Tiket Parkir</h1>';
out +='<button id="btn" class="btn-large" onclick="k.parkir.app.getparkir()"><h1>Get</h1></button>';
out +='</div>';
document.getElementById('content').innerHTML=out;
},

getparkir:function(){
arr=this.method('cetak');

var data=window.localStorage.getItem('userData');
k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:'parkir',id:'tiket'};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
// k[x].app.parkir(id);
window.localStorage.setItem('data3', JSON.stringify(res));
// window.open('prints/parkir.html');
// window.open('?c=report/report/1');
// window.open(arr.isi);
conf.loadFunction(arr.isi);

}
},
// end parkit


kuis:function(){
induk=1;
conf.kuis=kuis=1;
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'kuis',induk:induk};

k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
data=res.data;
conf.kuisdata=data;
out ='<p>Soal pilihan ganda:</p>';
out +='<div id="modal" class="depan hide"></div>  ';
for(i in data){
out +='   <form class="jawab2">';
no=parseInt(i)+1;
nah=conf.bbcode.view(data[i].pertanyaan);

// alert(data[i].pertanyaan);

out+='<p id="bbcode">'+ no +'.'+ nah +'</p>';
str=data[i].jawaban;
str = str.replace(/(\r\n|\n|\r)/gm,"");
pil = str.split(";");
for(n in pil){
pecah=pil[n].split("|");
out +='<input type="radio" class ="check" name="choose" value="'+pecah[0]+'">'+pecah[0]+'. '+pecah[1] ;
out+='</br>';
}
out +='</p>';
out +=' </form>';
}
out +='<input type="button" class="btn-form show" name="drone" value="Kirim" onclick = k.kuis.app.handleClick() >';
document.getElementById('content').innerHTML=out;

}
},

handleClick:function(input){
data= conf.kuisdata;
var x = document.getElementsByClassName("jawab2");
n=0;
a=[];
for(i in data){
jwb=x[i].elements.choose.value;
a.push(jwb);
}
conf.jawab=a;
this.kirimkuis();
},

kirimkuis:function(){
kuis= conf.kuis;
nilai=conf.nilai;
jawab=conf.jawab;

k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'kirim',kuis:kuis,jawab:jawab};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
nilai=res.nilai;
alert("Nilai Anda: "+ nilai);
}
},

// end kuis

sosmed:function(){
m=conf.loadFunctionData;
if(m[2]){ id=m[2]; }

p=m.join("/");

url=conf.dataApp.host+'?c='+p;

// <a href="https://www.facebook.com/share.php?u=target_link" target="_blank">

var arr=[
  {url:"https://www.facebook.com/share.php?u=",ikon:"facebook"},
  {url:"https://twitter.com/intent/tweet?url=",ikon:"twitter"},
  {url:"https://api.whatsapp.com/send?text=",ikon:"whatsapp"},
 ];
out='<ul>';
for (i in arr){
  out +='<li><i class="svgIco" onclick="window.open(\''+arr[i].url+url+'\')">'+conf.svg(arr[i].ikon)+'</i></li>';
  // out +='<a href="'+arr[i].url+url+'" target="_blank" rel="noopener" class="kiri">';
  // out +='<i class="svgIco">'+conf.svg(arr[i].ikon)+'</i><p class="hide">aa</p></a>';
}
out+='</ul>';

return out;
},

front2:function(){
act=this.method('blog');
arr=JSON.parse(act.isi);
judul=arr.app.header.split('.');

m=conf.loadFunctionData;
if(m[2]){ id=m[2]; }
// alert(id);

document.documentElement.style.setProperty('--bColor', '#1D5C7C');
// nah=this.sosmed(1);
// alert(nah)
out  ='<div class="aurora-bg aurora-outer"><div class="aurora-inner"></div></div>';
out  +='<div class="auroral-stars"></div>';
out  +='<div class="row blog" id="blog">';
out +='<div class="l-1 s-12">.</div>';
out +='<div class="l-10 s-12">';
out +='<div class="row" id="blog-header">'+judul[0]+'<span class="orange">.'+judul[1]+'.'+judul[2]+'</span>';
out +='<span class="kanan sosmed">';
out +=k[x].app.sosmed();
out +='</span>';
out +='</div>';

// out +='<div class="row" id="blog-menu"><ul><li><a>Home</a></li><li><a>Blog</a></li></ul></div>';
out +='<div class="row" id="blog-menu"></div>';

out +='<div class="row" id="blog-judul"><span class="judul2"></span></div>';
out +='<div class="row" id="blog-body">';
out +='<div class="l-4 s-12 artikel" id="blog-side"></div>';
out +='<div class="l-8 s-12 artikel" id="blog-front"></div>';
out +='</div>';
out +='<div class="row" id="blog-footer">'+arr.app.footer+'</div>';
out +='</div>';
out +='<div class="l-1 s-12">.</div>';
out +='</div>';
document.getElementById('content').innerHTML=out;

out='<ul>';
for(i in arr.menu){ out +='<li><a onclick="conf.loadFunction(\''+arr.menu[i].url+'\')">'+arr.menu[i].nama+'</a></li>';}
out +='<li style="float:right;"><a onclick="conf.loadFunction(\'pengguna/login\')">Login</a></li>';
out +='</ul>';
document.getElementById('blog-menu').innerHTML=out;

},

order:function(){
m=conf.loadFunctionData;
if(m[2]){ id=m[2]; }

out ='<h1>Order</h1>';
out +='<div><label for="nama">Nama</label><input type="text" id="nama" name="nama" value="'+id+'"></div>';
out +='<div><label for="pin">PIN</label><input type="password" id="pin" name="pin" value=""></div>';
out +='<input type="submit" value="none" style="display:none;">';
out +='<button id="btn" class="btn-form" onclick="k.pengguna.app[btn]()">Order</button>';
// out +='</div>';

k[x].modal.data=out;
k[x].modal.view();

},

  blogList:function(){

    var el = document.getElementById("list");
    if(!el){
// k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:'bloglist',tb:'blog'};
k[x].ajax.get(callback);
function callback(json){ res=JSON.parse(json);
debug(res);
arr=res.data;
out='';
for(i in arr){
// id=conf.bbcode.view(arr[i].id);
nah=conf.bbcode.view(arr[i].isi);

url='blog/blog/'+arr[i].id;
// alert(url);
out +='<div class="l-12 s-12 artikel" id="list">';
// out +='<div class="row artikel"><span class="judul"><a href="#" onClick="k[x].app.blog('+arr[i].id+')">'+arr[i].judul+'</a></span></div>';
out +='<div class="row"><span class="judul"><a href="#" onClick="conf.loadFunction(\'blog/blog/'+arr[i].id+'\')">'+arr[i].judul+'</a></span></div>';
out +='<div class="row">'+nah+'</div>';
out +='</div>';
}
document.getElementById('blog-body').innerHTML=out;
document.getElementById('blog-judul').innerHTML='<div class="row artikel"><span class="judul2">Products</span></div>';

}
};
},

blogHome:function(){
  var el = document.getElementById("home");
  if(!el){ this.front2();

    out ='<div id="home">';
    out +='<div class="row artikel" id="judul">';
    out +='<span class="judul2">Ktupad Dev</span>';
    out +='</div>';
    out +='<div class="row gading" id="gading">';
    out +='<div class="l-4 s-12 artikel" id="gading-1"></div>';
    out +='<div class="l-4 s-12 artikel" id="gading-2"></div>';
    out +='<div class="l-4 s-12 artikel" id="gading-3"></div>';
    out +='</div>';
    out +='</div>';
    document.getElementById('blog-judul').innerHTML=out;

    k[x].ajax.path=k[x].app.url.path;
    k[x].ajax.data={mod:'bloghome',tb:'blog'};
    k[x].ajax.get(function callback(json){ res=JSON.parse(json);
    debug(res);
    arr=res.data;
    document.getElementById('judul').innerHTML=conf.bbcode.view(arr[0].isi);
    document.getElementById('gading-1').innerHTML=conf.bbcode.view(arr[1].isi);
    document.getElementById('gading-2').innerHTML=conf.bbcode.view(arr[2].isi);
    document.getElementById('gading-3').innerHTML=conf.bbcode.view(arr[3].isi);
    });


  k[x].ajax.data={mod:'blog',tb:'blog',id:id};
  k[x].ajax.get(function callback(json){ res=JSON.parse(json);
  debug(res);
  arr=res.data;
  document.getElementById('blog-body').innerHTML='<div class="artikel">'+conf.bbcode.view(arr[0].isi)+'</div>';
  });

 };
},


blog:function(id){

  var el = document.getElementById("blog");
  if(!el){ this.front2();


  m=conf.loadFunctionData;
  if(m[2]){ id=m[2]; }

// alert(id);
k[x].ajax.data={mod:'blog',tb:'blog',id:id};
k[x].ajax.get(function callback(json){ res=JSON.parse(json);
debug(res);
arr=res.data;
document.getElementById('blog-body').innerHTML='<div class="artikel">'+conf.bbcode.view(arr[0].isi)+'</div>';
document.getElementById('blog-judul').innerHTML='<div class="row artikel"><span class="judul2">'+arr[0].judul+'</span></div>';

});

}
else {

  m=conf.loadFunctionData;
  if(m[2]){ id=m[2]; }

// alert(id);
k[x].ajax.data={mod:'blog',tb:'blog',id:id};
k[x].ajax.get(function callback(json){ res=JSON.parse(json);
debug(res);
arr=res.data;
document.getElementById('blog-body').innerHTML='<div class="artikel">'+conf.bbcode.view(arr[0].isi)+'</div>';
document.getElementById('blog-judul').innerHTML='<div class="row artikel"><span class="judul2">'+arr[0].judul+'</span></div>';

});
};

},

// end blog



view:function(){
tb=this.modul().tabel;
k[x].app.bar();
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'table',tb:tb};
k[x].ajax.sql();
// k[x].button.callback=function(){k[x].app.button()};

}, // end view

view2:function(){
k[x].app.front();
k[x].app.bar();
k[x].app.getData();
cetak={};
cetak[x]=k[x].table.data;
window.localStorage.setItem('data3', JSON.stringify(cetak));
},

view3:function(tb,id,mod,x){
k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:mod,induk:induk,tb:tb};
k[x].table.id=id;
k[x].ajax.sql();
},

view4:function(){
k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:'table',isColumn:2,induk:induk,tb:tb};
k[x].table.id=id;
k[x].ajax.sql();
},

view5:function(){
k[x].ajax.isColumn=2;
this.view()
}, // end view


getData:function(){
act=this.method('view2');
arr=JSON.parse(act.isi);

arr=arr.data;
for(key in arr){
induk=conf.tableRead;
x=arr[key].nama;
tb=arr[key].tabel;
id=arr[key].menu;
mod=arr[key].mod;
// alert(id);

ktupad(x);
controller(x);
this.view3(tb,id,mod,x);
}

},

front:function(){
// out  ='<div class="hide depan" id="m2">modal</div>';
// out +='<div id="bar" class="row pColor"></div>';
out  ='<div class="row " id="header">header</div>';
out +='<div class="row" id="body">body</div>';
document.getElementById('content').innerHTML=out;
},


// dev
modul:function(){
tbs=conf.appData.modul;
tb1 =  tbs.filter(function (entry) { return entry.nama === x; });
return tb1[0];
},

method:function(x1){
tbs=this.modul().method;
val =  tbs.filter(function (entry) { return entry.nama === x1; });
return val[0];
},

bar:function(){
act=this.method('bar');
out  ='';
if(act) {arr=JSON.parse(act.isi);
for(i in arr.bar){
out +='<i class="svgIco" onClick="'+arr.bar[i].url+'">'+conf.svg(arr.bar[i].ikon)+'</i>';
}}
document.getElementById('bar').innerHTML=out;
},

modal:function(){
tb=conf.appData.modul[x].modal.isi;
},

home:function(){
  document.documentElement.style.setProperty('--bColor', '#FFFFFF');

conf.open('atas');
act=this.method('home');
arr=JSON.parse(act.isi);
// arr=arr.data;

data=conf.menu.data;
var ikon = data.filter( el => el.induk ==arr);
out  ='<div id="modal" class="depan hide"></div>';
out +='<div class="row">';
out +='<div class="l-3 s-6 center " onClick="k.home.app.alur()">';
out +='<i class="svgIco svgImg">'+conf.svg('diagram')+'</i>';
out +='<br>Alur';
out +='</div>';

for (i in ikon){
out +='\
<div class="l-3 s-6 center " onClick="conf.loadFunction(\''+ikon[i].url+'\')"> \
<i class="svgIco svgImg">'+conf.svg(ikon[i].ikon)+'</i> \
<br>'+ikon[i].nama+'\
</div>';
}
out +='</div>';
document.getElementById('content').innerHTML=out;
},



form:function(){
frm=this.modul().form;
for(key in frm){ k[x].form[frm[key].nama](frm[key].isi); }
},

tableread:function(i) {
act=this.method('read');
arr=JSON.parse(act.isi);
method=arr.method;
isColumn=arr.isColumn;

k[x].ajax.isColumn=isColumn;
k[x].button.mode='edit';
k[x].crud.read(i);

induk=conf.tableRead;
tableinduk=conf.tableinduk;
// alert(tableinduk)

},

read:function(i){
act=this.method('read');
if(!act){
k[x].button.mode='edit';
k[x].crud.read(i);
// alert('noread')
}
else {
arr=JSON.parse(act.isi);
method=arr.method
induk=arr.induk
// alert('arr.induk:'+induk)
conf.tableRead=k[x].table.data[i][induk];
if(method=='view2'){ conf.tableinduk=k[x].table.data[i][induk];  }

k[x].app[method](i);
// induk=conf.tableRead;
// alert('conf.tableread:'+induk)

}
},

add:function(){
act=this.method('add');
// alert(act.isi);
if(!act){ k[x].crud.add();}
else { k[x].app[act.isi]();}
},


add3:function(callback){
kode=conf.item;
induk=conf.tableRead;
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'add',induk:induk,kode:kode};
k[x].ajax.get(callback);
},

pilih2:function(){
alert('pilih2');
},

pilih:function(){
arr=this.method('pilih');
asal=arr.isi.asal
// arr=this.modul().pilih;
tb=arr.tabel;
id=arr.menu;
mod=arr.mod;
//
k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:mod,induk:induk,tb:tb};
k[x].table.id=id;
k[x].ajax.sql();

k[x].table.add=function(){ k[x].crud.add();}
k[x].table.read=function(i){
conf.item=k[x].table.data[i].kode;
// k[x].app.asal();
k[x].app.add3(function(res){ k[x].app[asal]();});
}
},

cetak:function(){
arr=this.method('cetak');
cetak={};
// cetak=k['kasir'].table.data;
cetak.a=k['kasirDetail'].table.data;
cetak.b=k['kasirItems'].table.data;
window.localStorage.setItem('data3', JSON.stringify(cetak));
// window.open(arr.isi);
conf.loadFunction(arr.isi);

},

//end dev

map: function(){
out='<div id = "map" style = "width:100%; height:580px"></div>';
document.getElementById('content').innerHTML=out;
gps=conf.tableRead.split(',');

var mapOptions = {
// center:[-6.41944,106.86358],
center:[gps[0],gps[1]],
zoom: 15
}
var map = new L.map('map', mapOptions);
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
// var marker = L.marker([-6.41944,106.86358]);
var marker = L.marker([gps[0],gps[1]]);
marker.addTo(map);
},


scan:function(){
out = '<canvas id="canvas"></canvas>';
out += '<div id="results"  class="hide"></div>';
out += '<div class="row center">';
out += '<input type=button value="Hadir" onClick="k.hadir.app.shot()"></div>';
// out += '<input type=button value="Hadir" onClick="k.hadir.app.saveSnap()">';
k[x].modal.data=out;
k[x].modal.view();

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

shot:function() {
var canvas = document.getElementById('canvas');
var dataURL = canvas.toDataURL('image/jpeg', 0.5);
console.log(dataURL);
document.getElementById('results').innerHTML ='<img id="imageprev" src="'+dataURL+'"/>';
this.simpan(dataURL);
},

simpan:function() {
img= document.getElementById('imageprev').src;
datass={mod:img};
var http = new XMLHttpRequest();
http.open("POST", 'cam/upload.php', true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() {
if(http.readyState == 4 && http.status == 200) {
// callback(http.responseText);
// console.log(http.responseText);
// track.stop();
conf.img=http.responseText;
conf.close('modal');
k.hadir.app.simpanDb();

}}

http.responseType = "text";
http.onprogress = function(e) { if (e.lengthComputable) { } };
http.onloadstart = function(e) { };
http.onloadend = function(e)  { };
http.send(JSON.stringify(datass));
},

simpanDb:function() {
k[x].crud.add();
document.getElementById('keterangan').value='[img]cam/'+conf.img+'[/img]' ;
// conf.lokasi('gps');
},

// tableadd:function() {
// k[x].ajax.isColumn=2;
// k[x].crud.add();
// },
//



qrscan:function(){
out = '<canvas hidden="" id="qr-canvas"></canvas>';
k[x].modal.data=out;
k[x].modal.view();
qrScan('qr-canvas',function callback(res){
conf.close('modal');
conf.info(res);
// k[x].search.dosearch(this.data, res);
});
},

qrscan2:function(){
// alert(x)
// conf.info(x);
out = '<input type="text" id="qrTxt">';
conf.modal2(out);
e=document.getElementById("qrTxt");
e.addEventListener("keypress", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
conf.item=e.value;
e.value='';
k[x].app.add3(function(res){
conf.info(x);
k[x].app.getData(); });
}
});
},

button:function(){
out='<button id="ext-s" class="btn-" >Show Map</button>';
document.getElementById(x+'-Btn').innerHTML=out;

kode=document.getElementById('inp-kode').value;
document.getElementById("ext-s").addEventListener("click", function(event) {
// alert('hi');
k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:'keluar',kode:kode};
k[x].ajax.get(function(res){
induk=JSON.parse(res);
// alert(induk);
document.getElementById('inp-keluar').value=induk[0].keluar;

window.localStorage.setItem('data3', JSON.stringify(induk));
// window.open('prints/parkir.html');
// window.open('?c=report/report/1');
conf.loadFunction(arr.isi);

});

});
},


baru:function(){
mode='JL';
lokasi='pusat';
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'baru',mode:mode,lokasi:lokasi};
k[x].ajax.get(function(res){
induk=JSON.parse(res);
conf.tableRead=induk;
conf.ref=induk;
// alert(induk);
k[x].app.view2();

});
},



app:function(){
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'app'};
k[x].ajax.get(function(res){
induk=JSON.parse(res);
debug(induk);
});
},


admin:function(){
conf.open('atas');
conf.loadFunction('app/home');
},

atas:function(){
conf.open('atas');
document.getElementById('btnMenu').innerHTML=conf.svg('menu');
out ='<i class="svgIco" onclick="conf.loadFunction(\'app/home\')">'+conf.svg('home')+'</i>';
out +='<i class="svgIco" onclick="conf.loadFunction(\'demo/home\')">'+conf.svg('view')+'</i>';
document.getElementById('li-kiri').innerHTML=out;
out ='<i class="svgIco" onclick="conf.loadFunction(\'dev/home\')">'+conf.svg('param')+'</i>';
// out +='<i class="svgIco" onclick="conf.loadFunction(\'param/view\')">'+conf.svg('exam')+'</i>';
// out +='<i class="svgIco" onclick="conf.loadController(conf.tas)">'+conf.svg('bag')+'</i>';
// out +='<span id="badge" class="badge" data-badge="0"></span></li>';
document.getElementById('li-kanan').innerHTML=out;
},





color:function(){
arr=[
{name:'Red',pColor:'#b71c1c',pLightColor:'#f05545',pDarkColor:'#7f0000',pTextColor:'#ffffff'},
{name:'Pink',pColor:'#880e4f',pLightColor:'#bc477b',pDarkColor:'#560027',pTextColor:'#ffffff'},
{name:'Purple',pColor:'#4a148c',pLightColor:'#7c43bd',pDarkColor:'#12005e',pTextColor:'#ffffff'},
{name:'Deep Purple',pColor:'#311b92',pLightColor:'#6746c3',pDarkColor:'#000063',pTextColor:'#ffffff'},
{name:'Indigo',pColor:'#1a237e',pLightColor:'#534bae',pDarkColor:'#000051',pTextColor:'#ffffff'},
{name:'Blue',pColor:'#0d47a1',pLightColor:'#5472d3',pDarkColor:'#002171',pTextColor:'#ffffff'},
{name:'Light Blue',pColor:'#01579b',pLightColor:'#4f83cc',pDarkColor:'#002f6c',pTextColor:'#ffffff'},
{name:'Cyan',pColor:'#01579b',pLightColor:'#4f83cc',pDarkColor:'#002f6c',pTextColor:'#ffffff'},
{name:'Teal',pColor:'#004d40',pLightColor:'#39796b',pDarkColor:'#00251a',pTextColor:'#ffffff'},
{name:'Green',pColor:'#1b5e20',pLightColor:'#4c8c4a',pDarkColor:'#003300',pTextColor:'#ffffff'},
{name:'Light Green',pColor:'#33691e',pLightColor:'#629749',pDarkColor:'#003d00',pTextColor:'#ffffff'},
{name:'Lime',pColor:'#827717',pLightColor:'#b4a647',pDarkColor:'#524c00',pTextColor:'#ffffff'},
{name:'Yellow',pColor:'#f57f17',pLightColor:'#ffb04c',pDarkColor:'#bc5100',pTextColor:'#000000'},
{name:'Amber',pColor:'#ff6f00',pLightColor:'#ffa040',pDarkColor:'#c43e00',pTextColor:'#000000'},
{name:'Orange',pColor:'#e65100',pLightColor:'#ff833a',pDarkColor:'#ac1900',pTextColor:'#000000'},
{name:'Deep Orange',pColor:'#bf360c',pLightColor:'#f9683a',pDarkColor:'#870000',pTextColor:'#ffffff'},
{name:'Brown',pColor:'#3e2723',pLightColor:'#6a4f4b',pDarkColor:'#1b0000',pTextColor:'#ffffff'},
{name:'Grey',pColor:'#212121',pLightColor:'#484848',pDarkColor:'#000000',pTextColor:'#ffffff'},
{name:'Blue Grey',pColor:'#263238',pLightColor:'#4f5b62',pDarkColor:'#000a12',pTextColor:'#ffffff'},
]

out='';
for(i in arr){a=arr[i];
out+='<div class="row center">';
out+='<i class="l-2 s-4 center" > '+a.name+' </i>';
out+='<div class="l-2 s-4 center" style="background:'+a.pColor+'" > '+a.pColor+' </div>';
out+='<div class="l-2 s-4 center" style="background:'+a.pLightColor+'" > '+a.pLightColor+' </div>';
out+='<div class="l-2 s-4 center" style="background:'+a.pDarkColor+'" > '+a.pDarkColor+' </div>';
out+='<div class="l-2 s-4 center" > '+a.pTextColor+' </div>';
out+='<div class="l-2 s-4 center" > View </div>';
out+='</div>';
}
document.getElementById('content').innerHTML=out;
},


appUpdate:function(){
window.localStorage.removeItem('appData');
conf.getappdata();
},


icons:function(){
arr=['home','printer','close','camera','plus','menu','lokasi',
'target','pesan','map','kontak','calendar','laporan','akses',
'param','minus','image','like','favorite','search','bag','score',
'exam','pined','blog','barang','tool','share',
'distribusi','label','simpan','proses','troli','code','bucket','view','cloud','diagram',
];
out='';
for(i in arr){a=arr[i];
out+='<div class="l-2 s-4 center">';
out+='<i class="svgIco reds">'+svg(a)+'</i>';
out+='<br>'+a+'</div>';
}
document.getElementById('content').innerHTML=out;
},

};};
