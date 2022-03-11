//array com nomer 
const nomes= ['Daivin','Jean','tj']

//instancia da funcao callBack "imprime" chamada em um
//metodo nativo do JS o .forEach() com o parametro que é a outra funcao
//imprime que vai fazer o que a funcao imprime para cada um dos elementos
//do array nomes
nomes.forEach(imprime)

//função "callBack" para imprimir os nomes da lista no console
//feita após a sua instanciação no array nomes 
function imprime(nome){
    console.log(nome)
}