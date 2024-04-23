/*Arrow function*/
dobro = (a) =>{
    return 2 * a;
}

/*Aroow functions redusidas, (retorno implicito)*/
num = () => 10;           /*sem paramêtros*/
console.log(num());

numDois = _ => 20;       /*Um paramêtro, pode ser ignorado*/
console.log(numDois());

dobro = a => 2  * a; 
console.log(dobro(Math.PI));

/*Arrow function e o this*/

function Aluno(){
    this.idade = 0;
    let contador = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade)
        contador++;

        if (contador === 5) {
                   clearInterval(intervalId); // Isso para o setInterval
            }
    }, 1000)
}

new Aluno
