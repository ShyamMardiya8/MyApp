import { View, Text, TouchableOpacity} from "react-native"

const UserData = ({handleClick, styles}) => {
  return (
    <>
    <View>
        <Text>test component</Text>  
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text>click bro</Text>
      </TouchableOpacity>

    </View>
    </>
  )
}

export default UserData