const aluno = ['Ma','Caco','Prego']
const medias = [10,2,6]

const relacaoNotaluno = [aluno,medias]

const exibeNomeNota = (nomeAluno) => {

    if(relacaoNotaluno[0].includes(nomeAluno)){
        let i = relacaoNotaluno[0].indexOf(nomeAluno)

        return relacaoNotaluno[0][i] + ', sua média é ' + relacaoNotaluno[1][i]

    }else{
        return 'Aluno não encontrado'
    }

}

console.log(exibeNomeNota('Ma'))