const notas = [10,2,3,5]

//notasAtualizadas vai trazer o "notas" map(eado) trazendo elas somado +1 ponto caso não seja igual 10
const notasAtualizadas= notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)