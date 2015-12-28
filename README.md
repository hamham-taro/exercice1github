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
				//fonction .stop_defif souris hors du div
			$("#head_slider").mouseover(function(){
				slider.stop_defil();
			});
				//fonction .play_defil souris dans le div
			$("#head_slider").mouseout(function(){
				slider.play_defil();
			});
		},