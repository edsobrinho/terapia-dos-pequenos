
$("#home").css({ 'height': ($(window).height() ) + 'px' });//Fix fullscreen slider height
$("#home-half").css({ 'height': ($(window).height()/2) + 'px' });//Fix fullscreen slider height
$(".full-screen-img").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen image height
$(".full-screen-video").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen video height
$(".pattern-overlay").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen pattern overlay height

$(document).ready(function () {
/*-----------------------------------------------------------------------------------*/
/*	Sliders
/*-----------------------------------------------------------------------------------*/
    /* Home Fullscreen Slider */
    $(".fullscreen-slider").backstretch([
        "assets/img/bg/bg1.jpg",
        "assets/img/bg/bg2.jpg",
        "assets/img/bg/bg3.jpg",
        "assets/img/bg/bg4.jpg"
    ], { duration: 4500, fade: 650 });

    /* Home Title Slider */
    $('.title-slider').bxSlider({
        mode: 'fade',
        pager: false,
        auto: true,
        controls: false
    });
    /* Ipad Air Slider*/
    $('#air-slider').bxSlider({
        mode: 'fade',
        pager: true,
        auto: true,
        controls: false
    });
    /* Blog Title Slider */
    $('.blog-title-slider').bxSlider({
        mode: 'fade',
        pager: true,
        auto: true,
        controls: false
    });

    /* Portfolio Slider*/
    $('#portfolio-slider').bxSlider({
        mode: 'fade',
        pager: true,
        auto: true,
        controls: false
    });
    /* Portfolio Featured Projects Slider*/
    $('.portfolio-featured-projects-slider').bxSlider({
        mode: 'fade',
        pager: true,
        auto: true,
        controls: false
    });
    /*-----------------------------------------------------------------------------------*/
    /*	Full Screen Video 
    /*-----------------------------------------------------------------------------------*/
   
        $(".player").mb_YTPlayer();
   

    /*-----------------------------------------------------------------------------------*/
    /*	Go Back  Top Button
    /*-----------------------------------------------------------------------------------*/

    
        $("#go-back-top").hide();
       
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#go-back-top').fadeIn();
                } else {
                    $('#go-back-top').fadeOut();
                }
            });
      

    

    /*-----------------------------------------------------------------------------------*/
    /*	Date Picker
    /*-----------------------------------------------------------------------------------*/
    
        $("#datepicker").datepicker();

    /*-----------------------------------------------------------------------------------*/
    /*	Pricing Table
    /*-----------------------------------------------------------------------------------*/
    $('body').on('mouseenter', '#pricing-table-3-columns .plan', function () {
        $('.plan').removeClass('plan-active');
        $(this).addClass('plan-active');
    });
    $('body').on('mouseleave', '#pricing-table-3-columns .plan', function () {
        $('.plan').removeClass('plan-active');
        $('#most-popular').addClass('plan-active');
    })
    $('body').on('mouseenter', '#pricing-table-4-columns .plan', function () {
        $('.plan').removeClass('plan-active');
        $(this).addClass('plan-active');
    });
    $('body').on('mouseleave', '#pricing-table-4-columns .plan', function () {
        $('.plan').removeClass('plan-active');
        $('#most-popular').addClass('plan-active');
    })
    /*-----------------------------------------------------------------------------------*/
    /*	Progress Bars
    /*-----------------------------------------------------------------------------------*/

   
        $('.progress .progress-bar').progressbar({ display_text: 'fill' });
 
    /*-----------------------------------------------------------------------------------*/
    /*	Our Numbers
    /*-----------------------------------------------------------------------------------*/

    
        var shownx = false;

        $('#our-numbers').waypoint(function () {

            if (!shownx) {

                function count(options) {
                    var $this = $(this);
                    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                    $this.countTo(options);
                    shownx = true;
                }
                $('.timer').each(count);
            }

        }, { offset: '80%' });
   


});


window.onload = function () {
/*-----------------------------------------------------------------------------------*/
/*	PreLoader
/*-----------------------------------------------------------------------------------*/
    
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
 /*End PreLoader*/
/*-----------------------------------------------------------------------------------*/
/* Google Map Styles
/*-----------------------------------------------------------------------------------*/
    'use strict';

    var latlng = new google.maps.LatLng(-23.5732270, -46.6395085);

    var styles = [

                 {
                     "featureType": "road",
                     "stylers": [
                       { "color": "#111111" }
                     ]
                 }, {
                     "featureType": "landscape",
                     "stylers": [
                       { "color": "#333333" }
                     ]
                 }, {
                     "elementType": "labels.text.fill",
                     "stylers": [
                       { "color": "#fefefe" }
                     ]
                 }, {
                     "featureType": "poi",
                     "stylers": [
                       { "color": "#333333" }
                     ]
                 }, {
                     "elementType": "labels.text",
                     "stylers": [

                       { "weight": 0.1 },
                       { "color": "#e5e5e5" }
                     ]
                 }, {
                 }

    ];


    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        styles: styles
    };

    var markerNotice = '<div id="marker-content">' +
     '<div id="marker-notice">' +
     '</div>' +
     '<h4>Locate Us Here</h4>' +
     '<p>PsychologistPro' +
     '</p>' +
     '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: markerNotice
    });

    var map = new google.maps.Map(document.getElementById('map'), myOptions);

    var markerPosition = new google.maps.LatLng(-23.5732270, -46.6395085);

    var markerImage = 'assets/img/other/marker.png';
    var marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        title: 'Inc.!',
        icon: markerImage
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

}
