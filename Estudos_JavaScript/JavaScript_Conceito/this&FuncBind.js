/*this func bind*/
const Refeicao = {
    comida: 'Pizza' ,
    comer(){
        console.log('This ' + this.comida);
     }
     
}

Refeicao.comer();
const comer = Refeicao.comer; //conflito paradgmas
comer();

 /*function bind*/
const comerRefeicao = Refeicao.comer.bind(Refeicao);
comerRefeicao();

function Pessoa() {
   this.idade = 0;
   const self = this;
   let contador = 0;

   const intervalId = setInterval(function () {
       self.idade++;
       console.log(self.idade);
       contador++;

       if (contador === 2) {
           clearInterval(intervalId); // Isso para o setInterval
       }
   }, 1000);
}

new Pessoa();

/*this e o bind*/
let comparaComThis = function(param){
    console.log( this === param);
}

console.log('comparaComThis apontando escopo global: ');
comparaComThis(global);
const obj = {}
comparaComThis = comparaComThis.bind(obj);
console.log('comparaComThis associado ao obj: ');
comparaComThis(obj);
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

/*Função bind dentro de uma function arrow; teste de referência do this*/
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);