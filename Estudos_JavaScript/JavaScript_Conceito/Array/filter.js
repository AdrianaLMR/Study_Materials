console.log('-------->Filter<-------')
const produtos  = [
    {nome: 'Notbook', preco: 2.499, fragil: true},
    {nome: 'Televisão', preco: 5.000, fragil: true},
    {nome: 'Copo de vidro', preco: 12.90, fragil: true},
    {nome: 'Copo plástico', preco: 4.99, fragil: false},
]

const produtoCaro = produtos => produtos.preco >= 1.000;
console.log(produtoCaro);

const produtoFragil = produtos => produtos.fragil;
console.log(produtoFragil);

console.log(produtos.filter(produtoCaro).filter(produtoFragil));

console.log('Lista de produtos fragéis');
console.log(produtos.filter(function(p){
    return p.fragil == true 
}));
console.log('Lista de produtos vendido no dia');
console.log(produtos.filter(function(p){
    return false
}));

//Implementando o filter
console.log('-------->Implemnetando o Filter<-------')
Array.prototype.filter2 = function(callback){
    const newEstoque = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newEstoque.push(this[i]);
        }
    }
    return newEstoque
}

const estoque  = [
    {nome: 'Banana', preco: 4.99, organico: true},
    {nome: 'Nescau', preco: 9.99, organico: false},
    {nome: 'Massa', preco: 7.90, organico: false},
    {nome: 'Maçã', preco: 2.99, organico: true},
]

const produtosBaratos = estoque => estoque.preco <= 9.99;
console.log(produtosBaratos);

const produtosOrganicos= estoque => estoque.organico;
console.log(produtosOrganicos);

console.log(estoque.filter2(produtosBaratos).filter2(produtosOrganicos));
