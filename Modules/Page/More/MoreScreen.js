import React, { useState } from "react";
import { View, Text, Modal} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Rect } from "react-native-svg";
import styles from "./styles";
import LongCustomTuner from "../../LongCustomTuner";
import { TouchableOpacity } from "react-native-gesture-handler";
import RegistrationButton from "../Registration/button";
import { SafeAreaView } from 'react-native-safe-area-context';

const MoreScreen = ({ route }) => {
  const navigation = useNavigation();
  const { selectedSubject, topNotification } = route.params || {};
  const [isModalVisible, setModalVisible] = useState(false); // 모달의 상태를 제어하는 상태 변수

  const navigateToRegistration = () => {
    navigation.navigate("RegistrationScreen"); 
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
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
        <View style={styles.registrationtutorContainer}>
        <TouchableOpacity onPress={navigateToRegistration}>
          <Text style={styles.registrationtutorText}>튜터등록</Text>
        </TouchableOpacity>
      </View>
      </View>

      {topNotification && (
        <View>
          <Text>{topNotification.title}</Text>
          <Text>{topNotification.description}</Text>
        </View>
      )}
      <LongCustomTuner />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <RegistrationButton />
      </Modal>
    </SafeAreaView>
  );
};

export default MoreScreen;
