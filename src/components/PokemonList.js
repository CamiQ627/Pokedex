import { View, Text, FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';
import { WebView } from 'react-native-webview';
import useAuth from '../hooks/useAuth';


export default function PokemonList(props) {
    //console.log(props);
    const { pokemonss, loadPokemons, isNext, isLoading, origen } = props;
    console.log(origen);

     const {auth} = useAuth();

    const loadMore = () => {
      //console.log("Cargando mas...");
      loadPokemons();
    }
  return (

    (auth && (pokemonss == 0)) && origen == 'favs'  ?  (
      <View style={styles.contentFirst}>
      <View style={styles.content} >
   
      <WebView
        source={{ html: '<body style="margin:0;"><img src="https://i.gifer.com/origin/0d/0dea0c59cbf084d981fc5b55643cb6e6.gif" style="width:100%;height:100%"/></body>' }}
        style={{ height: 100, opacity:0.7,
          marginTop:50, marginBottom:30,
          }}
      />
   
      <Text style={styles.text} >No has agregado ningun Pokemon</Text>
   
      </View>
    </View>
    ) : (
      <FlatList 
      data={pokemonss} 
      numColumns={2} 
      showsVerticalScrollIndicator={false} 
      keyExtractor={(pokemon) => String(pokemon.id)} 
      renderItem={({item}) => <PokemonCard pokemon={item} origen={origen} /> } 
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={!isLoading && isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
       isLoading && isNext && (
          <ActivityIndicator 
          size="large" 
          style={styles.spinner} 
          color="#AEAEAE"></ActivityIndicator>
       )
       
      }
   />
    )






 

    
  )
}

const styles = StyleSheet.create({
   flatListContentContainer: {
      paddingHorizontal : 5,
      marginTop: Platform.OS === 'android' ? 30 : 0,
   },
   spinner:{
      marginTop:20,
      marginBottom: Platform.OS === 'android' ? 90 : 60,
   },
   contentFirst:{
      marginVertical:0,
      paddingHorizontal:0,
      backgroundColor:"white",
      width:"100%",
      height:"100%",
     alignItems:"center"
    },
    content:{
      marginTop:100,
      marginVertical:0,
      paddingHorizontal:0,
      backgroundColor:"white",
      width:"70%",
      height:"50%",
      
    },
      text:{
          textAlign:"center",
          marginBottom:10,
          marginTop:0,
          fontSize:20,
          color:"gray"
      },
});