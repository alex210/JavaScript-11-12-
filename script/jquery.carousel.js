(function($) {

  $.fn.carousel = function() {

    $('.carousel-wrapper').wrap('<div class="carousel"></div>');
    $('.carousel-wrapper').before('<img class="back" src="img/back.svg">');
    $('.carousel-wrapper').after('<img class="next" src="img/next.svg">');

    var $back = $('.back');
    var $next = $('.next');
    var $elementsList = $('.carousel-wrapper ul');
    var $pixelsOffset = 220;
    var $currentLeftValue = 0;
    var $elementsCount = $elementsList.find('li').length;
    var $minimumOffset = -(($elementsCount - 4) * $pixelsOffset);

    $next.click(function() {
      if($currentLeftValue != $minimumOffset) {
        $currentLeftValue -=220;
        $elementsList.animate({left: $currentLeftValue + "px"}, 500);
      }
    });

    $back.click(function() {
      if($currentLeftValue != 0) {
        $currentLeftValue +=220;
        $elementsList.animate({left: $currentLeftValue + "px"}, 500);
      }
    });
    return this;
  }
})(jQuery);
