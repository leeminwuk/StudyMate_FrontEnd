import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="어떤 튜너가 필요하신가요?"
        placeholderTextColor="#999"
      />
      <Image
        source={require('../assets/searchicon.png')} // Add the path to your search icon image
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Make the container a row to align TextInput and Image horizontally
    alignItems: 'center', // Align items vertically in the center
    marginLeft: 21,
    width: 350,
    height: 39,
    flexShrink: 0, // Note: flex-shrink is written as flexShrink in React Native
    borderRadius: 12,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Shadow color for iOS with 10% blur
    shadowOffset: { width: 8, height: 4 }, // Shadow offset for iOS
    shadowOpacity: 1, // Shadow opacity for iOS
    shadowRadius: 25, // Shadow radius for iOS
    elevation: 5, // Elevation for Android (similar to boxShadow)
  },
  input: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchIcon: {
    width: 20, // Adjust the width and height as needed for your search icon
    height: 20,
    margin: 10, // Adjust the margin to position the icon
  },
});

export default SearchBar;
