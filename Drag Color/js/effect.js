$(document).ready(function(){
	$(".switch-fafa").click(function(){
		$(".color-box").slideToggle(500)
	});
  
  $(".color-box div").draggable({
   helper:'clone',
  });

  $("*").droppable({
  	drop:function(event,ui){

  		var x = $(ui.draggable).css('background');
  		$('h1').css('color',x);

  	},

  });

  $(".default").click(function(){

  	$("h1").css('color','');
  });

	});