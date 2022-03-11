//dois arrays com índices correspondentes para realizar operações
const alunos= ['João','Libni','Fabo']
const medias= [8,10,9]

//a coisa que nomeia o arquivo haha
let relacaoNotaluno = [alunos, medias]

//a impressão com `` para poder colocar variáveis dentro da string
//A primeira instanciação do relacaoNotaluno diz que vai pegar o primeiro indice dele que é o array alunos e o primerio indice dentro do array alunos
//para o segundo é o mesmo.
console.log(`O aluno ${relacaoNotaluno[0][0]},tem a média: ${relacaoNotaluno[1][0]}`)