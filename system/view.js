var view={
  spinner:'<div id="spinner" class="hide loader depan"  onclick="conf.close(\'spinner\')" >\
  <div class="spinner"  >\
  <div class="cube cube1"></div>\
  <div class="cube cube2"></div>\
  <div class="cube cube3"></div>\
  <div class="cube cube4"></div>\
  <div class="cube cube5"></div>\
  <div class="cube cube6"></div>\
  <div class="cube cube7"></div>\
  <div class="cube cube8"></div>\
  </div>\
  </div>',
mydiv:'<div id="mydiv" class="myclass">Hi, ktupad</div>',
mydiv1:'<input type="text" value="Hi">',
blog:'<div id="blog"> \
<div class="aurora-bg aurora-agrabah"><div class="aurora-inner"></div></div> \
<div class="auroral-stars"></div> \
<div class="row blog" id="blog"> \
<div class="l-1 s-12">.</div> \
<div class="l-10 s-12"> \
<div class="row" id="blog-header">Ktupad<span class="orange">.com</span> \
<span id="sosmed" class="kanan sosmed"></span> \
</div> \
<div class="row" id="blog-menu"><ul><li><a>Home</a></li><li><a>Blog</a></li></ul></div> \
<div class="row" id="blog-judul"><div class="artikel"><span class="judul2">Blog</span></div></div> \
<div class="row" id="blog-body"> \
<div class="l-4 s-12 artikel" id="blog-side"></div> \
<div class="l-8 s-12 artikel" id="blog-front"></div> \
</div> \
<div class="row" id="blog-footer"><span class="black-font">ktupad 2021</span></div> \
</div> \
<div class="l-1 s-12">.</div> \
</div> \
</div>',
}

// alert(view.blog);
//
//
// <div id="toast" class="pDarkColor toast hide" onclick="conf.close('toast')" >Info</div>
// <div id="navbar" class="navbar pDarkColor">
// <ul style="list-style-type: none; margin:0; left:0; padding: 0;">
// <li style="float:right"> <i class="ico-burger"></i>
// <span id="badge" class="badge" data-badge="0"></span>
// </li>
// <li style="float:right"> <i class="ico-envelope"></i>
// <span id="badge" class="badge" data-badge="0"></span>
// </li>
//
// <li id="dropdown" tabindex="0" class="dropdown-menu" style="float:right">
// <a>Dropdown</a>
// <ul  class="dropdown pColor" >
// <li><input id="1ss" type="checkbox" ><label class="btn-h" for="1ss" >Level 1</label>
// <ul>
// <li><input id="2ss" type="checkbox" ><label class="btn-h" for="2ss" >Level 2</label>
// </li></ul>
// </li>
// </ul>
// </li>
// <li id="accordion" tabindex="0" class="accordion-menu">
// <i class="ico-burger"></i>
// <ul  class="accordion pColor" >
// <li><input id="1s" type="checkbox" ><label class="btn-h" for="1s" >Info</label>
// <ul><li><input id="2s" type="checkbox" ><label class="btn-h" for="2s" >Ktupad-2.0</label></li></ul>
// </li>
// </ul>
// </li>
// </ul>
// </div>
//
// <div id="spinner" class="hide loader depan"  onclick="conf.close('spinner')" >
// <div class="spinner"  >
// <div class="cube cube1"></div>
// <div class="cube cube2"></div>
// <div class="cube cube3"></div>
// <div class="cube cube4"></div>
// <div class="cube cube5"></div>
// <div class="cube cube6"></div>
// <div class="cube cube7"></div>
// <div class="cube cube8"></div>
// </div>
// </div>
//
// <div id="float" class="btn-float" onclick="conf.open('form')" >
// <i class="ico-plus"></i>
// </div>
//
// <div id="form" class="depan hide">
// <div  class="modal row">
// <button   class="btn-close ico-close" onclick="conf.close('form')"></button>
// <!-- <i class="btn-close ico-close"></i> -->
// <h2> Form </h2>
// <form >
// <div> <label for="namas">User name</label><br/>	<input id="namas" type="text" name="nama" value=""></div>
// <div> <label for="sandis">Password</label><br/><input id="sandis" type="password" name="sandi" value=""></div>
//
// <div class="clear">
// <input id="order1" type="hidden" name="order1" value="ORDER BY">
// ORDER BY:<select id="fld1" name="sortir" >
// <option value="id" >ID</option>
// <option value="nama" >Nama</option>
// </select>
// </div>
// </form>
//
// <form method=post enctype="multipart/form-data" ><label for="afile">
// Pilih File CSV:</label><input id="afile" type="file" name="afile" >
// </form>
//
// <button id="import" class="btn-form" name=upload >Import</button>
// <button id="signin" class="btn-form">Sign In</button>
// </div>
// </div>
//
// <div id="gallery" class="depan hide">
// <div  class="modal row">
// <button   class="btn-close ico-close" onclick="conf.close('gallery')"></button>
// <div class="row">
// <div class="l-6 s-12"><a href="#"><img src="system/ktupad.svg" alt="ktupad"></a></div>
// <div class="l-6 s-12"><a href="#"><img src="system/ktupad.svg" alt="ktupad" ></a></div>
// <div class="l-6 s-12"><a href="#"><img src="system/ktupad.svg" alt="ktupad"></a></div>
// <div class="l-6 s-12"><a href="#"><img src="system/ktupad.svg" alt="ktupad" ></a></div>
// </div>
// </div>
// </div>
//
// <div id="tabs" class="depan hide">
// <div  class="modal row">
// <button   class="btn-close ico-close" onclick="conf.close('tabs')"></button>
// <div class="tabs">
// <input type="radio" name="tabs" id="satu" checked="checked" >
// <label for="satu" class="btn-">Satu</label>
// <div class="tab">Isi Satu</div>
// <input type="radio" name="tabs" id="dua" checked="checked" >
// <label for="dua" class="btn-">Dua</label>
// <div class="tab">Isi Dua</div>
// </div>
// </div>
// </div>
//
// <div id="chart" class="depan hide">
// <div  class="modal row ">
// <button   class="btn-close ico-close" onclick="conf.close('chart')"></button>
// <div class="row">
// <div class="l-6 s-12 ">
// <div class="chart vertical row">
// <table>
// <tr>
// <td><div class="red" style="height:100%"> 100 % </div></td>
// <td><div class="green" style="height:80%"> 80 % </div></td>
// <td><div class="blue" style="height:10%"> 00 % </div></td>
// </tr>
// </table>
// </div>
// </div>
// <div class="l-6 s-12 ">
// <div class="chart horizontal row">
// <table>
// <tr><td><div class="red" style="width:100%"> 100 % </div></td></tr>
// <tr>	<td><div class="green" style="width:80%"> 80 % </div></td></tr>
// <tr>	<td><div class="blue" style="width:10%"> 00 % </div></td></tr>
// </table>
// </div>
// </div>
// </div>
// </div>
// </div>
//
// <div id="search" class="search row pColor">
// <ul>
// <li class="pTextColor" style="padding: 14px 16px;">Modul</li>
// <li id="caris" tabindex="0" class="tool" style="float:right" >
// <i class="ico-tridot dropbtn"></i>
// <div class="subtool" >
// <a  href="#" >Filter</a>
// <a  href="#" >Export</a>
// <a  href="#" >Import</a>
// <a  href="#" >Print</a>
// </div>
// </li>
// <li id="SearchTxt" style="float:right" ><label for="InpSearch"><input id="InpSearch" type="text" placeholder="Search..." /></label></li>
// </ul>
// </div>
//
// <div id="table" class="table">
// <table>
// <tr><th class="pColor"><label> <input type="checkbox">ID</label></th><th class="pColor">Nama</th><th class="pColor">Aksi</th></tr>
// <tr><td><label> <input type="checkbox">1</label></td><td>Chart</td><td><button onclick="conf.open('chart')" class="btn-form">View</button></td></tr>
// <tr><td><label> <input type="checkbox">2</label></td><td>Form</td><td><button onclick="conf.open('form')" class="btn-form">View</button></tr>
// <tr><td><label> <input type="checkbox">3</label></td><td>Gallery</td><td><button onclick="conf.open('gallery')" class="btn-form">View</button></tr>
// <tr><td><label> <input type="checkbox">4</label></td><td>Spinner</td><td><button onclick="conf.open('spinner')" class="btn-form">View</button></tr>
// <tr><td><label> <input type="checkbox">4</label></td><td>Toast</td><td><button onclick="conf.open('toast')" class="btn-form">View</button></tr>
// <tr><td><label> <input type="checkbox">4</label></td><td>Tabs</td><td><button onclick="conf.open('tabs')" class="btn-form">View</button></tr>
// </table>
// </br>
// </div>
//
// <div id="pagination" class="pagination">
// <button id="p" class="btn-form">Prev</button>
// <button id="n" class="btn-form">Next</button>
// <span id="s">Page:1/7</span>
// </div>
//
// </body>
// </html>
