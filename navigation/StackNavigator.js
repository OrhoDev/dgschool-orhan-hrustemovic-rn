import React from "react"

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name = "Home" component = {Home}/>
        <Stack.Screen name = "About" component = {About}/>
    </Stack.Navigator>
);

export default MainStackNavigator