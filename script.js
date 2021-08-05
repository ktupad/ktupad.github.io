ktupad.loadScript([
// 'addon/qrscan/qr_packed.js',
// 'addon/qrscan/script.js',
// 'addon/leaflet/leaflet.js',
// 'addon/svg/svg.js'
], function() {});
// ktupad.loadCSS('addon/svg/svg.css');
// ktupad.loadCSS('addon/leaflet/leaflet.css');
ktupad.open('atas');
document.getElementById('btnMenu').innerHTML=svg.ico('menu');


ktupad.tas='modules/stok/tas/controller.js?tas/view';
ktupad.setting='modules/master/setting/controller.js?setting/view';

out ='';
// out +='<i class="svgIco" onclick="ktupad.loadController(ktupad.afterlogin)">'+svg.ico('home')+'</i>';
out +='<i class="svgIco" onclick="ktupad.loadController(ktupad.afterlogin)">'+svg.ico('home')+'</i>';
document.getElementById('li-kiri').innerHTML=out;

out ='<i class="svgIco" onclick="ktupad.loadController(ktupad.setting)">'+svg.ico('param')+'</i>';
out +='<i class="svgIco" onclick="color.view()">'+svg.ico('bucket')+'</i>';
// out +='<i class="svgIco" onclick="ktupad.loadController(ktupad.tas)">'+svg.ico('bag')+'</i>';
// out +='<span id="badge" class="badge" data-badge="0"></span></li>';

document.getElementById('li-kanan').innerHTML=out;
