$(document).ready(function(){

  $(".hot-news-slider").slick() ;
  $(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4
  }) ;
  //tabs

  $('ul.tabs').on('click', 'li:not(.current)', function() {
    $(this).addClass('current').siblings().removeClass('current')
        .parents('.tab-section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();

  });
  //select
  if($('select').hasClass('selectBlock')){
    $('.selectBlock').sSelect({
      defaultText : 'Пожалуйста, выберите из списка',
      containerClass: 'icon-down-open'
    });
  }
})