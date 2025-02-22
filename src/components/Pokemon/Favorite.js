import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
//import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
//import FontAwesome from "react-native-vector-icons/FontAwesome"
import {addPokemonFavorite, getPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi} from "../../api/favorite"


export default function Favorite(props) {

    const {id} = props;
    const [isFavorite, setIsFavorite] = useState(undefined);
    //const Icon = isFavorite ? FontAwesome : FontAwesome5;
    const [reloadCheck, setReloadCheck] = useState(false);

    useEffect(() => {
        (async () =>{
            try {
                const response = await isPokemonFavoriteApi(id);
                setIsFavorite(response);
            } catch (error) {
                setIsFavorite(false);
            }
        })()
    }, [id, reloadCheck])
    

    const onReloadCheckFavorite = () => {
        setReloadCheck((prev) => !prev);
    }

    const getFav = async () => {
        const response = await getPokemonFavoriteApi();
        console.log(response);
    }

    const addFavorite = async () => {
        console.log('add to favorite', id);
        
        try {
            await addPokemonFavorite(id);
            onReloadCheckFavorite();
        } catch (error) {
            console.log(error);
        }
    }

    const removeFavorite = async () => {
        console.log("Eliminar de favs");
        try {
            await removePokemonFavoriteApi(id);
            onReloadCheckFavorite();
        } catch (error) {
            console.log(error);
        }
    }

  return (

        <Icon
            name='heart'
            color='#fff'
            size={20}
            onPress={isFavorite ? removeFavorite : addFavorite}
            solid={isFavorite}
        />
       
  )
}