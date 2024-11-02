function somar() {
    let valor1 = window.document.getElementById('inicio')
    let valor2 = window.document.getElementById('final')
    let valor3 = window.document.getElementById('passo')
    let resultado = window.document.getElementById('res')

if (valor1.value.length == 0 || valor2.value.length == 0 || valor3.value.length == 0) // se o numero de elementos digitados for igual a 0
 {
    window.alert('preencha todos os dados')
}else{
    resultado.innerHTML = 'contando: <br>'
    let i = Number(valor1.value)
    let f = Number(valor2.value)
    let p = Number(valor3.value)

if(p <= 0){window.alert('passo inválido, considerando passo 1') 
    p =1}

if (i<f) {
    for ( let c = i; c <= f ; c += p ) {
        res.innerHTML += ` ${c} \u{1F449}`   
    }
    res.innerHTML += ` Fim \u{1f3c1}`
} else{
    for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`  
    }
    res.innerHTML += ` Fim \u{1f3c1}`
}
}    
    
}