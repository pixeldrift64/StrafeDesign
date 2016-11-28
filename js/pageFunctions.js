jQuery(document).ready(function($) {

$('.rounded-block').hover(function() {
  $('.rounded-block').removeClass('active');
  $(this).addClass('active');
});

});
