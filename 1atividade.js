//1. Crie uma função chamada calcularAreaRetangulo que receba dois parâmetros:base e altura.
// A função deve calcular e retornar o valor da área (área = base × altura).

// Resolução da questão: criei uma função que chama duas variaveis e calcula o seu valor, depois chamei a variavel que por causa do return 
//apareceu o valor. Eu achei uma questão facil, pois conseguir entender o funcionamento da questão.


function calcularAreaRetangulo () {
let base = Number(prompt("Digite o valor da base do retângulo"))
let altura = Number(prompt("Digite o valor da altura do retângulo"))
let area = base * altura
return area
}

alert(calcularAreaRetangulo())