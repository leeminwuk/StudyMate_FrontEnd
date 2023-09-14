import React from "react";
import { View, Image, TextInput, Button, StyleSheet } from "react-native"; // Add the necessary imports
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
      {/* Load an image file and display it as an Image component */}
      <Image
        source={require("../assets/loginlogo.png")}
        style={styles.loginlogo}
      />
      <MyGoogleLoginButton />
      <MyKakaoLoginButton />
      <MyAppleLoginButton />
    </View>
  );
};

export default LoginScreen;
