const notas = [10,9,8]

let soma = 0

for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}

let media = soma/notas.length

console.log(media)