import React from "react";
import { image, StyleSheet, Text, View } from "react-native";

const Single = ({
    navigation,
    route: {
        params: { item },
    },
}) => (
    <View>
        <View>
            <Image source = {{ uri: '${item.image}' }} />
        </View>
        <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>{item.rating}</Text>
        </View>
        <Text>{item.description}</Text>
        
        <TouchableOpacity onPress = {() => navigation.goBack()}>
            <Text>GO BACK</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    cardText: {
        fontSize: 25,
        color: '#070639',
        textTransform: 'uppercase',
        fontWeight: "bold",
    },
});