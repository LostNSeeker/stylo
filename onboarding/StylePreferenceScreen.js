// src/screens/onboarding/StylePreferenceScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styleOptions = ["old money", "basics", "sporty", "goth", "edgy", "classy", "boho"];

const StylePreferenceScreen = ({ navigation }) => {
  const [selectedStyles, setSelectedStyles] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How would you describe your style?</Text>
      <Text style={styles.subtitle}>Choose at least one</Text>

      <View style={styles.tagsContainer}>
        {styleOptions.map((style) => (
          <TouchableOpacity
            key={style}
            style={[
              styles.tag,
              selectedStyles.includes(style) && styles.selectedTag
            ]}
            onPress={() => {
              if (selectedStyles.includes(style)) {
                setSelectedStyles(selectedStyles.filter(s => s !== style));
              } else {
                setSelectedStyles([...selectedStyles, style]);
              }
            }}
          >
            <Text style={[
              styles.tagText,
              selectedStyles.includes(style) && styles.selectedTagText
            ]}>
              {style}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          selectedStyles.length === 0 && styles.disabledButton
        ]}
        disabled={selectedStyles.length === 0}
        onPress={() => navigation.navigate('FinalOnboarding')}
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
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
  },
  selectedTag: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  tagText: {
    fontSize: 16,
  },
  selectedTagText: {
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

export default StylePreferenceScreen;