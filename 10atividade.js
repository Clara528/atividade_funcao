//10. Escreva um programa completo para análise de uma turma contendo três funções:
//) verificarAprovacao(nota): retorna true se a nota for ≥ 60 e false caso contrário. 
// b) contarAprovados(listaAlunos): recebe um array de objetos (onde cada objeto é um 
// aluno com {nome, nota}). Percorre a lista, chama a função verificarAprovacao para cada
//  aluno e retorna o total de alunos aprovados.c) executarAnalise(): função principal que 
// solicita via prompt o cadastro de 4 alunos (armazenando-os num array de objetos), chama 
// contarAprovados e exibe o total de aprovados no console.log.

function verificarAprovacao(nota) {
  return nota >= 60;
}

function contarAprovados(listaAlunos) {
  let total = 0;
  for (let i = 0; i < listaAlunos.length; i++) {
    if (verificarAprovacao(listaAlunos[i].nota)) {
      total++;
    }
  }
  return total;
}

function executarAnalise() {
  let alunos = [];

  for (let i = 0; i < 4; i++) {
    let nome = prompt("Digite o nome do aluno " + (i + 1));
    let nota = Number(prompt("Digite a nota de " + nome));
    alunos.push({ nome: nome, nota: nota });
  }

  let totalAprovados = contarAprovados(alunos);
  alert("Total de aprovados: " + totalAprovados);
}

executarAnalise();
