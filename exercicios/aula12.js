var idade = 65
console.log(`Sua idade é ${idade}`)
if(idade < 16){
    console.log('Você não vota!')
} else if(idade >= 16 && idade < 18 || idade > 65 ){
    console.log('O seu voto é opcional!')    
} else{
    console.log(`O seu Voto é Obrigatório!`)
}
    