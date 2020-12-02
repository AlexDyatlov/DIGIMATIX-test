$(function(){

  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
    $('.package-slider').slick('refresh');
  });

  $('.package-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    prevArrow: '<button class="slider__btn slider__btn-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slider__btn slider__btn-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
  });

  const element = document.getElementById('phone');
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
    placeholderChar: '9'
  };

  const mask = IMask(element, maskOptions);

});