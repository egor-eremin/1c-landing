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
            email: "Введите корректный email",
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
            dots: true,
            prevArrow: "<button type=\"button\" class=\"slick-prev\"></button>",
            nextArrow: "<button type=\"button\" class=\"slick-next\"></button>",
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
             src: '#callback-form-popup',
           },
           type: 'inline'
       });
    })();
    (function initializationProductSlider() {

        $('#product-slider').slick({
            adaptiveHeight: true,
            fade: true,
            dots: true,
            infinite: true,
            prevArrow: "<button type=\"button\" class=\"slick-prev\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n" +
            "<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 492 492\" style=\"enable-background:new 0 0 492 492;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\">\n" +
            "<g>\n" +
            "\t<g>\n" +
            "\t\t<path d=\"M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z\" fill=\"#b3b3b3\"/>\n" +
            "\t</g>\n" +
            "</g>\n" +
            "</svg>\n</button>",
            nextArrow: "<button type=\"button\" class=\"slick-next\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n" +
            "<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 492.004 492.004\" style=\"enable-background:new 0 0 492.004 492.004;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\">\n" +
            "<g>\n" +
            "\t<g>\n" +
            "\t\t<path d=\"M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z\" fill=\"#b3b3b3\"/>\n" +
            "\t</g>\n" +
            "</g>\n" +
            "</svg>\n</button>"
        });
    })();
    (function show() {
        $('.select-product').magnificPopup({
            items: {
                src: '#product-form-popup',
            },
            type: 'inline',
        });
    })();
    (function changeTitleProductForm() {
        $(document).on('click', '.select-product', function () {
           var thisTitle = $.trim($(this).parents('.product__item').find('.product__title').text());

           $('.product-form .form-title').text(thisTitle);
        });
    })();
    (function validateProductForm() {
        $('#product-form-popup').validate();
    })();
    (function animateImage() {
        $('.section-information').viewportChecker({
            classToAdd:'animated',
        });
        $('.scheme').viewportChecker({
            classToAdd:'animated',
        });
    })();
    (function initMap() {
        var map;

        DG.then(function () {
            map = DG.map('section-10', {
                center: [52.279679, 104.253666],
                zoom: 18,
                scrollWheelZoom: false,
                zoomControl: false
            });
            DG.marker([52.279508, 104.255356]).addTo(map);
        });
    })();
    (function addValidationFooterForm() {
        $('#callback-form-footer').validate();
    })();
    (function addHamburger() {
        $('.main-menu').slicknav();
    })();
    ()();
});