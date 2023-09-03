import React from 'react';
import { View, Image, TextInput, Button, StyleSheet } from 'react-native'; // Add the necessary imports
import MyKakaoLoginButton from './MyKakaoLoginButton';
import MyGoogleLoginButton from './MyGoogleLoginButton';
import MyFacebookLoginButton from './MyFacebookLoginButton';

const LoginScreen = ({ navigation }) => {
    const handleLogin = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            {/* Load an image file and display it as an Image component */}
            <Image
                source={{ uri: 'file:///Users/leeminuk/react-native/StudyMate/assets/logo.png' }}
                style={styles.image}
            />
            <MyKakaoLoginButton />
            <MyGoogleLoginButton />
            <MyFacebookLoginButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Set the background color to white
    },
    image: {
        width: 250, // Set the desired width of the image
        height: 200, // Set the desired height of the image
        resizeMode: 'contain', // Use 'contain' to fit the entire image without cropping
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default LoginScreen;
