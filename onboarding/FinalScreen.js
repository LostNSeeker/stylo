// src/screens/onboarding/FinalScreen.js
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const FinalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {Array(6).fill(0).map((_, index) => (
          <Image
            key={index}
            source={{ uri: `https://picsum.photos/200/300?random=${index}` }}
            style={styles.image}
          />
        ))}
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Agraham</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MainApp')}
      >
        <Text style={styles.buttonText}>Start Swiping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: '33.33%',
    height: '50%',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 30,
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default FinalScreen;