$(function(){
    $(window).scroll(function(){
        var window_scrooltop = $(this).scrollTop()

        // Pasar por cada elemento com a class .parallax
        $('.parallax').each(function(){
            var obj = $(this)

            // Garante que apenas trabalharemos com elemento que está visível na tela
            if(window_scrooltop >= obj.position().top - obj.height() && window_scrooltop <= obj.position().top + obj.height()) {

                // O atributo data-divisor vai definir a velocidade do efeito
                var divisor = typeof obj.attr('data-divisor') == 'undefined' ? 4 : obj.attr('data-divisor')

                
            }
        })
    })
})