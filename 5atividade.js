//5. Crie uma função chamada somarElementos que receba um array de números 
//como parâmetro, percorra o vetor, some todos os valores e retorne o total.

//Resolução da questão: fiz uma função que recebe um array de números, percorre o vetor com um for of, soma todos os valores em uma variável e retorna o total.
//Eu achei uma questão média, pois eu não sabia como ultilizar o for of.

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
