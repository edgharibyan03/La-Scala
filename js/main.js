$(document).ready(function() {
    $('.staging-body__img').on('mouseenter', function() {
        $('.staging-body__link').css('display', 'block', 'transition', '.4s');
    })
    $('.staging-body__img').on('mouseleave', function() {
        $('.staging-body__link').css('display', 'none');
    })
})