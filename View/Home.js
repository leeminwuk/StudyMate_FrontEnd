import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, Platform } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import styles from './styles'; // Import styles from styles.js
import IconView from './IconView'; // Import the IconView component

const HomeScreen = ({ navigation }) => {
    const handleSearch = () => {
        // Move to the search screen when the search button is pressed
        navigation.navigate('Search');
    };

    const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

    return (
        <View style={[styles.container, { backgroundColor: '#ffffff' }]}>
            <View style={[styles.header, { paddingTop: statusBarHeight }]}>
                <Text style={styles.greeting}>안녕하세요! 이민욱님</Text>
                <Image
                    source={require('../assets/profile.png')}
                    style={styles.profileImage}
                />
            </View>

            <View style={styles.centeredImageContainer}>
                <Image
                    source={require('../assets/homesearch.png')}
                    style={styles.homeSearchImage}
                />
            </View>

            <View style={styles.searchContainer}>
                <Svg width="3" height="22">
                    <Rect width="3" height="22" fill="#468CE7" stroke="#468CE7" strokeWidth="1" />
                </Svg>
                <Text style={styles.searchText}>
                    튜터&튜티 찾아보세요!
                </Text>
                <TouchableOpacity onPress={handleSearch}>
                    <Text style={styles.moreHome}>더보기</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.neomoBox}></View>
        </View>
    );
};

export default HomeScreen;
