function solicitudAJAX() {
  var url = "https://pokeapi.co/api/v2/pokemon/";
  let tarjetas = document.querySelector("#nPokemon");
  var objXMLHttpRequest = new XMLHttpRequest();

  objXMLHttpRequest.onreadystatechange = function () {
    if (objXMLHttpRequest.readyState === 4) {
      if (objXMLHttpRequest.status === 200) {
        let json = JSON.parse(objXMLHttpRequest.responseText);
        console.dir(json);

        tarjetas.data = json;
        for (let i = 0; i < json.results.length; i++) {
          buscarPorURL(json.results[i].url);
        }
      } else {
        alert("Error Code: " + objXMLHttpRequest.status);
        alert("Error Message: " + objXMLHttpRequest.statusText);
      }
    }
  };
  objXMLHttpRequest.open("GET", url);
  objXMLHttpRequest.send();
}

function buscarPorURL(urlPokemon) {
  var objXMLHttpRequest = new XMLHttpRequest();
  let div = document.querySelector("#ConteinerCard");

  objXMLHttpRequest.onreadystatechange = function () {
    if (objXMLHttpRequest.readyState === 4) {
      if (objXMLHttpRequest.status === 200) {
        let json = JSON.parse(objXMLHttpRequest.responseText);
        let nombre = json.name;
        let uriImg = json.sprites.other.home.front_default;

        // URL específica para cada Pokémon
        let pokemonId = json.id; // Obtiene el ID del Pokémon
        let pokemonUrls = {
         1: 'https://www.pokemon.com/el/pokedex/bulbasaur',
         2: 'https://www.pokemon.com/el/pokedex/ivysaur',
         3: 'https://www.pokemon.com/el/pokedex/venusaur',
         4: 'https://www.pokemon.com/el/pokedex/charmander',
         5: 'https://www.pokemon.com/el/pokedex/charmeleon',
         6: 'https://www.pokemon.com/el/pokedex/charizard',
         7: 'https://www.pokemon.com/el/pokedex/squirtle',
         8: 'https://www.pokemon.com/el/pokedex/wartortle',
         9: 'https://www.pokemon.com/el/pokedex/blastoise',
         10:'https://www.pokemon.com/el/pokedex/caterpie',
         11:'https://www.pokemon.com/el/pokedex/metapod',
         12:'https://www.pokemon.com/el/pokedex/butterfree',
         13:'https://www.pokemon.com/el/pokedex/weedle',
         14:'https://www.pokemon.com/el/pokedex/kakuna',
         15:'https://www.pokemon.com/el/pokedex/beedrill',
         16:'https://www.pokemon.com/el/pokedex/pidgey',
         17:'https://www.pokemon.com/el/pokedex/pidgeotto',
         18:'https://www.pokemon.com/el/pokedex/pidgeot',
         19:'https://www.pokemon.com/el/pokedex/rattata',
         20:'https://www.pokemon.com/el/pokedex/raticate',
          // Agrega más mappings según sea necesario
        };
        let pokedexUrl = pokemonUrls[pokemonId] || '#'; // URL específica o fallback

        let html =
          `<div class="card" style="width: 18rem;">
  <img src="` +
          uriImg +
          `" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">` +
          nombre +
          `</h5>
    <p class="card-text"></p>
    <a href="` +
          pokedexUrl +
          `" class="btn btn-primary" target="_blank">Pokedex</a>
  </div>
</div>`;
        div.innerHTML += html; // Usa += para agregar más tarjetas sin reemplazar
        console.log(div);
      } else {
        alert("Error Code: " + objXMLHttpRequest.status);
        alert("Error Message: " + objXMLHttpRequest.statusText);
      }
    }
  };
  objXMLHttpRequest.open("GET", urlPokemon);
  objXMLHttpRequest.send();
}

function buscar() {
  let tarjetas = document.querySelector("#ConteinerCard");
  var data = document.querySelector("#nPokemon").data;
  var busqueda = document.querySelector("#nPokemon").value - 1;
  var url = data.results[busqueda].url;

  if (busqueda >= 0) {
    var objXMLHttpRequest = new XMLHttpRequest();

    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.name;
          let uriImg = json.sprites.other.home.front_default;

          // URL específica para cada Pokémon
          let pokemonId = json.id;
          let pokemonUrls = {
            1: 'https://www.pokemon.com/el/pokedex/bulbasaur',
            2: 'https://www.pokemon.com/el/pokedex/ivysaur',
            3: 'https://www.pokemon.com/el/pokedex/venusaur',
            4: 'https://www.pokemon.com/el/pokedex/charmander',
            5: 'https://www.pokemon.com/el/pokedex/charmeleon',
            6: 'https://www.pokemon.com/el/pokedex/charizard',
            7: 'https://www.pokemon.com/el/pokedex/squirtle',
            8: 'https://www.pokemon.com/el/pokedex/wartortle',
            9: 'https://www.pokemon.com/el/pokedex/blastoise',
            10:'https://www.pokemon.com/el/pokedex/caterpie',
            11:'https://www.pokemon.com/el/pokedex/metapod',
            12:'https://www.pokemon.com/el/pokedex/butterfree',
            13:'https://www.pokemon.com/el/pokedex/weedle',
            14:'https://www.pokemon.com/el/pokedex/kakuna',
            15:'https://www.pokemon.com/el/pokedex/beedrill',
            16:'https://www.pokemon.com/el/pokedex/pidgey',
            17:'https://www.pokemon.com/el/pokedex/pidgeotto',
            18:'https://www.pokemon.com/el/pokedex/pidgeot',
            19:'https://www.pokemon.com/el/pokedex/rattata',
            20:'https://www.pokemon.com/el/pokedex/raticate',
          
           // Agrega más mappings según sea necesario
          };
          let pokedexUrl = pokemonUrls[pokemonId] || '#'; // URL específica o fallback

          let html =
            `<div class="card" style="width: 18rem;">
  <img src="` +
            uriImg +
            `" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">` +
            nombre +
            `</h5>
    <p class="card-text"></p>
    <a href="` +
            pokedexUrl +
            `" class="btn btn-primary" target="_blank">Pokedex</a>
  </div>
</div>`;
          tarjetas.innerHTML = html;
        } else {
          alert("Error Code: " + objXMLHttpRequest.status);
          alert("Error Message: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", url);
    objXMLHttpRequest.send();
  } else {
    alert("Debe ingresar un numero de 1 a 20 para obtener un Pokemon valido");
  }
}
