import React, { useState } from "react";
import { View, Image, ScrollView, Text } from "react-native";
import styles from "./styles"; // styles.js 파일에서 스타일 가져오기
import { TouchableOpacity } from "react-native";

const NestedCustomTuner = ({
  image,
  name,
  subject,
  favoriteCount,
  onFavoritePress,
}) => {
  return (
    <View style={styles.longnestedContainer}>
      <Image source={image} style={{ width: 32, height: 40 }} />
      <View style={styles.tunerInfoContainer}></View>
    </View>
  );
};

const CustomTuner = ({
  image,
  name,
  subject,
  favoriteCount,
  onFavoritePress,
}) => {
  return (
    <View style={styles.longcustomTuner}>
      <NestedCustomTuner
        image={image}
        name={name}
        subject={subject}
        favoriteCount={favoriteCount}
        onFavoritePress={onFavoritePress}
      />

      <View style={styles.tutorinformationContainer}>
        <Text style={styles.longtunerName}>{name} 튜터</Text>
        <Text style={styles.longtunerSubject}>{subject}</Text>
        <View style={styles.longfavoriteContainer}>
          <TouchableOpacity onPress={onFavoritePress}>
            <Image
              source={require("../assets/thumbup.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <Text style={styles.longfavoriteText}>{favoriteCount}</Text>
        </View>
      </View>
      
      <View style={styles.centeredContainer}>
        <TouchableOpacity>
          <View style={styles.selectButton}>
            <Text style={styles.selectButtonText}>선택</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MultipleCustomTuners = () => {
  const [images, setImages] = useState([
    {
      id: "1",
      name: "신은호",
      subject: "앱 디자인의 기초",
      favoriteCount: 0,
      image: require("../assets/eunho.png"),
    },
    {
      id: "2",
      name: "이민욱",
      subject: "컴퓨터구조 과목 같이 배워보실레요?",
      favoriteCount: 0,
      image: require("../assets/minuk.png"),
    },
    {
      id: "3",
      name: "신은총",
      subject: "자바프로그래밍으로 A+ 받아보자!",
      favoriteCount: 0,
      image: require("../assets/silvergun.png"),
    },
  ]);

  const numberOfCustomTuners = images.length;
  const customTuners = Array.from(
    { length: numberOfCustomTuners },
    (_, customIndex) => (
      <CustomTuner
        key={customIndex}
        image={images[customIndex].image}
        name={images[customIndex].name}
        subject={images[customIndex].subject}
        favoriteCount={images[customIndex].favoriteCount}
        onFavoritePress={() => {
          const newImages = [...images];
          newImages[customIndex].favoriteCount++;
          setImages(newImages);
        }}
      />
    )
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ overflow: "hidden" }}
    >
      {customTuners}
    </ScrollView>
  );
};

export default MultipleCustomTuners;
