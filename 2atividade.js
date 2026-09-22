//2. Escreva uma função chamada ehPar que receba um número como parâmetro e retorne true se o número for par e false caso seja ímpar.

//Resolução da questão: fiz uma função que pede um numero e depois verefica por meio de um if e de um else se ele é verdadeiro ou falso.

function ehPar () {
let numero = Number(prompt("Digite um número "))
    if (numero%2==0){
        return numero==numero
    }
    else{
        return numero==!numero
    }
}

    alert(ehPar())