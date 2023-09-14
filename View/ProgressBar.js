import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBar}>
      <View
        style={[styles.progressFill, { width: `${progress}%` }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    marginLeft: 40,
    width: 284,
    opacity: 0.9,
    height: 24,
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    borderRadius: 10,
    height: '100%',
    backgroundColor: '#5884E8',
  },
});

export default ProgressBar;