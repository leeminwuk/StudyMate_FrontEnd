import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  navigation,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import{useUser} from '../Modules/UserContext/UserContext';
import axios from "axios";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios.post("http://10.102.2.182:8000/auth/login", { email, password })
      .then((response) => {
        if (response.status === 200) {
          console.log("Login successful. Username:", response.data.data.username, "ID:", response.data.data.id);
  
          setUser({
            username: response.data.data.username,
            id: response.data.data.id,
          });
          navigation.navigate("Main", { screen: "HomeScreen" });
          Alert.alert("로그인 성공", "환영합니다!");
        } else {
          Alert.alert("로그인 실패", "로그인에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        Alert.alert("로그인 오류", "로그인 중 오류가 발생했습니다.");
      });
  };
  
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/loginlogo.png")}
        style={styles.loginlogo}
      />
      <View style={styles.loginContainer}>
        <View style={styles.emailContainer}>
          <TextInput
            placeholder="이메일을 입력하세요"
            style={styles.inputEmail}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="비밀번호를 입력하세요"
            style={styles.inputPassword}
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginText}>로그인하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupButton}>
        <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={{ color: "#5884E8" }}>
            계정이 없으신가요? 간편 회원가입 하기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.snsContainer}>
        <Text>SNS 계정으로 로그인하기</Text>
        <View style={styles.snslogoContainer}>
          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={require("../assets/google.png")}
              style={{ width: 28, height: 28 }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.kakaoButton}>
            <Image
              source={require("../assets/kakao.png")}
              style={{ width: 36, height: 36}}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleButton}>
            <Image
              source={require("../assets/apple.png")}
              style={{ width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
