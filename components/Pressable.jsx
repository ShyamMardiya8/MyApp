import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../App'

const Press = () => {
  return (
    <View>
        <Pressable style={styles.button} 
        // onPress={() => console.warn("pressed")}
        // onLongPress={() => console.warn("long pressed")}
        onPressIn={() => console.warn("on press in")}
        onPressOut={() => console.warn("on press out")}
        >
            <Text style={styles.buttonText}>click to use pressable</Text>
        </Pressable>
    </View>
  )
}

export default Press