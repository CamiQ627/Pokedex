import { View, Text, StyleSheet, SafeAreaView, Image, Platform } from 'react-native'
import React from 'react'
import { capitalize } from "lodash"
import getColorByPokemonType from "../../utils/getColorByPokemonType"


export default function Header(props) {
    console.log(props);
    const {name, order, image, type} = props
    const color = getColorByPokemonType(type)
    const bgStyle = [{ backgroundColor:color, ...styles.bg }]

  return (
    <>
        <View style={bgStyle} />

        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.name} >{capitalize(name)}</Text>
                <Text style={styles.order} > # {`${order}`.padStart(3, 0)}</Text>
            </View>

            <View style={styles.contentImg} >
                <Image source={{ uri: image}} style={styles.image} /> 
            </View>
        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    
    content:{
        marginHorizontal:20,
        marginTop: Platform.OS === 'android' ? 30 : -20,

    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:40,

    },
    name:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:27,
        
    },
    order:{
        color:"#fff",
        fontWeight:"bold",

    },
    contentImg:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        top: Platform.OS === 'android' ? 20 : -10,
    },
    image: {
        width:250,
        height:300,
        resizeMode:"contain",
    },
    bg:{
        width:"100%",
        height:400,
        position:"absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius:300,
        transform:[{ scaleX:2 }],

    },
})