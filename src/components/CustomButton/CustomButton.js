import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    width: '95%',
    padding: 15,
    marginVertical: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 21,
  }
})

export default CustomButton