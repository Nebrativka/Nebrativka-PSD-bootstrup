$(document).ready(function () {
    $('.button[filter="wd"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off').removeClass('focused');
            $(this).attr('val', 'on').addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
        }
    })
});
/* фильтр UI/UX design */
$('.button[filter="ud"]').click(function () {
    if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off').removeClass('focused');
        $(this).attr('val', 'on').addClass('focused');
        $('.filter > div').hide(300);
        $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
    }
})
/* Mokups */
$('.button[filter="moc"]').click(function () {
    if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off').removeClass('focused');
        $(this).attr('val', 'on').addClass('focused');
        $('.filter > div').hide(300);
        $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
    }
})
/* all */
$('.button[filter="all"]').click(function () {
    if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off').removeClass('focused');
        $(this).attr('val', 'on').addClass('focused');
        $('.filter > div').show(300);
        $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
    }
})