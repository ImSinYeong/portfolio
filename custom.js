$(function(){
  //nav
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  })
  $('.gnb a').click(function(){
    $('.trigger').removeClass('active');
    $('.gnb').removeClass('active');
  })

  //scroll-top
  $(window).scroll(function(){
    if($(window).scrollTop()>50){
      $('.scroll-top').addClass('active')
    }else{
      $('.scroll-top').removeClass('active')
    }
  })

  //coding-slide
  $('.slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  //illustrator-slide
  $('.illustrator-slide').slick({
    dots: true,
    infinite: true,
    arrows:false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

})
