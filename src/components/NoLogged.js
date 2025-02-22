import { View, Text, StyleSheet, Button, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { WebView } from 'react-native-webview';

export default function NoLogged() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.contentFirst}>
      <View style={styles.content} >

      <WebView
        source={{ html: '<body style="margin:0;"><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDRhbmp4cmY2cjB0MW9lYmdheTg3ZTlhMGRjZzA5cGg3a2t2bDgxOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IQebREsGFRXmo/giphy.gif" style="width:100%;height:100%"/></body>' }}
        style={{ height: 100, opacity:0.7,
          marginTop:50, marginBottom:30,
          }}
      />

      <Text style={styles.text} >Para ver esta pantalla tienes que iniciar sesión</Text>
      <Button title='Ir a Cuenta' onPress={ ()=>{navigation.navigate("Account")} } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentFirst:{
    marginVertical:0,
    paddingHorizontal:0,
    backgroundColor:"white",
    width:"100%",
    height:"100%"
  },
  content:{
    marginVertical:0,
    paddingHorizontal:0,
    backgroundColor:"white",
    width:"100%",
    height:"60%"
  },
    text:{
        textAlign:"center",
        marginBottom:10,
        marginTop:0,
        fontSize:18,
          color:"gray"
    },
})