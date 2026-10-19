//6. Crie duas funções para gerenciar a fila de reprodução de um usuário: 
//• a) converterParaSegundos(minutos, segundos): Recebe os minutos e 
//segundos de uma faixa e retorna a duração total convertida apenas para 
//segundos (totalSegundos = (minutos × 60) + segundos). 
//• b) calcularTempoPlaylist(playlist): Recebe um array de objetos (onde cada 
//objeto é uma música com as propriedades {titulo, minutos, segundos}). A 
//função deve percorrer a lista de músicas, chamar internamente a função 
//converterParaSegundos para cada faixa e retornar a duração total de toda a 
//playlist em segundos.

//Raciocínio: (a) converte minutos e segundos em segundos totais
//com (minutos × 60) + segundos. (b) percorre as músicas, usa a (a)
//em cada faixa e soma tudo.
//Entradas: (a) minutos e segundos; (b) array de músicas
//{titulo, minutos, segundos}
//Processamento: conversão e soma acumulada
//Saída: duração total em segundos
//Dificuldade: MÉDIO ,pois a lógica eu achei parecida com a questão 5,

function converterParaSegundos(minutos, segundos) {
  return minutos * 60 + segundos;
}

function calcularTempoPlaylist(playlist) {
  let totalSegundos = 0;
  for (let musica of playlist) {
    totalSegundos += converterParaSegundos(musica.minutos, musica.segundos);
  }
  return totalSegundos;
}
let playlist = [
  { titulo: "Música A", minutos: 3, segundos: 30 }, 
  { titulo: "Música B", minutos: 4, segundos: 5 },  
];
alert(calcularTempoPlaylist(playlist)); 