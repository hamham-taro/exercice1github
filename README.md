# exercice1github
exercice 1 openclassroom github

Slider en jQuery

Un slider avec jQuery

		//initial position
	init: function(){
			slider.elem = $("#head_slider_content");
			slider.nbSlide = slider.elem.find("object").length;
			slider.current = 0;
			
				//fonction .next au click sur la fleche droite
			$("#head_slider_fleche_droite").click(function(){
				slider.next();
			});
				//fonction .prev au click sur la fleche gauche
			$("#head_slider_fleche_gauche").click(function(){
				slider.prev();
			});
				//fonction .stop_defif click bouton #bstop
			$("#bstop").click(function(){
				slider.stop_defil();
			});
				//fonction .play_defil click bouton #bplay
			$("#bplay").click(function(){
				slider.play_defil();
			});
		},
		
		
		//fonction next
	next: function(){
		slider.current++;
		if(slider.current > 4)
		{
			slider.current = 0;
		}
		slider.elem.stop().animate({marginLeft: -slider.current*680+"px"});
	},
	
		//fonction prev
	prev: function(){
		slider.current--;
		if(slider.current < 0)
		{
			slider.current = 4;
		}
			slider.elem.stop().animate({marginLeft: -slider.current*680+"px"});
	},
	
	
	
		//auto play defif fonction
	play_defil: function(){
		slider.timer = window.setInterval("slider.next()", 4000);
	},
	
		//auto stop defif fonction
	stop_defil: function(){
		window.clearInterval(slider.timer);
	}
	
________________________________________________________________________________________