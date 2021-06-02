isDebug = 1;
if (isDebug) var debug = console.log.bind(window.console)
else var debug = function(){}

var conf={
isDebug:1,
isLang:0,
isDb:1,
isDbs:12,
isStr:true,
dataUser:{name:'sa',akses:['c','r','u','d'],token:'fa723e8241927aeedd76960c2234d5f5'},
dataApp:{ data:[],host:'http://localhost/',model:'system/database.php',path:'system/model.php'},
periode:'2021-01-01 s/d 2021-12-31',

getappdata:function(){
  var data=window.localStorage.getItem('appData');
  if(!data){
    datas={token:'1258',mod:'app',cond:''};
    datas.host=this.dataApp.host;
     conf.loadModel(datas,function(res){
     json=JSON.parse(res);
     debug(json);
     window.localStorage.setItem('appData', JSON.stringify(json));
     conf.getapp(res);
      });
  }
  else{
  var data=window.localStorage.getItem('appData');
  conf.getapp(data);
  }
},

getapp:function(data){
appData=JSON.parse(data);
conf.appData=appData;
document.title=appData.app[0].nama;
conf.dataApp.host=appData.app[0].host;
conf.dataApp.model=appData.app[0].model;
conf.dataApp.home=appData.app[0].home;
menu=appData.menu;
conf.menuData=menu;
conf.menu.data=menu;
conf.menu.view();

var c =conf.getURL('c');
if(!c){c=conf.dataApp.home;}
conf.loadFunction(c); conf.info(c);

},

getAlur:function(){ debug('conf.getAlur');
var acc = document.getElementsByClassName("alur");
var i;
for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}
});
}
},

cari:function(data,callback) { debug('conf.cari');
// data=k[x].table.data[0];
kini=conf.sekarang();

out = 'Cari:<select  name="fld" id="fld">';
for ( i in data) { out += '<option value=" '+data[i]+' " >'+data[i]+'</option>'; }
out += '</select>';
out += '<input type="text" name="key" id="key">';

sekarang=" AND tanggal='"+kini['td'] +"'";
bulanini=" AND tanggal between '"+kini['fdm']+"' AND '"+kini['ldm']+"'";
cus = conf.periode.split(" s/d ");
custom=" AND tanggal between '"+cus[0]+"' AND '"+cus[1]+"'";

arr=[
{key:'All',value:''},
{key:'Hari Ini [ '+kini['td']+' ]',value:sekarang},
{key:'Bulan ini [ '+kini['fdm']+ ' s/d ' + kini['ldm']+' ]',value:bulanini},
{key:'Pilihan [ '+cus[0]+ ' s/d ' + cus[1]+' ]',value:custom}
];

out += 'Periode:<select  name="periode" id="periode">';
for ( i in arr) { out += '<option value=" '+arr[i].value+' " >'+arr[i].key+'</option>'; }
out += '</select>';

out += '<button class="btn-form" id="getCari">Okey</button>';
k[x].modal.data=out;
k[x].modal.view();
document.getElementById('getCari').addEventListener("click", function(){
var fld = document.getElementById('fld').value;
var key = document.getElementById('key').value;
var periode = document.getElementById('periode').value;

obj  = " AND "+fld+" LIKE '%"+key+"%'";
obj  += periode ;
obj=encodeURIComponent(obj);
callback(obj);
// return obj;

// induk=k[x].app.induk;
// k[x].ajax.data={mod:'cari',cond:obj,induk:induk};
// k[x].ajax.sql();


});
},


loadModel:function(data,callback){  debug('conf.loadModel');
var http = new XMLHttpRequest();
// http.open("POST", this.dataApp.host+this.dataApp.model, true);
http.open("POST", this.dataApp.model, true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() {
if(http.readyState == 4 && http.status == 200) { callback(http.responseText);
}}

http.responseType = "text";
http.onprogress = function(e) { if (e.lengthComputable) {

// k[x].spinner.view();
// var percentComplete = (e.loaded / e.total) * 100;
// debug(percentComplete + '% uploaded');
} };
http.onloadstart = function(e) {
  // k[x].spinner.view();
};
http.onloadend = function(e)  {
  // conf.close('spinner');
};
http.send(JSON.stringify(data));
},

loadView:function(html){  debug('conf.loadView');
},

getCSS:function(file, i){  debug('conf.loadcss');
var oldlink = document.getElementsByTagName("link").item(i);
var newlink = document.createElement("link");
newlink.setAttribute("rel", "stylesheet");
newlink.setAttribute("type", "text/css");
newlink.setAttribute("href", file);
document.getElementsByTagName("head").item(i).replaceChild(newlink, oldlink);
},

loadFunction:function(p){  debug('conf.loadFunction');
var m = p.split('/'),
x = m[0],
y = m[1];
conf.loadFunctionData=m;
ktupad(x);
controller(x);
// alert(x+y);
k[x].app[y]();

},

loadController:function(sc){  debug('conf.loadController');
var p = sc.split('?'),
p0 = p[0],
p1 = p[1];
var m = p1.split('/'),
m0 = m[0],
m1 = m[1],
b=''+p0;
debug(m1);
conf.modulIndex=m0;
this.loadScript([b], function() {
k[m0].app[m1]();
});
this.isSc=1;
},

isScriptLoaded:function(url) {
// if (!url) url = "http://xxx.co.uk/xxx/script.js";
var scripts = document.getElementsByTagName('script');
for (var i = scripts.length; i--;) { if (scripts[i].src == url) return true; }
return false; },


loadScript:function(scripts, callback) { debug('conf.loadScript');
var count = scripts.length;

function urlCallback(url) {
return function () {
debug(url + ' was loaded (' + --count + ' more scripts remaining).');
if (count < 1) { callback();  }
};
}

for (var url of scripts) {
var s = document.createElement('script');
s.setAttribute('src', url);
s.onload = urlCallback(url);
document.head.appendChild(s);
}
},

loadcss:function(file) { debug('conf.loadcss');

var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.id   = 'cssId';
link.rel  = 'stylesheet';
// link.rel  = 'preload';
link.type = 'text/css';
link.href = file;
link.media = 'all';
head.appendChild(link);
},

close:function(id){ debug('conf.close: '+id);
var z=document.getElementById(id);
z.className = z.className.replace('show', 'hide');
}, // end close

open:function(id){ debug('conf.open: '+id);
var z=document.getElementById(id);
z.className = z.className.replace('hide', 'show');
}, // end open

info:function(msg){ debug('conf.info');
var z=document.getElementById('bawah');
z.innerHTML=msg;
z.className = z.className.replace('hide', 'show');
setTimeout(function(){ z.className = z.className.replace('show', 'hide'); }, 3000);
},

getURL:function(x){ debug('conf.getURL');
var url = new URL(window.location.href);
return url.searchParams.get(x);
},

setURL:function(x){ debug('conf.setURL');
window.open('?m='+x,'_self');
debug(x);
},

getSplit:function(m,i){ debug('conf.getsplit');
var mystr = this.getURL(m);
var myarr = mystr.split("/");
var myvar = myarr[i];
debug(myvar);
return myvar;
},


cookies:{
set:function (nama,isi,hari) {
var d = new Date();
d.setTime(d.getTime() + (hari*24*60*60*1000));
var exp = "expires=" + d.toGMTString();
document.cookie = nama + "=" + isi + ";" + exp + ";path=/";
},
get:function(nama) {
var name = nama + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i < ca.length; i++) {
var c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
},
cek:function () {
var user=this.get("username");
if (user != "") {
alert("Welcome again " + user);
} else {
user = prompt("Please enter your name:","");
if (user != "" && user != null) {
this.set("username", user, 30);
}
}
}

},

lang:{
id:'eng',
data:[{kode:"email",ina:"Email",eng:"E-mail"},{kode:"password",ina:"Sandi",eng:"Password"},],
view:function (i){ // debug('conf.lang.view: '+i);
str=i.toLowerCase();
let country = this.data.find(el => el.kode === str);
if(country){ return country[this.id] ;}
else { a=i.replace("_", " ");
function jsUcfirst(string){ return string.charAt(0).toUpperCase() + string.slice(1); }
return jsUcfirst(a);
}
},
},

menu:{
id:'menu',
data:[{ id:'1',induk:'0', nama:'Login',url:'master/login/view'}],
callback:function(){},
view:function(id){ debug('menu.view');
menu=this.data;
out=recurseMenu(0);
document.getElementById('kiri').innerHTML=out;
function recurseMenu(parent) {
out = '<a href="#" onclick="conf.close(\'kiri\')" class="btn-close svgIco">'+conf.svg('close')+'</a><li class="smli pColor">';
// out = '<a onclick="conf.close(\'kiri\')" href="#" class="btn-close ico-close"> klosess</a><li class="smli pColor">';

for (var x in menu) {node=menu[x];
if (node.induk == parent) {
// out += '<input class="pColor" type="checkbox"  id="' + node.nama + '" > <label class="btn-h" for="'+ node.nama + '" onClick="conf.loadController(\''+node.url+'\')" >' + conf.lang.view(node.nama) + '</label>';
out += '<input class="pColor" type="checkbox"  id="'+ node.induk+'-'+ node.nama + '" > <label class="btn-h" for="'+ node.induk+'-'+ node.nama + '" onClick="conf.loadFunction(\''+node.url+'\')" >' + conf.lang.view(node.nama) + '</label>';
if (node.id > 0) { out += '<ul class="sm">'+recurseMenu(node.id)+'</ul>';	}
out += '</li>';
}
}
return out ;
}
}, // end view
}, // eend menu


bbcode:{
id:'content',
data:"[h=1] Ktupad [/h] [b]BBCode[/b] [br] Website [url=//ktupad.com] Ktupad [/url] [br] [img]system/ktupad.svg[/img]",
arr:{
'\r':'',
'\n':'<br>',
'[more]':'<!--more-->',
'[br]':'<br/>',
'[b](.+?)[/b]':'<b>$1</b>',
'[i](.+?)[/i]':'<i>$1</i>',
'[btn=(.+?)](.+?)[/btn]':'<button onclick="conf.loadFunction(\'$1\')">$2</button>',

'[i=(.+?)](.+?)[/i]':'<i clas="$1">$2</i>',
'[url=(.+?)](.*?)[/url]':'<a href="$1">$2</a>',
'[h=(.*?)](.*?)[/h]':'<h$1>$2</h$1>',
'[img](.*?)[/img]':'<img src="$1" alt="$1" class="img">',
'[img=(.*?)](.*?)[/img]':'<img clas="$1" src="$2" alt="$2">',

'[vid](.*?)[/vid]':'<video width="400" controls><source src="$1" type="video/mp4"></video>',
'[span=(.+?)](.*?)[/span]':'<span class="$1">$2</span>',
'[div=(.+?)](.*?)[/div]':'<div class="$1">$2</div>',
'[div1=(.+?)](.*?)[/div1]':'<div class="$1">$2</div>',
'[svg=(.+?)](.*?)[/svg]':'<i class="$1"><svg viewBox="0 0 20 20"><use xlink:href="#svg$2"></use></svg></i>',
// '[svg=([^,]*?)(?:,[^]\'"]+)](.*?)[/svg]':'<i class="$1"><svg viewBox="0 0 20 20"><use xlink:href="#svg$2"></use></svg></i>',

},
get:function (data){
string = data  || "";
for (key in this.arr){
var regTag = key.replace(/[\[\]]/g , '\\$&');
var regExp = new RegExp(regTag, 'gi');
string = string.replace(regExp, this.arr[key]);
}
// document.getElementById(this.id).innerHTML = string;
return string;
},
view:function (data){
// data=this.data;
string=this.get(data)
// document.getElementById(this.id).innerHTML = string;
return string;
}

}, // end bbcode



// editor
editor:{
id:'editor',
val:'[url=//ktupad.com]ktupad.com[/url]',
data:[{id:1,url:"i",name:"italic"},
{id:1,url:"b",name:"bold"},
{id:2,url:"img",name:"images"},
{id:2,url:"vid",name:"video"},
{id:3,url:"url",name:"link"},
{id:4,url:"br",name:"break"},
{id:4,url:"more",name:"more"},
],
// callback:function(){},

view:function() { debug('editor.view');
arr=this.data;
id=this.id;
val=this.val;
el=document.getElementById('el-'+id);
// val=document.getElementById(id).value;

out = '<div class="bar pColor"><ul>';
for (key in arr) {
out += '<li  onclick=conf.editor.setel("'+arr[key].url+'"); ><i class="btn-small">'+arr[key].url+'</i></li>';
// out += '<li class="btn-close ico-close" onclick=conf.editor.editor.setel("'+arr[key].url+'"); >'+arr[key].name+'></li>';
}
out += '<li  onclick=conf.editor.preview("'+id+'"); ><i class="btn-small">View</i></li>';
out += '</ul></div>';
out += '<textarea id="'+id+'" name="'+id+'" rows="5">'+val+'</textarea>';
out += '<div id="preview-'+id+'"> </div>';
el.innerHTML=out;
},

preview:function(id) { debug('editor.preview');
data=document.getElementById(id).value;
document.getElementById('preview-'+id).innerHTML=conf.bbcode.view(data);
},

setel:function(opt) { debug('editor.setel');
id=this.id;
var url=['url']
// var img=['img']
var txtarea = document.getElementById(id);
var start = txtarea.selectionStart;
var finish = txtarea.selectionEnd;
var allText = txtarea.value;

var sel = allText.substring(start, finish);
var newText=allText.substring(0, start);
a='';
if(opt=='url'){a ="=";}
nah ="["+opt+a+"]"+sel+"[/"+opt+"]";

if(opt=='br'){nah ="["+opt+"]"};
if(opt=='more'){nah ="["+opt+"]"};
if(opt=='img' || opt=='vid'){
  // nah ="["+opt+"]"
  // k[x].upload.image();

  out = '<p id="mInfo"></p>';
  out += 'Pilih File Gambar:<input type="file" name="afile" id="afile" accept="image/*" >';
  out += '<button class="btn-form" id="btnImport" >Upload</button>';
  conf.modal2(out);
  k[x].upload.mod='upload';
  k[x].upload.get(callback);
  function callback(res) {
    // nah ="["+res+"]";
    sel=JSON.parse(res);
    sel="system/"+sel.file;
    nah ="["+opt+"]"+sel+"[/"+opt+"]";
    newText +=nah;
    newText +=allText.substring(finish, allText.length);
    txtarea.value=newText;
    // document.getElementById('mInfo').innerHTML=res ;
  }
};


// if(img.includes(opt)){ nah ="["+opt+" src="+ser+"]"+sel+["+opt+"]"";}

newText +=nah;
newText +=allText.substring(finish, allText.length);
txtarea.value=newText;
},
}, // end  editor


jam:function(){
var waktu = new Date();
var hh = waktu.getHours();
var mm = waktu.getMinutes();
var ss = waktu.getSeconds();
jam = hh + ":" + mm + ":" + ss ;
return jam;
}, // end jam


sekarang:function(){
var today = new Date();
var d = String(today.getDate()).padStart(2, '0');
var m = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var y = today.getFullYear();
var ld =String(new Date(y, m , 0).getDate()).padStart(2, '0');
td  =  y + '-' + m + '-' + d ;
fdm =  y + '-' + m + '-01';
ldm =  y + '-' + m + '-'+ ld;
kini={ d:d, m:m, y:y, ld:ld, td:td, fdm:fdm, ldm:ldm }
return kini;
}, // end sekarang

lokasi:function(id){
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(displayLocationInfo);
}

function displayLocationInfo(position) {
const lng = position.coords.longitude;
const lat = position.coords.latitude;
// lokasi=lat +', '+ lng ;
// return lokasi;
document.getElementById(id).value=lat +', '+ lng ;;
// conf.getLokasi=lat +', '+ lng ;
}
// return conf.getLokasi;

}, // end lokasi

svg:function(id){
  // alert(id);
return '<svg viewBox="0 0 20 20"><use xlink:href="#svg'+id+'"></use></svg>';

},

modal2:function(data){
out ='<div class="noprint modal row">';
out += '<i onclick="conf.close(\'modal2\')"   class="btn-close svgIco">'+conf.svg('close')+'</i>';
// out += '<input type="text" id="qrTxt">';
out += data;
out += '</div>';
conf.open('modal2');
var z=document.getElementById('modal2');
z.innerHTML=out;
z.className = z.className.replace('hide', 'show');
},


}; // end conf





var k={};
var ktupad=function(x){



k[x]={

//table
table:{
id:'content',
data:[{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'}],
fld:['id','nama'],
hide:['id'],
page:1,
rpp:100,
isStr:1,
visible:'hide',
mode:'datatable',
rowClick:function(i){},
callback:function(){},

view:function () { debug('table.view');
mode=this.mode;
k[x].table[mode]();
},

table:function () { debug('table.table');
id=this.id;
data=this.data;
// fld= Object.keys(data[0]);
fld= this.fld;
var al=data.length;
var	col=fld;
out  = '<div class="table"><table id="table">';
out += '<thead><tr>';
outf  = '<tfoot><tr><td class="noprint '+this.visible+'"  ></td>';
out += '<th class="noprint pColor '+this.visible+'" ><label for="chs'+x+'" ></label><input type="checkbox" id="chs'+x+'" name="chs'+x+'" onclick=k.'+x+'.table.CheckAll(this,\'chk'+x+'\')></th>';
for (i in col){ key=col[i]; hide=this.hidden(key);
outf += '<td id="f'+ key +'" class="'+hide +'"></td>';
out  += '<th id="fh'+ key +'" class="'+hide+' pColor pTextColor col_'+key+'" onClick=k.'+x+'.table.sortir(data,"'+key+'") > ' + conf.lang.view(key) + '</th>';
}
out += '</tr></thead>';
outf += '</tr></tfoot>';
out += '<tbody>';
for (var i = (this.page-1) * this.rpp; i < (this.page * this.rpp) && i < al; i++) {cols=data[i];
out += '<tr>';
out += '<td class="noprint '+this.visible+'"><label for="chk'+x+i+'" ></label><input type="checkbox" id="chk'+x+i+'"  name="chk'+x+'" value="'+i+'" onclick=k.'+x+'.table.getVal(x)></td>';
for (key in cols) {  hide=this.hidden(key);
var str=cols[key];

// items=str.id;
// if(this.isStr==1) { if(str.length>12){ str=str.substring(0, 12) + ' ...' } }
out += '<td  class="'+hide+' col_'+key+'"  onClick=k.'+x+'.table.rowClick('+i+'); > ' + str +'</td>';
}
out += '</tr>';
}
out += '</tbody>';
out += outf;
out += '</table></div>';
document.getElementById(id).innerHTML=out;
this.callback();
},

datatable:function () {
k[x].table.visible='show';
k[x].table.rowClick=function(i){k[x].table.read(i);};
debug(data);

id=this.id;
data=this.data;
page=this.page;
rpp=this.rpp;
mode=this.mode;
debug(data);

out  ='<div id="'+x+'-float"></div>';
out += '<div id="'+x+'-search"></div>';
out += '<div id="'+x+'-table"></div>';
out += '<div id="'+x+'-pagination"></div>';
out += '<div id="'+x+'-sum"></div>';
// out += '<div id="modal" class="depan hide"></div>';
// out += '<div id="modal2" class="depan hide"></div>';

// debug(id);
document.getElementById(id).innerHTML=out;
// k[x].button.form();

k[x].search.data=data;
k[x].search.id=x+'-search';
k[x].search.title=x;
k[x].search.view();

k[x].search.callback=function(data){

k[x].table.data=data;
debug(data);

k[x].table.table();
k[x].pagination.data=data;
debug(data);

k[x].pagination.view();
}

k[x].table.data=data;
k[x].table.rpp=rpp;
k[x].table.id=x+'-table';
k[x].table.table();

k[x].pagination.rpp=rpp;
k[x].pagination.data=data;
// debug(data);
k[x].pagination.id=x+'-pagination';
k[x].pagination.view();

k[x].pagination.callback=function(page){
k[x].table.page=page;
k[x].table.data=data;
// debug(data);
k[x].table.rpp=rpp;
k[x].table.table();
}

k[x].button.add();
k[x].button.tool();
debug(data);
},

gallery:function () { debug('table.gallery');
data=this.data;
id=this.id;
var al=data.length;
var	col=data[0];
out = '';
out += '<div class="gallery row">';
for (var i = (this.page-1) * this.rpp; i < (this.page * this.rpp) && i < al; i++) {cols=data[i];
out += '<div class="galcolumn row" onClick=k.'+x+'.table.read('+i+'); >';
out += '<img src="images/citra/'+data[i].name+'" style="width:100%">';
out += '<div class="desc">'+data[i].id+'</div>';
out += '<div class="desc">'+data[i].name+'</div></div>';
}
out += '</div>';
document.getElementById(id).innerHTML=out;
},



sortir:function (arr,id) { debug('table.sortir');
asc=true;
var sortByProperty = function (property) {
return function (x, y) {
if (asc){
return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
}
else{
return ((y[property] === x[property]) ? 0 : ((y[property] > x[property]) ? 1 : -1));
}
};
};
arr.sort(sortByProperty(id));
this.view()
},

hidden:function(id) { // debug('table.hide');
arr=k[x].table.hide;
if(arr.includes(id)) { return 'hide';}
},

add:function() { debug('table.add');
// alert(x);
// k[x].button.mode='edit';
// k[x].crud.add();
k[x].app.add(i);

},

read:function(i) { debug('table.read');
k[x].app.read(i);
// k[x].button.mode='edit';
// k[x].crud.read(i);
},

sum:function(data,col){ debug('table.sum');
var total = 0
for ( var i = 0, _len = data.length; i < _len; i++ ) {
total += parseInt(data[i][col])
}
return total
},

CheckAll:function(el,o) { debug('table.Checkall');
var c=document.getElementsByName(o);
for (var i=0;i<c.length;i++) c[i].checked = el.checked? true:false ;
}, // end CheckAll

getVal:function(x){ debug('table.getval');
var c=document.getElementsByName('chk'+x);
debug(x);
var data=[];
for (var i=0;i<c.length;i++) c[i].checked? data[data.length]=c[i].value:null;
data.join(",");
debug(data);
},
},


// form
form:{
id:'form',
data:{id:1,name:'a'},
hide:['id'],
callback:function(){k[x].app.form();},
view:function() { debug('form.view');
id=this.id;
data=this.data;
// fld= Object.keys(data);
fld= k[x].table.fld;
out  = '<div id="cube"></div>';
out  += '<form id="Form">';
for (i in fld) { key=fld[i]; hide=k[x].table.hidden(key);
out += '<div class="row '+hide+'">';
out += '<div id="f-'+key+'" style="margin:5px">';
out += '<div id="la-'+key+'" class="l-4 s-12">';
out += '<label for="inp-'+key+'">'+conf.lang.view(key) + '</label>';
out += '</div>';
out += '<div class="l-8 s-12">';
out += '<div id="el-'+key+'"><input type="text" id="inp-'+key+'" name="'+key+'" value=""></div>';
out += '</div></div>';
out += '</div>';
}
out += '</form>';
out += '<div id="'+x+'-Button" class="row"></div>';
out += '<div id="'+x+'-Btn" class="row"></div>';
document.getElementById(id).innerHTML=out;
if(data!=[]){
for (i in data) {
document.getElementById('inp-'+i).value=data[i];
// debug(data[i]);
// debug(i);
}

}
this.callback(data);
k[x].button.id=x+'-Button';
k[x].button.form();
},

form:function(){  debug('form.form');

},


checkbox:function(id,arr){ debug('form.checkbox');
el=document.getElementById('el-'+id);
val=document.getElementById('inp-'+id).value;

var vc= val.split(',');
out='<input type="text" name="'+id+'" id="'+id+'" value="'+val+'">';
for(i in arr){
if(vc.includes(arr[i])){var ci = 'checked=checked';} else { ci = '';}
out += '<input type="checkbox" id="chk'+id+i+'" name="chk[]" value="'+arr[i]+'" onclick=getVal("'+id+'") '+ci+' >';
out += '<label for="chk'+id+i+'">'+arr[i]+'</label><br>';
}
el.innerHTML=out;

},

jam:function(id){ debug('form.jam');
document.getElementById('inp-'+id).value=conf.jam();
},

tanggal:function(id){ debug('form.tanggal');
sekarang=conf.sekarang();
document.getElementById('inp-'+id).value=conf.sekarang().td;
},

gps:function(id){ debug('form.gps');
// el=document.getElementById('el-'+id);
// val=document.getElementById('inp-'+id).value;
// out ='<input type="date" id="'+id+'" name="'+id+'" value="'+val+'" min="'+min+'" max="'+max+'">';
// el.innerHTML=out;
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(dli);
}
function dli(position) {
const lng = position.coords.longitude;
const lat = position.coords.latitude;
// lokasi=lat +', '+ lng ;
// return lokasi;
document.getElementById('inp-'+id).value=lat +', '+ lng ;;
// conf.getLokasi=lat +', '+ lng ;
}
// return conf.getLokasi;


},


datepicker:function(id,min,max){ debug('form.datepickers');
el=document.getElementById('el-'+id);
val=document.getElementById('inp-'+id).value;
out ='<input type="date" id="'+id+'" name="'+id+'" value="'+val+'" min="'+min+'" max="'+max+'">';
el.innerHTML=out;
},


datepicker2:function(id){ debug('form.datepickers');
el=document.getElementById('el-'+id);
inp=document.getElementById('inp-'+id);
val=document.getElementById('inp-'+id).value;
out  ='<div id="dp" class="hide"> ';
out += '<select name="ope[]" id="y-'+id+'" >';
for(i = 2000; i < 2012; i++){ out += '<option value='+i+' />'+i+'</option>';}
out += '</select>';
out += '<select name="ope[]" id="m-'+id+'" >';
for(i = 01; i < 12; i++){ out += '<option value='+i+' />'+i+'</option>';}
out += '</select>';
out += '<select name="ope[]" id="d-'+id+'" >';
for(i = 01; i < 31; i++){ out += '<option value='+i+' />'+i+'</option>';}
out += '</select>';
out += '</div>';
out += '<input type="text" id="'+key+'" name="'+key+'" value="">';
el.innerHTML=out;
document.getElementById(key).addEventListener("click", function(){
document.getElementById('dp').className = z.className.replace('hide', 'show');
});
},

datalist:function(id,data){ debug('form.datalist');
el=document.getElementById('el-'+id);
val=document.getElementById('inp-'+id).value;
out='<input type="text" name="'+id+'" id="'+id+'" value="'+val+'" list="l-'+id+'">';
out += '<datalist id=l-'+id+'>';
for(i in data){ out += '<option value='+data[i]+' />';}
out += '</datalist>';
el.innerHTML=out;
},

dropdown2:function(id,data){ debug('form.dropdown');
el=document.getElementById('el-'+id);
out = '<select name="ope[]" id="inp-'+id+'" >';
for(i in data){ out += '<option value='+data[i]+' /> '+data[i]+' </option>';}
out += '</select>';
el.innerHTML=out;
},

droprow:function(p){ debug('form.dropdown');
m=JSON.parse(p);
// alert (p);
id2=m.id;
tb=m.tabel
fld=m.fld
// alert (id);

k[x].ajax.path=k[x].app.url.path;
k[x].ajax.data={mod:'droprow',tb:tb,fld:fld};
k[x].ajax.get(callback);
function callback(json){
arr=JSON.parse(json);
// alert (json);

data=arr.data;
// alert (json);
// alert (data[0][0]);

// alert (id2);
el=document.getElementById('el-'+id2);
val=document.getElementById('inp-'+id2).value;

out = '<select name="'+id2+'" id="o-'+id2+'" >';
for(i in data){ out += '<option value='+data[i][fld]+' />'+data[i][fld]+' </option>';}
out += '</select>';
el.innerHTML=out;
document.getElementById('o-'+id2).value=val;
}
},

dropdown:function(p){ debug('form.dropdown');
m=JSON.parse(p);
id=m.id;
data=m.arr

el=document.getElementById('el-'+id);
val=document.getElementById("inp-"+id).value;
out = '<select name="'+id+'" id="o-'+id+'" >';
for(i in data){ out += '<option value='+data[i]+' /> '+data[i]+' </option>';}
out += '</select>';
el.innerHTML=out;
document.getElementById('o-'+id).value=val;
},

textarea:function(id){ debug('form.textarea');
el=document.getElementById('el-'+id);
val=document.getElementById('inp-'+id).value;
out='<textarea name='+id+' id="inp-'+id+'" >'+val+'</textarea>';
el.innerHTML=out;
},

editor:function(id){ debug('form.editor');
el=document.getElementById('el-'+id);
val=document.getElementById('inp-'+id).value;
conf.editor.id=id;
conf.editor.val=val;
conf.editor.view();
},


el:function (id) { debug('form.el');
frm = document.getElementById(id);
obj={};
for ( var i = 0; i < frm.elements.length; i++ ) { e = frm.elements[i];
obj[e['name']] = e['value'];
}
debug(obj);
return obj;
}, // end el
},
// form end

// modal
modal:{
id:'modal',
data:'text',
callback:function(){},
view:function () { debug('modal.view');
id=this.id;
data=this.data;
out ='<div class="noprint modal row">';
out += '<i onclick="conf.close(\'modal\')"   class="btn-close svgIco">'+conf.svg('close')+'</i>';
out += '<p>';
out +=data;
out += '</p>';
out += '<div id="ext"></div>';
out += '</div>';
debug(id);
var z=document.getElementById(id);
z.className = z.className.replace('hide', 'show');
z.innerHTML=out;
}, // end view
},
// modal end



// button
button:{
id:'button',
data:[{nama:"Ok",url:"alert('Oke!')"}],
callback:function(){},
view:function(){ debug('button.view');
data=this.data;
id=this.id;
i=this.item;
out ='';
for (key in data) {node=data[key];
out += '<button id="b-'+x+node.nama+'" class="btn-form" onclick="'+node.url+'">' + conf.lang.view(node.nama) + '</button>';
}
document.getElementById(id).innerHTML=out;
this.callback(i);
}, // end view


form:function(){  debug('button.form');
btn=[];
akses=conf.dataUser.akses;
if(akses.includes('c')){ btn.splice(0, 0, {nama:"Create",url:"tambah()" });}
if (this.mode=='edit'){
if(akses.includes('u')){ btn.splice(1, 0, {nama:"Update",url:"ubah()" });}
if(akses.includes('d')){ btn.splice(2, 0, {nama:"Delete",url:"hapus()"});}
}

data=this.data;
debug(data);
id=this.id;
i=this.item;
add=function(){k[x].table.add(i)};
tambah=function(){ k[x].crud.create() };
ubah=function(){k[x].crud.update(i);};
hapus=function(){k[x].crud.delete(i);};
out ='';
for (key in btn) {node=btn[key];
out += '<button id="b-'+x+node.nama+'" class="btn-form" onclick="'+node.url+'">' + conf.lang.view(node.nama) + '</button>';
}
document.getElementById(id).innerHTML=out;
this.callback(i);
}, // end view

add:function(id){ debug('button.add');
out ='<i class="noprint btn-float svgIco" onclick="add()">'+conf.svg('plus')+'</i>';
// akses=conf.dataUser.akses;
// if(akses.includes('c')){
// out ='<i class="noprint btn-float" onclick="add()" >'+conf.svg('plus')+'</i>';
// }
document.getElementById(x+'-float').innerHTML=out;
}, // end tools

tool:function(){ debug('button.tool');
btn=[
{nama:"cari",url:"cari()"},
{nama:"print",url:"cetak()"},
{nama:"filter",url:"filter()" },
{nama:"ekspor",url:"ekspor()" },
{nama:"impor",url:"impor()"},
{nama:"gambar",url:"gambar()"},
];
akses=conf.dataUser.akses;
if(akses.includes('c')){ btn.splice(0, 0, {nama:"add",url:"add()" });}
if(akses.includes('u')){ btn.splice(1, 0, {nama:"update",url:"update()" });}
if(akses.includes('d')){ btn.splice(1, 0, {nama:"hapus",url:"hapus()" });}
debug(btn);
cari=function(){k[x].filter.cari();};
add=function(){k[x].table.add();};
hapus=function(){k[x].crud.deletes()};
cetak=function(){k[x].cetak.view()};
filter=function(){k[x].filter.view()};
ekspor=function(){k[x].export.view()};
impor=function(){k[x].upload.csv()};
gambar=function(){k[x].upload.image()};
out='';
for (key in btn) {node=btn[key];
out += '<a onclick="'+node.url+'" href="#" >' + conf.lang.view(node.nama) + '</a>';
}
document.getElementById(x+'-tool').innerHTML = out;
}, // end tools
},
// button


search:{
id:'search',
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"},{id:4,nama:"empat"}],
callback:function(){},
view:function() { debug('search.view');
id=this.id;
out  = '<div class="search row pColor noprint">';
out += '<ul>';
out += '<li class="pTextColor title" style="padding: 14px 16px;">'+ conf.lang.view(this.title) +'</li>';
out += '<li id="li-tengah"></li>';
out += '<li tabindex="0" class="tool" style="float:right" >';
// out += '<i class="ico-tridot dropbtn"></i>';
out += '<i class="svgIco">'+conf.svg('tool')+'</i>';


out += '<div class="subtool" id="'+x+'-tool"></div></li>';
out += '<li style="float:right" ><label for="'+x+'-SearchTxt" ><input type="text" placeholder="Search..." id="'+x+'-SearchTxt" /></label></li>';
out += '</ul>';
out += '</div>';
document.getElementById(id).innerHTML=out;
var z= document.getElementById(x+"-SearchTxt");
z.onkeyup = function() {
var y=z.value;
// a=k[x].table.data;
a=this.data;
k[x].search.dosearch(a, y);
//debug(y);
};
}, // end view

dosearch:function (a, id) { debug('search.dosearch');
a=k[x].search.data;
var data = this.partsearch(a, id);
debug(data);
this.callback(data);
},

partsearch:function(data, key) { debug('search.partsearch');
return data.filter(function (item) {
return Object.values(item).map(function (value) {
return String(value).toLowerCase();
}).find(function (value) { var r=key.toLowerCase();
return value.includes(r);
});
});
},

},

//spinner
spinner:{
id:'spinner',
data:'text',
callback:function(){},
view:function(){  debug('spinner.view');
out  ='<div id="spinner" class="show">';
out += '<div class="spinner">';
out += '<div class="cube cube1"></div>';
out += '<div class="cube cube2"></div>';
out += '<div class="cube cube3"></div>';
out += '<div class="cube cube4"></div>';
out += '<div class="cube cube5"></div>';
out += '<div class="cube cube6"></div>';
out += '<div class="cube cube7"></div>';
out += '<div class="cube cube8"></div>';
out += '</div>';
out += '</div>';
z=document.getElementById('depan');
z.innerHTML=out;
z.className = z.className.replace('hide', 'show');
},
},

//toast
toast:{
id:'toast',
data:'text',
callback:function(){},
view:function(){ debug('toast.view');
var z=document.getElementById(this.id);
z.innerHTML=this.data;
z.className = z.className.replace('hide', 'show');
setTimeout(function(){ z.className = z.className.replace('show', 'hide'); }, 3000);
}, // end view
},

//tabs
tabs:{
id:'tabs',
data:[{id:1,nama:"satu",isi:"satu" },{id:2,nama:"dua",isi:"dua" }],
callback:function(){},
view:function(){
data=this.data;
out ='<div class="tabs">';
for (key in data) { col=data[key]; ids=col['id']; nama=col['nama']; isi=col['isi'];
out += '<input type="radio" name="tabs" id="'+ids+'" checked="checked">';
out += '<label for="'+ids+'">'+nama+'</label>';
out += '<div class="tab">'+isi+'</div>';
}
out += '</div>';
document.getElementById(this.id).innerHTML=out;
},
},


//pagination
pagination:{
id:'pagination',
data:[{id:1,nama:"a" },{id:2,nama:"b"},{id:3,nama:"c"}],
page:1,
rpp:1,
callback:function(){},
view:function(){ debug('pagination.view');
id=this.id;
data=this.data;
rpp=this.rpp;
page=this.page;

var np= Math.ceil(data.length / rpp);
out  ='<div class="noprint row">';
out += '<button id="'+x+'-m" class="btn-form hide">More.</button>';
out += '<button id="'+x+'-p" class="btn-form">Prev</button>';
out += '<button id="'+x+'-n" class="btn-form">Next</button>';
out += 'Page:<span id="'+x+'-s" ></span>';
out += '</div>';
document.getElementById(id).innerHTML=out;
// debug(page);
m=document.getElementById(x+'-m');
p=document.getElementById(x+'-p');
n=document.getElementById(x+'-n');
s=document.getElementById(x+'-s');

m.onclick = function(){
debug('more...');
k[x].ajax.more();

}
p.onclick = function(){
page--;
k[x].pagination.page=page;
k[x].pagination.view();
k[x].pagination.callback(page);
}
n.onclick = function(){
page++;
k[x].pagination.page=page;
k[x].pagination.view();
k[x].pagination.callback(page);
}
s.innerHTML = page + "/" + np + " | Record(s):" + data.length;
if (page < 1) page = 1;
if (page > np) page = np;
if (page == 1) { p.style.display = "none"; } else { p.style.display = "inline"; }
if (page == np) { n.style.display = "none"; } else { n.style.display = "inline"; }
if (data.length == 0) { p.style.display = "none"; n.style.display = "none";  }
},// end view
},
// pagination end


// filter
filter:{
id:'filter',
data:[{id:1,nama:"a" },{id:2,nama:"b"}],
callback:function(){},

cari:function() { debug('filter.cari');
data=k[x].table.data[0];

out = 'Cari:<select  name="fld" id="fld">';
for ( i in data) { out += '<option value=" '+i+' " >'+i+'</option>'; }
out += '</select>';
out += '<input type="text" name="key" id="key">';

out += '<button class="btn-form" id="getCari">Okey</button>';
k[x].modal.data=out;
k[x].modal.view();
document.getElementById('getCari').addEventListener("click", function(){
var fld = document.getElementById('fld').value;
var key = document.getElementById('key').value;
obj  = 'AND '+fld+' LIKE ' + '"%'+key+'%"';
// debug(obj);
obj=encodeURIComponent(obj);

induk=k[x].app.induk;
k[x].ajax.data={mod:'cari',cond:obj,induk:induk};
k[x].ajax.sql();
} );
},

view:function() { debug('filter.view');
data=k[x].table.data[0];
data1 = 'LIKE,NOT LIKE,=,!=,>=,<=,IN,NOT IN'.split(',');
out  = '<button class="btn-form" id="getAdd"/>+</button>';
out += '<form id="filterForm" method="post">';
out += '<div id="newlinktpl">';

out += '<div class="clear row">';
out += '<div class="l-2">';
out += '<select name="ope[]" >';
out += '<option value=" AND " >AND</option>';
out += '<option value=" OR " >OR</option>';
out += '</select>';
out += '</div>';
out += '<div class="l-3"><select  name="fld[]" id="fld">';
for ( i in data) { out += '<option value="'+i+' " >'+i+'</option>'; }
out += '</select></div>';
out += '<div class="l-2">';
out += '<select name="ope1[]" >';
for ( i in data1) { out += '<option value=" '+data1[i]+' " >'+data1[i]+'</option>'; }
out += '</select>';
out += '</div>';
out += '<div class="l-5"><input type="text" name="key[]" ></div>';
out += '</div>';
out += '</div>';
out += '<div id="newlink"></div>';
out += '<div class="clear">';
out += '<input type="hidden" name="order1" id="order1" value="ORDER BY">';
out += ' ORDER BY:<select  name="sortir" id="fld1">';
for ( i in data) { out += '<option value=" '+i+' " >'+i+'</option>'; }
out += '</select>';
out += '</div>';
out += '</form>';
out += '<button class="btn-form" id="getFilter">Filter</button>';
k[x].modal.data=out;
k[x].modal.view();

document.getElementById('getAdd').addEventListener("click", function(){
var div1 = document.createElement('div');
div1.innerHTML = document.getElementById('newlinktpl').innerHTML;
document.getElementById('newlink').appendChild(div1);
} );

document.getElementById('getFilter').addEventListener("click", function(){
// obj  = 'WHERE id !=0' ;
obj  = '' ;
var ope1= document.getElementsByName('ope1[]');
var ope = document.getElementsByName('ope[]');
var fld = document.getElementsByName('fld[]');
var key = document.getElementsByName('key[]');

for ( var i = 0; i < ope1.length; i++ ) {
if(ope1[i].value ==' LIKE '){
obj + '%'+key[i]+'%';}
obj += ope[i].value + fld[i].value + ope1[i].value;

if(ope1[i].value ==' LIKE '||ope1[i].value ==' NOT LIKE '){
obj += '"%'+key[i].value+'%"';}
else if(ope1[i].value ==' IN '||ope1[i].value ==' NOT IN '){
obj += '('+key[i].value+')';}
else {
obj += key[i].value;}
}

debug(obj);
obj=encodeURIComponent(obj);

// k[x].table.view();
induk=k[x].app.induk;
k[x].ajax.data={mod:'cari',cond:obj,induk:induk};
// k[x].crud.table();
k[x].ajax.sql();

} );
}
},
// filter end

// export
export:{
id:'export',
data:'text',
callback:function(){},
view:function () { debug('export.view');
this.csv();
},
csv:function () { debug('export.view');
data=k[x].table.data;
var data, filename, link;
var csv = conv(data);
if (csv == null) return;
filename = x+'.csv';
if (!csv.match(/^data:text\/csv/i)) {
csv = 'data:text/csv;charset=utf-8,' + csv;
}
data = encodeURI(csv);
link = document.createElement('a');
link.setAttribute('href', data);
link.setAttribute('download', filename);
link.click();

function conv(objArray){
var array = typeof objArray != 'object' ? JSON.parse(objArray):objArray;
var str = '';
var line = '';
for (var index in array[0]) {
if (line != '') line += ';'
line += index;
}
str += line + '\r\n';
for (var i = 0; i < array.length; i++) {
var line = '';
for (var index in array[i]) {
if (line != '') line += ';'
line += array[i][index];
}
str += line + '\r\n';
}
return str;
}
},
html :function(table, name, fileName) {
var uri = 'data:application/vnd.ms-excel;base64,'
, template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
, base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
, format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
if (!table.nodeType) table = document.getElementById(table)
var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
var link = document.createElement("A");
link.href = uri + base64(format(template, ctx));
link.download = fileName || 'table.xml';
link.target = '_blank';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
},
},
// export end

// chart
chart:{
id:'chart',
data:[{id:1,nama:'a',isi:'100'},{id:2,nama:'b',isi:'20'},{id:3,nama:'c',isi:'30'},],
colors:['red', 'green', 'blue'],
callback:function(){},
view:function(){ debug('chart.view');
this.vertical();
},

vertical:function(){ debug('chart.vertical');
data=this.data;
id=this.id;
colors=this.colors;

out  = '<div class="chart vertical"><table>';
out += '<tr>';
for (key in data) { col=data[key];
out += '<td><div class='+colors[key]+' style="height:'+col.isi+'%"> '+col.isi+'% </div></td>';
}
out += '</tr>';
out += '</table></div>';
document.getElementById(id).innerHTML=out;
},

horizontal:function(){ debug('chart.horizontal');
data=this.data;
id=this.id;
colors=this.colors;
out  = '<div class="chart"><table>';
for (key in data) { col=data[key];
out += '<tr>';
out += '<td><div class='+colors[key]+' style="width:'+col.isi+'%"> '+col.isi+'% : '+col.nama+'</div></td>';
out += '</tr>';
}
out += '</table></div>';
document.getElementById(id).innerHTML=out;
},
},
//chart end

// cetak
cetak:{
id:'cetak',
data:[{id:1,nama:"a" },{id:2,nama:"b" },{id:3,nama:"c"}],
view:function () { debug('cetak.view');
content=document.getElementById('content');
printarea=document.getElementById('printarea');
printarea.innerHTML=content.innerHTML;
window.print();
printarea.innerHTML='printed';},
},
// cetak end

//upload
upload:{
id:'upload',
data:'data',
mod:'import',
callback:function(){},

view:function(callback) {
this.image();
},

get:function(callback) {
mod = this.mod;
// mod = 'upload';
// mode = this.mode;
path=conf.dataApp.path;
document.getElementById('btnImport').addEventListener('click', function(e) {
var file = document.getElementById('afile').files[0];
var fd = new FormData();
fd.append("afile", file);
fd.append("isImport", 1);
fd.append("path", path);
fd.append("nama", "sismadi");
fd.append("akses", 1);
fd.append("mod", mod);

var xhr = new XMLHttpRequest();
xhr.open("POST", conf.dataApp.host+conf.dataApp.model, true);
// xhr.open("POST", this.dataApp.host+this.dataApp.model, true);


xhr.upload.onprogress = function(e) {
if (e.lengthComputable) {
// k[x].spinner.view();
var percentComplete = (e.loaded / e.total) * 100;
debug(percentComplete + '% uploaded');
}
};
xhr.onload = function() {if (this.status == 200) {
callback(xhr.response);

// k[x].table.view();
// k[x].crud.table();
// k[x].spinner.close();
// conf.close('spinner');

debug(xhr.response);
// debug('selesai 100%');
};
};
xhr.send(fd);
},false)
},

csv:function(callback) {
out = '<p id="mInfo"></p>';
out += 'Pilih File CSV:<input type="file" name="afile" id="afile" accept=".csv" >';
out += '<button class="btn-form" id="btnImport" >Upload</button>';
// k[x].ajax.path=this.url.path;

k[x].modal.data=out;
k[x].modal.view();
this.mod='import';
this.get(callback);
function callback(res) {document.getElementById('mInfo').innerHTML=res }

},

image:function(callback) {
out = '<p id="mInfo"></p>';
out += 'Pilih File Gambar:<input type="file" name="afile" id="afile" accept="image/*" >';
// out += '</form>';
out += '<button class="btn-form" id="btnImport" >Upload</button>';
k[x].modal.data=out;
k[x].modal.view();
// document.getElementById(this.id).innerHTML=out;
// this.view(callback);
this.mod='upload';
this.get(callback);
function callback(res) {document.getElementById('mInfo').innerHTML=res }
},
},// import end


ajax:{
id:'table',
data:{token:'1258',mod:'table',cond:''},
host:'http://localhost/aka/',
model:'system/model.php',
limit:100,
offset:0,
isPrivate:0,
isColumn:0,
callback:function(){},
view:function(){  debug('ajax.view');
this.table();
},

get:function(callback){  debug('ajax.get');
this.data.token=conf.dataUser.token;
// alert(conf.dataUser.token);
this.data.isColumn=this.isColumn;
this.data.path=this.path;
this.data.limit=this.limit;
this.data.offset=this.offset;
this.data.sortir=k[x].app.sortir;
data=this.data;
conf.loadModel(data,callback);
},

create:function(data){  debug('ajax.create');
tb=k[x].app.modul().tabel;
// alert(k[x].ajax.isColumn)
induk=conf.tableRead;
tableinduk=conf.tableinduk;

// alert(tableinduk)

k[x].ajax.data={mod:'create',data:data,tb:tb,induk:induk,tableinduk:tableinduk};
k[x].ajax.get(callback);

function callback(json){
debug(json);
res=JSON.parse(json);
conf.info(res.info);
debug(res);
}

},

read:function(){  debug('ajax.read');
induk=conf.tableRead;
// alert(induk)
// alert('ajax.read');
// k[x].ajax.data.mod='read';
// k[x].ajax.data.id=1;
k[x].ajax.data={mod:'read'};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
conf.info(res.info);
debug(res);
// k[x].table.read(0);
}
}, // end read

update:function(id,data){  debug('ajax.update');
// i=conf.modulIndex;
// tb=conf.appData.modul[i].tabel;
tb=k[x].app.modul().tabel;
induk=conf.tableRead;
tableinduk=conf.tableinduk;

k[x].ajax.data={mod:'update',id:id,data:data,tb:tb,induk:induk,tableinduk:tableinduk};
k[x].ajax.get(function callback(json){
res=JSON.parse(json);
conf.info(res.info);
debug(res);
});
}, // end update

delete:function(id){  debug('ajax.delete');
tb=k[x].app.modul().tabel;
// k[x].ajax.data={mod:'delete',id:id,tb:tb};
induk=conf.tableRead;

tableinduk=conf.tableinduk;
// alert(induk);
isColumn=k[x].app.isColumn;
k[x].ajax.data={mod:'delete',id:id,tb:tb,isColumn:isColumn,induk:induk,tableinduk:tableinduk};

k[x].ajax.get(function callback(json){
res=JSON.parse(json);
conf.info(res.info);
debug(res);
});
}, // end deletes

table:function(){  debug('ajax.table');
mod='table';
if(this.isPrivate){ mod='tableP';}
k[x].ajax.data.mod=mod;


// isColumn='';
// if(this.isColumn){ isColumn=this.isColumn;}
// k[x].ajax.data={mod:mod,isColumn:isColumn};
this.sql();
// try { this.sql();}
// catch(err) { alert(err.message);}
},

sql:function(){  debug('ajax.sql');
// k[x].ajax.data.mod='table';
k[x].ajax.get(callback);
function callback(json){ debug(json);
try {
res=JSON.parse(json);
conf.info(res.info);
conf.dataUser.akses=res.akses;
// debug('wo'+conf.dataUser.akses);
// debug(res.frm['id']);
k[x].app.data=res.data;
k[x].form.frm=res.frm;
k[x].table.fld=res.fld;
k[x].table.data=res.data;
k[x].table.view();
}
catch(err) { debug(err.message);
conf.info('Gagal Mengambil Database !');
}

}
},  // end table

more:function(){  debug('ajax.more');
k[x].app.offset=k[x].app.offset+k[x].app.limit;
k[x].ajax.get(callback);
function callback(json){
try {
// debug(json);
res=JSON.parse(json);

if(res.mod=='toast'){ conf.info(res.data);  }
else {

data=k[x].app.data;
for(var i in res.data) { data.push(res.data[i]); }

k[x].table.data=data;
k[x].table.view();

}
}
catch(err) { debug(err.message); conf.info(err.message); }

}
},  // end table
},



// crud
crud:{
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"},{id:4,nama:"empat"}],
callback:function(){},
view:function(){ debug('crud.create');
},

create:function(){ debug('crud.create');
data=k[x].table.data;
debug(data);

frm=k[x].form.el('Form');
data.push(frm);
k[x].table.data=data;
debug(data);

k[x].table.view();
conf.close('modal');
if(conf.isDb==1){ delete frm['id']; k[x].ajax.create(frm); }
},

read:function(i){  debug('crud.read');
out='<div id="form"></div>';
k[x].modal.data=out;
k[x].modal.view();
debug(i);
k[x].button.item=i;
k[x].form.data=k[x].table.data[i];
k[x].form.view();
},

update:function(i){ debug('crud.update');
data=k[x].table.data;
frm=k[x].form.el('Form');
id=frm['id'];
data.splice(i, 1, frm);
delete frm['chk[]'];

if(conf.isDb==1){ k[x].ajax.update(id,frm); }
conf.close('modal');
k[x].table.view();
},

delete:function(i){ debug('crud.delete');
data=k[x].table.data;
debug(data);

var nid=data[i].id;
debug(nid);
data.splice(i,1);
k[x].table.data=data;
k[x].table.view();
conf.close('modal');
if(conf.isDb==1){ k[x].ajax.delete(nid); }
},

deletes:function(i){ debug('crud.deletes');
data=k[x].table.data;
var c=document.getElementsByName('chk'+x);
var data1=[];
for (var i=0;i<c.length;i++) c[i].checked? data1[data1.length]=c[i].value:null;
var nid=[];
for (var i = data1.length -1; i >= 0; i--) {
nid[i]=data[data1[i]].id;
debug(nid[i]);
debug(i);
data.splice(data1[i],1);
}
ids=nid.join(",");
debug(ids)
k[x].table.data=data;
k[x].table.view();
if(conf.isDb==1){ k[x].ajax.delete(ids); }
},

table:function(){ debug('crud.table');
if(conf.isDb==1){ k[x].ajax.table(); }
else {
k[x].table.data=k[x].app.data;
k[x].table.view();
}
},

add:function(){ debug('crud.add');
debug('nah');
k[x].form.data=k[x].table.data[0];

out='<div id="form"></div>';
k[x].modal.data=out;
k[x].modal.view();


data= k[x].form.data;
for(i in data){data[i]=''; }
k[x].form.view();

k[x].button.mode='add';
k[x].button.form();
},
},



};
// end k[x]

};
// end ktupad
path=conf.getURL('path');
if(path){conf.loadController(path);}
