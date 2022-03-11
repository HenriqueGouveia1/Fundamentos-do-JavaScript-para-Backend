//variavel constante array listando algumas centenas
const array = [100, 200, 300, 400, 500, 600]

//um laço de repetição for padrao que vai 
//usar a variável let i usada como indice para comparar com o tamanho
//do nosso array e incrementando ate parar de se encaixar na condição <= indicada
//e ativando sempre que rodar o laço a função console.log para imprimir o indice e o elemento correspondente ao indice 
for(let i = 0; i <= array.length; i++){

    console.log(i, array[i])

}