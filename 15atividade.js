//5. Crie duas funções para cálculo total de um carrinho de compras: 
//• a) calcularSubtotalItem(item): Recebe um objeto item com as propriedades 
//preco e quantidade, e retorna o valor total do item (subtotal = preco ×
//quantidade). 
//• b) calcularTotalCarrinho(carrinho): Recebe um array de objetos (itens do 
//carrinho). A função deve percorrer a lista, chamar internamente a função 
//calcularSubtotalItem para cada produto e retornar o valor total acumulado da compra. 

//Raciocínio: a função (a) calcula o subtotal de UM item (preco × quantidade).
//A função (b) percorre o array, chama a (a) para cada item e vai
//acumulando o resultado em uma variável total.
//Entradas: (a) um item; (b) array de itens
//Processamento: multiplicação e soma acumulada em loop
//Saída: subtotal (a) e total do carrinho (b)
//Dificuldade: dificil o desafio é entender que uma função pode chamar outra dentro do loop.

function calcularSubtotalItem(item) {
  return item.preco * item.quantidade;
}

function calcularTotalCarrinho(carrinho) {
  let total = 0;
  for (const item of carrinho) {
    total += calcularSubtotalItem(item);
  }
  return total;
}
let carrinho = [
  { preco: 10, quantidade: 2 },  
  { preco: 5.5, quantidade: 4 }, 
];
alert(calcularTotalCarrinho(carrinho));