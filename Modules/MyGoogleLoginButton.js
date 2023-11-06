import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyGoogleLoginButton = () => {
    const navigation = useNavigation();

    const handleGoogleLogin = () => {
        console.log('Google login clicked!');
        navigation.navigate('Main', { screen: 'Home' });
    };

    return (
        <TouchableOpacity
            onPress={handleGoogleLogin}
            style={{
                width: "auto",
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
            {/* Add the image here */}
            <Image
                source={require('../assets/google.png')}
                style={{
                    width: 28,
                    height: 28,
                    flexShrink: 0,
                    marginLeft: 16, 
                }}
            />
            <View style={{ marginLeft: 16, flexDirection: 'row' }}>
                <Text style={{ color: '#000000' }}>
                    구글로 로그인하기
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyGoogleLoginButton;
