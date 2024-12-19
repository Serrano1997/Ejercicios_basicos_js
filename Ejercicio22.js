/*Ejercicio 22
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function replaceNonVeganWithFruits(foodSchedule, fruits) {
  const usedFruits = new Set();

  for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
      for (let j = 0; j < fruits.length; j++) {
        if (!usedFruits.has(fruits[j])) {
          foodSchedule[i].name = fruits[j];
          usedFruits.add(fruits[j]); 
          break; 
        }
      }
    }
  }
  console.log(foodSchedule);
}
replaceNonVeganWithFruits(foodSchedule, fruits);
