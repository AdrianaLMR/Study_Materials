const alunos = [ 
    {nome: 'Ace', nota: 7.9},
    {nome: 'Luffy', nota: 7.9}
];

//Imperativo: Foca em como realizar uma tarefa, usa mutação de estado e exige controle de fluxo explícito.
console.log('-->Imperativo<--');
let total1 = 0;
for(let i = 0; i < alunos.length; i++){
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

//Declarativo: Foca em declarar o que deve ser alcançado, favorece a imutabilidade e abstrai o controle de fluxo.
console.log('-->Declarativo<--');
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);