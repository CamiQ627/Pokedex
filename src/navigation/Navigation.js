
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import FavoriteScreen from '../screens/Favorite';
import PokedexScreen from '../screens/Pokedex';
import AccountScreen from '../screens/Account';
import Icon from "react-native-vector-icons/FontAwesome5";
import {Image} from "react-native"
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();


export default function Navigation() { 
    return (
      <Tab.Navigator initialRouteName='Pokedex' >
         {/*<Tab.Screen 
            name="Pokedex"
            component={PokedexNavigation}
            options={{
              headerShown: false,
              tabBarLabel: "Inicio",
              tabBarIcon: () => renderLogoEscolarex(),
              title: "Pokedex"
            }}
          /> 

          */}

          

          <Tab.Screen 
            name="Favourites" 
            component={FavoriteNavigation}
            options={{
              headerShown: false,
              tabBarLabel: "Favoritos",
              tabBarIcon: ({color, size}) => (
                <Icon name='heart' color={color} size={size} />
              ),
              title: "Favoritos",
            }}
          />
  
          <Tab.Screen 
            name="Pokedex"
            component={PokedexNavigation}
            options={{
              headerShown: false,
              tabBarLabel: "",
              tabBarIcon: () => renderLogo(),
              title: "Pokedex"
            }}
          />
  
          <Tab.Screen 
            name="Account"
            component={AccountScreen}
            options={{
              headerTintColor:"#fff",
              headerStyle: {
                backgroundColor: '#fff'
             },
              tabBarLabel: "Cuenta",
              tabBarIcon: ({color, size}) => (
                <Icon name='user' color={color} size={size} />
              ),
              title: "Cuenta"
            }}
          />   



          

      </Tab.Navigator>
    );
  }


function renderLogo(){
    return (
        <Image source={require("../assets/web.png")}
        style={{width:75, height:75, top:-15}}
        >

        </Image>
    )
}

function renderLogoEscolarex(){
  return (
      <Image source={require("../assets/web.png")}
      style={{width:35, height:35, top:0}}
      >

      </Image>
  )
}