//6. Crie uma função chamada formatarPessoa que receba um objeto representando
//uma pessoa com as propriedades nome, idade e profissao. A função deve retornar
//uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e
//trabalho como [profissao]."

//Resolução da questão: fiz uma função que recebe um objeto com nome, idade e profissão e retorna uma frase formatada usando as propriedades do objeto.
//Eu achei uma questão fácil para média, pois eu tive que acessar cada propriedade do objeto dentro da template string e montar a frase no padrão pedido.

function formatarPessoa(pessoa){
    return `Olá, meu nome é ${pessoa.Nome}, tenho ${pessoa.Idade} anos e trabalho como ${pessoa.Profissao}`
}
let pessoa = {
    Nome: prompt("Digite seu nome"),
    Idade: prompt("Digite sua idade"),
    Profissao: prompt("Digite sua profissão")
};

alert(formatarPessoa(pessoa))
