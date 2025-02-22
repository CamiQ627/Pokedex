import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, ToastAndroid, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert, Dimensions} from 'react-native'
import { log } from 'react-native-reanimated'

import {useFormik} from "formik"
import * as Yup from "yup"
import {user, userDetails} from "../../utils/userDB";

import useAuth from '../../hooks/useAuth'



import { WebView } from 'react-native-webview';


export default function LoginForm() {

    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    const [error, setError] = useState("");

    const { width, height } = Dimensions.get("window");

    const {login} = useAuth();

    console.log(useAuth().user);

    const formik = useFormik({
        initialValues: initialValuesData(),
        validationSchema: Yup.object(validationSchemaF()),
        validateOnChange: false,
        onSubmit: async (valores) => {
          // await something here...
          setError("")
            console.log("Form enviado");
            //console.log(valores);
            const {username, password} = valores;

            try {
              if(username !== user.username || password !== user.password){
                Alert.alert('', 'El usuario o la contraseña no son correctos', [
               
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              }else{
                login(userDetails);
                console.log("Login correcto");
              }
            } catch (error) {
              //setError("El usuario o la contraseña no son correctos");
                Alert.alert('', 'El usuario o la contraseña no son correctos', [
                
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
                  console.log("El usuario o la contraseña no son correctos");
                  //ToastAndroid.show('El usuario o contraseña son incorrectos', ToastAndroid.SHORT);
            }
        },
       
    })

  return (
    <KeyboardAvoidingView behavior= {(Platform.OS === 'ios')? "padding" : null} keyboardVerticalOffset={Platform.select({ios: 0, android: 500})} >
      
     
      <ScrollView style={{height: height,}}>

        <View style={{flex:1,alignItems:"center"}}>

        <WebView
        source={{ html: '<body style="margin:0;"><img src="https://i.pinimg.com/originals/46/f0/2d/46f02d537a5e849c2c13ad14c9db4343.gif" style="width:100%;height:100%"/></body>' }}
        style={{width: width , height: height * 0.8, 
          
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          }}
      />


<View style={{padding:30,position:"absolute"}}>
          <Image source={require("../../assets/iconpoke.png")}
            style={{width: width * 0.9, height: height * 0.15, 
              alignSelf:"center", marginTop:60, marginBottom:190,
              }}
            >

          </Image>
            

         
          <TextInput placeholder="Usuario"
            style={styles.input}
            autoCapitalize='none'
            value={formik.values.username}
            onChangeText={(text) => formik.setFieldValue("username", text)}
          />
          <TextInput placeholder="Contraseña"
            style={styles.input}
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue("password", text)}
          />
          <AppButton size="sm" backgroundColor="#b81414" title="INGRESAR" onPress={ formik.handleSubmit } />

          <Text style={styles.error} >{formik.errors.username}</Text>
          <Text style={styles.error} >{formik.errors.password}</Text>

          <Text style={styles.error} >{error}</Text>
        </View>


        </View>

      

      
      
        

      
      
      </ScrollView>
      
    </KeyboardAvoidingView>
    
  )
}

function initialValuesData(){
    return {
        username:"",
        password:"",
    }
}

function validationSchemaF(){
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    opacity: 0.5, // Hace que el fondo sea translúcido
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color:"#931010",
  },
  input: {
    height: 48,
    margin: 12,
    borderWidth: 0.1,
    padding: 10,
    borderRadius: 10,
    backgroundColor:"lightblue"
  },
  error:{
    textAlign:"center",
    color:"red",
    marginTop:0,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#2a5d96",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:20,
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  appButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

})