import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native'



interface propsInterface {
}


function HomeScreen(props: propsInterface) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >您好这是我的第一个应用!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 27,
    color: 'red',
    fontWeight: '500',
  }
})

export default HomeScreen
