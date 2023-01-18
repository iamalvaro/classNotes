// Iteration 1: Names and Input

let hackerOne = "Pepito";

let hackerTwo = "Grillo";

console.log(`The driver's name is ${hackerOne}`);
console.log(`The navigator's name is ${hackerTwo}`);

// Iteration 2: Conditionals

function whoHasItLonger() {
    if (hackerOne.length > hackerOne.length) {
        return `The driver has the longest name, it has ${hackerOne.length} characters`;
    } else if (hackerTwo.length > hackerTwo.length) {
        return `The navigator has the longest name, it has ${hackerTwo.length} characters`;
    } else {
        return `Wow, you both have equally long names, ${hackerOne.length} characters`;
    }
}

// Iteration 3: Loops

function nameAlteration() {
  
     hackerOne = hackerOne.toUpperCase().split().join(" ");
     console.log(hackerOne);
     hackerTwo = hackerTwo.split("").reverse().join("");
     console.log(hackerTwo);

     return  hackerOne < hackerTwo ? "The driver's name goes first." 
            : hackerTwo < hackerOne ? "Yo, the navigator goes first definitely."
            : "What?! You both have the same name?"; 
}