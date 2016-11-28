jQuery(document).ready(function($) {

$('.rounded-block').hover(function() {
  $('.rounded-block').removeClass('active');
  $(this).addClass('active');
});

$('.case-study-content').on("tap", function() {
  $('.case-study-content').removeClass('active');
  $(this).addClass('active');
});

});
