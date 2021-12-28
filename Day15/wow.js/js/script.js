
$(function() {
    // wow.js 스크롤 애니메이션 옵셕 적용하기
    wow = new WOW(
        {
        boxClass:     'wow',      // 애니메이션 적용할 class 이름
        animateClass: 'animated', // 애니메이션 적용되었을 때 추가할 class 이름
        offset:       0,          // 요소와 상단 사이의 거리
        mobile:       true,       // 모바일 적용 여부
        live:         true        // 요소를 실시간 확인 여부
      }
    )

    // wow.js 스크롤 애니메이션 시작하기!
    wow.init();

})