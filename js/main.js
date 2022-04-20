$('.menuOpener').click(function(){
    $('.navMenu.p-2').addClass('active')
    $('body, html').css('overflow-y','hidden')
})
$('.menuCloser').click(function(){
    $('.navMenu.p-2').removeClass('active')
    $('body, html').css('overflow-y','scroll')
})


$('.slider').click(function(){
    $(this).toggleClass('active')
})

$('.tabBtn').click(function(){
    $('.tabBtn').removeClass('active')
    $(this).addClass('active')
    $('.AllTab').hide()
})

$('.coinBtn').click(function(){
    $('.coinTab').show()
})
$('.nftBtn').click(function(){
    $('.nftTab').show()
})


$('.linkedTable tr').click(function() {
    window.location.href = 'sendForm.html';
    return false;
});