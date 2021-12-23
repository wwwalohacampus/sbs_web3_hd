$(document).ready(function () {


    let owl = $('.owl-carousel')

    // owl-carousel 시작!
    owl.owlCarousel({
        loop: true,                 // 반복여부
        margin: 5,                  // 슬라이드 간 간격
        nav: true,                  // 네비게이션 여부
        center: true,               // 센터모드
        autoplay: false,            // 자동재생
        autoplayTimeout: 5000,      // 자동재생 시간
        autoplayHoverPause: false,  // 호버 시, 자동재생 멈춤
        // 반응형
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    // 스크롤 활성화
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });





});