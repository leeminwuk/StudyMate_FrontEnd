import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  navigation,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Login2Screen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    axios
      .post("http://10.102.2.182:8000/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const responseData = response.data;
  
        if (responseData.success && responseData.data === 1) {
          const username = responseData.username;
          console.log("Navigating to HomeScreen with username:", username);
          navigation.navigate('Main', { screen: 'Home', params: { username: username } });
  
          console.log("로그인 성공:", responseData);
          Alert.alert("로그인 성공", "환영합니다!");
        } else {
          // 서버 응답에 따른 로그인 실패 처리
          console.log("로그인 실패: 상태 코드", response.status);
          Alert.alert("로그인 실패", "로그인에 실패했습니다.");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // 인증 실패 처리
          Alert.alert("로그인 실패", "이메일 또는 비밀번호가 잘못되었습니다.");
        } else {
          // 기타 오류 처리
          Alert.alert("로그인 오류", "로그인 중 오류가 발생했습니다.");
        }
        console.log("로그인 오류:", error.response ? error.response.data : error);
      });
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="이메일을 입력하세요" // placeholder 변경
        style={styles.textInput}
        onChangeText={setEmail} // setEmail 함수 사용
      />
      <TextInput
        placeholder="비밀번호를 입력하세요"
        style={styles.textInput}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
  },
});

export default Login2Screen;
