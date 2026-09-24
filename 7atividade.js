//7. Crie duas funções para processar o valor de uma venda: 
// a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de desconto,
//retornando o valor com o desconto aplicado. b) processarVenda(valorBruto):recebe o valor bruto. 
//Se for maior que 100,chama internamente a função aplicarDesconto (com 10% de desconto) e retorna o
//valor ajustado. Caso contrário, retorna o valor bruto sem alterações.

////Resolução da questão:fiz uma função que pega o valor e o percentual e faz uma conta, depois fiz um if 
//e um else para ver se era preciso o desconto, depois fiz um let que le o valor e o desconto e no fim mons-
//tra o resultado obtido. Eu achei essa questão media para dificil, pois deu muito erro e eu tive dificuldade 
// em entender a lógica do código.

function aplicarDesconto(valor, percentual){
   let desconto = valor * percentual/100
   let total = valor - desconto
   return total
}

function processarVenda(valorBruto) {
  if (valorBruto > 100) 
    {
    return aplicarDesconto(valorBruto,10);
    } 
    else 
    {
    return valorBruto;
    }
}

let numero = Number(prompt("Digite o valor da compra"));
let porcentagem = Number(prompt("Digite a porcentagem de desconto"));

let resultadoVenda = processarVenda(numero);

alert(resultadoVenda);
