// IMC peso/(altura x altura

let thomas = {
     peso: 76.00,
    altura: 1.79
}

function calcularImc(pessoa){
    const imc = pessoa.peso / (pessoa.altura * pessoa.altura)
    return imc
}

const imcThomas = calcularImc(thomas)
console.log(imcThomas)

 if (imcThomas >= 30){
        console.log('Obesidade');
 } else if(imcThomas >= 25 && imcThomas <= 29.99 ){
    console.log('Sobrepeso');
}else if(imcThomas >= 18.05 && imcThomas <= 24.99 ){
    console.log('Normal');
}else if(imcThomas <= 18.05 ){
    console.log('Baixo peso');
}else {
    console.log(null);
}