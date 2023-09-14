import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const BottomNavigationBar = () => {
  const [selectedButton, setSelectedButton] = useState("home"); // Initialize with the default selected button

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleButtonPress("home")}
      >
        <Image
          source={
            selectedButton === "home"
              ? require("../assets/press_home.png")
              : require("../assets/unpress_home.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleButtonPress("subjectselect")}
      >
        <Image
          source={
            selectedButton === "subjectselect"
              ? require("../assets/press_subject.png")
              : require("../assets/unpress_subject.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <View style={styles.sendIcon}>
          <Image source={require("../assets/send_message.png")} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleButtonPress("feed")}
      >
        <Image
          source={
            selectedButton === "feed"
              ? require("../assets/press_feed.png")
              : require("../assets/unpress_feed.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleButtonPress("mypage")}
      >
        <Image
          source={
            selectedButton === "mypage"
              ? require("../assets/press_mypage.png")
              : require("../assets/unpress_mypage.png")
          }
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 77,
    borderTopWidth: 1,
    borderTopColor: "#ECECEC",
  },
  sendIcon: {
    display: "inline-flex",
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#4C8EE8",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default BottomNavigationBar;
