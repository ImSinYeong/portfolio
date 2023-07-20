$(document).ready(function () {
  //wow
  new WOW().init();

  //nav
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb, body").toggleClass("active");
  });
  $(".gnb a").click(function () {
    $(".trigger,.gnb, body").removeClass("active");
  });

  //scroll-top
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
  });

  //coding-slide
  $(".slide").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //design-slide
  $(".design-sns .design-slide").slick({
     dots: false,
     infinite: true,
     speed: 300,
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: true,
     responsive: [
      {
         breakpoint: 1000,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
         },
       },
      {
         breakpoint: 700,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         },
       },
       {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
     ],
  });

  //design-detail
  $(".design-detailpage .design-slide").slick({
     dots: false,
     infinite: true,
     speed: 300,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows: true,
     responsive: [
       {
        breakpoint: 1299,
         settings: {
          slidesToShow: 3,
          slidesToScroll: 1,          
        },
      },
      {
        breakpoint: 850,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         },
      },
       {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
           slidesToScroll: 1,
        },
       },
     ],
  });

  //sns-modal
  $('.image-content .sns').click(function(){
    var src = jQuery(this).attr("src");
    jQuery('.modal_content').attr("src",src);
    $('.modal, body').addClass('active');
  })
  $('.modal').click(function(){
    $('.modal, body').removeClass('active');
  })

  //detail-modal
   $('.image-content .detail').click(function(){
     var src = jQuery(this).attr("src");
     jQuery('.modal_content').attr("src",src);
     $('.modal_content').addClass('detail');
     $('.modal, body').addClass('active');
   })
   $('.modal').click(function(){
    $('.modal_content').removeClass('detail');
     $('.modal, body').removeClass('active');
   })

  //illustrator-slide
  $(".illustrator-slide").slick({
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

