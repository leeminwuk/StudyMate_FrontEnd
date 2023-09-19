import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyFacebookLoginButton = () => {
    const navigation = useNavigation();

    const handleFacebookLogin = () => {
        console.log('Facebook login clicked!');
        navigation.navigate('Home');
    };

    return (
        <TouchableOpacity
            onPress={handleFacebookLogin}
            style={{
                width: 300,
                height: 44,
                borderRadius: 5,
                marginBottom: 8,
                fontSize: 12,
                color: '#4a4a4a',
                backgroundColor: '#000',
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
                source={require('../assets/apple.png')}
                style={{
                    width: 28,
                    height: 28,
                    flexShrink: 0,
                    marginLeft: 16, // Adjust the margin as needed
                }}
            />
            <View style={{ marginLeft: 16, flexDirection: 'row' }}>
                <Text style={{ color: '#ffffff' }}>
                    애플로 로그인하기
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyFacebookLoginButton;
