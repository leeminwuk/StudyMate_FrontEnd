import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([
    {
      title: "2023년 2학기 튜터링 모집",
      description: "자세한 설명은 강남대 홈페이지를 참고하세요.",
      image: require("../../../assets/speak.png"),
    },
    {
      title: "2023년 1학기 튜터링 모집",
      description: "자세한 설명은 강남대 홈페이지를 참고하세요.",
      image: require("../../../assets/speak.png"),
    },
    {
      title: "스터메이트 리뷰 이벤트",
      description:
        "스터디메이트 리뷰를 작성해주시면 추첨을 통해 기프티콘을 드립니다.",
      image: require("../../../assets/note.png"),
    },
    {
      title: "스터메이트 서비스 시작",
      description: "번거로운 튜터링 과정! 스터디메이트와 함께 해요!",
      image: require("../../../assets/party.png"),
    },
  ]);

  const handleGoToMoreScreen = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.title}>
        <TouchableOpacity onPress={handleGoToMoreScreen}>
          <Image
            source={require("../../../assets/backbutton.png")}
            style={{ width: 16, height: 24 }}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>알림</Text>
      </View>
      <View>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationcontainer}>
            <View style={styles.iconAndTextContainer}>
              <View style={styles.iconcontainer}>
                <Image
                  source={notification.image}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View>
                <Text style={styles.text1}>{notification.title}</Text>
                <Text style={styles.text2}>{notification.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
