//4. Crie uma função chamada calcularIMC que receba o peso (kg) e a altura (m). 
// A função deve calcular o IMC e retornar uma string com a classificação: • IMC < 18.5: "Abaixo do peso"
//• IMC entre 18.5 e 24.9: "Peso normal"; • IMC ≥ 25.0: "Sobrepeso"


function calcularIMC(){
    let peso = Number(prompt("Digite o valor do peso"))
    let altura = Number(prompt("Digite o valor da altura"))
    let IMC = peso / (altura*altura)
    return IMC
}
let Resultado = calcularIMC()

    if(Resultado < 18.5)
        {
        "Abaixo do peso"

        alert(calcularIMC())
        }

        if(Resultado >= 18.5 && Resultado <= 24.9)
        {
            "Peso normal"

            alert(calcularIMC())
        }

        if(Resultado >= 25.0)
        {
            "Sobrepeso"

            alert(calcularIMC())
        }

    