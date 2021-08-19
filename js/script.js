jQuery(document).ready(function ($) {

    $('#botão-desligar').on({
        'click': function () {
            $('#mudar-imagem').attr('src', 'img/luz_desligada.png');
        }
    });

    $('#botão-ligar').on({
        'click': function () {
            $('#mudar-imagem').attr('src', 'img/luz_acessa.png');
        }
    });

});