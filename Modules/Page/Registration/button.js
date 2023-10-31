import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const  RegistrationButton = () => {
  const [showButton, setShowButton] = useState(true);
  const navigation = useNavigation();


  const handlePress = () => {
    setShowButton(false);
    navigation.navigate("RegistrationScreen");
  };

  return (
    <>
      {showButton && (
        <View style={styles.warningButtonContainer}>
          <Image
            source={require("../../../assets/warning.png")}
            style={styles.warningImage}
          />
          <View>
            <Text style={styles.warningtext1}>튜터 등록하기 전 유의사항</Text>
          </View>
          <View>
            <Text style={styles.warningtext2}>의미없는 튜터 등록은 삭제될 수 있습니다.</Text>
          </View>
          <View>
            <Text style={styles.warningtext2}>주차별 커리큘럼을 모두 작성해주세요.</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 24 }}>
            <TouchableOpacity style={styles.warningButton} onPress={handlePress}>
              <Text style={styles.warningText}>확인했습니다</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default RegistrationButton;