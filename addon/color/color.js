color={
arr:[
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
],
set:function(id){
window.localStorage.setItem('color-bg', id);
color.view1();
},
view:function(){
  arr=this.arr;
  out='';
  for(i in arr){a=arr[i];
  out+='<div class="row center">';
  out+='<i class="l-2 s-4 center" > '+a.name+' </i>';
  out+='<div class="l-2 s-4 center" style="background:'+a.pColor+'" > '+a.pColor+' </div>';
  out+='<div class="l-2 s-4 center" style="background:'+a.pLightColor+'" > '+a.pLightColor+' </div>';
  out+='<div class="l-2 s-4 center" style="background:'+a.pDarkColor+'" > '+a.pDarkColor+' </div>';
  out+='<div class="l-2 s-4 center" > '+a.pTextColor+' </div>';
  out+='<div class="l-2 s-4 center" ><a href="#"  onclick="color.set(\''+a.name+'\')"> View </a></div>';
  out+='</div>';

  }
  ktupad.modal2(out);
  // document.getElementById('color-spoiler').innerHTML=out;
  },
view1:function(){
  var bg=window.localStorage.getItem('color-bg');
  if(!bg){bg='Blue'}

  arr=this.arr;
  nah=arr.find(x => x.name === bg);
  for (i in nah){ document.documentElement.style.setProperty('--'+i, nah[i]); }
},
};
color.view1();
