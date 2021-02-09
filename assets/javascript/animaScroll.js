$(function() {
    $(window).scroll(function() {
        $('.sessao').each(function() {
            var windowOffY = $(window).scrollTop()
            var windowHeight = $(window).height()
            var elOffy = $(this).offset().top

            if (elOffy < (windowOffY + windowHeight) &&
                elOffy + $(this).height() > windowOffY) {
                $('a').css('border-bottom', '0')
                var target = $(this).attr('target')
                $('.' + target).css('border-bottom', '1px solid white')


                return
            }
        })
    })
})