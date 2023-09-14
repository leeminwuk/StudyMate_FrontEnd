import React from 'react';
import { View, Image, StatusBar, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

const IconView = () => {
    const icons = [
        { name: '예체능', image: require('../assets/sports.png') },
        { name: '정경', image: require('../assets/management.png') },
        { name: '공대', image: require('../assets/ict.png') },
        { name: '글로벌', image: require('../assets/global.png') },
        { name: '복지', image: require('../assets/weltech.png') },
        { name: '사범', image: require('../assets/study.png') },
    ];

    const handleIconPress = (name) => {
        // Handle icon press (you can navigate to a new screen or perform other actions)
        console.log(`Icon "${name}" is pressed.`);
    };

    return (
        <>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.container} horizontal showsHorizontalScrollIndicator={false}>
                {icons.map((icon) => (
                    <TouchableOpacity key={icon.name} style={[styles.iconContainer, styles[icon.name.toLowerCase()]]} onPress={() => handleIconPress(icon.name)}>
                        <View style={styles.iconContent}>
                            <Image source={icon.image} style={styles.iconImage} />
                            <Text style={[styles.iconText, styles.customButtonText]}>{icon.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Background color for the view
    },
    iconContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContent: {
        flexDirection: 'row',
        alignItems: 'center', // Center items horizontally
        padding: 8,
        borderRadius: 11,
        backgroundColor: '#F4F4F4',
    },
    iconImage: {
        width: 20, // Adjust the width and height of the icon image as needed
        height: 20,
        resizeMode: 'contain',
    },
    iconText: {
        marginLeft: 6, // Add some space between image and text
        fontSize: 12,
        textAlign: 'center',
    },
    예체능: {
        borderRadius: 15,
        marginLeft: 10,
    },
    정경: {
        borderRadius: 15,
        marginLeft: 10,
    },
    공대: {
        borderRadius: 15,
        marginLeft: 10,
    },
    글로벌: {
        borderRadius: 15,
        marginLeft: 10,
    },
    복지: {
        borderRadius: 15,
        marginLeft: 10,
    },
    사범: {
        borderRadius: 15,
        marginLeft: 10,
        marginRight: 10,
    },
});

export default IconView;
