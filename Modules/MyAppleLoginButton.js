import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyAppleLoginButton = () => {
    const navigation = useNavigation();

    const handleAppleLogin = () => {
        console.log('Apple login clicked!');
        navigation.navigate('Main', { screen: 'Home' });
    };
    return (
        <TouchableOpacity
            onPress={handleAppleLogin}
            style={{
                width: 300,
                height: 44,
                borderRadius: 5,
                marginBottom: 8,
                backgroundColor: '#000',
                shadowColor: '#9b9b9b',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: 16, // Added padding to the button
            }}
        >
            <Image
                source={require('../assets/apple.png')}
                style={{
                    width: 28,
                    height: 28,
                    flexShrink: 0,
                }}
            />
            <Text style={{ color: '#ffffff', marginLeft: 16 }}>
                애플로 로그인하기
            </Text>
        </TouchableOpacity>
    );
};

export default MyAppleLoginButton;
