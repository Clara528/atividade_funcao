//5. Crie uma função chamada somarElementos que receba um array de números 
//como parâmetro, percorra o vetor, some todos os valores e retorne o total.

function somarElementos(numeros){
let soma = 0

    for(let numero of numeros){
    soma = soma + numero
 }
 return soma
}

let numeros = []
let limite = Number(prompt("Digite quantos numeros você quer somar."))
    for(let i = 0 ; i< limite; i++){
        numeros[i] = Number(prompt("Digite um numero"))
    }

alert(somarElementos(numeros))