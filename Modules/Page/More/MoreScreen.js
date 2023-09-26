import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Rect } from "react-native-svg";
import styles from "./styles";
import LongCustomTuner from "../../LongCustomTuner";

const MoreScreen = ({ route }) => {
  const navigation = useNavigation();
  const { selectedSubject, topNotification } = route.params || {};  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.title}>
        <Svg width="3" height="22">
          <Rect
            width="3"
            height="22"
            fill="#468CE7"
            stroke="#468CE7"
            strokeWidth="1"
          />
        </Svg>
        <Text style={styles.titleText}>{selectedSubject || "공과대학"}</Text>
      </View>
      {topNotification && (
        <View>
          <Text>{topNotification.title}</Text>
          <Text>{topNotification.description}</Text>
        </View>
      )}
      <LongCustomTuner />
    </SafeAreaView>
  );
};



export default MoreScreen;
