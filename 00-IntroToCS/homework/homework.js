"use strict";

function BinarioADecimal(num) {
  // tu codigo aca:
  // var bin7 = Math.pow(2, 7);
  // var bin6 = Math.pow(2, 6);
  // var bin5 = Math.pow(2, 5);
  // var bin4 = Math.pow(2, 4);
  // var bin3 = Math.pow(2, 3);
  // var bin2 = Math.pow(2, 2);
  // var bin1 = Math.pow(2, 1);
  // var bin0 = Math.pow(2, 0);
  // var decimal = 2^7(binario) + 2^6(binario) + 2^5(binario) + 2^4(binario) + 2^3(binario) + 2^2(binario) + 2^1(binario) + 2^0(binario);
  // var decimal = bin7 * binario + '' + bin6 * binario + '' + bin5 * binario + '' + bin4 * binario + '' + bin3 * binario + '' + bin2 * binario + '' + bin1 * binario + '' + bin0 * binario;
  var resultado = 0;
  for (var i = 0; i < num.length; i++) {
    resultado += +num[i] * 2 ** (num.length - 1 - i);
  }
  return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca:
  var resultado = [];
  while (num / 2 >= 1) {
    var temp = Math.floor(num / 2)
    if (num % 2 === 0) {
      resultado.unshift('0')
    } else {
      resultado.unshift('1')
    }
    if (temp === 1) resultado.unshift('1')
    num = temp
  }
  return resultado.join('');
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
