import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 12,
  },
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
  registrationtutorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  registrationtutorText: {
    color: "#5884E8",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 18,
    marginRight: 24,
  },
});

export default styles;
