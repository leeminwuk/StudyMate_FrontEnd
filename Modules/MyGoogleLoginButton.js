import React from 'react';
import { TouchableOpacity, Text, View, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyGoogleLoginButton = () => {
    const navigation = useNavigation();

    const handleGoogleLogin = () => {
        console.log('Google login clicked!');
        navigation.navigate('SignupScreen');
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
                backgroundColor: '#ffffff',
                shadowColor: '#9b9b9b',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 0,
                elevation: 2,
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
