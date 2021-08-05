x='home';
ktupad.app(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/gm/home/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],

view:function(){
data=ktupad.menu.data;
var ikon = data.filter( el => el.induk =="20");
out ='<div id="modal" class="depan hide"></div>';
out +='<div class="row">';
for (i in ikon){
out +='<div class="l-3 s-6 center " onClick="ktupad.loadController(\''+ikon[i].url+'\')">';
out +='<i class="svgIco svgImg">'+svg.ico(ikon[i].ikon)+'</i>';
out +='<br>'+ikon[i].nama+'</div>';
}
out +='</div>';
document.getElementById('content').innerHTML=out;
},
};
