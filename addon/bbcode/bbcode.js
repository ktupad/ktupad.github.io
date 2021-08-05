
bbcode={
  editor:{
  id:'editor',
  val:'[url=//ktupad.com]ktupad.com[/url]',
  data:[{id:1,url:"i",name:"italic"},
  {id:1,url:"b",name:"bold"},
  {id:2,url:"img",name:"images"},
  {id:3,url:"url",name:"link"},
  {id:4,url:"br",name:"break"},
  {id:4,url:"more",name:"more"},
  ],

  view:function() { debug('editor.view');

  out='<div class = "" id="el-editor"></div>';
    // document.getElementById('chart-spoiler').innerHTML=out;
  ktupad.modal2(out);


  arr=this.data;
  id=this.id;
  val=this.val;
  el=document.getElementById('el-'+id);
  // val=document.getElementById(id).value;

  out = '<div class="bar pColor"><ul>';
  for (key in arr) {
  out += '<li  onclick=bbcode.editor.setel("'+arr[key].url+'"); ><i class="btn-small">'+arr[key].url+'</i></li>';
  // out += '<li class="btn-close ico-close" onclick=bbcode.editor.editor.setel("'+arr[key].url+'"); >'+arr[key].name+'></li>';
  }
  out += '<li  onclick=bbcode.editor.preview("'+id+'"); ><i class="btn-small">View</i></li>';
  out += '</ul></div>';
  out += '<textarea id="'+id+'" name="'+id+'" rows="5">'+val+'</textarea>';
  out += '<div id="preview-'+id+'"> </div>';
  el.innerHTML=out;

  },

  preview:function(id) { debug('editor.setel');
  data=document.getElementById(id).value;
  nah=bbcode.view(data);
  document.getElementById('preview-'+id).innerHTML=nah;
  },

  setel:function(opt) { debug('editor.setel');
  id=this.id;
  var url=['url']
  var img=['img']
  var txtarea = document.getElementById(id);
  var start = txtarea.selectionStart;
  var finish = txtarea.selectionEnd;
  var allText = txtarea.value;

  var sel = allText.substring(start, finish);
  var newText=allText.substring(0, start);
  a='';
  if(opt=='url'){a ="=";}
  nah ="["+opt+a+"]"+sel+"[/"+opt+"]";

  if(opt=='br'){nah ="["+opt+"]"};
  if(opt=='more'){nah ="["+opt+"]"};


  // if(img.includes(opt)){ nah ="["+opt+" src="+ser+"]"+sel+["+opt+"]"";}

  newText +=nah;
  newText +=allText.substring(finish, allText.length);
  txtarea.value=newText;
  },
  }, // end  editor


view:function (data){
// data=this.data;
string=this.get(data)
// document.getElementById("bbcode-spoiler").innerHTML = string;
return string;
},


data:"[h=1] Ktupad [/h] [b]BBCode[/b] [br] Website [url=//ktupad.com] Ktupad [/url] [br] [img]system/ktupad.svg[/img]",
arr:{
'[hi]':'Hi',
'[sc=(.+?)]':'alert($1)',
'\r':'',
'\n':'<br>',
'[more]':'<!--more-->',
'[br]':'<br/>',
'[b](.+?)[/b]':'<b>$1</b>',
'[i](.+?)[/i]':'<i>$1</i>',
'[fbtn=(.+?)](.+?)[/fbtn]':'<button onclick="ktupad.loadController(\'$1\')">$2</button>',
'[lf=(.+?)](.+?)[/lf]':'<span onclick="ktupad.loadController(\'$1\')">$2</span>',
'[btn=(.+?)](.+?)[/btn]':'<button onclick="$1">$2</button>',
'[btna=(.+?)](.+?)[/btna]':'<button onclick="window.open(\'$1\')">$2</button>',

'[i=(.+?)](.+?)[/i]':'<i class="$1">$2</i>',
'[url=(.+?)](.*?)[/url]':'<a href="$1">$2</a>',
'[h=(.*?)](.*?)[/h]':'<h$1>$2</h$1>',
// '[img](.*?)[/img]':'<img src="$1" alt="$1" class="img">',
'[img=(.*?)](.*?)[/img]':'<img class="$1" src="$2" alt="$2">',

'[vid](.*?)[/vid]':'<video width="400" controls><source src="$1" type="video/mp4"></video>',
'[span=(.+?)](.*?)[/span]':'<span class="$1">$2</span>',
'[div=(.+?)](.*?)[/div]':'<div class="$1">$2</div>',
'[div1=(.+?)](.*?)[/div1]':'<div class="$1">$2</div>',
'[svg=(.+?)](.*?)[/svg]':'<i class="$1"><svg viewBox="0 0 20 20"><use xlink:href="#svg$2"></use></svg></i>',
// '[svg=([^,]*?)(?:,[^]\'"]+)](.*?)[/svg]':'<i class="$1"><svg viewBox="0 0 20 20"><use xlink:href="#svg$2"></use></svg></i>',
'[spoiler=(.+?)]':'<div id="$1"></div>',
'[code](.*?)[/code]':'<div class = "code">$1</div>',

},
get:function (data){
string = data  || "";
for (key in this.arr){
var regTag = key.replace(/[\[\]]/g , '\\$&');
var regExp = new RegExp(regTag, 'gi');
string = string.replace(regExp, this.arr[key]);
}
// document.getElementById(this.id).innerHTML = string;
return string;
},

};
