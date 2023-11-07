import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const  SelectButton = () => {
  const [showButton, setShowButton] = useState(true);
  const navigation = useNavigation();


  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <>
      {showButton && (
        <View style={styles.exitButtonContainer}>
          <Image
            source={require("../../../assets/check.png")}
            style={styles.checkImage}
          />
          <View>
            <Text style={styles.selecttext1}>튜터매칭이 되었어요</Text>
          </View>
          <View>
            <Text style={styles.selecttext2}>튜터 승인 후 채팅 기능이 활성화 됩니다.</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 24 }}>
            <TouchableOpacity style={styles.okButton} onPress={handlePress}>
              <Text style={styles.okText}>확인했습니다</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default SelectButton;
