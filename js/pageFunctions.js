jQuery(document).ready(function($) {

$.mobile.ajaxEnabled=false;

$('.rounded-block').hover(function() {
  $('.rounded-block').removeClass('active');
  $(this).addClass('active');
});

$('.case-study-content').on("tap", function() {
  $('.case-study-content').removeClass('active');
  $(this).addClass('active');
});

});
