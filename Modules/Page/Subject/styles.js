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
  subjectcontainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bellImage: {
    width: 28,
    height: 28,
    marginRight: 24,
  },
  subjectbuttoncontainer: {
    marginTop: 12,
    marginLeft: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subjectsellectbutton: {
    width: Platform.OS === "ios" ? 108 : 112,
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
    marginBottom: 12,
  },
  moreHome: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    color: "#5884E8",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 18,
    marginRight: 24,
    marginTop: 20,
  },
});

export default styles;
