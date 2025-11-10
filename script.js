var notasAv1 = new Array();
var notasAv2 = new Array();

var nota = 0;

var media = new Array();

var temp = 0;

var quantAlunos = parseInt(prompt("Informe a quantidade de alunos: "))

for (i = 0; i < quantAlunos; i++) {
    nota = parseFloat(prompt("Informe a 1a nota do "+ (i + 1) +" aluno: "))
    notasAv1.push(nota)
    nota = parseFloat(prompt("Informe a 2a nota do "+ (i + 1) +" aluno: "))
    notasAv2.push(nota)
}