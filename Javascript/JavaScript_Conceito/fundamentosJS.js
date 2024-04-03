/*Tipos dados*/
var text = 'string';
let number = 10;
const id = "15drs36";
console.log(text, number, id);

const Cliente = function(){}
console.log(' Criando uma instância a partir de uma função definida');
console.log(typeof Cliente);
console.log(typeof new Cliente); /*instânciando a função*/

class Produto {}
console.log(' Criando uma instância a partir de uma classe');
console.log(typeof Produto);
console.log(typeof new Produto()); /*instânciando a classe*/
