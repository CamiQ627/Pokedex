import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    console.log(props);
    const { navigation } = props;
    const goToPage = () => {
        navigation.navigate("Settings")
    }
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToPage} title="Ir a Ajustes"></Button>
    </SafeAreaView>
  )
}