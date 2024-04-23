const filhas = [' Namy ', ' Vivi '];
console.log('Lista de filhas: ' + filhas);
const filhos = [' Luffy ' , ' Ace ' ];
console.log('Lista de filhas: ' + filhos);

const todosFilhos = filhas.concat(filhos);
console.log('Todos os filhos: ' + todosFilhos);

//concatenação de diversos elementos
console.log('-->Concatenação de diversos elementos<--');
console.log([].concat([1, 2],['a, b '], [3, 4], 5, [[6, 7, 8]]));
