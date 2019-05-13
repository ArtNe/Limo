/*var name = "Alex"
alert(name);*/
jQuery(function($) {

	$('.homepage_slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
      centerMode: true,
      centerPadding: '0px',
      draggable: true
	});

	var $carousel = $('.homepage_slider');
		$(document).on('keydown', function(e) {
                if(e.keyCode == 37) {
                    $carousel.slick('slickPrev');
                }
                if(e.keyCode == 39) {
                    $carousel.slick('slickNext');
                }
            });
	
	/*$('.first_line').hide(1000).css({'color':'green', 'font-size': '28px'});
	$('.second_line').css({'color':'blue', 'font-size': '28px'});
	var color = $('.first_line').css('color');
	alert($('.first_line').data("test"));
	console.log($('.first_line').data("test"));
	alert(color);
	$('#knopka').on('click',function(){
			alert('была нажата кнопка');
	})*/

});