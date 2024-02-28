/*
Author       : theme_ocean
Template Name: Adil - Personal Portfolio & Resume/CV Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/	
								
		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */

		/* START JQUERY LIGHTBOX*/
		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});	
		/* END JQUERY LIGHTBOX*/		

		/*START TESTIMONIAL JS*/	
		 $("#testimonial-slider").owlCarousel({
			items:2,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination: false,
			navigation:true,
			navigationText:["",""],
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/			
			
	}); 		
			
})(jQuery);


  

