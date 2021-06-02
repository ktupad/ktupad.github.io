conf.loadScript([
// 'addon/qrscan/qr_packed.js',
// 'addon/qrscan/script.js',
// 'addon/leaflet/leaflet.js',

'addon/svg/svg.js',
// 'addon/qrious.min.js'
// 'web/web.js'
], function() {});

conf.loadcss('addon/svg/svg.css');
conf.loadcss('addon/aurora/aurora.css');
// conf.loadcss('addon/leaflet/leaflet.css');
// conf.loadcss('web.css');

arr={
'Red':{pColor:'#b71c1c',pLightColor:'#f05545',pDarkColor:'#7f0000',pTextColor:'#ffffff'},
'Pink':{pColor:'#880e4f',pLightColor:'#bc477b',pDarkColor:'#560027',pTextColor:'#ffffff'},
'Purple':{pColor:'#4a148c',pLightColor:'#7c43bd',pDarkColor:'#12005e',pTextColor:'#ffffff'},
'Deep Purple':{pColor:'#311b92',pLightColor:'#6746c3',pDarkColor:'#000063',pTextColor:'#ffffff'},
'Indigo':{pColor:'#1a237e',pLightColor:'#534bae',pDarkColor:'#000051',pTextColor:'#ffffff'},
'Blue':{pColor:'#0d47a1',pLightColor:'#5472d3',pDarkColor:'#002171',pTextColor:'#ffffff'},
'Light Blue':{pColor:'#01579b',pLightColor:'#4f83cc',pDarkColor:'#002f6c',pTextColor:'#ffffff'},
'Cyan':{pColor:'#01579b',pLightColor:'#4f83cc',pDarkColor:'#002f6c',pTextColor:'#ffffff'},
'Teal':{pColor:'#004d40',pLightColor:'#39796b',pDarkColor:'#00251a',pTextColor:'#ffffff'},
'Green':{pColor:'#1b5e20',pLightColor:'#4c8c4a',pDarkColor:'#003300',pTextColor:'#ffffff'},
'Light Green':{pColor:'#33691e',pLightColor:'#629749',pDarkColor:'#003d00',pTextColor:'#ffffff'},
'Lime':{pColor:'#827717',pLightColor:'#b4a647',pDarkColor:'#524c00',pTextColor:'#ffffff'},
'Yellow':{pColor:'#f57f17',pLightColor:'#ffb04c',pDarkColor:'#bc5100',pTextColor:'#000000'},
'Amber':{pColor:'#ff6f00',pLightColor:'#ffa040',pDarkColor:'#c43e00',pTextColor:'#000000'},
'Orange':{pColor:'#e65100',pLightColor:'#ff833a',pDarkColor:'#ac1900',pTextColor:'#000000'},
'Deep Orange':{pColor:'#bf360c',pLightColor:'#f9683a',pDarkColor:'#870000',pTextColor:'#ffffff'},
'Brown':{pColor:'#3e2723',pLightColor:'#6a4f4b',pDarkColor:'#1b0000',pTextColor:'#ffffff'},
'Grey':{pColor:'#212121',pLightColor:'#484848',pDarkColor:'#000000',pTextColor:'#ffffff'},
'Blue Grey':{pColor:'#263238',pLightColor:'#4f5b62',pDarkColor:'#000a12',pTextColor:'#ffffff'},
}

warna=function(nama,arr){ c=arr[nama];
for (i in c){ document.documentElement.style.setProperty('--'+i, c[i]);
}}

document.getElementById('btnMenu').innerHTML=conf.svg('menu');
out ='<i class="svgIco" onclick="conf.loadFunction(\'app/home\')">'+conf.svg('home')+'</i>';
out +='<i class="svgIco" onclick="conf.loadFunction(\'demo/home\')">'+conf.svg('view')+'</i>';
document.getElementById('li-kiri').innerHTML=out;
out ='<i class="svgIco" onclick="conf.loadFunction(\'dev/home\')">'+conf.svg('param')+'</i>';
// out +='<i class="svgIco" onclick="conf.loadFunction(\'param/view\')">'+conf.svg('exam')+'</i>';
// out +='<i class="svgIco" onclick="conf.loadController(conf.tas)">'+conf.svg('bag')+'</i>';
// out +='<span id="badge" class="badge" data-badge="0"></span></li>';
document.getElementById('li-kanan').innerHTML=out;
