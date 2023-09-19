import React from "react";
import { View, Image } from "react-native"; 
import MyKakaoLoginButton from "./MyKakaoLoginButton";
import MyGoogleLoginButton from "./MyGoogleLoginButton";
import MyAppleLoginButton from "./MyAppleLoginButton";
import styles from "./styles";

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.logincontainer}>
      <Image
        source={require("../assets/loginlogo.png")}
        style={styles.loginlogo}
      />
      <View style={styles.loginbuttoncontainer}>
      <MyGoogleLoginButton onPress={handleLogin} />
      <MyKakaoLoginButton onPress={handleLogin} />
      <MyAppleLoginButton onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
