﻿
// $("#home").css({ 'height': ($(window).height() ) + 'px' });//Fix fullscreen slider height
// $("#home-half").css({ 'height': ($(window).height()/2) + 'px' });//Fix fullscreen slider height
// $(".full-screen-img").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen image height
// $(".full-screen-video").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen video height
// $(".pattern-overlay").css({ 'height': ($(window).height()) + 'px' });//Fix fullscreen pattern overlay height
$(document).ready(function () {
/*-----------------------------------------------------------------------------------*/
/*	Sliders
/*-----------------------------------------------------------------------------------*/
    /* Home Fullscreen Slider */
    $(".fullscreen-slider").backstretch([
        "assets/img/bg/terapia-infantil.jpg",
        "assets/img/bg/terapeuta-infantil.jpg",
        "assets/img/bg/consultorio-psicologa-sao-paulo.jpg",
        "assets/img/bg/consultorio-psicologa-infantil-em-sao-paulo.jpg"
    ], { duration: 4500, fade: 650 });
 
    /*-----------------------------------------------------------------------------------*/
    /*	Go Back  Top Button
    /*-----------------------------------------------------------------------------------*/
    $("#go-back-top").hide();
    $("#contato-left").show();
   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#go-back-top').fadeIn();
        } else {
            $('#go-back-top').fadeOut();
        }
    });
    
    
});

function telef(){
    document.getElementById("telefone").style.display = "block";
}

window.onload = function () {
/*-----------------------------------------------------------------------------------*/
/*	PreLoader
/*-----------------------------------------------------------------------------------*/
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
    $('#contato-left').fadeIn();
/*End PreLoader*/
}

/*-----------------------------------------------------------------------------------*/
/* Google Map Styles
/*-----------------------------------------------------------------------------------*/
function initMap(){
    'use strict';

    var latlng = new google.maps.LatLng(-23.5732270, -46.639267);

    var styles = [

                 {
                     "featureType": "road",
                     "stylers": [
                       { "color": "#B382BA" }
                     ]
                 }, {
                     "featureType": "landscape",
                     "stylers": [
                       { "color": "efefef" }
                     ]
                 }, {
                     "elementType": "labels.text.fill",
                     "stylers": [
                       { "color": "#444751" }
                     ]
                 }, {
                     "featureType": "poi",
                     "stylers": [
                       { "color": "efefef" }
                     ]
                 }, {
                     "elementType": "labels.text",
                     "stylers": [

                       { "weight": 0.1 },
                       { "color": "#444751" }
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
     '<h4>Terapia dos Pequenos</h4>' +
     '<p>Psicologia Infantil' +
     '</p>' +
     '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: markerNotice
    });

    var map = new google.maps.Map(document.getElementById('map'), myOptions);

    var markerPosition = new google.maps.LatLng(-23.574107, -46.639267);

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