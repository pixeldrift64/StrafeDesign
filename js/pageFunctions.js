/**
 * pageFunctions.js
 *
 * A few functions to aid with the display of the page on desktop and mobile.
 * decided to use js for these because hover is not supported on mobile devices
 * and for the rounded blocks we want one to be highlighted by default
 *
 */

jQuery(document).ready(function($) {

//Function to apply hover state to rounded blocks
$('.rounded-block').hover(function() {
  $('.rounded-block').removeClass('active');
  $(this).addClass('active');
});

//function to show case study content on mobile using jQuery mobile tap function
$('.case-study-content').on("tap", function() {
  $('.case-study-content').removeClass('active');
  $(this).addClass('active');
});

});
