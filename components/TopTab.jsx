import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { About, Home } from './Navigation'
import { View } from 'react-native'

const Tab = createMaterialTopTabNavigator()

const TopTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName

                        if (route.name === 'Home') {
                            iconName = 'home'
                        } else if (route.name === 'About') {
                            iconName = 'info'
                        }

                        return <MaterialIcons name={iconName} size={22} color={color} />
                    },
                    tabBarShowIcon: true,
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                    tabBarActiveTintColor: '#6200ee',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIndicatorStyle: {
                        backgroundColor: '#6200ee',
                        height: 3,
                        borderRadius: 5,
                    },
                    tabBarStyle: {
                        backgroundColor: '#f8f8f8',
                        elevation: 4,
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="About" component={About} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TopTab
