//3. Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura em
// Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32).

//Resolução da questão: fiz uma função que pede um valor de temperatura e a converte em fahrenheit, e depois retorna o valor.
// Eu achei uma questao fácil.

function celsiusParaFahrenheit(){
let temperatura = Number(prompt("Digite uma temperatura"))
let conversão =  (temperatura * 1.8) + 32
return conversão
}

alert(celsiusParaFahrenheit())