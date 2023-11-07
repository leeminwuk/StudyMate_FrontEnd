import React, { useState } from "react";
import {Modal, View, Text, TouchableOpacity, Image, navigation} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const ExitButton = ({ isVisible, onClose, onEndTutoring }) => {
  const navigation = useNavigation(); // 네비게이션 객체를 가져옵니다.
  const [showExitModal, setShowExitModal] = useState(isVisible);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [kindRating, setKindRating] = useState(0);
  const [tipsRating, setTipsRating] = useState(0);

  const handleKindRating = (rating) => {
    setKindRating(rating);
  };

  const handleTipsRating = (rating) => {
    setTipsRating(rating);
  };

  const handleReturnPress = () => {
    setShowExitModal(false); 
    onClose && onClose(); 
  };

  const handleEndPress = () => {
    setShowExitModal(false);
    setShowRatingModal(true); 
  };

  const handleRatingClose = () => {
    setShowRatingModal(false);
    navigation.goBack();
  };

  const renderStar = (index, rating, handleRating) => {
    const fill =
      index < rating
        ? require('../assets/fillstar.png')
        : require('../assets/borderstar.png');
    return (
      <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
        <Image source={fill} style={styles.starImage} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Modal
        animationType="none"
        transparent={true}
        visible={showExitModal}
        onRequestClose={handleReturnPress}
      >
        <View style={styles.centeredView}>
          <View style={styles.exitButtonContainer}>
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
              <TouchableOpacity
                style={styles.returnButton}
                onPress={handleReturnPress}
              >
                <Text style={styles.returnText}>돌아가기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.endButton}
                onPress={handleEndPress}
              >
                <Text style={styles.endText}>종료하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={showRatingModal}
        onRequestClose={handleRatingClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.ratingButtonContainer}>
            <Image
              source={require("../assets/check.png")}
              style={styles.checkImage}
            />
            <View style={styles.textratingContainer}>
              <Text style={styles.endText1}>튜터링 학습을 종료했습니다.</Text>
              <View>
                <Text style={styles.endText2}>
                  고생한 튜터에게 별을 주세요!
                </Text>
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
              onPress={handleRatingClose}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ExitButton;