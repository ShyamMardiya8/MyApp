// http://192.168.29.185:3000/api/user

import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";

const ApiOperation = () => {
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        phoneNumber : "",
        email : ""
    })

    const handleSubmit = async () => {
        alert(`submitted all data ${data.firstName} ${data.lastName} ${data.email} ${data.phoneNumber}`)

        const body = {
            firstName : data.firstName,
            lastName : data.lastName,
            email : data.email,
            phoneNumber: data.phoneNumber
        }
        
        try{
            const res = await axios.post('http://192.168.29.185:3000/api/user', body)
            alert("posted")
        }
        catch(err){
            console.log(err.message)
            alert(err.message)
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.headerTitle}>Fill This Form</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your First Name"
          placeholderTextColor="#aaa"
          value={data.firstName}
          keyboardType="default"
          onChangeText={(text) => setData({...data, firstName : text})}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Last Name"
          placeholderTextColor="#aaa"
          value={data.lastName}
          keyboardType="default"
          onChangeText={(text) => setData({...data, lastName : text})}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          placeholderTextColor="#aaa"
          value={data.phoneNumber}
          keyboardType="number-pad"
          onChangeText={(text) => setData({...data, phoneNumber : text})}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email Address"
          placeholderTextColor="#aaa"
          value={data.email}
          keyboardType="email-address"
          onChangeText={(text) => setData({...data, email : text})}
        />
      </View>

     <View style={styles.buttonContainer}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#0056b3" // darker on press
        onPress={() => handleSubmit()}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  headerTitle : {
    fontSize : 20,
    textAlign: 'center',
    marginBottom : 20
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
    fontWeight: "600",
    marginLeft: 20,
  },
  innerContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2, // Android shadow
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

});

export default ApiOperation;
