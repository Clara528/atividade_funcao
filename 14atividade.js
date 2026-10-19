//4. Crie uma função chamada exibirResumoProduto que receba um objeto 
//representando um item do estoque com as propriedades nome, preco e quantidade. 
//A função deve retornar uma string formatada no padrão: 
//"Produto: [nome] | Preço: R$ [preco] | Estoque: [quantidade] unidades." 

//Raciocínio: recebo um objeto e acesso suas propriedades com ponto
//(item.nome etc.). Monto a string com template literal (crase e ${}),
//que facilita colocar variáveis no meio do texto.
//Entradas: objeto {nome, preco, quantidade}
//Processamento: formatar o texto
//Saída: string no padrão pedido
//Dificuldade: média, pois exige conhecer template literals e objetos.

function exibirResumoProduto(item) {
  return `Produto: ${item.nome} | Preço: R$ ${item.preco} | Estoque: ${item.quantidade} unidades.`;
}
alert(exibirResumoProduto
    (
    { 
        nome: "Mouse", 
        preco: 59.9, 
        quantidade: 12 }
    )
);