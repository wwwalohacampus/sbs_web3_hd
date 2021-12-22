

$(function() {

    // slick 슬라이드 시작하기!
    $('.slide-container').slick({

        dots: true,
        arrows: true,
        //prevArrow: '<button class="uslide-arrow prev-arrow"></button>',
        //nextArrow: '<button class="slide-arrow next-arrow"></btton>',
        autoplay: true,
        autoplaySpeed: 1000,        // 자동재생 슬라이드 시간
        speed: 500,

        slidesToShow: 3,            // 보여질 슬라이드 개수,
        slidesToScroll: 3,          // 스크롤될 슬라이드 개수

        pauseOnDotsHover: true,     // 페이지 네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,         // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,         // 호버 시, 자동재생 멈춤

        /* 반응형 */
        responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
        }]



    })

})