$(document).ready(function () {
         menu = $('nav ul');
 
         $('#menuMobile').on('click', function (e) {
             e.preventDefault();
             menu.slideToggle();
         });
 
         $(window).resize(function () {
             var w = $(window).width();
             if (w >480 && menu.is(':hidden')) {
                 menu.removeAttr('style');
             }
         });
     });