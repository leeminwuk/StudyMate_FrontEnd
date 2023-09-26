import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import ExitButton from "../../ExitButton";

const ChattingScreen = () => {
  const [showExitButton, setShowExitButton] = useState(false); 
  const [showMenu, setShowMenu] = useState(false);
  const route = useRoute();
  const { name } = route.params || {};
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState("right");

  const handleMenuButtonClick = () => {
    setShowExitButton(!showExitButton);
    setShowMenu(false);  
  };
  const handleGoToMoreScreen = () => {
    navigation.goBack();
  };

  const handleSendMessage = () => {
    if (input.trim().length > 0) {
      const now = new Date();
      const timeString = `${now.getHours()}:${now.getMinutes()}`;
      setMessages([
        ...messages,
        { text: input, id: Date.now().toString(), sender, time: timeString },
      ]);
      setInput("");
      setSender(sender === "right" ? "left" : "right");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: item.sender === "left" ? "flex-start" : "flex-end",
      }}
    >
      <View
        style={
          item.sender === "left"
            ? styles.messageBubbleLeft
            : styles.messageBubbleRight
        }
      >
        <Text style={{ color: item.sender === "left" ? "black" : "white" }}>
          {item.text}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: item.sender === "left" ? "grey" : "white",
          }}
        >
          {item.time}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {showMenu && (
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuButtonClick}>
          <Text style={{color: "#FF6565"}}>튜터링 그만하기</Text>
        </TouchableOpacity>
      )}
      <View style={styles.header}>
        <View style={styles.title}>
          <TouchableOpacity onPress={handleGoToMoreScreen}>
            <Image
              source={require("../../../assets/backbutton.png")}
              style={{ width: 12, height: 16 }}
            />
          </TouchableOpacity>
          <Text style={styles.name}>{name || "홍길동"}</Text>
        </View>
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Image
            source={require("../../../assets/kebabIcon.png")}
            style={styles.kebabIcon}
          />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
      />
      <View style={styles.inputChat}>
        <TouchableOpacity onPress={() => setShowExitButton(true)}>
          <Image
            source={require("../../../assets/plusIcon.png")}
            style={styles.plusIcon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.inputText}
          placeholder="메세지를 입력하세요."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <Image
            source={require("../../../assets/sendIcon.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
      {showExitButton && <ExitButton />}
    </SafeAreaView>
  );
};

export default ChattingScreen;