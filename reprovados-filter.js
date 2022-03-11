const nomes = ['Daniel', 'Ismael', 'Thierry']
const notes = [2, 10, 9.9 ]

//reprovades vai trazer os nomes filterados pelos nomes que tenham notes referentes as menores que 6 trazendo os reprovados
const reprovades = nomes.filter((aluno, indice) => notes[indice] < 6)

console.log(`${reprovades}`)