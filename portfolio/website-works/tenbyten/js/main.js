/*wow */
new WOW().init();
/* nav */
var index;
var child;
$('.header_bottom>ul>li').hover(function () {
    index = $(this).index();
    child = $('.sub_menu').children('div');
    child.eq(index).stop().slideDown().siblings().slideUp();
})



$('.header_bottom').mouseleave(function () {
    child.eq(index).stop().slideUp()
});

$('.sub_menu>div').mouseleave(function () {
    $('.sub_menu>div').stop().slideUp();
});


/*  banner  */
$('.slider').slick({
    autoplay: false,
    fade: true,
    dots: true,
});

/* 시간계산 */
var tid;
var cnt = parseInt(86400);

function counter_init() {
    tid = setInterval("counter_run()", 1000);
}

function counter_run() {
    document.all.counter.innerText = time_format(cnt);
    cnt--;
    if (cnt < 0) {
        clearInterval(tid);
               self.location="logout.php"; 
    }
}

function time_format(s) {
    var nHour = 0;
    var nMin = 0;
    var nSec = 0;
    if (s > 0) {
        nMin = parseInt(s / 60);
        nSec = s % 60;

        if (nMin > 60) {
            nHour = parseInt(nMin / 60);
            nMin = nMin % 60;
        }
        if (nSec < 10) nSec = "0" + nSec;
        if (nMin < 10) nMin = "0" + nMin;

        return ""+nHour+":"+nMin+":"+nSec;
    }
}
counter_init();
/* event1 */
VanillaTilt.init(document.querySelector(".cont2_left"), {
    max: 25,
    speed: 400
});
VanillaTilt.init(document.querySelector(".cont2_middle"), {
    max: 25,
    speed: 400
});
VanillaTilt.init(document.querySelector(".cont2_right"), {
    max: 25,
    speed: 400
});
/*cont9 */
VanillaTilt.init(document.querySelector(".cont8_l"), {
    max: 25,
    speed: 400
});
VanillaTilt.init(document.querySelector(".cont8_m"), {
    max: 25,
    speed: 400
});
VanillaTilt.init(document.querySelector(".cont8_r"), {
    max: 25,
    speed: 400
});

/* event1 */
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

/* cont3 */
$('.cont3_product').slick({
    infinite: true, //양방향 무한 모션
    speed: 300, // 슬라이드 스피드
    dots: true,
    autoplay: false, //( false시 자동플레이 안됨 )
    rows: 2,
    slidesToShow: 4, //한 화면에 보여줄 아이템수
    slidesToScroll: 4, // 한번에 슬라이드 시킬 아이템 개수
});


/* cont5 */
var panoWrap = $('.pano_wrap');
var listWrap = panoWrap.children('.list'); //ul
var item = listWrap.children(); //li
var itemWidth = item.width(); 
var itemLength = item.length; //item의 갯수
var listWidth = itemWidth * itemLength; 
var controls = $('.controls');
var listClone = null;
var move = 0;
var timer;


var init = function () {
    panoWrap.css({
        width: listWidth * 2 + 'px'
    }); //6000
    listWrap.css({
        width:5500+ 'px'
    }); //5500

    //listWrap복사해서 panoWrap 내부끝에 추가첨부
    listWrap.clone().appendTo(panoWrap);
    listClone = panoWrap.children(); //ul두개
    render();
    add();
    event();
}

var render = function () {
    move += 1; //move = move +1;
    listClone.css({
        transform: 'translateX(' + -move + 'px)'
    })
    timer = window.requestAnimationFrame(render)

}


var add = function () {
    //setInterval(function(){실행문},시간)//시간마다 function실행
    setInterval(function () {
        listWrap.clone().appendTo(panoWrap);
        listClone = panoWrap.children(); //ul두개
    }, 10000)
}

var event = function () {
    controls.find('a.play_on').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            clear();
            $(this).removeClass('active')
        } else {
            $(this).addClass('active');
            render();
        }
    });
}

var clear = function () {
    window.cancelAnimationFrame(timer);
}

init();













/* cont6 tab */
var tabMenu = $('.cont6');

tabMenu.find('ul>li>ul').hide();
tabMenu.find('ul>li.active>ul').show();
tabMenu.find('ul>li>p').hover(function (e) {
    e.preventDefault();
    var target = $(this);
    target.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
});

tabMenu.find('.div_ex li').hide();
tabMenu.find('.div_ex ul>li.active').show();
$('.cont6>ul>li').hover(function () {
    var index1 = $(this).index();
    $('.div_ex li').eq(index1).show().siblings().hide();
});

/* cont7 tab */
var tabMenu = $('.cont7_left');

tabMenu.find('ul>li>ul').hide();
tabMenu.find('ul>li.active>ul').show();
tabMenu.find('ul>li>p').hover(function (e) {
    e.preventDefault();
    var target = $(this);
    target.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
});

/* 푸터 */
$('.footer_mo_b i').click(function () {
    $('.mo_sub').slideToggle();
    $('.footer_mo_b').toggleClass('open');

    if ($('.footer_mo_b').hasClass('open')) {
        $('.footer_mo_b').find('i').attr('class', 'fas fa-chevron-up');

    } else {
        $('.footer_mo_b').find('i').attr('class', 'fas fa-chevron-down');
    }

});
/* 768 메뉴*/
$('.mobile_btn ul li i').click(function () {
    $('.mobile_btn ul li ul').slideToggle();
    $('.mobile_btn ul li').toggleClass('open');

    if ($('.mobile_btn ul li').hasClass('open')) {
        $('.mobile_btn ul li').find('i').attr('class', 'fas fa-times');

    } else {
        $('.mobile_btn ul li').find('i').attr('class', 'fas fa-bars');
    }

});



/* 옆 행사 */
$(function () {
    $(window).scroll(function () {
        var nowTop = $(this).scrollTop();
        var lastTop = $('#cont1').offset().top;
        if (lastTop < nowTop) {
            $(".fixed_r").show();
        } else {
            $(".fixed_r").hide();
        }
    })
});

/* 쿠키 */

        var currentCookie = document.cookie;
        var cookieCheck = currentCookie.indexOf('green');
        console.log(currentCookie);
        console.log(cookieCheck);

        if(cookieCheck>-1){
            $('.notice').hide();
        }else{
            $('.notice').show();
        }

        $('.hide').click(function(){
            var date = new Date();
            date.setDate(date.getDate());

            var setCookie="";
            setCookie = "CookieName =  green;";
            setCookie += 'expires = ' + date.toUTCString();

            document.cookie=setCookie;

        });

      $('.close').click(function(){
          $('.notice').hide();
      });