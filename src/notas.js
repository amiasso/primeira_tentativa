









const alunos = ["a", "b", "c", "d"]
const notas = [4, 5, 6, 3]

const alunos2 = alunos.map((itemAtual)=> {
    return  {
        nome: itemAtual,
    }
    
})

const notas2 = notas.map((notasAtual)=>{
    return  {
        notas: notasAtual
    }
})

console.log(alunos2)
console.log(notas2)

const c = alunos2.find( function(item){
    return item.nome == "c"
})

const n = notas2.find(function (item1){
   return item1.notas == 6
})
console.log(c)
console.log(n)
 
