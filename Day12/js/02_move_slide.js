
// 문서 준비 이벤트
$(function() {

    // 이미지 슬라이드
    let list = $('.slide-list')    // <ul> : 이미지 슬라이드 박스
    let item = $('.slide-item')    // <li> 태그 여러개를 노드 리스트로 가져옴

    // 현재 슬라이드 위치/인덱스
    let currentNo = 1
    let currentIndex = 0
    let currentPosition = 0

    // <li> 태그들의 가로/세로/개수
    let slideHeight = item.height()
    let slideWidth = item.width()
    let slideCount = item.length        //  슬라이드 개수

    // <ul> 이미지 슬라이드 박스
    let totalSlideWidth = slideWidth * slideCount
    // 슬라이드 박스 가로 크기 지정
    // 슬라이드 크기 : 각 슬라이드 가로 크기 X 슬라이드 개수
    list.css( { width : totalSlideWidth + 50 })

    // 이전 이미지 세팅
    // 5 / 2 = 2.5   ,  parseInt(2.5) -(정수만)->  2
    // 슬라이드를 절반으로 나누어서 앞으로 가져올 슬라이드 개수
    let initNum = parseInt(slideCount / 2)

    for (let i = 0; i < initNum; i++) {
        // A.prependTo(B)   : A 를 부모요소(B)의 가장 첫 번째 자식요소로 추가한다.
        $('.slide-item:last-child').prependTo(list)
    }

    // 슬라이드 위치 조정
    list.css( { left: currentPosition -= (slideWidth*initNum) })


    // 페이지 네비게이션
    for (let i = 0; i < slideCount; i++) {
        let dot = "<a href='#' class='dot'></a>"
        $('.dots-box').append(dot)
    }
    // 첫 번째 점을 active
    $('.dot:first-child').addClass('active')


    // 이전 버튼(←) 클릭 이벤트
    $('.prev').on('click', () => {

        // 맨 오른쪽 슬라이드를 맨 왼쪽 끝으로 옮긴다
        currentPosition -= slideWidth
        list.css( { left : currentPosition} )
        $('.slide-item:last-child').prependTo(list)

        // 슬라이드 전체가 오른쪽으로 이동하는 애니메이션
        currentPosition += slideWidth
        list.stop().animate({ left: currentPosition}, 1000)

        // 슬라이드 위치
        // 맨 처음 슬라이드이면 맨 마지막으로 돌아온다.
        if( currentNo == 1 )
            currentNo = slideCount
        else
            currentNo--
        
        // 페이지 네비게이션 다음으로 이동
        $('.dot').removeClass('active')
        $('.dot:nth-child(' + currentNo + ')').addClass('active')
        
    })
    
    
    // 다음 버튼(→) 클릭 이벤트
    $('.next').on('click', () => {

        // 맨 왼쪽 슬라이드를 맨 오른쪽 끝으로 옮긴다
        currentPosition += slideWidth
        list.css( { left : currentPosition} )
        $('.slide-item:first-child').appendTo(list)

        // 슬라이드 전체가 왼쪽으로 이동하는 애니메이션
        currentPosition -= slideWidth
        list.stop().animate({ left: currentPosition}, 1000)

        // 슬라이드 위치
        // 맨 마지막 슬라이드에서 맨 처음으로 돌아온다.
        if( currentNo == slideCount )
            currentNo = 1
        else
            currentNo++
        
        // 페이지 네비게이션 다음으로 이동
        $('.dot').removeClass('active')
        $('.dot:nth-child(' + currentNo + ')').addClass('active')
        

    })
    

    // 페이지 네비게이션 클릭 이벤트
    $('.dot').on('click', function() {

        // 네비게이션 인덱스
        let index = $(this).index()
        // 현재 위치와 클릭한 위치의 차이
        let gap = index - currentIndex
        // gap 의 절댓값
        let absGap = Math.abs(gap)

        alert(index)

        // 현재 위치보다 작은 위치로 이동
        if( gap < 0 ) {

            currentPosition -= (slideWidth*absGap)
            list.css( { left : currentPosition} )
            $('.slide-item:last-child').prependTo(list)

            currentPosition += (slideWidth*absGap)
            list.stop().animate({ left: currentPosition}, 1000)

        }

        // 현재 위치보다 큰 위치로 이동
        if( gap > 0 ) {

             currentPosition += (slideWidth*absGap)
             list.css( { left : currentPosition} )
             $('.slide-item:last-child').appendTo(list)

             currentPosition -= (slideWidth*absGap)
             list.stop().animate({ left: currentPosition}, 1000)

        }

        currentIndex = index
        currentNo = currentIndex + 1

        


    })










    
   
})

