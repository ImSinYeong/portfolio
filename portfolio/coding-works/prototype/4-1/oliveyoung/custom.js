
$(document).ready(function(){
  //store-news
  $(".header-menu .menu a:nth-child(2)").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass('active');
  });
  $(".header-menu").mouseleave(function () {
    $(".header-menu .menu a:nth-child(2)").removeClass("active");
  });
  //.recent-product
  $(".header-menu .menu a:nth-child(3)").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass('active');
  });
  $(".header-menu").mouseleave(function () {
    $(".header-menu .menu a:nth-child(3)").removeClass("active");
  });
  // btn-category
  $(".btn-category-open").click(function () {
    $(".site-map, .btn-category-open").addClass("active");
  });
  $(".btn-category-close").click(function () {
    $(".site-map, .btn-category-open").removeClass("active");
  });
  
  $('.slide-wrapper').slick({
    dots: false,
    speed:300,
    fade: true,
    cssEase: 'linear'
  });
})