import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import NewComponent from './components/NewComponent';
import Navigation from './components/Navigation';
import Tab from './components/Tab';
import TopTab from './components/TopTab';
import Api from './components/Api';
import ApiOperation from './components/ApiOperation';

export default function App() {
 
  return (
    <ApiOperation />
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
