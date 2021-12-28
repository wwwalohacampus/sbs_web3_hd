
$(function() {

    /* 
        스크롤 방향 감지
        - 이전 스크롤 위치
        - 현재 스크롤 위치
        - 이동 크기
        - 최소 지점(left)
        - 최대 지점(left)
    */
    let prev = $(this).scrollTop()
    let move = 80
    let leftMin = -1200
    let leftMax = 1200

    $(window).on('scroll', function() {
        let now = $(this).scrollTop()           // 현재 스크롤 위치
        let titleOffset = $('.scroll-title').offset()

        // console.log('now : ' + now)
        // console.log('top :' + titleOffset.top)
        // console.log('left :' + titleOffset.left)

        // scroll-title 인터렉션
        if( now > prev && titleOffset.left > leftMin && now < 1000) {
            console.log('아래')
            $('.scroll-title').css('left', titleOffset.left-=move)
        }

        else if( now < prev && titleOffset.left < leftMax && now < 1000 ) {
            console.log('위')
            $('.scroll-title').css('left', titleOffset.left+=move)
        }

        // 스크롤 방향에 따른 헤더 슬라이드
        if( now > prev ) {
            // 아래로 스크롤
            $('header').slideUp()
        } else if( now < prev ) {
            // 위로 스크롤
            $('header').slideDown()
        }

        //따라 다니는 플로팅 버튼
        $('.floating').stop().animate({'bottom': -now+15}, 300)

        // 이전 위치 갱신
        prev = now

    })

    // 플로팅 버튼 클릭 이벤트
    $('.floating').on('click', function() {

        // 스크롤 맨 위로 이동
        $('html').animate({'scroll-top': 0}, 1000)
    })


})