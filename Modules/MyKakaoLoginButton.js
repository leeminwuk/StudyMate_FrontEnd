import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyKakaoLoginButton = () => {
    const navigation = useNavigation();

    const handleKakaoLogin = () => {
        console.log('Kakao login clicked!');
        navigation.navigate('Login2Screen');
    };

    return (
        <TouchableOpacity
            onPress={handleKakaoLogin}
            style={{
                width: "auto",
                height: 44,
                borderRadius: 5,
                marginBottom: 8,
                fontSize: 12,
                color: '#4a4a4a',
                backgroundColor: '#FFE500', // Yellow background color for Kakao
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
                source={require('../assets/kakao.png')}
                style={{
                    width: 28,
                    height: 28,
                    flexShrink: 0,
                    marginLeft: 16, // Adjust the margin as needed
                }}
            />
            <View style={{ marginLeft: 16, flexDirection: 'row' }}>
                <Text style={{ color: '#000000' }}>
                    카카오로 로그인하기
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyKakaoLoginButton;
