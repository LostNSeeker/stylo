// src/screens/onboarding/NotificationsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enable Notifications to save money</Text>
      <Text style={styles.subtitle}>Pinky promise we never spam</Text>

      <View style={styles.notificationBox}>
        <Text style={styles.notificationTitle}>
          When your favorites go on sale
        </Text>
        <Text style={styles.notificationSubtitle}>
          But you're free to accept or refuse
        </Text>
        
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Don't Allow</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.optionButton, styles.allowButton]}
            onPress={() => navigation.navigate('BrandsSelection')}
          >
            <Text style={styles.allowButtonText}>Allow</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('BrandsSelection')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  notificationBox: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 15,
    marginVertical: 20,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  optionButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  allowButton: {
    backgroundColor: '#000',
  },
  optionButtonText: {
    fontSize: 16,
    color: '#000',
  },
  allowButtonText: {
    fontSize: 16,
    color: '#fff',
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

export default NotificationsScreen;