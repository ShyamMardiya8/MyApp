import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from '../App'

export const Buttons = () => {
  return (
    <View>
      <TouchableHighlight style={styles.button} 
      onPress={() => alert("click")}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
    </View>
  )
}
