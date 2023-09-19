import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  loginbuttoncontainer: {
    marginTop: 172,
  },
  logo: {
    width: 100,
    height: 40,
  },
  loginlogo: {
    marginTop: 164,
    width: 166,
    height: 152,
    resizeMode: "contain",
  },
  customTuner: {
    marginTop: 20,
    marginLeft: 21,
    width: 150,
    height: 215,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#7279DF",
    shadowOffset: {
      width: 0,
      height: 3.843583106994629,
    },
    shadowOpacity: 0.1,
    shadowRadius: 17,
    elevation: 17,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nestedContainer: {
    marginTop: 29,
    marginLeft: 31,
    width: 88,
    height: 88,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: "#B29BF2",
    borderRadius: 29,
  },
  //longcustomTuner
  longcustomTuner: {
    marginTop: 20,
    marginLeft: 21,
    width: 357,
    height: 98,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#7279DF",
    shadowOffset: {
      width: 0,
      height: 3.843583106994629,
    },
    shadowOpacity: 0.1,
    shadowRadius: 17,
    elevation: 17,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  longnestedContainer: {
    marginTop: 21,
    marginLeft: 21,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: "#B29BF2",
    borderRadius: 28,
  },
});

export default styles;
