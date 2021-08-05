x='login';
ktupad.app(x);
  k[x].app={
  url:{host:'http://localhost/',path:'modules/master/login/model.php'},
  data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
  view:function(){
    k[x].ajax.path=this.url.path;
    k[x].crud.table();
    },

set:function(){
  email=document.getElementById('email').value;
  pin=document.getElementById('pin').value;
  },

signform:function(){
  isSignup=ktupad.isSignup;
  out  ='<div class="modal"  id="login">';
  out +='<div class="row ">';
  out +='<h1> Login</h1>';
  out +='<div class="login">';
  out +='<form id="Form">';
  out +='<div><label for="email">Email</label><input type="text" id="email" name="email" value=""></div>';
  out +='<div><label for="pin">PIN</label><input type="password" id="pin" name="pin" value=""></div>';
  out +='<input type="submit" value="none" style="display:none;">';
  out +='</form>';
  out += '<button id="post" class="btn-form" onclick="k.login.app.signin()">Signin</button>';
  out += '<button id="get" class="btn-form '+isSignup+'" onclick="k.login.app.signup()">Signup</button>';
  out +='</div>';
  out +='</div>';
  out +='</div>';
  out +='<div id="nah">';
  out +='</div>';
  document.getElementById('content').innerHTML=out;
  },

signin:function(){
  this.set();
  k[x].ajax.path=this.url.path;
  k[x].ajax.data={mod:'signin',email:email,pin:pin};
  k[x].ajax.get(callback);
  function callback(json){
  res=JSON.parse(json);
  info=res.info;
  n=info.split(',');
  ktupad.info(res.info);
  if (n[0]=='Berhasil'){
  // ktupad.cookies.set("data",json,1);
  // window.localStorage.setItem('data', JSON.stringify(json));
  window.localStorage.setItem('data', json);

  debug(json);
  k.login.app.login();
  // k.login.app.menu();
  }
  }
  },

signout:function(){
  token=ktupad.dataUser.token;
  k[x].ajax.path=this.url.path;
  k[x].ajax.data={mod:'signout',token:token};
  k[x].ajax.get(callback);
  function callback(json){
    debug(json);
  res=JSON.parse(json);
  info=res.info;
  n=info.split(',');
  ktupad.info(res.info);
  if (n[0]=='Berhasil'){
    // ktupad.cookies.set("data",'',0);
    window.localStorage.removeItem('data');

    k[x].app.signform();
  }
  }

  },
signup:function(){
  this.set();
  k[x].ajax.path=this.url.path;
  k[x].ajax.data={mod:'signup',email:email,pin:pin};
  k[x].ajax.get(callback);
  function callback(json){
  res=JSON.parse(json);
  info=res.info;
  n=info.split(',');
  ktupad.info(res.info);
  if (n[0]=='Berhasil'){
  // ktupad.cookies.set("token",res.token,1);
  window.localStorage.setItem('data', JSON.stringify(json));

  k.login.app.login();
  }
  }
  },

login:function(){
// data=ktupad.cookies.get("data");

// var data=JSON.parse(window.localStorage.getItem('data'));
var data=window.localStorage.getItem('data');

// window.localStorage.setItem('data3', JSON.stringify(data));

if (!data) {   this.signform(); }
else {
res=JSON.parse(data);
ktupad.dataUser.token=res.token;
ktupad.dataUser.name=res.username;
ktupad.dataUser.id=res.id;
// menu=JSON.parse(res.menu);
menu=res.menu;
// alert(res.menu);
menu.push({id:0,induk:0,nama:"Profile",url:"modules/master/login/controller.js?login/profiles"});
menu.push({id:0,induk:0,nama:"Logout",url:"modules/master/login/controller.js?login/signout"});
ktupad.menu.data=menu;
ktupad.menu.view();

  ktupad.info("Welcome again " + ktupad.dataUser.name);
  // this.menu();
  ktupad.loadController(ktupad.afterlogin);
  // ktupad.loadController('script.js');
  ktupad.loadScript(['script.js'], function() {});

  }
  },

profiles:function(){
  user=ktupad.token;
  out  ='<div class="modal"  id="login">';
  out +='<div class="row ">';
  out +='<h1> Profile</h1>';
  out +='<div class="login">';
  out +='<form id="Form">';
  out +='<div><label for="email">Email</label><input type="text" id="email" name="email" value="'+user+'"></div>';
  out +='<div><label for="pin">PIN</label><input type="text" id="pin" name="pin" value=""></div>';
  out +='<input type="submit" value="none" style="display:none;">';
  out +='</form>';
  out +='<button id="gantipin" class="btn-form" onclick="k.login.app.setpin()">Ganti PIN</button>';
  out +='<button id="logout" class="btn-form" onclick="k.login.app.signout()">Logout</button>';
  out +='<div id="btn-extra" class="row" >Logout</div>';

  out +='</div>';
  out +='</div>';
  out +='</div>';
  document.getElementById('content').innerHTML=out;
  },

setpin:function(){
  this.set();
  k[x].ajax.path=this.url.path;
  k[x].ajax.data={mod:'setpin',email:email,pin:pin};
  k[x].ajax.get(callback);
  function callback(json){
  res=JSON.parse(json);
  info=res.info;
  ktupad.info (info);
  }
  },

  menu:function(){

    info=res.info;
    // ktupad.info(res);
    debug(res);
    res.data.push({id:0,induk:0,nama:"Profile",url:"modules/master/login/controller.js?login/profiles"});
    res.data.push({id:0,induk:0,nama:"Logout",url:"modules/master/login/controller.js?login/signout"});
    ktupad.menu.data=res.data;
    ktupad.menu.view();

  },
  menu2:function(){
    token=ktupad.dataUser.token;
    k[x].ajax.path=this.url.path;
    k[x].ajax.data={mod:'menu',token:token};
    k[x].ajax.get(callback);
    function callback(json){
    res=JSON.parse(json);
    info=res.info;
    // ktupad.info(res);
    debug(res);
    res.data.push({id:0,induk:0,nama:"Profile",url:"modules/master/login/controller.js?login/profiles"});
    res.data.push({id:0,induk:0,nama:"Logout",url:"modules/master/login/controller.js?login/signout"});
    ktupad.menu.data=res.data;
    ktupad.menu.view();
    }
  },

  };
