import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import FavoriteScreen from '../screens/Favorite'
import PokemonScreen from "../screens/Pokemon"

const Stack = createNativeStackNavigator()

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Favoritte' component={FavoriteScreen} options={{
                //headerShown: false,
                title: "Favoritos",
              
            }} /> 
      <Stack.Screen 
            name="Pokemonview" 
            component={PokemonScreen}
            options={{
              //headerShown: false,
              title: "",
                  headerShown: true,
                  headerTransparent: true,
                  headerShadowVisible: false
          }}
        />
    </Stack.Navigator>
  )
}