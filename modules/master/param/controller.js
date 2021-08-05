x='param';
ktupad.app(x);
  k[x].app={
  url:{host:'http://localhost/',path:'modules/master/param/model.php'},
  data:[{id:1,nama:"satu" },{id:2,nama:"dua" },{id:3,nama:"tiga"}],
  view:function(){
    k[x].ajax.path=this.url.path;
    k[x].crud.table();

    k[x].form.callback=function(){
      document.getElementById('status').value=1;
    };
  },

  };
