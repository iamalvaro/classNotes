console.log("DOM Manipulation Class Continued");
console.log(document);

// Cómo manipular elementos en el DOM
// En esta sección vamos a ver:

//  -  Cómo crear elementos
//  -  Cómo establecer el contenido innerHTML/texto de un elemento
//  -  Cómo añadir un elemento
//  -  Cómo insertar un elemento antes de otro
//  -  Cómo reemplazar un elemento hijo
//  -  Cómo eliminar un elemento hijo

// Cómo crear elementos
// createElement()
// El código en HTML con el ID de #parent muestra un elemento padre con 5 elementos hijos. Supongamos que queremos añadir otra etiqueta div con JavaScript. Definitivamente tendríamos que crear un nuevo elemento con el método createElement(), así:
let createElement = document.createElement("div");
console.log(createElement);

console.log(document.querySelector("#firstchild"));

// Establecer algun texto mediante unos keys de innerHTML o innerTEXT

// usando innerHTML
//innerHML()
// createElement.innerHTML =
//   "JS aunque es dificil al principio es dem cool a la larga :)";

// usando innerText
// innerText()
createElement.innerText =
  "JS aunque es dificil al principio es dem cool a la larga :)";
console.log(createElement);

// Como anexar elementos creados en js al doc de HTML

// Usando appendChild()
// apuntamos a algun elemento del dom que este en el body y vamos a usar un metodo appendCHILD!
// Version - 1 Solo Selector
// let parentElement = document
//   .querySelector("#parent")
//   .appendChild(createElement);

// Version 2 - Añadir Clases
// Usando className property para añadirle una clase
createElement.className = "ejemplo1";
console.log(createElement);

// Cómo insertar un elemento antes de otro
// Si te has dado cuenta en la imagen de registro de la consola de arriba, la etiqueta div anexa se añadió en la parte inferior automáticamente.

// ¿Qué pasa si por alguna razón quieres añadirlo en cualquier lugar de tu elección? Tal vez antes del primer elemento o antes del cuarto elemento. Estoy aquí para decirle que es muy posible. En el código siguiente vamos a añadirlo antes del primer elemento actual.

// Vamos a utilizar el método JavaScript insertBefore() que acepta dos parámetros, el newNode y el existingNode en este orden => document.insertBefore(newNode, existingNode).

// add comment
const parentEl = document.getElementById("parent");
const firstEl = document.getElementById("firstchild");

// add comment
let createElementTwo = document.createElement("div");
let innerText = (createElementTwo.innerText = "I love javascript till I die");

parentEl.insertBefore(createElementTwo, firstEl);

// Cómo reemplazar un elemento hijo
// Vamos a utilizar el método JavaScript replaceChild() que acepta dos parámetros para sustituir nuestro primer elemento por el recién creado. Funciona en este orden => document.replaceChild(newNode, existingNode).

let firstChildElement = document.querySelector("#firstchild");
const parentElReplaceChild = document.getElementById("parent");

let newElement = document.createElement("div");
let innerTextReplaceChild = (newElement.innerText = "I love snowboarding");

parentElReplaceChild.replaceChild(newElement, firstChildElement);

// Cómo eliminar un elemento hijo
// Vamos a utilizar el método JavaScript removeChild() que sólo acepta un parámetro ()que es el elemento que quieres eliminar, que en este caso es nuestro primer elemento original. Funciona en este orden => document.removeChild(element)
let removeParentElement = document.getElementById("parent");
let whatWeWillRemove = document.getElementById("secondchild");
//let whatWeWillRemove = document.getElementsByClassName("secondChild");
removeParentElement.removeChild(whatWeWillRemove);

/// ---------------------------------
// CSS
// Cómo añadir estilo con CSS
// En los ejemplos anteriores vimos cómo crear un elemento y anexarlo al elemento padre especificado.

// Por lo tanto, para que un elemento tenga un estilo tenemos que añadirle una clase CSS. En este caso lo haremos con JavaScript.

// No sólo voy a mostrarte cómo añadir una clase. También te mostraré cómo eliminar una clase y cómo alternar entre clases.

// No te preocupes, no es difícil. Estoy aquí para guiarte a través de todo ello.

// 1. CREAR BOTON
// 2. ESTILOS DENTRO DE UN STYLE
// 3. variable que apunta al boton y darle un evento
// 4. crear funcion

//const buttonElement = document.getElementById("master");

//const addFunction = () => buttonElement.classList.add("my-button");

//buttonElement.addEventListener("click", addFunction);

// Cómo eliminar una clase
// Siguiendo con el mismo ejemplo anterior, vamos a eliminar el estilo CSS, esta vez con classList.remove() en JavaScript. Seguramente has adivinado ya lo que va a pasar, ¿verdad?

// const buttonElementDelete = document.getElementById("master");

// const removeElement = () =>
//   document.querySelector(".box-display").classList.remove("remove-test");

// buttonElementDelete.addEventListener("click", removeElement);

// Cómo alternar una clase
// Digamos que no quieres eliminar el estilo CSS por completo. Quieres una manera de alternar entre el botón con estilo y sin estilo.

// El método JavaScript classList.toggle() le ofrece esa posibilidad.

// El método classList.toggle() se utiliza normalmente en la mayoría de las plataformas de redes sociales como Twitter. Te permite dar "like" a una publicación con un botón y "unlike" con ese mismo botón cuando quieras.

// Así que JavaScript comprueba si nuestro botón tiene la clase CSS.

// Si tiene la clase y haces clic en el botón, lo elimina. Si no tiene la clase y haces clic en el botón, la añade.

const buttonElementToggle = document.getElementById("master");

const toggleFunction = () => {
  document.querySelector(".box-display").classList.toggle("toggle-test");
};

buttonElementToggle.addEventListener("click", toggleFunction);

//* EJERCICIOS

// BLOCK 001
//
// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>
// Solution
// let newEl = document.createComment("p");
// let newInyectionElement = document
//   .querySelector("#insert-p")
//   .appendChild(newEl);

// 2º - Crea un <div id="nested"></div> desde código
// Solution
// let div = document.createElement("div");
// variation01 - using method
//div.setAttribute("id", "nested");

// variation02 - using "id" prop
//div.id = "nested"

// check solution
//console.log(div);

// 3º - Crea contenido de texto del elemento <p></p> creado para introducir el siguiente texto: "Programming is my great"
const createParagraph = document.createElement("p");
document.querySelector("#container").appendChild(createParagraph);
createParagraph.innerHTML = "Programming is great";


//4º - Crea una función que cambie el contenido del texto de un <p></p> en función a una variable string.

//
//
//
//
//
//
// Block 002

// 1º - Crea un elemento de color verde y un botón para cambiar el color de verde a rojo.

// 2º - Crea un elemento <div></div> y asignale una clase "green-box" que haga que sea una caja de 100px de alto y ancho de color verde.

// 3º - Crea una <div class="remove-class"></div> y elimínale la clase mediante js. La clase remove-class debe hacer que el elemento mida 100vw de ancho y 100px de alto y tener un background azul.

// 4º 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>

// 5º - Crea un botón que, al ser pulsado, introduzca una tabla de tres columnas y tres filas.