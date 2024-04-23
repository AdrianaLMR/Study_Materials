/*Criando uma lista de arrays*/
let text = ['Banana', 'Ovo', 'Carne'];
console.log(text);

let numbers = [1 , 2 , 3 , 4 , 5];
console.log(numbers);

let valoresDiferentes = [[1, 2, 3], ['Text'], ['Nome', 20]];
console.log(valoresDiferentes);

let RecebeArrays = [numbers, text];
console.log(RecebeArrays);

/*Criando uma lista de arrays e exibindo o seu index e valores*/
let tabelaIndex = ['Posição1', 'Posição2', 'Posição3']
console.table(tabelaIndex);

/*Acesando dados da lista de arrays*/
console.log(text[2]);

/*Aletrando dados da lista de arrays*/
numbers[4] = 20;
console.table(numbers);
