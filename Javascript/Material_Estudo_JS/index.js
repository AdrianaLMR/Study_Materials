//Variaveis 

var text = "ADEI#SWqAS@*"; //String 
var num = 10; //Number 
var dec = 1.40; //Floot 
var simOuNao = true // Boolenao 
const inalteravel = 30; // Constante 
let x = 10; //Let 

//Laços de repetição: Switch, if, if else, for

//Switch- Semáforo
let cor = "verde";
switch (cor) {
    case "verde":
        console.log("Siga");
        break; //
    case "Amarelo":
        console.log("Atenção");
        break;
    case "Vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Nenhuma opção")
}

//For/Operadores
let n = 5;
for (let i = 0; i <= 10; i++){
    // ${i} - valor inicial, X - string letra, ${n} - var n, = -string caracter,  ${i * n} = incremento(Resultado)
    console.log(`${i} X ${n} = ${i * n}`);
}

// If/if else/Operadores
var numberValue= 10;
var numberValueDois = 5;
if(numberValue <= numberValueDois ){
  console.log("N é menor ou igual a M");
}else if(numberValue === numberValueDois){
  console.log("Os valores e o tipo de N e M são iguais.");
}else if(numberValue !== numberValueDois){
  console.log("Os valores e o tipo de N e M são diferentes.");
}

// while
let contador = 0;

while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

// Array, inicia no zero, pode ser de tipos diferentes
let Motocicleta = [3, "Nome", 1.90, true, new Date(), function(){}];
console.log(Motocicleta);
console.log(Motocicleta.length);
console.log(Motocicleta[5]);

// Array-Laço percorre a array
let carros = [3, "Nome", 1.90, true, new Date(), function(){}];
carros.forEach(function(value, index){
  console.log(value, index);
});

// Funções
// Função comum com paramêtros e função nativa(eval)
function calc(x1 , x2, operator){
  return eval(`${x1} ${operator} ${x2}`);
}
let resultado = calc(1, 2, "+");
console.log(resultado);

// Função anoníma
var ValueResultado = (function(x1 , x2, operator){
  return eval(`${x1} ${operator} ${x2}`);
})(1, 2, "+");
console.log(ValueResultado);

// Função Expressão
const minhaFuncao = function(parametro) {
    const resultado = parametro * 2;
    return `O dobro de ${parametro} é ${resultado}.`;
};
const resultadoDaFuncao = minhaFuncao(5);
console.log(resultadoDaFuncao);

// Arrow Funtion
calc = (x1 , x2, operator) => {
  return eval(`${x1} ${operator} ${x2}`);
}
let resultadoCalc = calc(1, 2, "+");
console.log(resultadoCalc);

// Função com construtor
const MinhaFuncao = function(parametro) {
    this.parametro = parametro;
    this.dobrar = function() {
        return this.parametro * 2;
    };
};
const instancia = new MinhaFuncao(5);

// Função Geradora
function* gerador() {
    yield 1;
    yield 2;
    yield 3;
}
const meuGerador = gerador();
console.log(meuGerador.next().value); 
console.log(meuGerador.next().value); 

// Eventos ---> Precisa ser executado pelo navegador para ser visualizado
// window.addEventListener('focus', event => {
//   console.log("focus");
// });
// document.addEventListener('click', event => {
//   console.log("click");
// } );

// Classes /exemplo de calendário(começa em zero!)
let agora = new Date();
console.log(agora);
console.log(agora.getDate());
console.log(agora.getFullYear());
console.log(agora.getMonth());
console.log(agora.toLocaleDateString("pt-Br"));

// POO-Jeito velho de escrever uma classe
// Construtor/Instância/This/Método e atríbuto
let celular= function(){
  this.cor = "Preto";
  this.ligar = function(){
     console.log("Uma ligação");
     return "Ligando";
  }
}
let objeto = new celular();
console.log(objeto.cor)
console.log(objeto.ligar())

// POO-Jeito novo de escrever uma classe
// Construtor/Instância/This/Método e atríbuto
class reuniao{
  constructor(){
    this.cor = "Preto";
  }
  ligar(){
    console.log("Uma ligação");
     return "Ligando";
  }
}
let objecto = new reuniao();
console.log(objecto.cor);
console.log(objecto.ligar());

// Métodos get e set
class CalcController { 
    constructor(){
        this.displayCalc = "0"; //Public 
        this._dataAtual; //Private _Anderline
    }
    get displayCalc(){
        return this._displayCalc 
    }
    set displayCalc(valor){
        this._displayCalcdisplayCalc = valor;
    }
}

// loop, concatenar string, criar funcowes, arrays, recuoerar elemento array



//  explicar isnan
//   A função isNaN() em JavaScript é utilizada para verificar se um valor passado como argumento é ou não um número. Ela retorna um valor booleano, ou seja, true se o valor não for um número (NaN), ou false se for um número válido.
//     Se o argumento não for do tipo Number ou não puder ser convertido para um número, a função retornará true.
//     Antes de realizar a verificação, a função isNaN() tenta converter o argumento em um número. Se a conversão for bem-sucedida, a função retornará false, indicando que o valor é um número válido.
//     Vale ressaltar que a função isNaN() não considera NaN como um número. Portanto, isNaN(NaN) retornará true.
