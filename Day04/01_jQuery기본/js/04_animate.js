
// 문서가 준비되었을 때, 실행되는 함수
$(function() {

    /* item1 */
    $('#item1 .hide').on('click', function() {
        $('#item1 .target-box').hide()
    })

    $('#item1 .show').on('click', function() {
        $('#item1 .target-box').show()
    })

    $('#item1 .hide1000').on('click', function() {
        $('#item1 .target-box').hide(1000)
    })

    $('#item1 .show1000').on('click', function() {
        $('#item1 .target-box').show(1000)
    })


    /* item2 */
    $('#item2 .fadeIn').on('click', function() {
        // $('#item2 .target-box').fadeIn(3000)
        // $('#item2 .target-box').fadeIn('slow')
        $('#item2 .target-box').fadeIn()
    })

    $('#item2 .fadeOut').on('click', function() {
        // $('#item2 .target-box').fadeOut(3000)
        // $('#item2 .target-box').fadeOut('slow')
        $('#item2 .target-box').fadeOut()
    })

    $('#item2 .fadeToggle').on('click', function() {
        // $('#item2 .target-box').fadeToggle(3000)
        // $('#item2 .target-box').fadeToggle('slow')
        $('#item2 .target-box').fadeToggle()
    })

    $('#item2 .fadeTo').on('click', function() {
        $('#item2 .target-box').fadeTo('slow', 0.2)
    })


    /* item3 */
    $('#item3 .slideDown').on('click', function() {
        $('#item3 .target-box').slideDown()
    })

    $('#item3 .slideUp').on('click', function() {
        $('#item3 .target-box').slideUp()
    })

    $('#item3 .slideToggle').on('click', function() {
        $('#item3 .target-box').slideToggle()
    })

    /* item4 */
    let animated = 'off'
    $('#item4 .animate').on('click', function() {

        if( animated == 'off' ) {
            // .animatge( CSS속성, 지속시간 )
            $('#item4 .target-box').animate({
                'opacity' : '0.3',
                'width' : '400px'
            }, 2000)
            // 2초간 투명도 0.3, 가로 400px 로 애니메이션 적용
            animated = 'on'
        } else {
            $('#item4 .target-box').animate({
                'opacity' : '1',
                'width' : '150px'
            }, 2000)
            animated = 'off'
        }
    })

})