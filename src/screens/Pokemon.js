import { View, Text, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import {getPokemonDetailsApi} from "../api/pokemon";
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorite from '../components/Pokemon/Favorite';
import useAuth from '../hooks/useAuth';


export default function Pokemon(props) {
  
  const { navigation, route:{params} } = props
  //console.log(params.id);

  const [pokemon, setPokemon] = useState(null);
  const {auth} = useAuth();

  useEffect(() => {
    navigation.setOptions({
      //headerRight: () => null,
      //headerRight: () => auth && <Favorite />,
      headerRight: () => (auth ? <Favorite id={pokemon?.id} /> : undefined),
      headerLeft: () => (
        <Icon 
        name="arrow-left" 
        color="#fff" 
        size={20} 
        style={{marginLeft:5}}
        onPress={navigation.goBack} />
      )
    })
  }, [navigation, params, pokemon] )

  useEffect(
    () => {
      (async () => {
        try {
          const response = await getPokemonDetailsApi(params.id);
          setPokemon(response); //info de todo el pokemon

        } catch (error) {
          navigation.goBack();
        }
      })()
    }, 
    [params]
    )

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header 
      name={pokemon.name} 
      order={pokemon.order} 
      image={pokemon.sprites.other["official-artwork"].front_default} 
      type={pokemon.types[0].type.name}
      />

      <Type types={pokemon.types} ></Type>
      <Stats stats={pokemon.stats} ></Stats>
    </ScrollView>
  )
}