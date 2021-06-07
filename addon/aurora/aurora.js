x='aurora';
k[x]={
arr:['aurora-outer','aurora-agrabah','aurora-northern','aurora-northern-intense',
'aurora-northern-dimmed','aurora-northern-dusk','aurora-northern-warm','aurora-outer',],
view:function(){
arr=this.arr;
out='';
for(i in arr){
out +='<div class="l-3 s-12"> <div class="box '+arr[i]+'"><div class="aurora-inner"><h1 class="aurora-title">'+arr[i]+'</h1> </div></div></div>';
}
out +='<div class="auroral-stars"></div>';
document.getElementById('aurora-spoiler').innerHTML=out;

},
};
