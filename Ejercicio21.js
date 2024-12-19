/*Ejercicio 21
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
function classifyUsers(users) {

  const minors = [];
  const adults = [];


  for (let user of users) {

    if (user.years < 18) {
      minors.push(user.name);
    } else {
      adults.push(user.name); 
    }
  }

  console.log("Usuarios menores de edad:");
  for (let minor of minors) {
    console.log(minor);
  }

  console.log("Usuarios mayores de edad:");
  for (let adult of adults) {
    console.log(adult);
  }
}
classifyUsers(users);
