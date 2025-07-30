import React, { useState } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
// import { styles } from '../App'

const Activity = () => {
    const [loading, setLoading] = useState(false)
  return (
    <View>
        <Text>Activity</Text>
        
        <Button title='click to show loader' onPress={() => setLoading(!loading)}/>
        {
            loading && <ActivityIndicator size={40} color="blue" />
        }
    </View>
  )
}

export default Activity

