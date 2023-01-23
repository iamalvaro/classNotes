/*
Ejercicio 1:
Muestra por consola toda la información de tu pokemon favorito usando la API https://pokeapi.co*/

/*
Ejercicio 2:
Permite al usuario introducir un número entre el 0 y el 151, que son los únicos pokemon que merecen la pena. Devuélvele la info del pokemon con la id correspondiente.
*/

let favPokeInfo = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((allPokemon) => {
        // console.log(allPokemon.results[128].name) 
        console.log(allPokemon.results[18].name)
              
      })
      .catch((error) => console.log(error));
  };
  favPokeInfo();

  let searchById = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((ogPoke) =>{
        let pokeID = document.querySelector("#pokemonId").value;
        console.log(ogPoke.results[pokeID].name)
    })
  }


//   fetch("https://pokeapi.co/api/v2/pokemon/${pokeId}") ---ANOTHER APPROACH
