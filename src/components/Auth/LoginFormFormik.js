import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, ToastAndroid, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView  } from 'react-native'
import { log } from 'react-native-reanimated'

import {useFormik} from "formik"
import * as Yup from "yup"
import {user, userDetails} from "../../utils/userDB";

import useAuth from '../../hooks/useAuth'

import { getLogin } from "../../api/escolarex"
import { API_HOST_ESCOLAREX } from "../../utils/constants";


export default function LoginFormFormik() {

    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    const [error, setError] = useState("");

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

            const response = await getLogin(`${API_HOST_ESCOLAREX}/auth/loginCOM?nombreuser=${username}&passuser=${password}`);
            //console.log(response);
            try {
              for await (const usuarioLogeado of response.data){
                console.log(usuarioLogeado.nombreuser);
                if(username !== usuarioLogeado.nombreuser ){
                  
                }else{
                  login(usuarioLogeado);
                  console.log("Login correcto");
                }
              }
            } catch (error) {
              setError("El usuario o la contraseña no son correctos");
                  console.log("El usuario o la contraseña no son correctos");
                  ToastAndroid.show('El usuario o contraseña son incorrectos', ToastAndroid.SHORT);
            }
            /*if(username !== user.username || password !== user.password){
              setError("El usuario o la contraseña no son correctos");
              console.log("El usuario o la contraseña no son correctos");
              ToastAndroid.show('El usuario o contraseña son incorrectos', ToastAndroid.SHORT);
            }else{
              login(userDetails);
              console.log("Login correcto");
            }*/
        },
       
    })

  return (

    <ScrollView>
      <KeyboardAvoidingView behavior= {(Platform.OS === 'ios')? "padding" : null} keyboardVerticalOffset={Platform.select({ios: 0, android: 500})} >
        <View style={{padding:50}}>
          <Image source={require("../../assets/icon.png")}
            style={{width:145, height:145, 
            alignSelf:"center", marginTop:60,
            }}
            >

            </Image>

          <Text style={styles.title}>Iniciar Sesión</Text>
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
      </KeyboardAvoidingView>
    </ScrollView>
    
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
        password: Yup.string().required("La contraaseña es obligatoria"),

    }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  error:{
    textAlign:"center",
    color:"red",
    marginTop:0,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#b81414",
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