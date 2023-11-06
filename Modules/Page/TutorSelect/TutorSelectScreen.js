import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import SelectButton from "./Button";
import { SafeAreaView } from 'react-native-safe-area-context';

const TutorSelectScreenButton = () => {
  const navigation = useNavigation();
  const [kindRating, setKindRating] = useState(0);
  const [tipsRating, setTipsRating] = useState(0);
  const [showSelectButton, setShowSelectButton] = useState(false);

  const handleShowSelectButton = () => {
    setShowSelectButton(true);
  };
  const handleKindRating = (rating) => {
    setKindRating(rating);
  };

  const handleTipsRating = (rating) => {
    setTipsRating(rating);
  };
  const renderStar = (index, rating, handleRating) => {
    const fill =
      index < rating
        ? require("../../../assets/fillstar.png")
        : require("../../../assets/borderstar.png");
    return (
      <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
        <Image source={fill} style={styles.starImage} />
      </TouchableOpacity>
    );
  };
  const weekCurriculums = [
    { week: '1주차', content: '자바환경 설정 / 자바 문법의 기초' },
    { week: '2주차', content: '자바의 제어문과 함수' },
    { week: '3주차', content: '자바의 객체 지향 프로그래밍' },
    { week: '4주차', content: '자바의 예외 처리와 입출력' },
    { week: '5주차', content: '자바의 제네릭과 컬렉션 프레임워크' },
  ];
  const handleGoToFeedScreen = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View styles={styles.header}>
        <View style={styles.backbuttonContainer}>
          <TouchableOpacity onPress={handleGoToFeedScreen}>
            <Image
              source={require("../../../assets/backbutton.png")}
              style={{ width: 16, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tutorContainer}>
          <Image
            source={require("../../../assets/tutorimage.png")}
            style={{ width: 300, height: 200 }}
          />
        </View>
      </View>
      <View style={styles.tutorInformation}>
        <View style={styles.informationTitle}>
          <Text style={styles.tutorName}>신은총</Text>
          <View>
            <Image
              source={require("../../../assets/approval.png")}
              style={{ width: 58, height: 48, marginTop: 24 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <View style={styles.thumbupContainer}>
              <Image
                source={require("../../../assets/thumbup.png")}
                style={{ width: 24, height: 24, marginTop: 24 }}
              />
              <Text style={styles.favoriteText}>1</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.tutorText}>튜터</Text>
        </View>
        <View style={styles.informationTextContainer}>
          <Text style={styles.informationText}>
            안녕하세요! 신은총 튜터입니다. 저는 여러분들의 자바프로그래밍의
            도움을 주고자 합니다. 차근차근 기초부터 자바에 대해 알아봅시다!
          </Text>
        </View>
        <View style={styles.weekcurriculumTitle}>
          <Image
            source={require("../../../assets/claendar.png")}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.weekTitleText}>주차별 커리큘럼</Text>
        </View>
        <View style={styles.weekcurriculumContainer}>
          {weekCurriculums.map((curriculum, index) => (
            <View key={index} style={styles.curriculumBox}>
              <View style={styles.weekBox}>
                <Text style={styles.weekText}>{curriculum.week}</Text>
              </View>
              <View style={styles.contentBox}>
                <Text style={styles.contentText}>{curriculum.content}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.reviewTitle}>
          <Image
            source={require("../../../assets/reviewicon.png")}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.reviewTitleText}>이 튜터의 리뷰</Text>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.ratingContainer}>
            <View style={styles.kindContainer}>
              <Text style={styles.ratingText1}>친절도</Text>
              <View style={styles.starContainer}>
                {[...Array(5)].map((_, index) =>
                  renderStar(index, kindRating, handleKindRating)
                )}
              </View>
            </View>
            <View style={styles.tipsContainer}>
              <Text style={styles.ratingText2}>노하우</Text>
              <View style={styles.starContainer}>
                {[...Array(5)].map((_, index) =>
                  renderStar(index, tipsRating, handleTipsRating)
                )}
              </View>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleShowSelectButton}
            style={styles.selectButton}
          >
            <Text style={styles.selectText}>튜터링 신청하기</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showSelectButton && <SelectButton />}
    </SafeAreaView>
  );
};

export default TutorSelectScreenButton;
