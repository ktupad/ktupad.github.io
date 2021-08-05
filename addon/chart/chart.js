chart={
view:function(){
out='<div class="l-6 s-12"><div  id="chart-pie" class="img"></div></div>\
<div class = "l-5 s-12 artikel" id="chart-pie-svg"></div>\
<div class = "l-7 s-12 artikel" id="chart-pie-key"></div>\
<div class="l-6 s-12"><div  id="chart-bar" class="img"></div></div>';

// document.getElementById('chart-spoiler').innerHTML=out;
ktupad.modal2(out);

arr=[
{nama:"Pertama",isi:300},
{nama:"Kedua",isi:120},
{nama:"Ketiga",isi:80}
];

document.getElementById('chart-pie-svg').innerHTML=this.pie(arr).svg;
document.getElementById('chart-pie-key').innerHTML=this.pie(arr).key;
// document.getElementById('chart-bar').innerHTML=this.bar(arr);

},


bar:function(){
total=arr.reduce((a, b) => a + (b['isi'] || 0), 0);
out ='<svg class="img" width="100" height="500">';
out +='<g transform="translate(40,20)">';
out +='<g class="chart-bar-x chart-bar-axis" transform="translate(0,450)">';
x=30;

for(i in arr){
out +='<g class="tick" transform="translate('+x+',0)" style="opacity: 1;"><line y2="6" x2="0"></line>';
out +='<text dy=".71em" y="9" x="0" style="text-anchor: middle;">'+i+'</text></g>';
x+=20;
}
out +='<path class="domain" d="M0,6V0H900V6"></path></g>';
out +='<g class="chart-bar-y chart-bar-axis">';
arr1=[10,9,8,7,6,5,4,3,2,1,0];
x=40;
for(i in arr1){
out +='<g class="tick" transform="translate(0,'+x+')" style="opacity: 1;"><line x2="-6" y2="0"></line>';
out +='<text dy=".32em" x="-9" y="0" style="text-anchor: end;">'+arr1[i]+'0%</text> </g>';
x+=40;
}
out +='<path class="domain" d="M-6,0H0V450H-6"></path>';
out +='<text transform="rotate(-90)" y="6" dy=".71em" style="text-anchor: end;">Frequency</text></g>';

y=450;
x=20;
for(i in arr){
// out +='<rect class="bar" x="860" width="31" y="447.3783656117147" height="2.6216343882853153"></rect>';
h=arr[i].isi;
y2=y-h;
out +='<rect class="chart-bar"  width="19" height="'+h+'" x="'+x+'" y="'+y2+'"></rect>';
x+=20;
h+=20;

}
out +='</g>';
out +='</svg>';
return out;
},

pie:function(arr){
colors=['Red','Pink','Purple','Indigo','Blue','Cyan','Teal','Green','Lime','Yellow'];
total=arr.reduce((a, b) => a + (parseInt(b['isi']) || 0), 0);
var offset = 25;
y=6;
out=[];
out.svg ='<svg class="img" width="300" height="100%" viewBox="0 0 42 42">\
<circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>';
for(i in arr){ val1=arr[i].isi;
per1 = val1/total*100;
// out +='<circle  cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="'+arr[i].nama+'" stroke-width="3" stroke-dasharray="'+per1+' '+(100-per1)+'" stroke-dashoffset="'+offset+'"></circle>';
out.svg +='<circle  cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="'+colors[i]+'" stroke-width="3" stroke-dasharray="'+per1+' '+(100-per1)+'" stroke-dashoffset="'+offset+'"></circle>';
offset=100-per1+offset;


}
out.svg +='<g class="chart-pie-text"> \
<text x="50%" y="50%" class="chart-pie-number" id="totalValue">'+total+'</text>\
<text x="50%" y="50%" class="chart-pie-label">Total </text></g></svg>';

out.key ='<figcaption class="figure-key l-6 s-12">\
<ul class="figure-key-list" aria-hidden="true" role="presentation">';
for(i in arr){
out.key +='<li><span class="shape-circle" style="background-color:'+colors[i]+'"></span>'+arr[i].nama+'('+arr[i].isi+')</li>';
}
out.key +='</ul>\
</figcaption>';


return out;
},

};

//
//
// bar=function(){
//
//
//   total=arr.reduce((a, b) => a + (b['isi'] || 0), 0);
//
//   out ='<svg class="img" width="100" height="500">';
//   out +='<g transform="translate(40,20)">';
//   out +='<g class="chart-bar-x chart-bar-axis" transform="translate(0,450)">';
//   x=30;
//
//   for(i in arr){
//   out +='<g class="tick" transform="translate('+x+',0)" style="opacity: 1;"><line y2="6" x2="0"></line>';
//   out +='<text dy=".71em" y="9" x="0" style="text-anchor: middle;">'+i+'</text></g>';
//   x+=20;
//   }
//   out +='<path class="domain" d="M0,6V0H900V6"></path></g>';
//   out +='<g class="chart-bar-y chart-bar-axis">';
//   arr1=[10,9,8,7,6,5,4,3,2,1,0];
//   x=40;
//   for(i in arr1){
//   out +='<g class="tick" transform="translate(0,'+x+')" style="opacity: 1;"><line x2="-6" y2="0"></line>';
//   out +='<text dy=".32em" x="-9" y="0" style="text-anchor: end;">'+arr1[i]+'0%</text> </g>';
//   x+=40;
//   }
//   out +='<path class="domain" d="M-6,0H0V450H-6"></path>';
//   out +='<text transform="rotate(-90)" y="6" dy=".71em" style="text-anchor: end;">Frequency</text></g>';
//
//   y=450;
//   x=20;
//   for(i in arr){
//   // out +='<rect class="bar" x="860" width="31" y="447.3783656117147" height="2.6216343882853153"></rect>';
//   h=arr[i].isi;
//   y2=y-h;
//   out +='<rect class="chart-bar"  width="19" height="'+h+'" x="'+x+'" y="'+y2+'"></rect>';
//   x+=20;
//   h+=20;
//
//   }
//   out +='</g>';
//   out +='</svg>';
//   return out;
// };
// pie=function(arr){
//   total=arr.reduce((a, b) => a + (b['isi'] || 0), 0);
//   var offset = 25;
//   y=6;
//   out ='<svg class="" width="300" height="100%" viewBox="0 0 42 42">\
//   <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>';
//   for(i in arr){ val1=arr[i].isi;
//     var per1 = val1/total*100;
//     out +='<circle  cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="'+arr[i].nama+'" stroke-width="3" stroke-dasharray="'+per1+' '+(100-per1)+'" stroke-dashoffset="'+offset+'"></circle>';
//     offset=100-per1+offset;
//   }
//   out +='<g class="chart-pie-text"> \
//          <text x="50%" y="50%" class="chart-pie-number" id="totalValue">'+total+'</text>\
//          <text x="50%" y="50%" class="chart-pie-label">Total </text></g></svg>';
// return out;
// };
