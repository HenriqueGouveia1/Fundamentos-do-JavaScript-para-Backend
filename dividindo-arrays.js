const nomes = ['Libni', 'Jean', 'Ismael', 'John Darksoul "O escolhido"', 'Alcidíades','Tomaroi', 'Tomate', 'macaco'];

const metade1 = nomes.slice(0, nomes.length/2)
const metade2 = nomes.slice(nomes.length/2)

console.log(nomes.length)
console.log(`Primeira ${metade1} -- Segunda ${metade2}`)