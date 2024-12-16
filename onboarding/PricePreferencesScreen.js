// src/screens/onboarding/PricePreferencesScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const priceRanges = [
  '$0-50',
  '$50-100',
  '$100-200',
  '$200-300',
  '$500+',
];

const PricePreferencesScreen = ({ navigation }) => {
  const [selectedRanges, setSelectedRanges] = useState([]);

  const toggleRange = (range) => {
    if (selectedRanges.includes(range)) {
      setSelectedRanges(selectedRanges.filter(r => r !== range));
    } else {
      setSelectedRanges([...selectedRanges, range]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price Preferences</Text>
      <Text style={styles.subtitle}>
        This helps curate your feed but doesn't set strict limits
      </Text>

      <View style={styles.rangesContainer}>
        {priceRanges.map((range) => (
          <TouchableOpacity
            key={range}
            style={[
              styles.rangeButton,
              selectedRanges.includes(range) && styles.selectedRange,
            ]}
            onPress={() => toggleRange(range)}
          >
            <Text style={[
              styles.rangeText,
              selectedRanges.includes(range) && styles.selectedRangeText,
            ]}>
              {range}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Measurements')}
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
  rangesContainer: {
    gap: 15,
  },
  rangeButton: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 25,
    padding: 15,
  },
  selectedRange: {
    borderColor: '#000',
    backgroundColor: '#000',
  },
  rangeText: {
    fontSize: 16,
    textAlign: 'center',
  },
  selectedRangeText: {
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

export default PricePreferencesScreen;