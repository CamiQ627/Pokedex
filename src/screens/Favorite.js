import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import {getPokemonFavoriteApi, isPokemonFavoriteApi} from "../api/favorite"
import { getPokemonDetailsApi} from "../api/pokemon"
import useAuth from "../hooks/useAuth"
import PokemonList from '../components/PokemonList'
import {useFocusEffect} from "@react-navigation/native"
import NoLogged from '../components/NoLogged'

export default function Favorite() {
  const [pokemons, setpokemons] = useState([]);
  const { auth } = useAuth();

  console.log(pokemons);

  useFocusEffect(
    useCallback(() => {
      if(auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();
          
  
          const pokemonsArray = [];
          for await (const id of response){
            const pokemonDetails = await getPokemonDetailsApi(id);
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
  
          setpokemons(pokemonsArray);
  
        })()
      }
    }, [auth])
  )

  /* useEffect(() => {
    if(auth) {
      (async () => {
        const response = await getPokemonFavoriteApi();
        

        const pokemonsArray = [];
        for await (const id of response){
          const pokemonDetails = await getPokemonDetailsApi(id);
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

        setpokemons(pokemonsArray);

      })()
    }
  }, [auth]) */
  
  
  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  }

  return (
    !auth ? <NoLogged /> : <PokemonList pokemonss={pokemons} origen="favs" ></PokemonList>
  )
}