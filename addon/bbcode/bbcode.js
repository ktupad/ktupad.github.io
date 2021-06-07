x='bbcode';
k[x]={
data:"[h=1] Ktupad [/h] [b]BBCode[/b] [br] Website [url=//ktupad.com] Ktupad [/url] [br] [img]system/ktupad.svg[/img]",
arr:{
'\r':'',
'\n':'<br>',
'[more]':'<!--more-->',
'[br]':'<br/>',
'[b](.+?)[/b]':'<b>$1</b>',
'[i](.+?)[/i]':'<i>$1</i>',
'[btn=(.+?)](.+?)[/btn]':'<button onclick="conf.loadFunction(\'$1\')">$2</button>',

'[i=(.+?)](.+?)[/i]':'<i clas="$1">$2</i>',
'[url=(.+?)](.*?)[/url]':'<a href="$1">$2</a>',
'[h=(.*?)](.*?)[/h]':'<h$1>$2</h$1>',
'[img](.*?)[/img]':'<img src="$1" alt="$1" class="img">',
'[img=(.*?)](.*?)[/img]':'<img clas="$1" src="$2" alt="$2">',

'[vid](.*?)[/vid]':'<video width="400" controls><source src="$1" type="video/mp4"></video>',
'[span=(.+?)](.*?)[/span]':'<span class="$1">$2</span>',
'[div=(.+?)](.*?)[/div]':'<div class="$1">$2</div>',
'[div1=(.+?)](.*?)[/div1]':'<div class="$1">$2</div>',
'[svg=(.+?)](.*?)[/svg]':'<i class="$1"><svg viewBox="0 0 20 20"><use xlink:href="#svg$2"></use></svg></i>',
// '[svg=([^,]*?)(?:,[^]\'"]+)](.*?)[/svg]':'<i class="$1"><svg viewBox="0 0 20 20"><use xlink:href="#svg$2"></use></svg></i>',
'[spoiler=(.+?)]':'<div id="$1"></div>',

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
view:function (){
data=this.data;
string=this.get(data)
document.getElementById("bbcode-spoiler").innerHTML = string;
// return string;
}

};
