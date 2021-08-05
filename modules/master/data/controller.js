x1='datas';
ktupad(x1);
k[x1].app={
url:{host:'http://localhost/',path:'modules/master/data/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
};

x='data';
ktupad.app(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/master/data/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
view:function(){

var ikon =[

{nama:'sendMail',url:'sendMail'},
{nama:'viewDefault',url:'viewDefault'},
{nama:'viewPrivate',url:'viewPrivate'},
{nama:'viewMulti',url:'viewMulti'},
{nama:'customForm',url:'customForm'},
{nama:'customAdd',url:'customAdd'},
{nama:'customBar',url:'customBar'},
{nama:'customModal',url:'customModal'},
{nama:'bbCode',url:'bbCode'},
{nama:'editor',url:'editor'},
{nama:'customButton',url:'customButton'},


{nama:'qrScan',url:'qrScan'},
{nama:'qrPrint',url:'qrPrint'},
{nama:'getLokasi',url:'getLokasi'},
{nama:'svg',url:'svg'},
]
// debug(ikon);
out ='<div id="modal" class="depan hide"></div>';
out +='<div class="row">';
for (i in ikon){
out +='<div class="l-3 s-6 center " onClick="k[x].app.'+ikon[i].url+'()">';
out +='<i class="svgIco svgImg">'+svg.ico('exam')+'</i>';
out +='<br>'+ikon[i].nama+'';
out +='</div>';

// out +='<div class="l-3 s-6 center " onClick="k[x].app.'+ikon[i].url+'()">';
// out +='<img style="max-width: 150px;" class="img" src="files/kuis.svg" alt="Kuis" ><br>'+ikon[i].nama+'</div>';
}
out +='</div>';
document.getElementById('content').innerHTML=out;
},



viewDefault:function(){
k[x].ajax.path=this.url.path;
k[x].crud.table();
},

add:function(){
var id = ktupad.item;
// var cartKode = ktupad.cartKode;
alert(id);
this.customAdd();
},

pilih:function(){
this.viewDefault();
k[x].table.read=function(i){
debug(i);
ktupad.item=k[x].table.data[i].nama;
asal=ktupad.asal;
ktupad.loadController(asal);
}
},

viewPrivate:function(){
token=ktupad.token;
k[x].ajax.data={token:token};
k[x].ajax.isPrivate=1;
k[x].ajax.path=this.url.path;
k[x].crud.table();
},

viewMulti:function(){
out  ='<div id="header">header</div>';
out  +='<div id="body">body</div>';
document.getElementById('content').innerHTML=out;
k[x].ajax.path=this.url.path;
k[x].table.id='body';
k[x].crud.table();

k[x1].table.fld=['kontak','Total'];
k[x1].table.data=[{kontak:'wawan',Total:'200.000'}];
k[x1].table.id='header';
k[x1].table.table();
},

customForm:function(){
this.viewDefault();
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'droprow'};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
ktupad.droprow=res.data;
}

token=ktupad.token;
k[x].form.callback=function(){
document.getElementById('induk').value=token;

k[x].form.textarea('keterangan');

arr=['ya','tidak'];
k[x].form.dropdown('nama',arr);

// k[x].form.editor('isi');

// arr=ktupad.droprow;
// k[x].form.droprow('data',arr);

// arr=ktupad.droprow;
// arr=['jakarta','bogor','depok','tanggerang','bekasi'];
// k[x].form.datalist('data',arr);

k[x].form.datepicker('tanggal','1960-01-01','2021-01-01');

arr=['ya','tidak','mungkin'];
k[x].form.checkbox('data',arr);
}
},

customButton:function(){
this.viewDefault();
k[x].form.callback=function(){
out='<button class="btn-" onclick="alert(\'wow\')"> Say wow</button>';
document.getElementById('data-Btn').innerHTML=out;
};
},


customAdd:function(){
this.viewDefault();
k[x].table.read=function(i){
// ktupad.dataItems=k[x].table.data[i].kode;
// ktupad.loadController('modules/kuis/controller.js?kuis/kuis');
// ktupad.mulai=k[x].table.data[i].mulai;
// ktupad.selesai=k[x].table.data[i].selesai;
alert(i);
}

k[x].crud.add=function(){
ktupad.asal='modules/master/data/controller.js?data/add';
ktupad.loadController('modules/master/data/controller.js?data/pilih');
// alert('Hello ktupad');
}


},

customBar:function(){
this.viewDefault();
out  ='<i onclick="k[x].app.qrScan()"><i class="ico ico-scan"></i></a>';
out  +='<i onclick="k[x].app.qrPrint()"class="ico ico-print"></i></a>';
document.getElementById('li-kanan').innerHTML=out;
},

customModal:function(){
out = '<input type="text" id="txt">';
k[x].modal.data=out;
k[x].modal.view();
},

bbCode:function(){
// ktupad.bbcode.view();

data='[b]Bold[/b][br][url=https://ktupad.com]ktupad[/url][br][img]system/ktupad.svg[/img]';
out=ktupad.bbcode.get(data);
document.getElementById('content').innerHTML=out;
},

editor:function(){
out  ='<div id="el-editor"></div>';
document.getElementById('content').innerHTML=out;

ktupad.editor.id="editor";
ktupad.editor.view();
},

qrScan:function(){
out = '<canvas hidden="" id="qr-canvas"></canvas>';
k[x].modal.data=out;
k[x].modal.view();
qrScan('qr-canvas',function callback(res){
ktupad.close('modal');
ktupad.info(res);
});
},

qrPrint:function(){
data=k[x].table.data;
debug(data);
window.localStorage.setItem('data3', JSON.stringify(data));
window.open('addon/qrcode/data.html');
},

svg:function(){
arr=['home','printer','close','camera','plus','menu','lokasi',
'target','pesan','map','kontak','calendar','laporan','akses',
'param','minus','image','like','favorite','search','bag','score',
'exam','pined','blog','label','share','tool','barang',
'distribusi','simpan','proses','troli'

];
out='';
for(i in arr){a=arr[i];
out+='<div class="l-2 s-4 center">';
out+='<i class="svgIco reds">'+svg(a)+'</i>';
out+='<br>'+a+'</div>';
}
document.getElementById('content').innerHTML=out;
},

sendMail:function(){
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'mail'};
k[x].ajax.get(callback);
function callback(json){
// res=JSON.parse(json);
alert(json);
}
},


getLokasi:function(){
this.customModal();
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(displayLocationInfo);
}
function displayLocationInfo(position) {
const lng = position.coords.longitude;
const lat = position.coords.latitude;
document.getElementById('txt').value=lat +', '+ lng ;
}
},


};

function getVal(n){
var el=document.getElementById(n);
var i=0, c, arr=[];
while(c=document.getElementById('chk'+n+(i++))) c.checked? arr[arr.length]=c.value : null;
el.value = arr.join(",");
}
