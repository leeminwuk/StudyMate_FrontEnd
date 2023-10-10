import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    imageText:{
        marginLeft: 8,
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },
    inputImage: {
      flexDirection: "row",
      flexWrap: 'wrap',
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
    titleBox:{
        marginTop: 24,
        marginLeft: 24,
    },
    titleText:{
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },
    inputTextContainer:{
        marginTop: 8,
        marginLeft: 24,
        width: 338,
        height: 44,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderColor: "#D0D0D0",
        borderWidth: 1,
        textAlign: "left",
        justifyContent: "center",
    },
    inputText:{
        marginTop: 8,
        marginLeft: 24,
    },
    writeBox:{
        marginTop: 48,
        marginLeft: 24,
    },
    writeText:{
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },
    writeTextContainer:{
        marginTop: 8,
        marginLeft: 24,
        marginTop: 8,
        width: 338,
        height: 292,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderColor: "#D0D0D0",
        borderWidth: 1,
        textAlign: "left",
        },
    buttonContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24,
    },
    button:{
        width: 292,
        height: 44,
        backgroundColor: "#5884E8",
        borderRadius: 12,
        textAlign: "center",
        justifyContent: "center",
    },
    buttonText:{
      textAlign: "center",
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },

  });
  
export default styles;