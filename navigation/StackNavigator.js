import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: "#ff6347",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{ title: "My App Home" }}
    />
    <Stack.Screen 
      name="About" 
      component={About} 
      options={{ title: "About" }}
    />
  </Stack.Navigator>
);

export default MainStackNavigator;