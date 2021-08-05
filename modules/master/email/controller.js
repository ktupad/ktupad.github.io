x='email';
ktupad.app(x);
  k[x].app={
  url:{host:'http://localhost/',path:'modules/master/email/model.php'},
  data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
  view:function(){
    k[x].ajax.path=this.url.path;
    k[x].crud.table();
    },

    sendMail:function(){
    frm=k[x].form.el('Form');

      datareg=JSON.stringify(frm);
      debug(datareg);
      k[x].ajax.path=k[x].app.url.path;
      k[x].ajax.data={mod:'mail',datareg:datareg};
      k[x].ajax.get(callback);
      function callback(json){
        alert(json);
      }

    },
    
  };
