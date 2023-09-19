import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import styles from './styles'; // Import styles from styles.js

const NestedCustomTuner = ({ image }) => {
  return (
    <View>
      <View style={styles.nestedContainer}>
        <Image
          source={image}
          style={{ width: 60, height: 75 }}
        />
      </View>
    </View>
  );
};

const CustomTuner = ({ image }) => {
  return (
    <View style={styles.customTuner}>
      <NestedCustomTuner image={image} />
    </View>
  );
};

const MultipleCustomTuners = () => {
  const images = [
    require('../assets/eunho.png'),
    require('../assets/minuk.png'),
    require('../assets/silvergun.png'),
    // ... 다른 이미지 경로
  ];

  const numberOfCustomTuners = images.length; // 이미지의 개수에 따라서만 생성

  const customTuners = Array.from(
    { length: numberOfCustomTuners },
    (_, customIndex) => (
      <CustomTuner key={customIndex} image={images[customIndex]} />
    )
  );

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false} // Hide the horizontal scrollbar
      contentContainerStyle={{ overflow: 'hidden' }} // Hide the content overflow
    >
      {customTuners}
    </ScrollView>
  );
};

export default MultipleCustomTuners;
