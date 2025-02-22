import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon"
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  //console.log("pokemons----> ",pokemons);

  useEffect(
    () => {
      //console.log("Hola mundo");
      ( async () => {
        await loadPokemons();
      })()
    }, []
  )

  const loadPokemons = async () => {
    try {
      // inicializamos la "carga" del request
      setLoading(true);

      const response = await getPokemonsApi(nextUrl);
      console.log(response.count);
      

      const pokemonsArray = [];
      for await (const pokemon of response.results){
        console.log(pokemon.url);
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        //console.log(pokemonDetails);
        pokemonsArray.push(
          {
            id:pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order:pokemonDetails.order,
            imagen:pokemonDetails.sprites.other["official-artwork"].front_default
          }
        )

      }

      setPokemon([...pokemons, ...pokemonsArray]);

      setNextUrl(response.next);

    } catch (error) {
      console.error(error);
    }finally {
	    // regresamos loading a false
      setLoading(false);
    }
  }


  return (
    <SafeAreaView>
      <PokemonList 
      pokemonss={pokemons} 
      loadPokemons={loadPokemons} 
      isNext={nextUrl}  
      isLoading={loading}
      origen="pokdx" /> 
      
    </SafeAreaView>
  )
}