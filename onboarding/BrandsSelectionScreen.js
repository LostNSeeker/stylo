// src/screens/onboarding/BrandsSelectionScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const BrandsSelectionScreen = ({ navigation }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate loading
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.loadingText}>Loading brands...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Start!</Text>
      <Text style={styles.subtitle}>Pick 3 or more brands you love</Text>

      <View style={styles.brandsGrid}>
        {Array(16).fill(0).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.brandCircle,
              selectedBrands.includes(index) && styles.selectedBrand
            ]}
            onPress={() => {
              if (selectedBrands.includes(index)) {
                setSelectedBrands(selectedBrands.filter(i => i !== index));
              } else {
                setSelectedBrands([...selectedBrands, index]);
              }
            }}
          />
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          selectedBrands.length < 3 && styles.disabledButton
        ]}
        disabled={selectedBrands.length < 3}
        onPress={() => navigation.navigate('StylePreference')}
      >
        <Text style={styles.buttonText}>
          {selectedBrands.length < 3 
            ? `Select ${3 - selectedBrands.length} more brands`
            : 'Continue'
          }
        </Text>
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
  loadingContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
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
  brandsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  brandCircle: {
    width: '22%',  // Slightly less than 25% to account for spacing
    aspectRatio: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 15,
  },
  selectedBrand: {
    borderColor: '#000',
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
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
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default BrandsSelectionScreen;