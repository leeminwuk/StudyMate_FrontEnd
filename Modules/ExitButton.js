import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const ExitButton = () => {
  const [showButton, setShowButton] = useState(true);
  const [showEndButton, setShowEndButton] = useState(false);
  const [kindRating, setKindRating] = useState(0);
  const [tipsRating, setTipsRating] = useState(0);
  const navigation = useNavigation();

  const handleCloseButtonClick = () => {
    navigation.goBack();
  };

  const handlePress = () => {
    setShowButton(false);
  };

  const handleEndButtonPress = () => {
    setShowEndButton(true);
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
        ? require("../assets/fillstar.png")
        : require("../assets/borderstar.png");
    return (
      <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
        <Image source={fill} style={styles.starImage} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      {showButton && (
        <TouchableOpacity style={styles.exitButtonContainer}>
          <Image
            source={require("../assets/error.png")}
            style={styles.errorImage}
          />
          <View>
            <Text style={styles.exittext1}>튜터링을 종료 하시겠습니까?</Text>
          </View>
          <View>
            <Text style={styles.exittext2}>튜터링 과정이 끝난 경우에만</Text>
          </View>
          <View>
            <Text style={styles.exittext2}>종료 버튼을 눌러주세요</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 24 }}>
            <TouchableOpacity style={styles.returnButton} onPress={handlePress}>
              <Text style={styles.returnText}>돌아가기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.endButton}
              onPress={handleEndButtonPress}
            >
              <Text style={styles.endText}>종료하기</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
      {showEndButton && (
        <View style={styles.ratingButtonContainer}>
          <Image
            source={require("../assets/check.png")}
            style={styles.checkImage}
          />
          <View style={styles.textratingContainer}>
            <Text style={styles.endText1}>튜터링 학습을 종료했습니다.</Text>
            <View>
              <Text style={styles.endText2}>고생한 튜터에게 별을 주세요!</Text>
            </View>
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
          <TouchableOpacity
            onPress={handleCloseButtonClick}
            style={styles.closeButton}
          >
            <Text style={styles.closeText}>닫기</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default ExitButton;