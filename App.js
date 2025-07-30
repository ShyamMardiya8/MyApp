import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet} from 'react-native';
// import UserData from './components/UserData';
// import Input from './components/TextInput';
// import MultipleInput from './components/Multi';
// import List from './components/List';
// import Grid from './components/Grid';
// import SectionList1 from './components/SectionList';
// import Togggle from './components/Togggle';
// import Responsive from './components/Responsive';
// import { Buttons } from './components/Buttons';
// import RadioButton from './components/RadioButton';
// import Activity from './components/Activity';
// import Model from './components/Model';
// import Press from './components/Pressable';
// import StatusBarComponent from './components/StatusBar';
import NewComponent from './components/NewComponent';

export default function App() {
  // const [show, setShow] = useState(false);
  // const [displayClear, setDisplayClear] = useState(false)
  // const [form, setForm] = useState({
  //   email : "",
  //   password : ""
  // })

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
    // <View style={styles.fullScreenWrapper}>
      <NewComponent />
    // </View> 
  );
}

export const styles = StyleSheet.create({
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
    alignItems: "center",
    justifyContent: "center"
    // flexDirection: "row"
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
