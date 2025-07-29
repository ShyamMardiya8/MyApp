import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import UserData from './components/UserData';
import Input from './components/TextInput';
import MultipleInput from './components/Multi';
import List from './components/List';
import Grid from './components/Grid';
import SectionList1 from './components/SectionList';
import Togggle from './components/Togggle';
import Responsive from './components/Responsive';

export default function App() {
  const [show, setShow] = useState(false);
  const [displayClear, setDisplayClear] = useState(false)
  const [form, setForm] = useState({
    email : "",
    password : ""
  })

  // useEffect(() => {
  //   if (form.email !== "" && form.password !== "") {
  //     setDisplayClear(true)
  //   }
  //   else{
  //     setDisplayClear(false)
  //   }
  // },[form])

  // const handleClick = () => {
  //   setShow(true)
  //   alert(`your submit data email: ${form.email} password: ${form.password}`)
  // };


  // const handleClear = () => {
  //   setForm({
  //     email : "",
  //     password : ""
  //   })
  //   setDisplayClear(false)
  //   setShow(false)
  // }

  return (
    <View style={styles.fullScreenWrapper}>
      {/* <Text style={styles.mb_10}>Hello world</Text>
      <Text style={styles.mb_10}>clicked total times : {count}</Text>
      <Input styles={styles} handleOnchange={handleOnchange} value={name} handleClear={handleClear}/>
      <UserData styles={styles} count={count} setCount={setCount} handleClick={handleClick}/>  */}
      {/* <MultipleInput form={form} setForm={setForm} handleClick={handleClick} style={styles} show={show} displayClear={displayClear} handleClear={handleClear}/> */}
      {/* <List /> */}
      {/* <Grid /> */}
      {/* <SectionList1 /> */}
      {/* <Togggle /> */}
      <Responsive />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mb_10: {
    marginBottom: 10,
    marginTop: 50,
    marginLeft : 10,
    marginRight: 10
  },
    fullScreenWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 100,
    marginBottom: 10,
  },
  buttonClear: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 100,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput :{
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "blue",
    width: "100%"
  }
});
