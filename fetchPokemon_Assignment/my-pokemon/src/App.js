import './App.css';
import React, {useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=1&limit=870')
      // successful return uses .then()
      .then((response) => response.json()) 
      // .then((response) => {
      //   return response.json()
      // }) 
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setPokemon(jsonResponse.results);
      
      })
      // failure return uses .catch()  - we catch the errors
      .catch((error) => {
        console.log("OOPS! Something is not working here");
        console.log(error);
      });

    console.log("Gotta catch em all!");
  }
  
  return (
    <div className="App">
      <button onClick={getPokemon}>Fetch Pokemon!</button>
      {
        pokemon.map((pokemon, index) =>
        <div>
            <hr />
            <h5>Pokemon name: {pokemon.name}</h5>
          </div>
        )
      }
    </div>
  );
}

export default App;
