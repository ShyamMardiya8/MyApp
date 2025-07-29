import { TextInput, Text, Button } from "react-native"


const Input = ({styles, handleOnchange, value, handleClear}) => {
  return (
    <>
    <TextInput
    placeholder="enter your name"
    style={styles.textInput}
    value={value}
    onChangeText={(text) => handleOnchange(text)}
    />
    <Button title="clear input field" onPress={handleClear}/>
    <Text>your entered Value : {value}</Text>
    </>
  )
}

export default Input