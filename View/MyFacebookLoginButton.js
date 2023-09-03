import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
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
                backgroundColor: '#3b5998',
                shadowColor: '#9b9b9b',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 0,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            <Text style={{ marginLeft: 50, marginRight: 26, marginTop: 6, marginBottom: 6, color: '#ffffff' }}>
                페이스북으로 로그인하기
            </Text>
        </TouchableOpacity>
    );
};

export default MyFacebookLoginButton;
