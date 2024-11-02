function carregar() {
    var msg = window.document.getElementById('msg') // esse recebe a div mensagem
    var img = window.document.getElementById('imagem') // Esse recebe a imagem (tag img) que tem uma foto   
    var data = new Date()
  
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora>=0 && hora < 12) {
             img.src = 'imagens/manhã.jpg'
             document.body.style.background = '#e2cd9f'
        }else if (hora >=12 && hora < 18) {
            img.src = 'imagens/tarde.jpg'
            document.body.style.background = '#b9846f'
        } else{
            img.src = 'imagens/noite.jpg'
            document.body.style.background = '#515154'
        }
    
}
