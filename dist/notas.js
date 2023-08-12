"use strict";

var alunos = ["a", "b", "c", "d"];
var notas = [4, 5, 6, 3];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual
  };
});
var notas2 = notas.map(function (notasAtual) {
  return {
    notas: notasAtual
  };
});
console.log(alunos2);
console.log(notas2);
var c = alunos2.find(function (item) {
  return item.nome == "c";
});
var n = notas2.find(function (item1) {
  return item1.notas == 6;
});
console.log(c);
console.log(n);