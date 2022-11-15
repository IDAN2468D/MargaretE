import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Welcome, Walkthrough, AuthMain } from './screens';
import 'react-native-reanimated'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"welcome"}
      >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Walkthrough' component={Walkthrough} />
        <Stack.Screen name='AuthMain' component={AuthMain} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})