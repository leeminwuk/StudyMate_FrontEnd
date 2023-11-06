import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
title: {
    marginLeft: 24,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  titleText: {
    marginLeft: 5,
    color: "#000",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
  },
  bellImage: {
    width: 28,
    height: 28,
    marginRight: 24,
  },
    circleContainer:{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 112,
    },
  circleImage:{
    width: 116,
    height: 116,
    borderRadius: 58,
    borderColor: "#ECECEC",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  personImage:{
    width: 66,
    height: 70,
  },
    nicknameContainer:{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 44,
        marginLeft: 24,
    },
    nicknameText:{
        fontSize: 24,
        fontWeight: "700",
        color: "#000",
        letterSpacing: -0.5,
    },
    hr:{
        width: 344,
        height: 1,
        backgroundColor: "#A4A4A4",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24,
        marginLeft: 24,
    },
    appSettingContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 24,
        marginLeft: 48,
        marginRight: 40,
    },
    appSettingText:{
        letterSpacing: -0.5,
        fontSize: 14,
        fontWeight: "700",
        color: "#969696",
        letterSpacing: -0.5,
    },
    appSettingButton:{
        width: 40,
        height: 40,
    },
});
export default styles;