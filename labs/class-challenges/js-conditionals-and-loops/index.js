//Class Exercises
//Operators
var x = 0;

x = 12;

x++;

// // x += 1;

// x = 12 + 1;

var n = 3;

var s = "3";

console.log(n == s);

console.log(n === s);

console.log(n !== s);

console.log(n >= 7);

console.log(n === s || n <= 3);

//Conditionals

function calculator (num1, num2, operator) {
  
    return operator = "+" ? num1 + num2
        : operator = "-" ? num1 - num2
        : operator = "*" ? num1 * num2
        : operator = "/" ? num1 / num2
        : "Please enter a valid operator";
}

function freePass() {
    const age = parseInt(prompt("How old are you?"));
    return age <= 5? "Gratis"
     : age < 15 ? "tienes un 20%"
     : age >= 15 && age <= 60 ? "Pagan regular"
     : "tiene un 40%"; 
 }


 function conditionals2 () {
    let yourName = prompt("Please enter your name");
    let yourAction = prompt("Please choose and action");

    switch (yourAction) {
        case "greet":
            return `Hello ${yourName}`;
            
        case "say bye":
            return `Bye bye, ${yourName}`;
            
        case "ask":
            return `How are you today, ${yourName}`;
            
        case "scream":
            return `AHHHHHHHH!!!!!!!`;
           
        case "rest":
            return `I'm signing off now.`;
            
        default: 
             "I don't know how to do that yet, I'm just a little program :(";
    }
}

//Example for Diego

let arr = [3, 45, "barcelona"];

arr[1] + arr[2].length;


//Homeword -- Class Exercises

//Loop 1

// Crea un for loop que cuente de 0 a 100 i en cada iteración 
// sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado.

function loops1() {
  let count = 0;
    for (let i = 0; i <= 100; i++){
        count += i;
    }
    return count;
}

//Loops 2

// Crea un array de números llamado "numbers" con valores aleatorios. 
// Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. 
// Imprime ambos números en la consola.

function loops2() {
    let number = [22, 13, 209, 4, 6, 89, 19, 1956];
    let min = number[0];
    let max = number[0]; 
                 
     for (let i = 0; i <= number.length; i++){
         if (number[i] > max ){
             max = number[i];
         } else if (number[i] < min){
             min = number[i];                   
         }
     }
     return console.log(`The maximum number is: ${max} and the minimum number is ${min}`);
 }

//Loops 3

//  Utiliza un bucle while para imprimir los números pares del 2 al 20.

function loop3() {
    count = 0;
    while (count <= 20) {
        if (count % 2 === 0) {
            console.log(count);
        }
        count++;
    }
}

//Loops 4

// Crea una variable llamada "numeroAdivinar" con un número entero 
// entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable 
// "numeroIngresado" un número entero obtenido de un 
// array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar 
// hasta que "numeroIngresado" sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número 
// de iteraciones realizadas.


function loops4 () {
    arr = [1,2,3,4,5,6,7,8,9,10];
    let numeroAdivinar = 7;
    let numeroIngresado = 0;
   
    do {
        numeroIngresado === arr[0];
        console.log(`Vuelta de loop numero:${numeroIngresado}`);
        numeroIngresado++;
    } while (numeroIngresado < numeroAdivinar)

    return `Tu numero es el ${numeroIngresado}`;
}