$(document).ready(function () {
  new WOW().init();
  //Header Scroll Change
  $(window).scroll(function () {
    //bg
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
  //gnb
  $(".gnb").mouseover(function () {
    $("header").addClass("active");
    $(".gnb-menu, .header-bg ").show();
  });
  $("header").mouseleave(function () {
    $(".gnb-menu, .header-bg ").hide();
  });
  $(".logo, .contact").mouseover(function () {
    $(".gnb-menu, .header-bg ").hide();
  });
  //mobile-gnb
  $(".mobile-open").click(function () {
    $(this).toggleClass("active");
    $(".mobile-gnb,  .mobile-gnb-wrapper, body").toggleClass("active");
  });
  $(".mobile-gnb-container>ul>li>a").click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");

    $(".mobile-gnb-container>ul>li>a").not(this).next().slideUp();
    $(".mobile-gnb-container>ul>li>a").not(this).removeClass("active");
  });

  //main-bg
  $(".background").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  });
});
