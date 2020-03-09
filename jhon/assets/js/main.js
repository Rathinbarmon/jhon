(function ($) {
	"use strict";
	 
	/*---Preloading JS---*/
	$(window).load(function() {
		$('.preloader-wrap').fadeOut('500', function() {
			$(this).remove();
		});
	}); 
	
	/*---meanmenu---*/
	jQuery('#mobile-nav').meanmenu(); 
	
	/*---WOW init---*/
	new WOW().init(); 
	
	/*---onePageNav---*/
	$(".main-menu-area").onePageNav();	 
 
	/*---sticky nav---*/
	$(window).on('scroll',function(){
		var scroll= $(window).scrollTop();
		if(scroll<50){
			$(".main-menu-area").removeClass("sticky");
		}
		else{
			$(".main-menu-area").addClass("sticky");
		}
	}); 
	
	/*---Client testimonial carousel---*/
	$(".client-testimonial-carousel").owlCarousel({
		items:3,
		autoplay:true,  
		loop:true,  
		nav:false,
		responsive:{
			0:{
				items:1, 
				nav:false,
				loop:true
			},
			600:{
				items:1,
				nav:false,
				loop:true
			},
			1000:{
				items:1, 
				nav:false,
				loop:true
			}
		} 
	});
	
	/*---Smooth scroll---Js*/
	$('.home-arrow-down a').on('click', function(event) {
		   $('.home-arrow-down a').parent().removeClass('active');
		var $anchor = $($(this).attr('href')).offset().top - 60;
		   $(this).parent().addClass('active');
			$('body, html').animate({scrollTop : $anchor}, 800);
					 event.preventDefault();
		return false;
	});
	
	/*---slider active---*/
	$(".slider-active").owlCarousel({
		items:1,
		autoplay:true, 
		nav:false,
		loop:true, 
	});
	
	/* Mixutup JS */
	$('#portfolio-items').mixItUp({	
		animation: {
			effects: 'fade translateZ(-100px)',
			duration: 1000
		}
	});
	
	/*---Venobox JS---*/
	$('.vbox-popup').venobox({
		numeratio: true,
		infinigall: true
	});
	
	/*---Pop up---*/ 
	$('.vedio-play-btn').magnificPopup({
		type: 'iframe'
	}); 
	
	/* ScrollToTop JS */
	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();
		if (wScroll > 800) {
			$('.scroll-to-top').fadeIn('slow');
		} else {
			$('.scroll-to-top').fadeOut('slow');
		}
	});
	$('.scroll-to-top').on('click', function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	}); 
		
})(jQuery);	