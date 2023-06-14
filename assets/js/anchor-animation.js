/*
Animación para enlaces que suaviza el scrolling al dar click en un enlace anchor
*/

$('.anchor-animation').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));

    if (target.length){
        var scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800)
    }
}) 