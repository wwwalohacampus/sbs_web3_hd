
$(function() {

    $('#item1').on('click', function() {
        $('#item1').css('color', 'hotpink')
    })

    $('#item2').on('click', function() {
        $(this).css('color', 'hotpink')
    })

    $('#item3').on('mouseover', function() {
        $('#item3').css('color', 'hotpink')
        $('#item3').css('background-color', 'royalblue')
    })

    $('#item4')
        .on('mouseout', function() {
            $('#item4').css('color', 'white')
            $('#item4').css('background-color', '#3498db')
        })
        .on('mouseover', function() {
            $('#item4').css('color', 'hotpink')
            $('#item4').css('background-color', 'royalblue')
        })


    $('#item5')
        .on('mouseout', function() {
            $(this).css('color', 'white')
            $(this).css('background-color', '#3498db')
        })
        .on('mouseover', function() {
            $(this).css('color', 'hotpink')
            $(this).css('background-color', 'royalblue')
        })
        .on('click', function() {
            $(this).css('color', 'purple')
            $(this).css('background-color', 'cornflowerblue')
        })
        .on('dblclick', function() {
            $(this).css('color', 'red')
            $(this).css('background-color', 'black')
        })


})