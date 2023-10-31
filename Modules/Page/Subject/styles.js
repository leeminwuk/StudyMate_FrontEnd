import { Platform, StyleSheet } from "react-native";
import { width, height } from '../../../constans';

const styles = StyleSheet.create({
  title: {
    marginLeft: 21,
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
  subjectcontainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bellImage: {
    width: 28,
    height: 28,
    marginRight: 21,
  },
  subjectbuttoncontainer: {
    marginTop: 16,
    marginLeft: Platform.OS === "ios" ? 21 : 28,
    width: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  subjectsellectbutton: {
    width: 108,
    height: 80,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  subjecticon: {
    width: 36,
    height: 36,
  },
  moreHomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreHome: {
    width: "auto",
    height: 20,
    flexShrink: 0,
    color: "#5884E8",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18,
    marginRight: 21,
    marginTop: 20,
  },
});

export default styles;
