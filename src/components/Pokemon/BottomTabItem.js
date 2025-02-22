import { Pressable, StyleSheet, Text, Image, View } from "react-native"; 
import React from "react"; 

const BottomTabItem = (props) => { 
  const badgeCount = 3;
	return ( 
    <View style={{ width: 24, height: 24, margin: 5 }}>
    <Image source={images.bottom_notification} style={{ tintColor: "blue" }} />
    <View
      style={{
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: 'red',
        padding: 3,
        borderRadius: 6,
        // width: 12,
        // height: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
        {badgeCount}
      </Text>
    </View>
</View>
	); 
}; 

  
  export default BottomTabItem;