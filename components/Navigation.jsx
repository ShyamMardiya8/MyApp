import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Home = (props) => {
    console.warn(props.route)
    // const {name, age} = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🏠 Home Screen</Text>
        <Text style={styles.subtitle}>Welcome to the Home Page</Text>
        <Text>Get Data From About us {`page : `}</Text>
        <Text>Get Data From About us {`age : `}</Text>
      </View>
    </View>
  );
};

export const About = (props) => {
    const [name, setName] = useState("")
    // const name = "anil"
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>📘 About Screen</Text>
        <Text style={styles.subtitle}>This is the About Page</Text>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home', {name : name, age : 20})}>
          <Text style={styles.buttonText}>Go to Home Page</Text>
        </TouchableOpacity>
        <TextInput placeholder='enter a name' onChangeText={(text) => setName(text)}/> 
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <TouchableOpacity style={styles.headerButton} onPress={() => alert('Clicked')}>
      <Text style={styles.headerButtonText}>🔔</Text>
    </TouchableOpacity>
  );
};

const Navigation = () => {
  const btnAction = () => {
    alert('clicked');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'Home',
            headerRight: () => <Header onPress={btnAction} />,
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 24,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  headerButton: {
    marginRight: 12,
  },
  headerButtonText: {
    fontSize: 20,
    color: 'green',
  },
});
