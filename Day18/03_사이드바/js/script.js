

$(function() {
    
    // 오른쪽으로 스와이프
    $(document).bind('swiperight', function() {
        $('.sidebar').addClass('on')
    })
    
    // 왼쪽으로 스와이프
    $(document).bind('swipeleft', function() {
        $('.sidebar').removeClass('on')
    })

})