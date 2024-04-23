//Percorrendonum array com forEach
console.log('---------->Piratas procurados!<------------');
const piratas = [' Zoro', ' Luffy', ' Namy', ' Chopper']
console.log('Bando:' + piratas);

//Funcao callback
piratas.forEach(function(nome, indice){
    console.log(`${indice + 1}) Pirata: ${nome}`);
});

//Percorrendonum array com frEach usando uma arrow function
console.log('---------->Lista de compras<------------');
const lista = [' Banana', ' Ovo', ' Leite', ' Massa']
lista.forEach(nome => console.log('Lista de compras: ' + nome));

//Utilizando o terceiro parametro array da funcao callback
console.log('---------->Proprietários<------------');
const proprietarios = [' Alvida', ' Aikanu', ' Kuma', ' Buggy'];
proprietarios.forEach(function(_,_, array){
    console.log('Proprietários:' + array);
});

//Armazena uma funcao em uma variavel e passa ela como parametro no foreach
console.log('---------->Aprovados<------------');
const aprovados = [' Ace', ' Boninho', ' Vivi', ' Rei serpente']
const exibirAprovados = aprovados => console.log('Aprovado: ' + aprovados);
aprovados.forEach(exibirAprovados);

//Metodo para implementar uma versão personalizada do forEach
console.log('---------->Reprovados<------------');
Array.prototype.forEach2  = function(callback){
    for(let i = 0;  i < this.length;  i ++){
        callback(this[i], i, this);
    }
}
const reprovados = [' Momo', ' Big Mom', ' Kaido', ' Oden']
console.log('Lista dos reprovados: ' + reprovados);

reprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) Reprovado: ${nome}`);
});


