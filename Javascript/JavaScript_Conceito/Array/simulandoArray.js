//obj constante
const quaseArray = { 0: 'Luffy', 1: 'Namy', 2: 'Chopper'}
console.log(quaseArray);

//Metodo toString, simula a imporessao do obj como se fosse uma array
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
});

console.log(quaseArray);
console.log(quaseArray[0]);

const meuArray = ['Luffy', 'Namy', 'Chopper'];
console.log(quaseArray.toString(), meuArray)