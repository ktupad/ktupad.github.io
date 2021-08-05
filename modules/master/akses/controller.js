x='akses';
ktupad.app(x);
k[x].app={
url:{host:'http://localhost/',path:'modules/master/akses/model.php'},
data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
view:function(){
k[x].ajax.path=this.url.path;
k[x].crud.table();
k[x].form.callback=function(){ k.akses.app.datamenu(); };
},


datamenu:function(){
k[x].ajax.path=this.url.path;
k[x].ajax.data={mod:'datamenu'};
k[x].ajax.get(callback);
function callback(json){
res=JSON.parse(json);
info=res.info;
k[x].app.menu=res.menu;
k.akses.app.form();
}
},

form:function(){
debug('for akses berhasil');
out = "<div class=table >";
out+= "<table ><thead><tr>";
out+= "<th>id</th>";
out+= "<th>keterangan</th>";
out+= "<th><input type=checkbox  name='cs' onClick=checkAll(this,'cc') >Create</th>";
out+= "<th><input type=checkbox  name='rs' onClick=checkAll(this,'cr') >Read</th>";
out+= "<th><input type=checkbox  name='us' onClick=checkAll(this,'cu') >Update</th>";
out+= "<th><input type=checkbox  name='ds' onClick=checkAll(this,'cd') >Delete</th>";
out+= "</tr></thead><tbody>";

var vc0= document.getElementById('c').value;
var vr0= document.getElementById('r').value ;
var vu0= document.getElementById('u').value ;
var vd0= document.getElementById('d').value ;

var vc= vc0.split(',');
var vr= vr0.split(',');
var vu= vu0.split(',');
var vd= vd0.split(',');



var    judul=k[x].app.menu;
debug(judul);
var e=1;
for (key in judul){
for (i in vc ){ if(vc[i] == judul[key].id ){var ci = 'checked=checked'; break;} else { ci = '';}  }
for (i in vr ){ if(vr[i] == judul[key].id ){var ri = 'checked=checked'; break;} else { ri = '';}  }
for (i in vu ){ if(vu[i] == judul[key].id ){var ui = 'checked=checked'; break;} else { ui = '';}  }
for (i in vd ){ if(vd[i] == judul[key].id ){var di = 'checked=checked'; break;} else { di = '';}  }

out+= "<tr onMouseOver=this.bgColor='#F4F4F6' onMouseOut=this.bgColor='white' > ";
out+= "<td align='right'>"+judul[key].id+"</td>";
out+= "<td align='left'>"+judul[key].nama+" </td>";
out+= "<td align='left'><input type=checkbox name='cc' value="+judul[key].id+" id=chkc"+e+" onclick=getVal('c') "+ci+" ></td>";
out+= "<td align='left'><input type=checkbox name='cr' value="+judul[key].id+" id=chkr"+e+" onclick=getVal('r') "+ri+" ></td>";
out+= "<td align='left'><input type=checkbox name='cu' value="+judul[key].id+" id=chku"+e+" onclick=getVal('u') "+ui+" ></td>";
out+= "<td align='left'><input type=checkbox name='cd' value="+judul[key].id+" id=chkd"+e+" onclick=getVal('d') "+di+" ></td>";
out+= "</tr>";
e++;
}
out+= "</tbody></table></div>";
document.getElementById('cube').innerHTML=out;
}, // end form
};

function getVal(n){
var el=document.getElementById(n);
var i=1, c, data=[];
while(c=document.getElementById('chk'+n+(i++))) c.checked? data[data.length]=c.value : null;
el.value = data.join(",");
}

function checkAll(s,t) {
var c=document.getElementsByName(t);
for (var i=0;i<c.length;i++) c[i].checked = s.checked? true:false ;
}
