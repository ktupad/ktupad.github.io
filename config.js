
var app=2;
var host='https://ktupad.com/';
var model='https://ktupad.com/api/';
if(app==2){
  host='http://localhost/new/';
  model='http://localhost/new/api2/';
}

conf.dataApp.host=host;
conf.dataApp.model=model;

conf.isSignup='hide';
conf.isDb=1;
conf.akses=['c','r','u','d'];
conf.getAppData();
// conf.open('atas');
