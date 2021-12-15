
$(function() {

    // 메인 메뉴 - 마우스 올렸을 때 이벤트
    // $('nav > ul > li').on('mouseover', function() {
    //     $(this).children('.submenu').stop().slideDown(1000)
    // })

    // // 메인 메뉴 - 마우스가 벗어날 때 이벤트
    // $('nav > ul > li').on('mouseout', function() {
    //     $(this).children('.submenu').stop().slideUp(1000)
    // })

    $('nav > ul > li').on('click', function() {
        // 현재 선택한 메인 메뉴 아래 서브 메뉴만 슬라이드
        // $(this).children('.submenu').stop().slideToggle(1000)

        // 모든 서브 메뉴 슬라이드
        $('.submenu').stop().slideToggle(1000)
    })

    // 슬라이드 메뉴
    let slideOn = 'off'
    $('.slide-open').on('click', function() {

        if( slideOn == 'off') {
            $('.slide').stop().animate({
                right : 0
            }, 1000)
            slideOn = 'on'
        } else {
            $('.slide').stop().animate({
                right : '-100%'
            }, 1000)
            slideOn = 'off'
        }
    })

    // 1. 슬라이드 바 바깥 클릭 시, 슬라이드 닫힘
    // 2. 햄버거 메뉴 애니메이션
    // 3. 슬라이드 바에 X 버튼 추가

})