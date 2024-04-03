/*Operadores destructuring a partir de objeto {}*/
const {nome : n, idade: i} = proprietario /*Elemento extraido pode se tornar uma variavel (nome : n)*/
console.log(n, i);

/*Adicionando valor padrao*/
const {sobrenome, alegre = false} = proprietario;
console.log(sobrenome, alegre);

/*Acesando dados de endereco do objeto proprietario*/
const { endereco: { logradouro, numero, cep } } = proprietario;
console.log(logradouro, numero, cep);

/*Operadores destructuring a partir de array []*/
const [operadorDestruting] = ['Array'];
console.log(operadorDestruting);
/*retira das estrutura e atribui a variaveis em uma chamada apenas*/
const [a1, , a3, , a5, a6= 0] = [20, 49, 6, 9];
console.log(a1, a3, a5, a6);

/*Desestruturacao alinhada*/
const [ , [ , nota]] = [ [ , 8, 8], [7, 8, 9]];
console.log(nota);

/*Operadores destructuring a partir de uma funcao com obj {}*/
function rand({ min = 0, max = 1000}){  /*passa o objeto para funcao, dentro da func retorna os atributos prontos*/
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
console.log(rand({max: 50, min: 40})); /*const obj = {max: 50, min: 40}*/
console.log(rand({min: 100})); /*apenas um valor*/
console.log(rand({})); /*obj vazio*/

/*Operadores destructuring a partir de uma funcao com parametro array []*/
function randTwo([min = 10, max = 100]){
    if(min > max ) [min, max] = [max, min] /*o operador [] inverte o os atributos e cria uma array com esses valores*/
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
console.log(randTwo([10, 20]));
console.log(randTwo([ , 95]));