/* Ejercicio 14
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.*/

const words = [
  'code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 
  'sleep', 'code', 'enjoy', 'sleep', 'code'
];

function repeatCounter(list) {

  let wordCount = {};

  for (let i = 0; i < list.length; i++) {
    let word = list[i];

    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      
 wordCount[word] = 1;
    }
  }
  return wordCount;
}

console.log(repeatCounter(words));
