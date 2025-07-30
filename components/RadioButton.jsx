import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { user } from "../constant/constant"
// import { styles } from "../App"


const RadioButton = () => {
  const [radio, setRadio] = useState(1)
  const [value, setValue] = useState('')
  return (
    <View>
      <ScrollView>
{
  user.map((i) => (
          <TouchableOpacity onPress={() => 
          {
            setRadio(i.id)
            setValue(i.name)
          }
          } key={i.id}>
        <View style={styles.radioContainer}>
        <View style={styles.radio}>
          {radio === i.id && (<View style={styles.radioChecked}/>)}
        </View>
        <Text style={styles.radioText}>{i.name}</Text>
        </View>
      </TouchableOpacity>
  ))
}
        <View style={styles.selected}>
          {
            value && (
              <Text>selected value is :{value}</Text>
            )
          }
        </View>
</ScrollView>

{/* 
            <TouchableOpacity onPress={() => setRadio(2)}>
        <View style={styles.radioContainer}>
        <View style={styles.radio}>
          {radio === 2 && (<View style={styles.radioChecked}/>)}
        </View>
        <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  )
}

export default RadioButton


const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 12,
    backgroundColor: "#f0f0f5",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  radio: {
    height: 24,
    width: 24,
    borderColor: "#555",
    borderWidth: 2,
    borderRadius: 12,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  radioChecked: {
    height: 12,
    width: 12,
    backgroundColor: "#3b82f6", // blue
    borderRadius: 6,
  },
  radioText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  selected: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 30
  }
});
