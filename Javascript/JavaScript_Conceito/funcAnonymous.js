/*Função anônima armazenda dentro da varíavel*/
const soma = function(x, y){
    return x + y;
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);

imprimirResultado(3, 4, soma); /*Função soma passada explícitamente*/

imprimirResultado(3, 4, function(x, y){  /*Passando função anônima diretamente da chamada da outra função */
    return x -y;  
});

/*Passando uma arrow Function como paramêtro*/
imprimirResultado(3, 4, (x, y) => x * y);

/*Função anônima dentro de um objeto*/
const pessoa = {
    nome: 'Maria',
    falar: function() {
        console.log('Boa tarde, seja bem vindo!');
    }
}

pessoa.falar();