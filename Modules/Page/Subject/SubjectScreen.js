import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Svg, { Rect } from "react-native-svg";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import LongCustomTuner from "../../LongCustomTuner";
import { useNavigation } from "@react-navigation/native";

const SubjectScreen = () => {
  const navigation = useNavigation();
  const [showTuner, setShowTuner] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("학부를 선택해주세요!");
  const [showMoreButton, setShowMoreButton] = useState(false);

  const buttons = [
    { image: require("../../../assets/weltech.png"), name: "복지융합학부" },
    { image: require("../../../assets/art.png"), name: "예체능학부" },
    { image: require("../../../assets/management.png"), name: "경영관리학부" },
    { image: require("../../../assets/global.png"), name: "글로벌인재학부" },
    { image: require("../../../assets/ict.png"), name: "공과대학" },
    { image: require("../../../assets/study.png"), name: "사범대학" },
  ];
  
  const handleButtonClick = (name) => {
    if (name) {
      setShowTuner(<LongCustomTuner />);
      setSelectedSubject(name);
      setShowMoreButton(true);
    }
  };

  const handlenotificationbell = () => {
    navigation.navigate("Notification");
  };

  const handleMore = () => {
    navigation.navigate("MoreScreen", { selectedSubject });
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
          <Text style={styles.titleText}>강남대학교</Text>
        </View>
        <TouchableOpacity onPress={handlenotificationbell}>
          <Image
            source={require("../../../assets/bell.png")}
            style={styles.bellImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.subjectbuttoncontainer}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.subjectsellectbutton]}
              onPress={() => handleButtonClick(button.name)}
            >
              <Image source={button.image} style={styles.subjecticon} />
              <Text
                style={{
                  margin: 5,
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#5F5F5F",
                }}
              >
                {button.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.moreHomeContainer}>
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
          <Text style={styles.titleText}>{selectedSubject}</Text>
        </View>
        {showMoreButton && (
          <TouchableOpacity onPress={handleMore}>
            <Text style={styles.moreHome}>더보기</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>{showTuner}</View>
    </View>
  );
};

export default SubjectScreen;
