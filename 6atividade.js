//6. Crie uma função chamada formatarPessoa que receba um objeto representando
//uma pessoa com as propriedades nome, idade e profissao. A função deve retornar
//uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e
//trabalho como [profissao]."

function formatarPessoa(pessoa){
    return `Olá, meu nome é ${pessoa.Nome}, tenho ${pessoa.Idade} anos e trabalho como ${pessoa.Profissao}`
}
let pessoa = {
    Nome: prompt("Digite seu nome"),
    Idade: prompt("Digite sua idade"),
    Profissao: prompt("Digite sua profissão")
};

alert(formatarPessoa(pessoa))