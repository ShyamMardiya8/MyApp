import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import { user } from "../constant/constant";

const List = () => {
  return (
    <>
      <View>
        {/* <FlatList
          data={user}
          renderItem={({ item }) => <Text style={style.item}>name is: {item.name}</Text>}
          keyExtractor={item => item.id}
        /> */}
        <ScrollView>
        {
            user.map((i) => (
                <View key={i.id}>
                     <Text style={style.item}>{i.name}</Text>
                </View>
            ))
        }
        </ScrollView>
      </View>
    </>
  );
};


const style = StyleSheet.create({
    item : {
        fontSize : 24,
        padding: 10,
        backgroundColor : "black",
        color : "white",
        borderWidth : 1,
        margin: 10,
        borderRadius: 20
    }
})
export default List;
