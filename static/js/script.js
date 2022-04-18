const $ = require('jquery');
// const wowJS = require('./vendor/wow.min.js');

function throttle(callback, limit) {
	var waiting = false; // Initially, we're not waiting
	return function () {
		// We return a throttled function
		if (!waiting) {
			// If we're not waiting
			callback.apply(this, arguments); // Execute users function
			waiting = true; // Prevent future invocations
			setTimeout(function () {
				// After a period of time
				waiting = false; // And allow future invocations
			}, limit);
		}
	};
}
$(window).on('load', function () {
	'use strict';
	/* ===================================
            Loading Timeout
     ====================================== */
	$('.side-menu').removeClass('hidden');

	setTimeout(function () {
		$('.preloader').fadeOut();
	}, 500);
});

$(function ($) {
	'use strict';
	/* ===================================
       Navbar smooth Scroll
   ====================================== */
	// $(".scroll").on("click", function (event) {
	//     event.preventDefault();
	//     $("html,body").animate({
	//         scrollTop: $(this.hash).offset().top - 50}, 1200);
	// });
	/* ===================================
        Side Menu
    ====================================== */
	// if ($('#sidemenu_toggle').length) {
	// 	$('#sidemenu_toggle').on('click', function () {
	// 		$('.side-menu').removeClass('side-menu-opacity');
	// 		$('.side-menu').addClass('side-menu-active'),
	// 			$('#close_side_menu').toggleClass('closed');
	// 	})
			// $('#close_side_menu').on('click', function () {
			// 	$('.side-menu').removeClass('side-menu-active'),
			// 		$(this).addClass('closed'),
			// 		$('.pushwrap').removeClass('active');
			// 	setTimeout(function () {
			// 		$('.side-menu').addClass('side-menu-opacity');
			// 	}, 500);
			// }),
			// $('.side-menu .navbar-nav .nav-link').on('click', function () {
			// 	$('.side-menu').removeClass('side-menu-active'),
			// 		$('#close_side_menu').addClass('closed'),
			// 		$('.pushwrap').removeClass('active');
			// 	setTimeout(function () {
			// 		$('.side-menu').addClass('side-menu-opacity');
			// 	}, 500);
			// }),
			// $('#btn_sideNavClose').on('click', function () {
			// 	$('.side-menu').removeClass('side-menu-active'),
			// 		$('#close_side_menu').addClass('closed'),
			// 		$('.pushwrap').removeClass('active');
			// 	setTimeout(function () {
			// 		$('.side-menu').addClass('side-menu-opacity');
			// 	}, 500);
			// });
	// }
	// ===========================
	//    bottom nav appear
	// ===========================
	$(function () {
		var $win = $(window);

		function socialScroll() {
			if (
				$(window).scrollTop() + $(window).height() <
					$(document).height() - 300 &&
				$(window).scrollTop() + $(window).height() > $(document).height() - 400
			) {
				$('.sidenav-bottom').css('opacity', '0');
				$('.sidenav-bottom').removeClass('sidenav-bottom-fixed');
			}
		}

		$(window).scroll(throttle(socialScroll, 500));
	});

	// ===========================
	//    header appear
	// ===========================
	function headerScroll() {
		if ($(this).scrollTop() > 260) {
			// Set position from top to add class
			$('.sidenav-bottom').css('opacity', '0');
			$('header .inner-header').addClass('header-appear');
		}
		if ($(this).scrollTop() < 260) {
			$('.sidenav-bottom').css('opacity', '1');
			$('header .inner-header').removeClass('header-appear');
		}
	}

	$(window).on('scroll', throttle(headerScroll, 500));

	/* ===================================
             Wow Effects
   ======================================*/
	// var wow = new wowJS({
	// 	boxClass: 'wow', // default
	// 	animateClass: 'animated', // default
	// 	offset: 0, // default
	// 	mobile: false, // default
	// 	live: true, // default
	// });
	// wow.init();

	/* ===================================
        FancyBox Open on Content Loaded
   ======================================*/
	//    Fancybox.bind(
	//     'a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]',
	//     {
	//       groupAll: true,
	//     }
	//   );
	//    $('#announcement').trigger('click');
});
