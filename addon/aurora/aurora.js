aurora={
id:1,
arr:['aurora-outer','aurora-agrabah','aurora-northern','aurora-northern-intense',
'aurora-northern-dimmed','aurora-northern-dusk','aurora-northern-warm','aurora-outer',],

set:function(id){
window.localStorage.setItem('aurora-bg', id);
// alert(id);
aurora.view1();

},

view:function(){
arr=this.arr;
out='';
for(i in arr){
out +='<div class="l-3 s-12" onclick="aurora.set(\''+arr[i]+'\')" ><div class="box '+arr[i]+'">\
<div class="aurora-inner"><h1 class="aurora-title">'+arr[i]+'</h1> </div>\
</div></div>';
}
out +='<div class="auroral-stars"></div>';
// document.getElementById('aurora-spoiler').innerHTML=out;
ktupad.modal2(out);

},
view1:function(){
var bg=window.localStorage.getItem('aurora-bg');
if(!bg){bg='aurora-outer'}
  out ='<div id="aurora" class="aurora-bg '+bg+'"><div class="aurora-inner"></div></div> \
  <div class="auroral-stars"></div> \
  <a class="prev" onclick="aurora.getaurora(-1)">&#10094;</a> \
  <a class="next" onclick="aurora.getaurora(1)">&#10095;</a> ';

  var e = document.createElement("div");
  // e.setAttribute("id", "svgs");
  // e.setAttribute("class", "hide");
  e.innerHTML = out;
  document.getElementsByTagName('body')[0].appendChild(e);

},

getaurora:function(p) {
this.id+=  p;
this.getaurora1();
},

getaurora1:function() {
n = this.id;
arr = ['aurora-outer','aurora-agrabah','aurora-northern','aurora-northern-intense',
'aurora-northern-dimmed','aurora-northern-dusk','aurora-northern-warm','aurora-outer',];

if (n >=  arr.length-1) {this.id = 0}
if (n <=  0) {this.id = arr.length-1}
document.getElementById("aurora").className = arr[n];
console.log(arr[n]);
console.log(n);
this.set(arr[n])

},

};

aurora.view1();
