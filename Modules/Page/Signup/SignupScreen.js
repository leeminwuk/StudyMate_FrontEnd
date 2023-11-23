import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
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
    <View style={styles.logoContainer}>
      <Image
        source={require("../../../assets/loginlogo.png")}
        style={styles.loginlogo}
      />
      <View style={styles.signupContainer}>
        <View style={styles.signupEmail}>
          <TextInput
            placeholder="이메일을 입력하세요"
            style={styles.textInput}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.signupUsername}>
          <TextInput
            placeholder="아이디를 입력하세요"
            style={styles.textInput}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.signupPassword}>
          <TextInput
            placeholder="비밀번호를 입력하세요"
            style={styles.textInput}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={handleSignup}
          style={styles.signupButton}
        >
          <Text style={styles.signupText}>회원가입하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default SignupScreen;
