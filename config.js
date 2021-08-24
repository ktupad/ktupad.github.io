document.title="Ktupad v3";
ktupad.isSignup='hide';
ktupad.isDb=1;
ktupad.akses=['c','r','u','d'];
ktupad.dataApp.host='http://localhost/';
ktupad.dataApp.model='database.php';

// ktupad.home='modules/master/login/controller.js?login/login';
ktupad.home='modules/apps/blog/controller.js?blog/homeGet';
// ktupad.home='modules/apps/parkir/controller.js?parkir/homeGet';
// ktupad.afterlogin='modules/master/data/controller.js?data/view';
ktupad.afterlogin='modules/apps/home/controller.js?home/view';
// ktupad.afterlogin='modules/master/param/controller.js?param/view';
// ktupad.afterlogin='modules/apps/antrian/controller.js?antrian/view';

ktupad.loadView("system/index.html","myTemplate",function(){
// http://localhost/neo/?path=modules/apps/blog/controller.js?blog/blogDeyailGet/15
// http://localhost/neo/?path=modules/apps/barang/controller.js?barang/homeGet

admin=ktupad.getURL('admin');
if(admin){
ktupad.home='modules/master/login/controller.js?login/login';
}

app=ktupad.getURL('app');
if(app){
  c1='modules/apps/'+app+'/controller.js?'+app+'/homeGet';
  ktupad.loadController(c1);}
// path=ktupad.getURL('path');
// if(path){ktupad.loadController(path);}
else{ ktupad.loadController(ktupad.home); }
});
