$(function(){
  // nav
  $('.gnb li').mouseenter(function(){
   $(this).find('ul').addClass('active');
   $(this).siblings().find('ul').removeClass('active');
  })
  $('.gnb').mouseleave(function() {
    $(this).find('ul').removeClass('active');
  });

  //header-banner
  $(window).scroll(function(){
    if($(window).scrollTop()>50){
      $('header .banner').addClass('active')
    }else{
      $('header .banner').removeClass('active')
    }
  })

  // lang
  $('.lang>a').click(function(){
    $('.lang ul').toggleClass('active');
  })
  $('.lang ul li').click(function(){
    $('.lang ul').removeClass('active');
  })

  // main-banner
  $('.main-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots:true,
    arrows:false,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          variableWidth: true,
        }
      },    
      {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    ]
  });

  // best-item
  $('.best-items').slick({
    dots: true,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  //youtube
  $('.youtube .social-items').slick({
    centerMode: true,
    // centerPadding: '80px',
    slidesToShow: 6,
    swipeToSlide: true,
    arrows:false,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
    ]
  });
  // instagram
  $('.instagram .social-items').slick({
    centerMode: true,
    // centerPadding: '80px',
    slidesToShow: 5,
    swipeToSlide: true,
    arrows:false,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
    ]
  });
  //family
  $('.family a').click(function(){
    $('.family ul').toggleClass('active');
    $('.family i').toggleClass('active');
  })
  $('.family ul li').click(function(){
    $('.family ul').removeClass('active');
    $('.family i').removeClass('active');
  })
  //brand
  $('.brand a').click(function(){
    $('.brand ul').toggleClass('active');
    $('.brand i').toggleClass('active');
  })
  $('.brand ul li').click(function(){
    $('.brand ul').removeClass('active');
    $('.brand i').removeClass('active');
  })
})