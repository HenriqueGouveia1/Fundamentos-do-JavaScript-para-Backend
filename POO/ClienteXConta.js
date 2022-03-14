class Cliente{
    nome;
    cpf;
}

class Conta{
    #saldo = 0;
    numConta;

    depositar(tanto){
        if(tanto <0) return;
        this.#saldo += tanto;
        console.log("sacou" + this.numConta, this.#saldo)
    }

    sacar(tanto){
        if(tanto > this.#saldo ) return;
        this.#saldo -= tanto;
        console.log("sacou" + this.numConta, this.#saldo)
    }
}

const cliente1 = new Cliente;
cliente1.nome= 'cliente1';
cliente1.cpf = "01920129012";

const conta1= new Conta;
conta1.numConta= 1


const cliente2 = new Cliente;
cliente2.nome='cliente2'
cliente2.cpf= '01920129012'

const conta2= new Conta;
conta2.numConta= 2


console.log(conta2)
conta2.depositar(30)
console.log(conta2)
conta2.sacar(30)
console.log(conta2)
