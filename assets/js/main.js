$(document).ready(function() {

  	$('.preloader').hide();

	$('.page-scroll').on('click', function(e) {
		
		// $('.nav-item').removeClass('active');
		var href = $(this).attr('href');
		var elHref = $(href);

	// 	if ($(this).hasClass('nav-link')) {
	// 		$(this).addClass('active');
	// 	}

		$('html,body').animate({
			scrollTop: elHref.offset().top - 66
		}, 'linear');

		e.preventDefault();

	});

});

// $(window).scroll(function() {
// 	var scroll = $('html,body').scrollTop();
// 	var elHref2 = $('section').hasOffset();
// 	var scroll2 = elHref2.offset().top - 68;
// 	console.log(scroll2);
// 	if (scroll < scroll2) {
// 		$('.nav-item').removeClass('active');
// 		$('.nav-link:eq(0)').addClass('active');
// 	} else if (scroll < scroll2) {
// 		$('.nav-item').removeClass('active');
// 		$('.nav-link:eq(1)').addClass('active');
// 	} else if (scroll >= scroll2) {
// 		$('.nav-item').removeClass('active');
// 		$('.nav-link:eq(2)').addClass('active');
// 	}
// });

// $(window).scroll(function() {
// 	var scroll = $('html,body').scrollTop();

// 	if ( scroll >= 0 && scroll < 608 ) {
// 		$('#tentang').addClass('active');
// 	} else if ( scroll >= 608 && scroll < 1205 ) {
// 		$('#portfolio').addClass('active');
// 	} else {
// 		$('.nav-item').removeClass('active');
// 		$('#kontak').addClass('active');
// 	}
// });
