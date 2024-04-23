class Lancamento{
    constructor(nome= 'Genérico', valor = 0){
        /*Adicionando ao objeto instânciado o atríbuto, sendo o mesmo passado no construtor*/
        this.nome = nome;
        this.valor = valor; 
    }
}

class CicloFinanceiro{
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário ', 1300);
const contaLuz = new Lancamento('Luz ', -220);
const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaLuz);

console.log(contas.sumario());

/*Herança de classes*/
class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}
/*Definindo classe que tem outra classe como protótipo*/
class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        /*Chamando construtor da super class(avo)*/
       super(sobrenome);
       this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super('Rosa');
    }
}

const filho = new Filho;
console.log(filho);