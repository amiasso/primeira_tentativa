const alunos = ['gustavo', 'julia', 'paula ', 'wagner'];

const aluno2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'frontend',
    }
   
})

const nums = [6]

const nota = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador
}, 0)
console.log(nota)

const nomesDosAlunos = aluno2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador
}, '')
console.log(nomesDosAlunos)