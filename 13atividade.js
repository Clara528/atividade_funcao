//3. Crie uma função que apresente um menu ao usuário com as seguintes opções:
//a. Converter de real para euro 
//b. Converter de euro para real 
//c. Converter de real para dólar 
//d. Converter de dólar para real 
//e. Fechar o programa. 
//O programa deve apresentar esse menu em loop até o usuário selecionar fechar 
//programa. Caso ele escolha outras opções, o usuário deve entrar com os dados 
//e o resultado deve ser mostrado na tela. Após mostrar o resultado da conversão 
//pedida, o programa volta para o menu.

//Raciocínio: usei um loop while(true) que mostra o menu, lê a opção
//e usa switch para decidir o que fazer. A opção "e" encerra o loop
//com break. Nas outras, peço o valor, calculo e mostro o resultado;
//depois o loop volta ao menu automaticamente.
//As cotações são fixas (podem ser alteradas nas constantes).
//Entradas: opção do menu e valor a converter (via prompt)
//Processamento: multiplicar ou dividir pela cotação. Saída: resultado mostrado com alert
//Dificuldade: díficil exige combinar loop, switch, prompt econversão de texto para número, 
//o que dá mais trabalho.

function menuConversao() {
  let EURO = 6.2;   
  let DOLAR = 5.5;  

  while (true) {
    let opcao = prompt(
      "Escolha uma opção:\n" +
      "a. Converter de real para euro\n" +
      "b. Converter de euro para real\n" +
      "c. Converter de real para dólar\n" +
      "d. Converter de dólar para real\n" +
      "e. Fechar o programa"
    );

    if (opcao === null) break; 

    let escolha = opcao.toLowerCase().trim();

    if (escolha === "e") {
      alert("Programa encerrado.");
      break;
    }

    if (!["a", "b", "c", "d"].includes(escolha)) {
      alert("Opção inválida!");
      continue; // volta ao menu
    }

    let valor = parseFloat(prompt("Digite o valor:"));
    if (isNaN(valor)) {
      alert("Valor inválido!");
      continue;
    }

    switch (escolha) {
      case "a":
        alert(`R$ ${valor.toFixed(2)} = € ${(valor / EURO).toFixed(2)}`);
        break;
      case "b":
        alert(`€ ${valor.toFixed(2)} = R$ ${(valor * EURO).toFixed(2)}`);
        break;
      case "c":
        alert(`R$ ${valor.toFixed(2)} = US$ ${(valor / DOLAR).toFixed(2)}`);
        break;
      case "d":
        alert(`US$ ${valor.toFixed(2)} = R$ ${(valor * DOLAR).toFixed(2)}`);
        break;
    }
  }
}

