/*Criando uma função*/
function nameFuncao() {
    console.log('Função');
}

/*Chamando a função*/
nameFuncao();

/*Atrinuindo paramêtro a função*/
function recebendoParametro(text){
    console.log(text);
}

recebendoParametro('Parametro da função');

/*Atrinuindo mais de um paramêtro a função*/
function somar(a, b) {
    return a + b;
}

console.log(somar(3, 5));

/*Função que verifica se um número está dentro de um intervalo*/
function verificarIntervalo(numero, min, max) {
    return numero >= min && numero <= max;
}

console.log(verificarIntervalo(10, 5, 15)); 

/*Atrinuindo paramêtros de tipos diferentes a função*/
function executarDados(name, age) {
    /*Concatenando os parametros com +*/
    console.log('Meu nome é ' + name + ', tenho ' + age + ' anos');
     /*Concatenando os parametros com  template literals*/
    console.log(`Meu nome é ${name} e eu tenho ${age} anos`);

}

executarDados('Adriana', '21');
