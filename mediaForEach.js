const notas = [10,9,8]

let soma = 0

notas.forEach(nota =>{
    soma += nota
})

let media = soma/notas.length

console.log(media)