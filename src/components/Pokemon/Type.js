import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {map, capitalize} from "lodash"
import getColorByPokemonType from '../../utils/getColorByPokemonType'



export default function Type(props) {
    const {types} = props;
    const color = (type) => getColorByPokemonType(type);

  return (
    <View style={styles.content}>

      {map(types, (item, index) => (
        <View key={index} style={{ backgroundColor: color(item.type.name), ...styles.pill }} >
            <Text style={{color:"#fff"}}> {capitalize(item.type.name)}</Text>
           
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: "grey"
      },
      pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10
      }
})