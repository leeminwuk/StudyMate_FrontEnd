import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  warningButtonContainer: {
    width: 328,
    height: 244,
    backgroundColor: "#ffffff",
    position: "absolute",
    top: 300,
    left: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ADADAD",
  },

  warningImage: {
    width: 48,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  warningtext1: {
    fontSize: 20,
    color: "#717171",
    marginBottom: 4,
  },
  warningtext2: {
    fontSize: 15,
    color: "#717171",
  },
  warningButton: {
    width: 124,
    height: 36,
    backgroundColor: "#5884E8",
    borderRadius: 10,
    justifyContent: "center",
    marginRight: 8,
  },
  warningText: {
    textAlign: "center",
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  writeTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 16,
    marginTop: 8,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#27292e",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 16,
    marginTop: 24,
  },
  imageText: {
    marginLeft: 8,
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  inputImage: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageBox: {
    marginTop: 8,
    marginLeft: 8,
    width: 80,
    height: 64,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#D0D0D0",
    borderWidth: 1,
  },
  titleBox: {
    marginTop: 24,
    marginLeft: 20,
  },
  titleText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  dropDownContainer: {
    marginTop: 8,
    marginLeft: 20,
    marginRight: 20,
    width: "auto",
    height: "auto",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    justifyContent: "center",
    zIndex: 1,
  },
  downContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    justifyContent: "center",
    zIndex: 5000,
  },
  inputTextContainer: {
    marginTop: 8,
    marginLeft: 20,
    marginRight: 20,
    width: "auto",
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    textAlign: "left",
    justifyContent: "center",
  },
  writeTextContainer: {
    marginTop: 8,
    marginLeft: 20,
    marginRight: 20,
    width: "auto",
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    textAlign: "left",
    justifyContent: "center",
  },
  inputText: {
    marginTop: 8,
    marginLeft: 20,
  },
  subjectwriteBox: {
    marginTop: 24,
    marginLeft: 20,
  },
  subjectText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  curriculumBox: {
    flexDirection: "row",
    justifyContent: "left",
    marginTop: 12,
  },
  weekText: {
    color: "#27292E",
    fontSize: 14,
    fontWeight: "700",
  },
  curriculumContainer: {
    width: "82%",
    height: 32,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginLeft: 12,
  },
  curriculumText: {
    color: "#D7D7D7",
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 8 : 0,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  button: {
    width: "60%",
    height: 44,
    backgroundColor: "#5884E8",
    borderRadius: 12,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
export default styles;