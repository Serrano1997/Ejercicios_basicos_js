/*Ejercicio 15
Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
Usa la función .includes de javascript.*/

const products = [
  'Camiseta de Metallica', 
  'Pantalón vaquero', 
  'Gorra de beisbol', 
  'Camiseta de Basket', 
  'Cinturón de Orión', 
  'AC/DC Camiseta'
];

function findCamisetas(products) {

  for (let i = 0; i < products.length; i++) {

    if (products[i].includes('Camiseta')) {
      console.log(products[i]); 
    }
  }
}

findCamisetas(products);
