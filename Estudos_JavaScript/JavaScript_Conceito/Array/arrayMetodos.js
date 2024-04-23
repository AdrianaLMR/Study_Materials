console.log(typeof Array, typeof new Array, typeof []); // function, object, object

//array
let reprovados = new Array('Zoro', 'Luffy', 'Namy');
console.log(reprovados);

//Forma literal mais recomendada
aprovados = ['Chopper', 'Brook', 'Franky'];
console.log(aprovados[0]); /*Acessando dado pelo indice */

//substitui elemento existente pelo indice ou adiciona elemento ao array
aprovados[3] = 'Ace';
//Adicionando elementos no array mais recomendado
aprovados.push('Aikanu');
console.log(aprovados);

//Array com dados undefined
aprovados[9] = 'Namy';
console.log(aprovados);
console.log(aprovados.length);
console.log(aprovados[8]  === undefined);
console.log(aprovados[7]  === null);

//Gerando alterações no array ao ordenar ele
aprovados.sort();
console.log(aprovados);

//Excluindo elemento do array, sem alterar o numero de indices
delete aprovados[1];
console.log(aprovados);

//Splice adicionando elemento em determinado indice, ou os dois ao mesmo tempo
let lista = [23, 56, 89];
lista.splice(0 /*indice do elemento*/, 1 /*excluindo um elemento*/, 100, 34 /*Adicionando elemento*/); 
console.log(lista); 

console.log('----------------> Pilotos<-------------------')

//Pilotos nao alteravel/   conteudo narray alteravel
const pilotos = ['Raikkonem', 'Alonso', 'Vettel', 'Massa'];
console.log(pilotos);

//Pop remove o ultimo elemento do array
pilotos.pop();
console.log(pilotos);

//Push adiciona um elemento no final do array
pilotos.push('Verstappen');
console.log(pilotos);

//Shift remove elemento da primeira posicao
pilotos.shift();
console.log(pilotos);

//Unshift adiciona elemento na primeira posicao
pilotos.unshift('Hamilton');
console.log(pilotos);

//Splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//Remover
pilotos.splice(2, 1); /*Excluindo o bottas */
console.log(pilotos);

//Slice retorna um novo array 
const pilotosVencedores = pilotos.slice(2);
console.log(pilotosVencedores);

const pilotosAtrasados = pilotos.slice(0, 2); /*indice inicial e final*/
console.log(pilotosAtrasados);