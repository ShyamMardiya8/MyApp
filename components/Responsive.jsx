import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
// const { height } = Dimensions.get('window'); // Or 'screen'

// console.log(height, "height")
const Responsive = () => {
  return (
    <View style=
    {{
        flex: 1
    }}
    >
        <View style={styles.box_1}>
            <View style={styles.box_i_1}>
            </View>
              <View style={styles.box_i_2}>
              </View>
              <View style={styles.box_i_3}>
              </View>
        </View>
        <View style={styles.box_2}>
        </View>
        <View style={styles.box_3}></View>
        <View style={styles.box_4}></View>
    </View>
  )
}


const styles = StyleSheet.create({
    font_1 : {
        fontSize: 20,
        textAlign: "center"
    },
    box_1 : {
        backgroundColor: "red",
         flex : 2,
         flexDirection: "row"
    },
    box_2 : {
        backgroundColor: "green", 
        flex : 1
    },
    box_3 : {
        backgroundColor: "blue", 
        flex : 1
    },
    box_4 : {
        backgroundColor: "yellow",
        flex : 2
    },
    box_i_1 : {
        backgroundColor : "orange",
        flex : 1
    },
    box_i_2 : {
        backgroundColor : "white",
        flex : 1
    },
        box_i_3 : {
        backgroundColor : "green",
        flex : 1
    }
})
export default Responsive
