
document.getElementById('btnMenu').innerHTML=conf.svg('menu');
out ='<i class="svgIco" onclick="conf.loadFunction(\'app/home\')">'+conf.svg('home')+'</i>';
out +='<i class="svgIco" onclick="conf.loadFunction(\'demo/home\')">'+conf.svg('view')+'</i>';
out +='<i class="svgIco" onclick="conf.loadFunction(\'addon/home\')">'+conf.svg('share')+'</i>';
document.getElementById('li-kiri').innerHTML=out;
out ='<i class="svgIco" onclick="conf.loadFunction(\'dev/home\')">'+conf.svg('param')+'</i>';
// out +='<i class="svgIco" onclick="conf.loadFunction(\'param/view\')">'+conf.svg('exam')+'</i>';
// out +='<i class="svgIco" onclick="conf.loadController(conf.tas)">'+conf.svg('bag')+'</i>';
// out +='<span id="badge" class="badge" data-badge="0"></span></li>';
document.getElementById('li-kanan').innerHTML=out;

// out ='<div include-html="system/view.html"></div>';
// document.getElementById('view').innerHTML=out;
