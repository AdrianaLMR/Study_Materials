/*itera sobre as chaves (nomes das propriedades) do objeto */

let pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Engenheiro'
};

for (let chave in pessoa) {
    console.log(chave + ': ' + pessoa[chave]);
}

/* É importante notar que o for...in itera sobre todas as propriedades enumeráveis ​​do objeto, incluindo propriedades herdadas da cadeia de protótipos. 
Para evitar iterar sobre propriedades herdadas, você pode usar o método hasOwnProperty() dentro do loop.*/