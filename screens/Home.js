import React from 'react';
import { Text, View } from 'react-native';

const Home = ({
    navigation,
}) => (
    <View>
        <Text>Welcome to HomeScreen</Text>
        <Button title= "Go to about" onPress={() => navigation.navigate("Home")}/>
    </View>
);

export default componentName;
