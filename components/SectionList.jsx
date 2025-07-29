import React from 'react'
import { View,SectionList, Text } from 'react-native'
import { interalData } from '../constant/constant'

const SectionList1 = () => {
  return (
    <>
    <View>
        <SectionList 
        sections={interalData}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section: {name}}) => <Text 
        style={{
            color : "red",
            fontSize: 20
        }}
        >{name}</Text>}
        />
    </View>
    </>
  )
}

export default SectionList1