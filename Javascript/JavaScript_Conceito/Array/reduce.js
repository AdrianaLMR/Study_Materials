//exemplo um
console.log('-------->Reduce<--------');
const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acumulador, elementoAtual) => {
    console.log('Acumulador ' + acumulador + ' + Atual ' + elementoAtual + ' =');
    return acumulador + elementoAtual;
}, 0);

console.log('Soma dos elementos do Array: ' + soma);

// o acumulador indice 0 é somado ao atual indice 1
console.log('------>Reduce 2 <-------');
const alunos = [
    {nome: 'Luffy', nota: 7.0, bolsista: false},
    {nome: 'Chopper', nota: 9.0, bolsista: true},
    {nome: 'Ace', nota: 4.6, bolsista: false},
    {nome: 'Sabo', nota: 10.0, bolsista: true},
];

console.log('Lista de alunos: ' + alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log('Acumulador ' + acumulador + ' + Atual ' + atual);
    return acumulador + atual;
}, 1);
console.log('Soma da nota dos alunos: ' + resultado);

console.log('------> Verifica se todos são bolsistas <-------');
const turmaA = [
    {nome: 'Franky', nota: 7.0, bolsista: false},
    {nome: 'Smolker', nota: 9.0, bolsista: true},
    {nome: 'Boa Hancok', nota: 4.6, bolsista: false},
    {nome: 'Vivi', nota: 10.0, bolsista: true},
];

console.log(turmaA);
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

console.log('------> Verifica se ao menos um aluno é bolsistas <-------');
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));

console.log('--->Praticando<---');
const atletas = [
  {nome: 'Luffy', nota: 10.0, aprovado: true},
  {nome: 'Zoro', nota: 8.0,  aprovado: true},
  {nome: 'Sanji', nota: 9.0,  aprovado: true},
  {nome: 'Kaido', nota: 4.0,  aprovado: false},

]

console.log(atletas);
console.log('------> Verifica se todos são aprovados <-------');
const finalistas = (resultado, aprovado) => resultado && aprovado
console.log(atletas.map(a => a.aprovado).reduce(finalistas));
console.log('------->Verifica se ao menos um não foi finalista<-------');
const naoFinalista = (resultado, aprovado) => resultado || aprovado
console.log(atletas.map(a => a.aprovado).reduce(naoFinalista));