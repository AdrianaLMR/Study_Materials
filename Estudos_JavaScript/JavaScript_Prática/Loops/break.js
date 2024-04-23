/* interromper a execução de loops (for, while, do...while) e switches (switch)*/

/*For*/
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

/*Switch*/
let dia = 3;
let nomeDia;

switch (dia) {
    case 1:
        nomeDia = 'Segunda-feira';
        break;
    case 2:
        nomeDia = 'Terça-feira';
        break;
    case 3:
        nomeDia = 'Quarta-feira';
        break;
    default:
        nomeDia = 'Dia inválido';
        break;
}

console.log('Hoje é ' + nomeDia);


/*while*/
let i = 0;

while (i <= 10) {
    if( i === 5) break;
    console.log(i);
    i++
}