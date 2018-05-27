$(document).ready(function() {
    (function validateCallbackForm() {
        $('#callback-form-slider').validate({
            required: true,
        });
        $('#callback-form-popup').validate({
            required: true,
        });
        jQuery.extend(jQuery.validator.messages, {
            required: "Это поле обязательно для заполнения",
            minlength: "Введите корректный телефон",
        });
    })();
    (function addPhoneMask() {
        $('.input-phone').mask('+7 (000)-000-00-00');
    })();
    (function initializationMainSlider() {
        $('#initialization-slider').on('init', function(e, slick) {
            var $firstAnimatingElements = $('#initialization-slider .slider__item:first-child').find('[data-animation]');
            doAnimationsInit($firstAnimatingElements);
            $('#initialization-slider .slick-arrow').wrapAll('<div class="template-wrapper wrapper-slick-arrow"></div>');
        });
        $('#initialization-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.slider__item[data-slick-index="' + currentSlide + '"]').find('[data-after-animation]');
            doAnimationsAfter($animatingElements);
        });

        $('#initialization-slider').on('afterChange', function (e, slick, currentSlide) {
            var $animatingElements = $('.slider__item[data-slick-index="' + currentSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        $('#initialization-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            adaptiveHeight: true,
            fade: true,
            infinite: true,
            prevArrow: "<button type=\"button\" class=\"slick-prev\"></button>",
            nextArrow: "<button type=\"button\" class=\"slick-next\"></button>"
        });
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
        function doAnimationsAfter(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('after-animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        function doAnimationsInit(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': '1s',
                    '-webkit-animation-delay': '1s'
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    })();
    (function showNavMenu() {
        $('.main-nav').onePageNav();
    })();
    (function fixedMenu() {
        $(window).scroll(function() {
            if($(this).scrollTop() >= 190) {
                $('.nav').addClass('nav_fixed');
            }
        else{
                $('.nav').removeClass('nav_fixed');
            }
        });
    })();
    (function showCallbackForm() {
       $('.callback').magnificPopup({
           items: {
             src: '.callback-form_popup',
           },
           type: 'inline'
       });
    })();
    (function initializationProductSlider() {
        $('#product-slider').on('init', function(e, slick) {
            var $firstAnimatingElements = $('#product-slider .product__slider-item:first-child').find('[data-animation]');
            doAnimationsInit($firstAnimatingElements);
            $('#product-slider .slick-arrow').wrapAll('<div class="template-wrapper wrapper-slick-arrow"></div>');
        });
        $('#product-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.product__slider-item[data-slick-index="' + currentSlide + '"]').find('[data-after-animation]');
            doAnimationsAfter($animatingElements);
        });

        $('#product-slider').on('afterChange', function (e, slick, currentSlide) {
            var $animatingElements = $('.product__slider-item[data-slick-index="' + currentSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        $('#product-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            adaptiveHeight: true,
            // fade: true,
            dots: true,
            infinite: true,
            prevArrow: "<button type=\"button\" class=\"slick-prev\"></button>",
            nextArrow: "<button type=\"button\" class=\"slick-next\"></button>"
        });
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
        function doAnimationsAfter(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('after-animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        function doAnimationsInit(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': '1s',
                    '-webkit-animation-delay': '1s'
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    })();
});