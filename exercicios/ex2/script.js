function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade>=0 && idade<10) {
                //criança
            }else if (idade>=10 && idade<21) {
                //jovem
            }else if (idade>=21 && idade<50) {
                // Adulto
            }else{
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade>=0 && idade<10) {
                //criança
            }else if (idade>=10 && idade<21) {
                //jovem
            }else if (idade>=21 && idade<50) {
                // Adulta
            }else{
                //idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}