$(function() {
    $(window).scroll(function() {
        $('.sessao').each(function() {
            var windowOffY = $(window).scrollTop()
            var windowHeight = $(window).height()
            var elOffy = $(this).offset().top

            if (elOffy < (windowOffY + windowHeight) &&
                elOffy + 30 + $(this).height() > windowOffY) {
                $('a').css('border-bottom', '0')
                var target = $(this).attr('target')
                $('.' + target).css('border-bottom', '2px solid white')


                return
            }
        })
    })
})