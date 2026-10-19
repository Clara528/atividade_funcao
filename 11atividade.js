//1. Crie uma função chamada calcularJurosSimples que receba três parâmetros: 
//capital, taxa (em porcentagem) e tempo (em meses). A função deve calcular e 
//etornar o valor dos juros: juros = capital × (taxa100) ×tempo

//Raciocínio: a fórmula é juros = capital × (taxa / 100) × tempo. A taxa vem em porcentagem 
//então divido por 100 para virar decimal.Entradas: capital, taxa (%), tempo (meses)Proces-
//samento: aplicar a fórmula. Saída: valor dos juros (retornado com return).Dificuldade: FÁCIL, 
//é só traduzir a fórmula para código.

function calcularJurosSimples(capital, taxa, tempo) {
  return capital * (taxa / 100) * tempo;
}
alert(calcularJurosSimples(1000, 5, 6)); 