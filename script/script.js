function yazdir() {
    window.print();
}
$(document).ready(function() {
  $('#incfont').click(function() {
    curSize = parseInt($('#content').css('font-size')) + 1;
    if (curSize <= 20)
      $('#content').css('font-size', curSize);
  });
  $('#decfont').click(function() {
    curSize = parseInt($('#content').css('font-size')) - 1;
    if (curSize >= 12)
      $('#content').css('font-size', curSize);
  });
});
/* slider*/
$(document).ready(function(){
  
  $(".Modern-Slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:900,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
    fade:true, // Disable This And Watch
    draggable:false,
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
  
})

/* filter */
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});



// Scroll to the desired section on click
function scrollToSection(event) {
  event.preventDefault();
  
  var $section = $($(this).attr('href'));
  
  $('html, body').animate({
    scrollTop: $section.offset().top
  }, 500);
}

$('.scroll-to-section').on('click', scrollToSection);


/* scroll animation */

jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.size() == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});
/* owl slider */
$(document).ready(function () {
  $("a[rel^='prettyPhoto']").prettyPhoto();
     $(".owl-slider").owlCarousel({
         autoPlay: 2200, 
         items: 5,
         itemsDesktop: [1199, 3],
         itemsDesktopSmall: [979, 3],
         pagination: false
     });
	 $(".owl-slider2").owlCarousel({
         autoPlay: 2300, 
         items: 4,
         itemsDesktop: [1199, 3],
         itemsDesktopSmall: [979, 3],
         pagination: false
     });
	 
 });

/* map */
var customMap = (function(){

    // Set selectors
    var mapContainer = 'map-container',
        mapEl = 'location',
        zoomControls = 'map__zoom',
        zoomIn = 'map__zoom__in',
        zoomOut = 'map__zoom__out',
        mapColor = '#00BFFF';

    locations = [
        {
            name: 'First Stone Worktops',
            address: '123 Road Name, Town, County AB12 C34',
            description: 'Test',
            coords: {
                lat: 39.933310,
                lng: 32.858888,
            },
            icon: 'http://www.tannwestlake.com/wp-content/themes/tw/public/img/icon-map.png'
        },{
            name: 'Tann Westlake',
            address: '22 Churchill Parade',
            description: 'Test',
            coords: {
                lat: 39.933310,
                lng: 32.858888,
            },
            icon: 'http://www.tannwestlake.com/wp-content/themes/tw/public/img/icon-map.png'
        }
    ];

    var init = function(){
        initMap();
        mapMarkers();
        mapListener();
        mapZoom();
    }

    var initMap = function(){

        var location = new google.maps.LatLng(39.933310, 32.858888);
        var mapOptions = {
            center: location,
            zoom: 12,
            // Controls
            mapTypeControl: false,
            panControl: false,
            scrollwheel: false,
            streetViewControl: false,
            zoomControl: true,
            // Styles
            styles: [{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color": mapColor}]},{"featureType":"water","elementType":"geometry","stylers":[{"color": mapColor},{"lightness":-21}]},{"featureType":"road","elementType":"geometry","stylers":[{"color": mapColor},{"lightness":-21}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color": mapColor},{"weight":0.1},{"lightness":-5}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color": mapColor},{"lightness":-21}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color": mapColor},{"lightness":29}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color": mapColor},{"lightness":-19}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color": mapColor},{"lightness":20}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color": mapColor},{"lightness":-21}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color": mapColor},{"lightness":-19}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color": mapColor},{"lightness":50}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"color": mapColor},{"lightness":80}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"color": mapColor},{"weight":5.21},{"lightness":-27}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color": mapColor},{"lightness":21}]}]
        }

        if($('#' + mapEl).length = 1){
            map = new google.maps.Map(document.getElementById(mapEl), mapOptions);
        }
    };

    var mapMarkers = function(){

        var markers = locations.length;

        // Loop through locations and add marker for each
        for(i = 0; i < markers; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i].coords.lat, locations[i].coords.lng),
                map: map,
                icon: locations[i].icon
            });

            mapListener(i);
        }

    };

    var mapListener = function(i) {

        google.maps.event.addListener(marker, 'click', (function() {

            map.panTo(this.getPosition());
            mapInfoInit(i);

        }));

    };

    var mapInfoInit = function(i){
        var infoContentCnt = 'map__info';
        var infoContent = '<h5>' + locations[i].name + '</h5><span class="map__info__close">Close</span>';

        if($(_q(infoContentCnt)).hasClass('open')) {
            null;
        } else {
            $(_q(infoContentCnt)).addClass('open');
        }
        
        $(_q(infoContentCnt)).html(infoContent);

        $('.map__info__close').on('click', function(){
            $(_q(infoContentCnt)).removeClass('open');
        });

        console.log(i);

    };

    /**
     * Create custom  zoom elements and
     * bind zoom controls on click
     */
    var mapZoom = function(){

        $(_q(mapContainer)).append('<div class="' + zoomControls + '"><span class="' + zoomIn + '"></span><span class="' + zoomOut + '"></span></div>');

        // Zoom In
        $(_q(zoomIn)).click(function(e){
            e.preventDefault();

            var currentZoom = map.getZoom();
            map.setZoom(currentZoom + 1);
        });

        // Zoom Out
        $(_q(zoomOut)).click(function(e){
            e.preventDefault();

            var currentZoom = map.getZoom();
            map.setZoom(currentZoom - 1);
        });

    };

    /**
     * Preprend string variable with '.'
     * to make it queryable by jQuery
     *
     * @param  {string} string The string you want to query
     * @return {string}        The string with '.' prepended
     */
    var _q = function(el){
        return '.' + el;
    };

    return {
        init: init
    };

})();

$(document).ready(function(){
    customMap.init();
});





/*side nav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}