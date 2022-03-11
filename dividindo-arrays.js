//lista de nomes num array
const nomes = ['Libni', 'Jean', 'Ismael', 'John Darksoul "O escolhido"', 'Alcidíades','Tomaroi', 'Tomate', 'macaco'];

//aqui temos uma variável "metade1" que pegará do primeiro elemento que é o indice 0 até a metade que se dá pelo tamanho do array
//dividido por 2, enquanto a "metade2" pegará a partir da metade
//a função slice divide o array com um elemento inicial e um final que se torna opcional como visto na "metade2" 
const metade1 = nomes.slice(0, nomes.length/2)
const metade2 = nomes.slice(nomes.length/2)

//imprimindo as informações no console
console.log(nomes.length)
console.log(`Primeira ${metade1} -- Segunda ${metade2}`)