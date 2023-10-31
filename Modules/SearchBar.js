import React from 'react';
import { View, TextInput, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="어떤 튜너가 필요하신가요?"
        placeholderTextColor="#999"
      />
      <Image
        source={require('../assets/searchicon.png')} 
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 21,
    marginTop: 8,
    width: "90%",
    height: 39,
    flexShrink: 0, 
    borderRadius: 12,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)', 
    shadowOffset: { width: 8, height: 4 },
    shadowOpacity: 1, 
    shadowRadius: 25,
    elevation: 5, 
  },
  input: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchIcon: {
    width: 20, 
    height: 20,
    margin: 10,
  },
});

export default SearchBar;
