import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
} from "react-native";
import styles from "./styles";
import Svg, { Rect } from "react-native-svg";
import ProgressBar from "../../ProgressBar";
import SearchBar from "../../SearchBar";
import CustomTuner from "../../CustomTuner";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from "../../UserContext/UserContext";
const HomeScreen = ({ route, navigation }) => {
  const progressLevel = 80;
  const { user } = useUser();
  const username = user?.username; // 'username' 변수 정의
  console.log("Username on HomeScreen:", username);

  const handleMore = () => {
    navigation.navigate("MoreScreen");
  };

  const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

  return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#f5f5f5" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.header, { paddingTop: statusBarHeight }]}>
        <Text style={styles.greeting}>안녕하세요! {username}님</Text>
          <Image
            source={require("../../../assets/profile.png")}
            style={styles.profileImage}
          />
        </View>

        <View>
          <View style={styles.banner}>
            <View style={styles.bannertext}>
              <Text style={styles.bannertext1}>대학 튜터링 학습</Text>
              <Text style={styles.bannertext2}>STUDY</Text>
              <Text style={styles.bannertext2}>MATE</Text>

            </View>
            <View style={styles.bannerimage}>
              <Image
                source={require("../../../assets/banner.png")}
                style={styles.bannerimage}
              />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SearchBar />
        </View>

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
          <Text style={styles.titleText}>나의 학습레벨</Text>
        </View>

        <View style={styles.studylevel}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/levelup.png")}
              style={styles.levelup}
            />
            <Text style={styles.leveltext}>Level 1</Text>
          </View>
          <View>
            <Text style={styles.leveltext2}>
              아직 튜터링 학습을 많이 안했어요! 분발해봐요.
            </Text>
          </View>
          <View>
            <ProgressBar progress={progressLevel} />
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
            <Text style={styles.titleText}>나에게 맞는 튜터추천</Text>
          </View>
          <TouchableOpacity onPress={handleMore}>
            <Text style={styles.moreHome}>더보기</Text>
          </TouchableOpacity>
        </View>
        <CustomTuner />
      </ScrollView>
  );
};

export default HomeScreen;
