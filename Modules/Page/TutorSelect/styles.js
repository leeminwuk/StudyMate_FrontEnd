import { Platform, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const height = window.height;
const width = window.width;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D8D8",
  },
  backbuttonContainer: {
    marginLeft: 20,
    marginTop: 12,
  },
  tutorContainer: {
    alignItems: "center",
  },
  tutorInformation: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 8,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    flex: 1,
  },

  informationTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  tutorName: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 24,
    marginLeft: 20,
  },
  thumbupContainer: {
    flexDirection: "row",
    marginRight: 20,
  },
  favoriteText: {
    color: "#5884E8",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 24,
    marginLeft: 4,
  },
  tutorText: {
    color: "#A8A8A8",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 20,
  },
  informationTextContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  informationText: {
    color: "#717171",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 23,
  },
  weekcurriculumTitle: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 12,
    alignItems: "center",
  },
  weekTitleText: {
    color: "#414141",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 4,
  },
  weekcurriculumContainer: {
    marginLeft: 20,
  },
  curriculumBox: {
    flexDirection: "row",
    marginTop: 8,
  },
  contentBox: {
    marginLeft: 8,
  },
  weekText: {
    color: "#414141",
    fontSize: 12,
    fontWeight: "600",
  },
  contentText: {
    color: "#717171",
    fontSize: 12,
    fontWeight: "400",
  },
  reviewTitle: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 12,
    alignItems: "center",
  },
  reviewTitleText: {
    color: "#414141",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 4,
  },
  reviewContainer: {
    marginLeft: 20,
    marginTop: 8,
  },
  ratingContainer: {
    width: 148,
    alignItems: "center",
  },
  kindContainer: {
    marginBottom: 8,
  },
  ratingText1: {
    marginBottom: 4,
    fontSize: 14,
    color: "#414141",
    fontWeight: "600",
  },
  ratingText2: {
    marginBottom: 4,
    fontSize: 14,
    color: "#414141",
    fontWeight: "600",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starImage: {
    width: 28,
    height: 28,
  },
  selectButton: {
    width: 184,
    height: 40,
    backgroundColor: "#5884E8",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  selectText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "700",
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
  exitButtonContainer: {
    width: "80%",
    height: Platform.OS === "ios" ? "25%" : "25%",
    backgroundColor: "#ffffff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateX: -(width * 0.8) / 2 },
      { translateY: -(height * 0.3) / 2 },
    ],
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#ADADAD",
  },

  selecttext1: {
    fontSize: 20,
    color: "#717171",
    marginBottom: 4,
  },
  selecttext2: {
    fontSize: 15,
    color: "#717171",
  },
  okButton: {
    width: "40%",
    height: 36,
    backgroundColor: "#5884E8",
    borderRadius: 10,
    justifyContent: "center",
    marginRight: 8,
    marginTop: 24,
  },
  okText: {
    textAlign: "center",
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  checkImage: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(218, 218, 218, 0.5)", // 반투명 배경
  },
});
export default styles;