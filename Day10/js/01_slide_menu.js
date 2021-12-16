
let slideOn = 'off'

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
    $('.slide-open').on('click', function() {
        // 햄버거 메뉴 클릭 on
        if( slideOn == 'off') {
            slideBarOpen()
        } 
        // 햄버거 메뉴 클릭 off
        else {
            slideBarClose()
        }
    })
    
    // 슬라이드 바 바깥+ X버튼 클릭 시, 슬라이드 닫힘
    $('.bg, .cancel').on('click', function() {
        slideBarClose()
    })

})


// 슬라이드 바 열림
function slideBarOpen() {
    // 애니메이션으로 적용
    // $('.slide').stop().animate({
    //     left : 0
    // }, 1000)

    // class on 적용
    $('.slide').addClass('on')
    slideOn = 'on'

    $('.bg').fadeIn(1200)
    // $('.bg').css({'display' : 'block'})

    $('.slide-open span').addClass('on')
}

// 슬라이드 바 닫힘
function slideBarClose() {
    // 애니메이션으로 적용
    // $('.slide').stop().animate({
    //     left : '-400px'
    // }, 1000)

    // class on 적용
    $('.slide').removeClass('on')
        slideOn = 'off'

    $('.bg').fadeOut(1200)
    // $('.bg').css({'display' : 'none'})

    $('.slide-open span').removeClass('on')

}