/*Criandonum objeto*/
let cars = {
    proprietario: 'Adriana',
    idade: 18,
    color: 'vermelho',
    habilitacao: true
}

console.table(cars);

/*alterando o valor do objeto*/
cars.color = 'Amarelo';
console.table(cars);

/*Objeto que recebe outros objetos*/

/*Definindo a classe Concessionaria*/
class Concessionaria {
    constructor() {
        this.listaCarros = []; // Array para armazenar carros
        this.listaMotos = [];  // Array para armazenar motos
    }

    adicionarCarro(carro) {
        this.listaCarros.push(carro);
    }

    adicionarMoto(moto) {
        this.listaMotos.push(moto);
    }
}

class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Moto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

/*Exemplo de uso: caso de uso descrito é bastante comum em sistemas que lidam com gestão de inventário, como uma aplicação de gerenciamento*/
const concessionaria = new Concessionaria();

const carro1 = new Carro("Toyota", "Corolla");
const carro2 = new Carro("Honda", "Civic");

const moto1 = new Moto("Honda", "CBR500R");
const moto2 = new Moto("Yamaha", "MT-07");

concessionaria.adicionarCarro(carro1);
concessionaria.adicionarCarro(carro2);

concessionaria.adicionarMoto(moto1);
concessionaria.adicionarMoto(moto2);

// Agora a concessionária tem carros e motos em suas listas