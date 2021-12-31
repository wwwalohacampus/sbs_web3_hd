
// 이미지 슬라이드 (slick)
$(function(){
    $('.visual .slide').slick({
        arrows: false,              //화살표 사용안함
        dots: true,                 //닷츠
        autoplay: true,             //자동재생
        fade: true,                 //페이드인 효과 
        autoplaySpeed:5000,         //재생시간 5초
        pauseOnHover:false,         //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false          //포커스시 슬라이드 멈춤 해제
    });
});

// 스크롤 애니메이션 (scrolla)
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    })
})


let scrollTop = 0
// 스크롤 감지
$(window).on('scroll resize', function() {
    scrollTop = $(this).scrollTop()
    if( scrollTop > 200 ) {
        $('header').addClass('on')
    } else {
        $('header').removeClass('on')
    }

})

