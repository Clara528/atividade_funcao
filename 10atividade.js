//10. Escreva um programa completo para análise de uma turma contendo três funções:
//) verificarAprovacao(nota): retorna true se a nota for ≥ 60 e false caso contrário. 
// b) contarAprovados(listaAlunos): recebe um array de objetos (onde cada objeto é um 
// aluno com {nome, nota}). Percorre a lista, chama a função verificarAprovacao para cada
//  aluno e retorna o total de alunos aprovados.c) executarAnalise(): função principal que 
// solicita via prompt o cadastro de 4 alunos (armazenando-os num array de objetos), chama 
// contarAprovados e exibe o total de aprovados no console.log.

//Resolução da questão: fiz um programa com três funções que trabalham juntas para analisar uma turma. A primeira, verificarAprovacao,
//recebe a nota de um aluno e retorna true se ela for maior ou igual a 60 e false caso contrário, usando apenas uma comparação. A segunda,
//contarAprovados, recebe um array de objetos (cada objeto é um aluno com nome e nota), cria um contador começando em 0 e percorre a lista 
//com um for. Em cada volta, ela chama verificarAprovacao passando a nota do aluno atual (listaAlunos[i].nota) e, se o resultado for true, 
//soma 1 no contador. No final, retorna o total de aprovados. A terceira, executarAnalise, é a função principal: ela cria um array vazio, 
//repete 4 vezes pedindo com prompt o nome e a nota de cada aluno, converte a nota com Number() e guarda tudo como objeto no array usando push. 
//Depois chama contarAprovados com esse array e mostra o total de aprovados ao usuário. Por fim, chamei executarAnalise() no final do código para o
//programa rodar. Eu achei uma questão díficil, pois envolveu várias partes ao mesmo tempo: funções que chamam outras funções, array de objetos, laços
// de repetição e entrada de dados. O mais importante foi entender que cada função tem uma responsabilidade só e que uma depende da outra, então precisei
//prestar atenção na ordem e nos nomes das propriedades (nome e nota) para acessar o valor certo dentro de cada objeto.

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
