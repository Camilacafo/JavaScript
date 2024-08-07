var idade = 67
if (idade < 16) {
    console.log(`Não vota`)
} else {
    if (idade >= 16 && idade <= 17) {
        console.log(`Opcional`)
    } else {
        console.log(`Voto obrigatório`)
    }
}