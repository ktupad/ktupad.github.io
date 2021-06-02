// conf.dataApp.host='http://localhost/new/';
conf.dataApp.host='https://ktupad.github.io/';
conf.dataApp.model='https://sismadi.co.id/api/';
conf.isSignup='hide';
conf.isDb=1;
conf.akses=['c','r','u','d'];
// conf.getappdata();
// conf.open('atas');

getappdata=function(){
  var data=window.localStorage.getItem('appData');
  if(!data){
    datas={token:'1258',mod:'app',cond:''};
    datas.host=this.dataApp.host;
     conf.loadModel(datas,function(res){
     json=JSON.parse(res);
     debug(json);
     window.localStorage.setItem('appData', JSON.stringify(json));
     conf.getapp(res);
      });
  }
  else{
  var data=window.localStorage.getItem('appData');
  conf.getapp(data);
  }
};

getappdata();
