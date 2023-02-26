import React from "react";
import { StyleSheet } from "react-native";
import SignInScreen from "./src/screens/SignInScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";




const App = () => {

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name='Welcome' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
})

export default App;