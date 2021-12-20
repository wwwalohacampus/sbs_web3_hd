
// 슬라이드 순서 번호 
let slideIndex = 1;

$(function() {

    // 슬라이드 쇼 실행
    showSlides( slideIndex )

    
})

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 슬라이드 함수(n)
// : n 번째 이미지를 보여준다.
function showSlides(n) {
    let slides = $('.mySlides')         // 각각의 슬라이드들
    let dots = $('.demo')               // 슬라이등 아래 작은 썸네일 이미지들
    let captionText = $('#caption')     // 이미지 제목

    // slides.length : 슬라이드 개수
    if( n > slides.length ) { 
        slideIndex = 1 
    }
    if( n < 1 ) { 
        slideIndex = slides.length 
    }

    // 모든 이미지를 숨김
    for( let i = 0 ; i < slides.length ; i++ ) {
        $(slides[i]).css({ display: 'none'} )
    }

    // 활성화된 썸네일을 비활성화
    for( let i = 0 ; i < dots.length ; i++ ) {
        $(dots[i]).removeClass('active')
    }

    // 선택한 번호의 썸네일만 보여주기
    $(slides[slideIndex-1]).css( { display : 'block' })
    // 선택한 번호의 썸네일 활성화
    $(dots[slideIndex-1]).addClass('active')
    // 이미지 제목 갱신
    // attr() : 요소의 속성의 값을 가져온다.
    captionText.text( $(dots[slideIndex-1]).attr('alt') )

}