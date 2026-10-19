//2. Escreva uma função chamada verificarOrcamento que receba dois parâmetros: 
//valorProduto e saldoDisponivel. A função deve retornar true se o saldo for suficiente 
//para comprar o produto (saldo maior ou igual ao valor) e false caso contrário.

//Raciocínio: preciso comparar o saldo com o valor. Se saldo >= valor,
//posso comprar. A própria comparação já resulta em true ou false,
//então posso retornar direto.Entradas: valorProduto, saldoDisponivel
//Processamento: comparação saldoDisponivel >= valorProduto.Saída: true ou false
//Dificuldade: FÁCIL, uma única comparação.

function verificarOrcamento(valorProduto, saldoDisponivel) {
  return saldoDisponivel >= valorProduto;
}
alert(verificarOrcamento(50, 100)); 
alert(verificarOrcamento(150, 100)); 
