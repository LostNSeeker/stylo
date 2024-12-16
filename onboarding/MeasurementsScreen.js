// src/screens/onboarding/MeasurementsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MeasurementsScreen = ({ navigation }) => {
  const [measurements, setMeasurements] = useState({
    hip: 41,
    waist: 32,
    bust: 39,
  });
  const [fitPreference, setFitPreference] = useState('true-to-size');

  const adjustMeasurement = (type, increment) => {
    setMeasurements(prev => ({
      ...prev,
      [type]: prev[type] + (increment ? 1 : -1),
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Measurements</Text>
      <Text style={styles.subtitle}>Round to the nearest inch</Text>

      {Object.entries(measurements).map(([type, value]) => (
        <View key={type} style={styles.measurementRow}>
          <Text style={styles.measurementType}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
          <View style={styles.controls}>
            <TouchableOpacity
              onPress={() => adjustMeasurement(type, false)}
              style={styles.controlButton}
            >
              <Text style={styles.controlText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.measurementValue}>{value}</Text>
            <TouchableOpacity
              onPress={() => adjustMeasurement(type, true)}
              style={styles.controlButton}
            >
              <Text style={styles.controlText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={styles.fitPreference}>
        <Text style={styles.fitTitle}>My preferred fit is...</Text>
        <View style={styles.fitOptions}>
          <TouchableOpacity
            style={[
              styles.fitOption,
              fitPreference === 'tight' && styles.selectedFit,
            ]}
            onPress={() => setFitPreference('tight')}
          >
            <Text>Tight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.fitOption,
              fitPreference === 'true-to-size' && styles.selectedFit,
            ]}
            onPress={() => setFitPreference('true-to-size')}
          >
            <Text>True to size</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.fitOption,
              fitPreference === 'oversized' && styles.selectedFit,
            ]}
            onPress={() => setFitPreference('oversized')}
          >
            <Text>Oversized</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Notifications')}
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
  measurementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  measurementType: {
    fontSize: 18,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  controlButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlText: {
    fontSize: 24,
  },
  measurementValue: {
    fontSize: 20,
    fontWeight: '500',
    width: 40,
    textAlign: 'center',
  },
  fitPreference: {
    marginTop: 40,
  },
  fitTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  fitOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fitOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 15,
    width: '30%',
    alignItems: 'center',
  },
  selectedFit: {
    borderColor: '#000',
    backgroundColor: '#000',
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

export default MeasurementsScreen;