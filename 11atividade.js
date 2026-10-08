//1. Crie uma função chamada calcularJurosSimples que receba três parâmetros: capital, taxa (em porcentagem) 
// e tempo (em meses). A função deve calcular e retornar o valor dos juros: juros = capital × (taxa 100 ) × tempo

function calcularJurosSimples(capital,taxa,tempo){
    let capital = Number(prompt("Digite o valor da sua capital"))
    let taxa = Number(prompt("Digite o valor da taxa"))
    let tempo = Number(prompt("Digite o tempo"))
    let juros = capital * (taxa/100) * tempo 
    return juros
}

alert(calcularJurosSimples())
