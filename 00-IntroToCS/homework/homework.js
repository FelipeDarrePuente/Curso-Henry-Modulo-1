"use strict";

  // '1 0 0 1' --> 1x2**3 + 0x2**2 + 0x2**1 + 1x2**0
  // 8 + 0 + 0 + 1 = 9

  // ['1', '0', '0', '1']
  //   3    2    1    0

function BinarioADecimal(num) {
  // tu codigo aca:
  // necesito los datos separados
  const arreglo = num.split(''); // []
  let resultadoFinal = 0;
  // por cada uno voy a hacer una operacion matematica
  for (let i = 0; i < arreglo.length; i++) {
    // voy a sumar un resultado final
    resultadoFinal = resultadoFinal + arreglo[i] * Math.pow(2, arreglo.length - 1 - i)
  }

  // Lo que yo hice:

  // var resultado = 0;
  // for (var i = 0; i < num.length; i++) {
  //   resultado += num[i] * 2 ** (num.length - 1 - i);
  // }
  // return resultado;

}

  // 9 / 2 = 4 --> sobra 1
  // 4 / 2 = 2 --> sobra 0
  // 2 / 2 = 1 --> sobra 0
  // 1 / 2 = 0 --> sobra 1

  // 1001

function DecimalABinario(num) {
  // tu codigo aca:
  // tomamos el numero y lo dividimos por 2
  // dividir hasta que el resultado sea 0
  // tomar todas las sobras para obtener mi numero binario
  // guardar mu numero binario
  if (num < 1) return 'Debes enviar un numero mayor a 0';
  var arreglo = [];
  while(num > 0) {
    // hago algo
    arreglo.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return arreglo.join('');

  // Lo que yo hice:

  // var resultado = [];
  // while (num / 2 >= 1) {
  //   var temp = Math.floor(num / 2)
  //   if (num % 2 === 0) {
  //     resultado.unshift('0')
  //   } else {
  //     resultado.unshift('1')
  //   }
  //   if (temp === 1) resultado.unshift('1')
  //   num = temp
  // }
  // return resultado.join('');
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
