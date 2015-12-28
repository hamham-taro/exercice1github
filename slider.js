$(document).ready(function(){
	slider.init();
	slider.play_defil();
});

slider = {
	init: function(){
		slider.elem = $("#head_slider_content");
		slider.nbSlide = slider.elem.find("object").length;
		slider.current = 0;
		
		$("#head_slider_fleche_droite").click(function(){
			slider.next();
		});
		$("#head_slider_fleche_gauche").click(function(){
			slider.prev();
		});
		
		
		$("#bplay").click(function(){
			slider.play_defil();
		});
		$("#bstop").click(function(){
			slider.stop_defil();
		});
	},
	
	
	next: function(){
		slider.current++;
		if(slider.current > 4)
		{
			slider.current = 0;
		}
		slider.elem.stop().animate({marginLeft: -slider.current*680+"px"});
	},
	
	
	prev: function(){
		slider.current--;
		if(slider.current < 0)
		{
			slider.current = 4;
		}
			slider.elem.stop().animate({marginLeft: -slider.current*680+"px"});
	},
	
	
	play_defil: function(){
		slider.timer = window.setInterval("slider.next()", 4000);
	},
	
	
	stop_defil: function(){
		window.clearInterval(slider.timer);
	}
}