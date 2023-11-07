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
    marginRight: 24,
    width:"auto",
    height: "auto",
    flexShrink: 0, 
    borderRadius: 12,
    backgroundColor: '#FFF',
    elevation: 1, 
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
