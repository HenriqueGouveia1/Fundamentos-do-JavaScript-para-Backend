const nomes = ['Daniel', 'Ismael', 'Thierry']
const notes = [2, 10, 9.9 ]

const reprovades = nomes.filter((aluno, indice) => notes[indice] < 6)

console.log(`${reprovades}`)