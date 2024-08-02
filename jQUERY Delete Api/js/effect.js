$(document).ready(function(){
	$('.b-mode').click(
		function(){
	$(this).css({'background':'blue','color':'white'});
	$('.uses').html('Select List and click on Delete');
	$('.uses').delay(5000).fadeOut();		
	var txtbtm = $('.btm').html();
	var count = 0;
	var del_record;
	$(".email-list").selectable({
		selected:function(event,ui){
                $('.btm').html('Delete');
		},

	unselected:function(event,ui){
		$('.btm').html(txtbtm);
	},
 
    stop:function(event,ui){
    	$('.btm').click(function(){
    	 

    	 count += $(".ui-selected").length;
    	 del_record = $('.ui-selected');
    		$('.btm').html(count+"  Item Deleted !");
    		$('.ui-selected').remove();
    		$('.restore-btn').fadeIn();
    		$('.restore-btn').click(function(){
    			$('.email-list').append(del_record);
    			$(this).fadeOut(function(){
    				$('.notice').html(count+ 'Items restored');
    				$('.notice').delay(2000).fadeOut(function(){
    					location.reload();
    				});
    			});
    		});
    	});
    },
	});	});
});
	


$(document).ready(function(){
	var count =0;
	$('.c-mode').click(function(){
		$(this).css({'background':'blue','color':'white'});
		$('.uses').html('Drag items to Delete');
		$('.uses').delay(5000).fadeOut();
		$('.btm').fadeOut(function(){
			$('.del').fadeIn();
			$('.email-list li').draggable({
				helper:function(event,ui){
					return $("<i class='fa fa-trash' style='font-size:50px;border: 1px solid #ccc;border-radius: 50%;padding: 25px;width:100px;height: 100px;box-sizing: border-box;'></i>");				
				},

				revert:'invalid',
			});

			$('.del').droppable({
				drop:function(event,ui){
					count+=ui.draggable.length;
                   $(ui.draggable).remove();
                   $('.undo').fadeIn(function(){
                   	$(this).click(function(){
                   		$('.email-list').append(ui.draggable);
                   		$('.undo').fadeOut(function(){
                   			$('.notice').html(count+'items restored');
                   			$('.notice').delay(2000).fadeOut();
                   		});

                   	});
                   });
				},
			});
		});
	});
});	