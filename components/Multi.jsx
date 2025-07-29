import { TextInput, View,Text, TouchableOpacity } from "react-native"

const Multi = ({form, setForm, handleClick, style, show, displayClear, handleClear}) => {
  return (
    <View>
      <Text style={{fontSize: 20, color: "blue", fontWeight: "bold"}}>Please fill the Form</Text>
        <TextInput
        placeholder="Enter your Email" 
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => setForm({...form, email: text })}
        style={style.textInput}
        />
        <TextInput
        placeholder="Enter your password" 
        secureTextEntry={true}
        value={form.password}
        onChangeText={(text) => setForm({...form, password: text })}
        style={style.textInput}
        />
        <TouchableOpacity style={style.button} onPress={handleClick}>
          <Text style={style.buttonText}>Submit</Text>
        </TouchableOpacity>
      {displayClear && (
        <TouchableOpacity style={style.buttonClear} onPress={handleClear}>
          <Text style={style.buttonText}>Clear Input</Text>
        </TouchableOpacity>
      )
      }
      {
        show && (
          <View>
            <Text style={{ marginTop: 20, fontSize: 20 }}>Email : {form.email}</Text>
            <Text style={{ marginTop: 20, fontSize: 20 }}>password : {form.password}</Text>
          </View>
        )
      }
    </View>
  )
}

export default Multi