// JavaScript Document
var bold = document.getElementById("bold");
bold.onclick= function(){
	"use strict";
	
	document.execCommand("bold");
	
};


var itl = document.getElementById("italic");
itl.onclick= function(){
	"use strict";
	
	document.execCommand("italic");
	
};



var under = document.getElementById("under");
under.onclick= function(){
	"use strict";
	
	document.execCommand("underline");
	
};



var sup = document.getElementById("sup");
sup.onclick= function(){
	"use strict";
	
	document.execCommand("superscript");
	
};





var sub = document.getElementById("sub");
sub.onclick= function(){
	"use strict";
	
	document.execCommand("subscript");
	
};





var lef = document.getElementById("left");
lef.onclick= function(){
	"use strict";
	
	document.execCommand("justifyLeft");
	
};



var rig = document.getElementById("right");
rig.onclick= function(){
	"use strict";
	
	document.execCommand("justifyRight");
	
};



var cen = document.getElementById("center");
cen.onclick= function(){
	"use strict";
	
	document.execCommand("justifyCenter");
	
};



var del = document.getElementById("delete");
del.onclick= function(){
	"use strict";
	
	document.execCommand("delete");
	
};




var undo = document.getElementById("undo");
undo.onclick= function(){
	"use strict";
	
	document.execCommand("undo");
	
};


var redo = document.getElementById("redo");
redo.onclick= function(){
	"use strict";
	
	document.execCommand("redo");
	
};