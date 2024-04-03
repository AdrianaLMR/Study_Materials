//Gerando novo array onde os elementos sao o dobro do array original
const nums = [1, 2, 3, 4, 5];

//Novo array gerado
let resultado = nums.map(function(e){
    return e * 2
});
console.log('Novo array: ', resultado, '/ Array original: ', nums);

//funcoes passadas como callback para funcoes map
console.log('-------->Map sucessíveis<--------------');
const valores = [10, 20, 30, 40, 50];
const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

troco1 = valores.map(soma10);
console.log('Troco 1: ' + troco1);
troco2 = valores.map(triplo);
console.log('Troco 2: ' + troco2);
troco3 = valores.map(paraDinheiro);
console.log('Troco 3: ' + troco3);
trocoDia = valores.map(soma10).map(triplo).map(paraDinheiro);
console.log(trocoDia);

//Criando um map personalizado
console.log('-------->Carrinho de compras<-----------');
const carrinhoCompras = [
    '{"nome": "Borracha", "preco": 1.45}',
    '{"nome": "Caderno", "preco": 10.45}',
    '{"nome": "Kit de lápis", "preco": 15.45}',
    '{"nome": "Caneta", "preco": 3.45}',
]
console.log(carrinhoCompras);

const paraObj = json => JSON.parse(json);
const apenasPrecos = produto => produto.preco;

const listaPrecos = carrinhoCompras.map(paraObj).map(apenasPrecos);
console.log(listaPrecos);

//Implementando o map
console.log('-------->Lista de material<-----------')
Array.prototype.map2 = function(callback){
    const newArray = [];
    for(let i = 0; i < this.length; i ++){
        newArray.push(callback(this[1], i, this));
    }
    return newArray
}
const listaMaterial = [
    '{"nome": "Apontador", "preco": 1.50}',
    '{"nome": "Folha A4", "preco": 10.00}',
    '{"nome": "Kit de lápis Aquarela", "preco": 15.90}',
    '{"nome": "Caneta bicolor", "preco": 3.99}',
]
console.log(listaMaterial);

const paraObjeto = json => JSON.parse(json);
const categoriaPrecos = produto => produto.preco;

const precoProdutos = listaMaterial.map2(paraObjeto).map2(categoriaPrecos);
const precoProdutos2 = listaMaterial.map(paraObjeto).map2(categoriaPrecos);

console.log('Preços dos produtos: ' + precoProdutos);
console.log('Preços dos produtos: ' + precoProdutos2 + '(Exemplo usando dois map diferentes');
