"use strict";

var alunos = ['gustavo', 'julia', 'paula ', 'wagner'];
var aluno2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'frontend'
  };
});
var nums = [6];
var nota = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(nota);
var nomesDosAlunos = aluno2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);