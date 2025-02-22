import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import NavigationDrawer from "./src/navigation/NavigationDrawer";

import Navigation from "./src/navigation/Navigation";
//import Navigation from "./src/navigation/NavigationPokedex";
//import Navigation from "./src/navigation/NavigationMainEscolarex";

import {AuthProvider} from "./src/context/AuthContext"

export default function App() {
  return (
    <NavigationContainer>
      
      {
        /* <View style={styles.container}>
        <Text>Que chimba esto mka</Text>
      </View>  
      
      <NavigationDrawer></NavigationDrawer>*/
      }

      <AuthProvider>
          <Navigation /> 
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
