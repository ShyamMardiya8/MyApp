import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const Togggle = () => {
    const [show, setShow] = useState(false)
  return (
    <View>
        <Text>Show Hide Component Code</Text>
        <Button  title='show' onPress={() => setShow(!show)}/>
            {
                show && (
                    <>
                    <Text>showed successfully</Text>
                    {/* <Button title='hide' onPress={() => setShow(false)}/> */}
                    </>
                )
            }
    </View>
  )
}

export default Togggle