
$(function() {

    const swiper = new Swiper('.swiper', {

        direction: 'horizontal',        // 슬라이드 방향 : 'vertical', 'horizontal'
        loop: true,                     // 반복여부
        autoplay: {                     // 자동재생
            delay: 1000,                // 슬라이드 당 지연시 (ms)
            pauseOnMouseEnter: true,    // 슬라이드에 마우스 올려두면, 자동재생 멈춤
            disableOnInteraction: true, // 인터랙션(화살표, 드래그,...) 중의 자동재생 비활성화여부
            stopOnLastSlide: false,      // 마지막 슬라이드에서 자동새쟁 멈춤 여부
        },

        slidesPerView: 1,               // 보여지는 슬라이드 개수
        spaceBetween: 0,               // 슬라이드 간 여백 
        
        /* 이펙트 */
        // fade 
        /*
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        */

        // coverflow
        /*
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 30,
          slideShadows: false,
        },
        */

        // cube
        /*
        effect: 'cube',
        cubeEffect: {
          slideShadows: false,
        },
        */

        // flip
        /*
        effect: 'flip',
        flipEffect: {
          slideShadows: false,
        },
        */

        // card
        /*
        effect: 'cards',
        cardsEffect: {
          // ...
        },
        */

        /*
        effect: 'creative',
        creativeEffect: {
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, '100%', -400],
          },
          next: {
            // will set `translateX(100%)` on next slides
            translate: ['100%', 0, 0],
          },
        },
        */

        //  페이지네이션 ( • • • • • )
        pagination: {
          el: '.swiper-pagination',         // 페이지네이션이 적용될 요소 (선택자)
          type: 'bullets',                  // 'bullets'      :  • • •
                                            // 'fraction'     :  (현재번호/전체번호)
                                            // 'progressbar'  :  진행률(게이지)
                                            // 'custom'       
          clickable: true,                  // 페이지네이션 클릭 가능 여부

        },
      
        // 네비게이션 화살표
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // 스크롤바
        scrollbar: {
          el: '.swiper-scrollbar',          // 스크롤바가 적용될 요소
          hide: true,                       // 스크롤바 숨김 (직접 움직일 때는 안 보이고, 그외에는 숨김)
          draggable: true,                  // 스크롤바 드래그 가능 여부
          snapOnRelease: true,              // 스크롤바 놓을 때, 슬라이드를 정위치로 맞춤
        },

      });

})