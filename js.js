$(document).ready(function() {

    $('.btn').click(function(e) {
        e.preventDefault()

        let dados = $('#UF').val()

        let url = `https://servicodados.ibge.gov.br/api/v1/localidades/distritos`

        console.log(url)

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            assync: true,
            url: url,
            success: function(dados) {
                $('#Cidade').val(dados.logradouro)
            }
        })

    })
})