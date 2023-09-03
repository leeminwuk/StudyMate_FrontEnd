import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook


const MyGoogleLoginButton = () => {
    // Replace the handleGoogleLogin function with your actual Google login logic
    const navigation = useNavigation(); // Get the navigation object using the useNavigation hook

    const handleGoogleLogin = () => {
        console.log('Google login clicked!');
        // Implement the Google login logic here
        navigation.navigate('Home');

    };

    return (
        <TouchableOpacity
            onPress={handleGoogleLogin}
            style={{
                width: 300,
                height: 44,
                borderRadius: 5,
                marginBottom: 8,
                fontSize: 12,
                color: '#4a4a4a',
                backgroundColor: '#ffffff', // White background color for Google
                shadowColor: '#9b9b9b',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <Text style={{ marginLeft: 50, marginRight: 26, marginTop: 6, marginBottom: 6, color: '#000000' }}>
                구글로 로그인하기
            </Text>
        </TouchableOpacity>
    );
};

export default MyGoogleLoginButton;
