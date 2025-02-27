import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../utils/getColorByPokemonType'
import {capitalize} from "lodash"
import {useNavigation} from "@react-navigation/native"


export default function PokemonCard(props) {
  const { pokemon, origen } = props
  console.log("origen");
  console.log(origen);
  const pokemonColor = getColorByPokemonType(pokemon.type)
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles}
  const navigation = useNavigation();


  const goToPokemon = () => {
    //console.log(`Vamos al ${pokemon.name}`);
    navigation.navigate( "Pokemonview", {id: pokemon.id} );
    
  }
    return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={bgStyles}>
                    <Text style={styles.number} >#{`${pokemon.order}`.padStart(3,0)}</Text>
                    <Text style={styles.name} >{capitalize(pokemon.name)}</Text>
                    <Image source={{uri:pokemon.imagen}} style={styles.image} />
                </View>
            </View>
            
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        height:130,
    },
    spacing: {
        flex:1,
        padding:5,
    },
    bgStyles:{
        //backgroundColor: "grey",
        flex:1,
        borderRadius:15,
        padding:10,
    },
    image:{
        position:"absolute",
        right:2,
        bottom:2,
        width:90,
        height:90,

    },
    name:{
        //color:"pink",
        color:"#fff",
        fontWeight: "bold",
        fontSize:15,
        paddingTop:10,

    },
    number:{
        position:"absolute",
        right:10,
        top:10,
        color:"#fff",
        fontSize:11,
    }
})