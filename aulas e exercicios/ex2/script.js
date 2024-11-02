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
                img.setAttribute('src', 'imagens/menino.jpg')
            }else if (idade>=10 && idade<21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-menino.jpg')
            }else if (idade>=21 && idade<50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade>=0 && idade<10) {
                //criança
                img.setAttribute('src', 'imagens/menina.jpg')
            }else if (idade>=10 && idade<21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-menina.jpg')
            }else if (idade>=21 && idade<50) {
                // Adulta
                img.setAttribute('src', 'imagens/mulher-madura.jpg')
            }else{
                //idosa
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}