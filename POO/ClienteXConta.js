class Cliente{
    nome;
    cpf;
}

class Conta{
    saldo;
    numConta;

    depositar(tanto){
        if(tanto >0){
            this.saldo += tanto;
        }
    }

    sacar(tanto){
        if(tanto <= this.saldo ){
            this.saldo -= tanto;
        }
    }
}

const cliente1 = new Cliente;
cliente1.nome= 'cliente1';
cliente1.cpf = "01920129012";

const conta1= new Conta;
conta1.numConta= 1
conta1.saldo= 10

const cliente2 = new Cliente;
cliente2.nome='cliente2'
cliente2.cpf= '01920129012'

const conta2= new Conta;
conta2.numConta= 2
conta2.saldo = 20

console.log(conta2.saldo)
conta2.depositar(30)
console.log(conta2.saldo)
conta2.sacar(30)
console.log(conta2.saldo)
