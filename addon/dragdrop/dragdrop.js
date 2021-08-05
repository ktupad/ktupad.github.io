let dragdrop={
// data:[1,2,3,4,5,6],
data:[
{id:1,nama:'nama',type:"text"},
{id:2,nama:'alamat',type:"textarea"},
],

modal:function(data){
  out ='<div class="noprint depan">';
  out +='<div class="noprint modal row">';
  out += '<i onclick="ktupad.close(\'modal\')"   class="btn-close svgIco">'+ktupad.svg('close')+'</i>';
  out +=data;
  out += '</div>';
  out += '</div>';
return out;
},

view:function(){
  out='<div id="header" class="row"> \
  <input id="page-name" type="text" value="page">\
  <textarea id="page-text" ></textarea>\
  <button onclick="ktupad.loadController(\'page/pagec\')" >Create</button>\
  <button onclick="ktupad.loadController(\'page/pagev\')" >Respon</button>\
  <button onclick="ktupad.loadController(\'page/pager\')" >View</button>\
  </div>';
  out+='<div id="side" class="l-4 s-12">'+this.side()+'</div>';
  out+='<div id="body" class="l-8 s-12">';
  out+='<ul id="sortlist"></ul>';
  out+='</div>';
document.getElementById('content').innerHTML=out;
dragdrop.delel();
},

side:function(){
  arr=[
    {id:1,nama:"Text",method:"dragdrop.addinput('text')"},
    {id:1,nama:"Number",method:"dragdrop.addinput('number')"},
    {id:1,nama:"Paragraf",method:"dragdrop.addinput('textarea')"},
    {id:1,nama:"Dropdown",method:"dragdrop.addinput('dropdown')"},
    {id:1,nama:"Radio",method:"dragdrop.addinput('radio')"},
  ];
  out='';
  for(i in arr){
  out+='<button onclick="'+arr[i].method+'">'+arr[i].nama+'</button>';
  }
  return out;
},


addinput:function(id){
if(id=='textarea'){el={id:1,nama:id,type:id,col:"text"};}
else if(id=='number'){el={id:1,nama:id,type:id,col:"int(12)"};}
else {el={id:1,nama:id,type:id,col:"varchar(50)"};}
this.data.push(el);
this.addel();
},

addel:function(){
 this.addlist();
this.slist('sortlist');
},

delel:function(id){
arr=this.data;
var index = arr.map(function(item) { return item.id; }).indexOf(id);
arr.splice(index, 1);
this.addlist();
this.slist('sortlist');
},

edit:function(){
out='<button class="svgIco-small" onclick="dragdrop.delel('+arr[i].id+')">'+svg.ico('remove')+'</button>';
// out+='<button class="svgIco" onclick="dragdrop.delel('+arr[i].id+')">'+svg.ico('exam')+'</button>';
return out;
},

addlist:function(){
arr=this.data;
out='';
for(i in arr){
if(arr[i].type=='textarea'){
out+='<li>'+this.edit()+'<br>'+arr[i].nama+'<br>';
out+='<textarea></textarea></li>'; }

else if(arr[i].type=='dropdown'){
opt=[1,2];
out+='<li>'+this.edit()+'<br>'+arr[i].nama+'<br>';
out+='<select>';
for ( n in opt) { out += '<option value=" '+opt[n]+' " >'+opt[n]+'</option>'; }
out+='</select></li>'; }

else if(arr[i].type=='button'){
opt=[1,2];
out+='<li>'+this.edit()+'<br>'+arr[i].nama+'<br>';
out+='<button>'+arr[i].nama+'</button></li>'; }

else {
out+='<li>'+this.edit()+'<br>'+arr[i].nama+'<br>';
out+='<input type="'+arr[i].type+'"></li>';
}
}
document.getElementById("sortlist").innerHTML=out;
},

slist:function(target) {
// (A) GET LIST + ATTACH CSS CLASS
target = document.getElementById(target);
target.classList.add("slist");
document.getElementById('page-text').innerHTML=JSON.stringify(this.data);

// (B) MAKE ITEMS DRAGGABLE + SORTABLE
var items = target.getElementsByTagName("li"), current = null;
for (let i of items) {
// (B1) ATTACH DRAGGABLE
i.draggable = true;

// (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
i.addEventListener("dragstart", function (ev) {
current = this;
for (let it of items) {
if (it != current) { it.classList.add("hint"); }
}
});

// (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
i.addEventListener("dragenter", function (ev) {
if (this != current) { this.classList.add("active"); }
});

// (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
i.addEventListener("dragleave", function () {
this.classList.remove("active");
});

// (B5) DRAG END - REMOVE ALL HIGHLIGHTS
i.addEventListener("dragend", function () {
for (let it of items) {
it.classList.remove("hint");
it.classList.remove("active");
}
});

// (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
i.addEventListener("dragover", function (evt) {
evt.preventDefault();
});

// (B7) ON DROP - DO SOMETHING
i.addEventListener("drop", function (evt) {
evt.preventDefault();
if (this != current) {
let currentpos = 0, droppedpos = 0;
for (let it=0; it<items.length; it++) {
if (current == items[it]) { currentpos = it; }
if (this == items[it]) { droppedpos = it; }
}
if (currentpos < droppedpos) {
this.parentNode.insertBefore(current, this.nextSibling);
} else {
this.parentNode.insertBefore(current, this);
}
}
});
}
},
};
