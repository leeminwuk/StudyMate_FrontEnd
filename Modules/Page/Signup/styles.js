import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //login
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 100,
    height: 40,
  },
  loginlogo: {
    width: 166,
    height: 152,
    marginBottom: 100,
    resizeMode: "contain",
  },
  signupEmail: {
    width: 330,
    height: 48,
    borderRadius: 5,
    marginBottom: 12,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#887E7E",
  },
  signupUsername: {
    width: 330,
    height: 48,
    borderRadius: 5,
    marginBottom: 12,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#887E7E",
  },
  signupPassword: {
    width: 330,
    height: 48,
    borderRadius: 5,
    marginBottom: 12,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#887E7E",
  },
  loginText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  textInput: {
    marginLeft: 12,
  },
  signupButton: {
    width: 330,
    height: 48,
    borderRadius: 5,
    backgroundColor: "#5884E8",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  }, 
});

export default styles;