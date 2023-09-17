import React from "react";
import { View, Text, Image } from "react-native";
import Svg, { Rect } from "react-native-svg";
import styles from "../../styles"; // Import styles from styles.js
import { TouchableOpacity } from "react-native-gesture-handler";

const handlenotificationbell = () => {
  navigation.navigate("Search");
};

const SubjectScreen = () => {
  return (
    <View style={[styles.title, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Svg width="3" height="22">
          <Rect
            width="3"
            height="22"
            fill="#468CE7"
            stroke="#468CE7"
            strokeWidth="1"
          />
        </Svg>
        <Text style={styles.titleText}>강남대학교</Text>
      </View>
      <TouchableOpacity onPress={handlenotificationbell}>
        <Image
          source={require("../../../assets/bell.png")}
          style={styles.bellImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SubjectScreen;
