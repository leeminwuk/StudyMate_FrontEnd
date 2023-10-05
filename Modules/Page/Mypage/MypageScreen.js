import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Svg, { Rect } from "react-native-svg";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import LongCustomTuner from "../../LongCustomTuner";
import { useNavigation } from "@react-navigation/native";

const MypageScreen = () => {
  const navigation = useNavigation();

  const handlenotificationbell = () => {
    navigation.navigate("Notification");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          styles.title,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Svg width="3" height="22">
            <Rect
              width="3"
              height="22"
              fill="#468CE7"
              stroke="#468CE7"
              strokeWidth="1"
            />
          </Svg>
          <Text style={styles.titleText}>마이페이지</Text>
        </View>
        <TouchableOpacity onPress={handlenotificationbell}>
          <Image
            source={require("../../../assets/bell.png")}
            style={styles.bellImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circleImage}>
          <Image
            source={require("../../../assets/person.png")}
            style={styles.personImage}
          />
        </View>
      </View>
      <View style={[styles.nicknameContainer, { justifyContent: "center" }]}>
        <Text style={styles.nicknameText}>이민욱 님</Text>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/nextbutton.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.hr}></View>
      <TouchableOpacity style={styles.appSettingContainer}>
      <Text style={styles.appSettingText}>
          App설정
        </Text>
        <Image
          source={require("../../../assets/appsettingbutton.png")}
          style={styles.appSettingButton}
        />
      </TouchableOpacity>
      <View style={styles.hr}></View>
      <TouchableOpacity style={styles.appSettingContainer}>
      <Text style={styles.appSettingText}>
          고객센터
        </Text>
        <Image
          source={require("../../../assets/appsettingbutton.png")}
          style={styles.appSettingButton}
        />
      </TouchableOpacity>
      <View style={styles.hr}></View>
    </View>
  );
};

export default MypageScreen;