const sala1 = [10, 10, 10]
const sala3 = [5, 6, 7]
const sala2 = [5,9, 8]

function mediaSalas(sala){
    //reduce busca reduzir um array. 
    //Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor (de qualquer tipo)
    //, como por exemplo a soma de todos os elementos desse array. 
    const salaMedia = sala.reduce((acum, atual)=> atual + acum, 0 )
    return salaMedia/sala.length
}

console.log(mediaSalas(sala1))
console.log(mediaSalas(sala3))
console.log(mediaSalas(sala2))