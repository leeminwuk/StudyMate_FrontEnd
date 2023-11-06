import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const maxWidth = width * 0.4; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 8,
    color: "#000",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
  },
  kebabIcon: {
    width: 28,
    height: 28,
  },
  inputChat: {
    width: "100%",
    height: 56,
    borderTopWidth: 0.5,
    borderTopColor: "#ADB5BD",
    flexDirection: "row",
    alignItems: "center",
  },
  icontextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginRight: 12,
    marginTop: 8,
  },
  inputText: {
    flex: 1,
    height: 36,
    borderRadius: 4,
    backgroundColor: "#f7f7fc",
    paddingLeft: 8,
  },
  plusIcon: {
    width: 24,
    height: 24,
    marginLeft: 12,
    marginRight: 12,
  },
  sendIcon: {
    width: 24,
    height: 24,
    marginLeft: 12,
    marginRight: 12,
  },
  messageBubbleLeft: {
    marginLeft: 12,
    display: "flex",
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 16,
    backgroundColor: "#f7f7fc",
    elevation: 4,
    marginBottom: 4,
    minWidth: 60,
    maxWidth: maxWidth,
  },
  messageBubbleRight: {
    marginRight: 12,
    display: "flex",
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-end",
    borderRadius: 16,
    backgroundColor: "#5884E8",
    elevation: 4,
    marginBottom: 4,
    minWidth: 60,
    maxWidth: maxWidth,
  },
  menuButton: {
    position: 'absolute',
    top: 100,  
    right: 20,
    width: 104,
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#ccc', 
    borderWidth:1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9999,  
    zIndex: 9,
  },
});

export default styles;
