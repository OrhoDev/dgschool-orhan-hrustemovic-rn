import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to My App</Text>
    <Text style={styles.subtitle}>This is the home screen</Text>
    <Button 
      title="Learn More About Us" 
      onPress={() => navigation.navigate("About")} 
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
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666'
  }
});

export default Home;
