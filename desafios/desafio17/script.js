function multiplicar(){
 let valor1 = document.getElementById('num')
 let valor2 = document.getElementById('seltab')

 if (valor1.value.length == 0) {
    window.alert('Digite um número.')
 }else{
    let n = Number(valor1.value)  
    let c = 1
    valor2.innerHTML = ''
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `valor2${c}`
        valor2.appendChild(item)
        c++
    }
 }
 
}