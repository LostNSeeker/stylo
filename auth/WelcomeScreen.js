// src/screens/auth/WelcomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Agraham</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Swipe. Match. Slay.</Text>
          <Text style={styles.subtitle}>
            Discover Your Style, One Swipe At A Time.
          </Text>
        </View>
        
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/15/15895.png' }}
            style={styles.phoneIcon}
          />
          <Text style={styles.loginText}>Login with Phone</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.8,
  },
  loginButton: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
  },
  phoneIcon: {
    width: 20,
    height: 20,
  },
});

export default WelcomeScreen;