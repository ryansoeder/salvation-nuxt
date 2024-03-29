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

$(function ($) {
	'use strict';

	// ===========================
	//    header appear
	// ===========================
	function headerScroll() {
		if ($(this).scrollTop() > 260) {
			// Set position from top to add class
			$('.sidenav-bottom').css('opacity', '0');
			$('header .inner-header').addClass('header-appear');
			if ($('.header-banner') && window.innerWidth > 500) {
				var bannerHeight = $('.header-banner').height();
				console.log(bannerHeight);
				$('header .inner-header').css('top', bannerHeight + 32 + 'px');
			}
		}
		if ($(this).scrollTop() < 260) {
			$('.sidenav-bottom').css('opacity', '1');
			$('header .inner-header').removeClass('header-appear');
			if ($('.header-banner') && window.innerWidth > 500) {
				$('header .inner-header').css('top', '0');
			}
		}
	}

	$(window).on('scroll', throttle(headerScroll, 500));
});
