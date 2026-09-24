//9. Crie duas funções para avaliar o desempenho de um aluno: a) calcularMediaArray(notas): recebe um array de números 
// (notas) e retorna a média aritmética simples dessas notas. b) avaliarAluno(aluno): recebe um objeto aluno contendo 
//as propriedades nome e notas (onde notas é um array com 3 notas). A função deve chamar internamente a função 
// calcularMediaArray. Se a média for ≥ 60, retorna "Aprovado", caso contrário, retorna "Reprovado".

//Resolução da questão:fiz uma função com uma array que calcula as notas dos alunos e faz a media, 
// depois criei um objeto com nome e notas do aluno e no final monstrei o resultado. Eu achei dificil
//por causa que e muitos passos e o raciocinio eé complicado.

function calcularMediaArray(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
  }
  return soma / notas.length;
}

function avaliarAluno(aluno) 
{
  let media = calcularMediaArray(aluno.notas);
  if (media >= 60) {
    return "Aprovado";
  } 
  else {
    return "Reprovado";
  }
}

let notas = []
notas[0] = Number(prompt("Digite a primeira nota"))
notas[1] = Number(prompt("Digite a segunda nota"))
notas[2] = Number(prompt("Digite a terceira nota"))

let aluno = {
    nome: prompt("Digite o nome do aluno"),
    notas : notas
}

let resultado = avaliarAluno(aluno);
alert(resultado);