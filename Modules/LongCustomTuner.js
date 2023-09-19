import React from "react";
import { View, Image, ScrollView, Text } from "react-native";
import styles from "./styles"; // Import styles from styles.js


const NestedCustomTuner = ({ image, name }) => {
  return (
    <View style={styles.longnestedContainer}>
      <Image source={image} style={{ width: 32, height: 40 }} />
    </View>
  );
};

const CustomTuner = ({ image, name }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false} // Hide the vertical scrollbar
      contentContainerStyle={{ overflow: "hidden" }} // Hide the content overflow
    >
      <View style={styles.longcustomTuner}>
        <NestedCustomTuner image={image} name={name} />
      </View>
    </ScrollView>
  );
};

const MultipleCustomTuners = () => {
  const images = [
    require("../assets/eunho.png"),
    require("../assets/minuk.png"),
    require("../assets/silvergun.png"),
    // ... 다른 이미지 경로
  ];

  const names = ["Eunho", "Minuk", "Silvergun", /* ... 다른 이름 */];

  const numberOfCustomTuners = images.length; // 이미지의 개수에 따라서만 생성

  const customTuners = Array.from(
    { length: numberOfCustomTuners },
    (_, customIndex) => (
      <CustomTuner 
        key={customIndex} 
        image={images[customIndex]} 
        name={names[customIndex]} 
      />
    )
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false} // Hide the vertical scrollbar
      contentContainerStyle={{ overflow: "hidden" }} // Hide the content overflow
    >
      {customTuners}
    </ScrollView>
  );
};

export default MultipleCustomTuners;
