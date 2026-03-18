import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const About = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>About This App</Text>
    <Text style={styles.description}>
      This is a simple React Native app that I'm building as part of my learning journey. 
      It demonstrates basic navigation between screens using React Navigation.
    </Text>
    <Text style={styles.version}>Version 1.0.0</Text>
    <Button 
      title="Go Back Home" 
      onPress={() => navigation.goBack()} 
      color="#ff6347"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 24,
    color: '#333'
  },
  version: {
    fontSize: 14,
    marginBottom: 20,
    color: '#666'
  }
});

export default About;
