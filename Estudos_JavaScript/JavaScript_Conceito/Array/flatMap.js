//Sintase básica do flat map
const array = [1, 2, 3, 4];

const novoArray = array.flatMap(elemento => [elemento * 2, elemento * 3]);

console.log(novoArray);

console.log('Fazendo a media dos alunos');
const escola = [
    {
        nome: 'Turma M1',
        alunos:[
            {
                nome: 'Ace',
                nota: 7.0,
            },
            {
                nome: 'Luffy',
                nota: 8.0,
            }
        ]
    }, 
    {
        nome: 'Turma M2',
        alunos: [
            {
                nome: 'Zoro',
                nota: 10.0,
            },
            {
                nome: 'Sanji',
                nota: 7.0,
            }
        ]
    }
]

//Extraindo notas dos alunos
const getNotasAluno = aluno => aluno.nota;

//Extrai da turma todas as notas
const getNotasTurma = turma => turma.alunos.map(getNotasAluno);

//Lista das notas da turmas da escola
const todasNotas = escola.map(getNotasTurma);
console.log('Notas das turmas da escola: ');
console.log(todasNotas);

//Todas as notas em um unico array
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback));
}

const notas2 = escola.flatMap(getNotasTurma);
console.log('Notas das turmas da escola em um unico array: ');
console.log(notas2)