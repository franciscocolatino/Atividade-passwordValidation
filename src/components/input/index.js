import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

export default function Input({ placeholder, onChangeText, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder={placeholder} 
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}/>
    </View>
  )
}