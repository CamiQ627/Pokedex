
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator //screenOptions={{ headerShown: false }}
    >
        
        <Stack.Screen 
            name="PokedexChild" 
            component={PokedexScreen}
            options={{
                headerShown: false
            }} 
        />
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
  );
}