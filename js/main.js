



$(function() {
    $('#menu_open').click(function(event) {
        $(this).toggleClass('active');
        $('.header__mainmenu').animate({
            'width': 'toggle'
        });
    });

    $('.mobilemenu').click(function(event) {
        $('.header__menu').slideToggle();
    });

    $('.closemenu').click(function(event) {
        $('.header__menu').slideToggle();
    });


});




$(window).scroll(function() {
    scroll = $(window).scrollTop();

    if (scroll >= 120) $('#header').addClass('fixed');
    else $('#header').removeClass('fixed');
});




$(document).ready(function() {
	
	

	
	
	var letters = ['ОПТОВЫЕ ПОСТАВКИ','ДИЛЕРСТВО','КОНТАКТНОЕ ПРОИЗВОДСТВО'];

	$(".tabsblock__tabs").slick({
		autoplay: false,
		dots: true,
		fade: true,
		slidesToShow: 1,
            slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.tabsblock__left'),
        nextArrow: $('.tabsblock__right'),
		customPaging : function(slider, i) {
		var thumb = $(slider.$slides[i]).data();
		
		return '<a>'+letters[i]+'</a>';
				},
		
	});

	
	
    new WOW().init();
    $("input[type=tel]").mask("+7 (999) 999-99-99");

    
	
   if ($(window).width() > 999) {
        $('.reviews__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            centerMode: false,
            prevArrow: $('.reviews__left'),
            nextArrow: $('.reviews__right'),            
        });
    } 
	if (($(window).width() < 1000) && (($(window).width() > 768))) {
        $('.reviews__slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            centerMode: false,
            prevArrow: $('.reviews__left'),
            nextArrow: $('.reviews__right'),            
        });
    } 
  if ($(window).width() < 769) {
        $('.reviews__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            centerMode: false,
            prevArrow: $('.reviews__left'),
            nextArrow: $('.reviews__right'),            
        });
    } 
  

    lightbox.option({
        'resizeDuration': 20,
        'wrapAround': true
    });
});

$(document).ready(function() {
    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 90;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
});



$(document).ready(function() {
    $('.close-modal').on('click', close_modal);
    $('#modal_close_href').on('click', close_modal);

    function close_modal() {
        $('.dom-popup').css("display", "none");
    }
});



$(document).ready(function() {
	
	
	if ($(window).width() > 999) {
		
        $('.serts__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: $('.serts__left'),
            nextArrow: $('.serts__right'),
		});
	}
	
	if (($(window).width() < 1000) && (($(window).width() > 768))) {
		
        $('.serts__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: $('.serts__left'),
            nextArrow: $('.serts__right'),
		});
	}
	
	if (($(window).width() < 769) && (($(window).width() > 480))) {
		
        $('.serts__slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: $('.serts__left'),
            nextArrow: $('.serts__right'),
		});
	}
	
	if ($(window).width() < 481) {
		
        $('.serts__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: $('.serts__left'),
            nextArrow: $('.serts__right'),
		});
	}
	
	
		
	
    $('.serts__slide.slick-slide.slick-cloned a').removeAttr('data-lightbox');

});