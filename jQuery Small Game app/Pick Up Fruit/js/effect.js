$(document).ready(function(){
	$(".con img").draggable({
	    helper:'clone',
	    revert:'invalid',
	});

	$(".fruit-box").droppable({
		accept:'.fruits',
		drop:function(event,ui){
			$(".fruit-box").append(ui.draggable);
		}
	});

	$(".flower-box").droppable({
		accept:'.flowers',
		drop:function(event,ui){
			$(".flower-box").append(ui.draggable);
		}
	});
});