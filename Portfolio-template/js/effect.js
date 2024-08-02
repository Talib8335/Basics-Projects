// jQuery Document
/* start loader coading */
window.onload = function()
{
	"use strict";
	$(document).ready(
	function(){
	$(".loader").fadeOut(1000,function(){
		$(".slide-left,.slide-right").animate({
		"width":"0%"},500,function(){
			$(".loader-con").fadeOut();
		});
	});
});

};
/* end loader coading */

/* start slicknav coading */

$(function(){
	"use strict";
	$("#menu").slicknav({
		label: '',
		brand:'Talib'
	});
});

/*end slicknav coading */

/* start big slider */
$(document).ready(function() {
	"use strict";
  $(".skitter-large").skitter({
	 theme:"clean",
	  label:false,
	  
  });
});

$(document).ready(function(){
	"use strict";
	$(".picone-header").slideDown(1000,function(){
		$(".picone-btm").fadeIn(1500,function(){
			$(".picone-header,.picone-btm").delay(100).fadeOut(function(){
				$(".slider_label").css("background","rgba(0,0,0,0.8)");
				  $(".pictwo-header").fadeIn(1000,function(){
					$(".pictwo-para").show(1500,function(){
						$(".pictwo-btm").fadeIn(1000,function(){
							$(".pictwo-header,.pictwo-para,.pictwo-btm").delay(2800).fadeOut(function(){
								if($(window).width()>992){
								$(".slider_label").css("background","inherit");}
							});
						});
					});
				});
			});
		});
	});
});

$(document).ready(function(){
	"use strict";
	setInterval(function(){
	$(".picone-header").slideDown(1000,function(){
		$(".picone-btm").fadeIn(1500,function(){
			$(".picone-header,.picone-btm").delay(100).fadeOut(function(){
				$(".slider_label").css("background","rgba(0,0,0,0.8)");
				  $(".pictwo-header").fadeIn(1000,function(){
					$(".pictwo-para").show(1500,function(){
						$(".pictwo-btm").fadeIn(1000,function(){
							$(".pictwo-header,.pictwo-para,.pictwo-btm").delay(2800).fadeOut(function(){
								if($(window).width()>992){
								$(".slider_label").css("background","inherit");}
							});
						});
					});
				});
			});
		});
	});
},10500);
});
/* end big slider */

/*start project slider*/

$(document).ready(function(){
	"use strict";
	$(".center").slick({
		dots:false,
		infinite:true,
		centerMode:true,
		slidesToShow:5,
		slidesToScroll:3,
		responsive:[
		{
		breakpoint:768,
		settings:{
		   dots:false,
		infinite:true,
		centerMode:true,
		slidesToShow:3,
		slidesToScroll:3,
			centerPadding:'40px',
		
	}
	},
					   
		{
					   breakpoint:480,
					   settings:{
					   dots:false,
					   infinite:true,
					   slidesToShow:1,
					   slidesToScroll:1,
						   arrows:true,
					   }
					   },
		]
	});
});


/*end project slider*/

/*start progress bar */




/*end progress bar coading*/

/* start page scroll coading*/
$(document).ready(function(){
	if($(window).width()>1024)
	{
	$(document).scroll(function(){
		var sheight = window.pageYOffset;
	    if(sheight>680)
	    {
	    	$(".my-pic,.about-text").slideDown(1000);
	    }
	    else{
	    	$(".my-pic,.about-text").SlideUp(500);
	    }
     if(sheight>993)
     {
     	$(document).ready(function(){
	"use strict";
	var pone = $('.progress-one').html();
	var ptwo = $('.progress-two').html();
	var pthree = $('.progress-three').html();
	var pfour = $('.progress-four').html();
	var pfive = $('.progress-five').html();
	 $(".progress-one").animate({'width':pone},1000,function(){
		 $(".progress-two").animate({'width':ptwo},500,function(){
			 $(".progress-three").animate({'width':pthree},500,function(){
				 $(".progress-four").animate({'width':pfour},500,function(){
					 $(".progress-five").animate({'width':pfive},500);
				 });
			 });
		 });
	 });
});
}
});
}});



/*end page scroll coading*/

/* start scroll to top */
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>200)
		{
			$(".scrolltop").fadeIn();
		}

		else{
			$(".scrolltop").fadeOut();
		}
       $(".scrolltop").click(function(){
       	$("html,body").animate({scrollTop:0},1000);
       });
       
	});
});






/* end scroll to top */
