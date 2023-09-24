import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    marginLeft: 21,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  titleText: {
    marginLeft: 16,
    color: "#000",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
  },
  iconAndTextContainer: {  
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationcontainer: {
    marginTop: 17,
    marginLeft: 21,
    width: 351,
    height: 76,
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
  iconcontainer: {
    marginTop: 4,
    marginLeft: 21,
    marginRight: 12,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderColor: "#CECECE",
    borderWidth: 1,
    borderRadius: 19,
  },
  text1: {
    width: 276,
    height: 16,
    flexShrink: 0,
    color: "#5F5F5F",
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  text2: {
    width: 276,
    flexShrink: 1,
    color: "#797979",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  
});

export default styles;
