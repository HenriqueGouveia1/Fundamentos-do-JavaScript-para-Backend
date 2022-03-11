//dois arrays com índices correspondentes para realizar operações
const aluno = ['Ma','Caco','Prego']
const medias = [10,2,6]

//correlação entre arrays dentro de outro array
const relacaoNotaluno = [aluno,medias]

//função constante 
const exibeNomeNota = (nomeAluno) => {
    //implementando lógica onde caso o indice informado seja veradeiro
    //"buscará" no array de arrays o nome do aluno que será informado no array "aluno"
    // e sua respectiva nota no array "medias", caso contrario retorna mensagem no else
    if(relacaoNotaluno[0].includes(nomeAluno)){
        let i = relacaoNotaluno[0].indexOf(nomeAluno)
        return relacaoNotaluno[0][i] + ', sua média é ' + relacaoNotaluno[1][i]
    }else{
        return 'Aluno não encontrado'
    }
}

//chamando a "funcao" exibeNomeNota com o parâmetro 'Ma' como índice do array
console.log(exibeNomeNota('Ma'))