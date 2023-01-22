// Ej. 1
// Dada la string que tenéis a continuación, haced los console.log() correspondientes para conseguir los siguientes outputs:
let stringToLog = "    JavaScript is fun! ";
stringToLog.length// 23
stringToLog.trim()// 'JavaScript is fun!'
stringToLog.toLowerCase().split("s")// ['java', 'cript i', ' fun!']
stringToLog.toUpperCase()// 'JAVASCRIPT IS FUN!'
stringToLog.charAt(18)// 'f'
stringToLog.substring(0, 5).length// 5
stringToLog.slice(0, 15).length// 15
stringToLog.trim().replace("Javascript", "CSS")// 'CSS is fun!'

// Ej. 2 Dada la string stringToChange, modificadla de tal manera que los console.log() devuelvan los outputs comentados.
const original = "Hello world!";
let stringToChange = "Hello world!";
stringToChange.slice(0, 5)
console.log(stringToChange.endsWith("o")); // true
stringToChange.slice(6, -1)
console.log(stringToChange.charAt(3)); // 'r'
stringToChange.substring(0, 5).toLowerCase()
console.log(stringToChange.includes("hello")); // true
stringToChange.substring(0, 5)
console.log(stringToChange.lastIndexOf("o")); // 4
stringToChange.substring(0, 7)
console.log(stringToChange.indexOf("w")); // -1


// ---------------- EJERCICIOS ----------------

/*Ejercicio 1
En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día un usuario. 
Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. ¿Cómo mostrarías esa cifra correctamente para el usuario?
*/
// let bankaccount = 3100;
// let dailyRevenue = (bankaccount/30).toPrecision(2);

let bankAccount = 3100;

let dailyRevenue = bankAccount/30
  
let bankDisplay = dailyRevenue.toFixed(2);

console.log(bankDisplay)

/*Ejercicio 2
En una página de diseño quieren crear una paleta de colores, 
para ello quieren coger un elemento representado de forma hexadecimal y sumarle 336655. 
Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00. 
Haz un ejemplo con el color #0000ff sabiendo que cada canal R-G-B corresponde, en orden, 
a las cifras de dos en dos. R = 00, G=00, B=ff. 
*/

let colorR = 0;
let colorG = 0;
let colorB = 255;

colorR += 33;
colorG += 66;
colorB += 55;

console.log(colorB)

colorB -= 255;

console.log(colorB)

console.log( "hexadecimal:" + colorB, typeof (colorB));

colorB - colorB.toString(16) // .partseInt(16)

let newColor = "#" + colorR.toString(16) + colorG.toString(16) + colorB.toString(16);

console.log(typeof(newColor) + " " + newColor);

