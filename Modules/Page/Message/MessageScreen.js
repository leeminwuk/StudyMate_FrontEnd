import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const MessageScreen = () => {
  const navigation = useNavigation();

  const handleChatPress = (name) => {
    navigation.navigate("ChatingScreen", { name });
  };
  
  const messages = [
    {
      name: "신은호",
      time: "3분 지남",
      context: "어제 낸 과제 풀어봤나요?",
      image: require("../../../assets/eunho.png"),
    },
    {
      name: "이민욱",
      time: "5분 지남",
      context: "안녕하세요!",
      image: require("../../../assets/minuk.png"),
    },
    {
      name: "신은총",
      time: "10분 지남",
      context: "이거 틀렸어요 다시하세요",
      image: require("../../../assets/silvergun.png"),
    },
  ];

  const renderItem = ({ item, index }) => (
    <View>
      {index === 0 && <View style={{ height: 40 }} />}
      <TouchableOpacity onPress={() => handleChatPress(item.name)}>
        <View style={styles.chatContainer}>
          <View style={styles.nestedContainer}>
            <Image source={item.image} style={{ width: 32, height: 40 }} />
          </View>
          <View style={styles.textContainer}>
            <View style={{flexDirection:"row", width: '100%'}}>
              <View style={styles.nameTimeContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <View style={styles.contextContainer}>
              <Text style={styles.context}>{item.context}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.titleText}>채팅</Text>
          <Image
            source={require("../../../assets/profile.png")}
            style={styles.profileImage}
          />
        </View>
      </View>
      <View style={styles.messageContainer}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default MessageScreen;
