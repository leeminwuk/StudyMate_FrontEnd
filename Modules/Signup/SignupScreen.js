import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignupScreen = () => {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = () => {
    axios.post('http://localhost:8000/auth/joinProc', {
        email: email,
        username: username,
        password: password,
    })
    .then(response => {
        console.log('회원가입 성공:', response.data); // 서버의 응답을 콘솔에 출력
        Alert.alert("회원가입 성공", "계정이 성공적으로 생성되었습니다.");
        navigation.navigate('HomeScreen', { username: username }); // 여기에 코드를 넣습니다
        navigation.goBack();
    })
    .catch(error => {
        console.log('회원가입 오류:', error.response ? error.response.data : error); // 오류를 콘솔에 출력
        Alert.alert("회원가입 실패", "오류가 발생했습니다.");
    });
};


  return (
      <View style={styles.signupContainer}>
          <TextInput
              placeholder="이메일을 입력하시오" 
              style={styles.textInput}
              onChangeText={setEmail}
          />
          <TextInput 
              placeholder="아이디를 입력하시오" 
              style={styles.textInput}
              onChangeText={setUsername}
          />
          <TextInput 
              placeholder="비밀번호를 입력하시오" 
              style={styles.textInput}
              onChangeText={setPassword}
              secureTextEntry
          />
          <TouchableOpacity 
              onPress={handleSignup} // 여기를 수정
              style={styles.signupButton}
          >
              <Text>회원가입</Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    signupContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    signupButton: {
        backgroundColor: 'blue',
        padding: 10,
    }
});

export default SignupScreen;
