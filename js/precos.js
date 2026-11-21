
/*
 * precos.js — cálculo de preços promocionais da Retrô 128
 */

function calcularPreco(jogo, config) {
  const precoOriginal = jogo.preco;

  if (!config.blackFriday.ativa) {
    return precoOriginal;
  }

  const desconto = config.blackFriday.promocoes[jogo.id];

  if (!desconto) {
    return precoOriginal;
  }

  return Math.round(precoOriginal * (1 - desconto / 100) * 100) / 100;
}
