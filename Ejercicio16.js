/* Ejercicio 16
For...of: Usa un bucle forof para recorrer todos los destinos del array.
Imprime en un console.log cada uno de sus valores.*/

function listDestinations(placesToTravel) {

  for (let place of placesToTravel) {
    console.log(place);
  }
}

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

listDestinations(placesToTravel);

