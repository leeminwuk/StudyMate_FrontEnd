import React, { useState } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from './styles'; // Import styles from styles.js
import { TouchableOpacity } from 'react-native';

const NestedCustomTuner = ({ image, name, subject, favoriteCount, commentCount, onFavoritePress }) => {
  return (
    <View>
      <View style={styles.nestedContainer}>
        <Image source={image} style={{ width: 60, height: 75 }} />
      </View>
      <View style={styles.tutorContainer}>
        <Text style={styles.tutorName}>{name}</Text>
        <Text style={styles.tutorSubject}>{subject}</Text>
      </View>
      <View style={styles.favoriteContainer}>
        <TouchableOpacity onPress={onFavoritePress}>
          <Image
            source={require("../assets/thumbup.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.favoriteText}>
            {favoriteCount}
          </Text>
        </View>
      </View>
    </View>
  );
};

const CustomTuner = ({ image, name, subject, favoriteCount, commentCount, onFavoritePress }) => {
  return (
    <View style={styles.customTuner}>
      <NestedCustomTuner image={image} name={name} subject={subject} favoriteCount={favoriteCount} commentCount={commentCount} onFavoritePress={onFavoritePress} />
    </View>
  );
};

const MultipleCustomTuners = () => {
  const [images, setImages] = useState([
    {
      id: "1",
      name: "신은호",
      subject: "서양역사",
      favoriteCount: 0,
      image: require('../assets/eunho.png'),
    },
    {
      id: "2",
      name: "이민욱",
      subject: "알고리즘",
      favoriteCount: 0,
      image: require('../assets/minuk.png'),
    },
    {
      id: "3",
      name: "신은총",
      subject: "데이터베이스",
      favoriteCount: 0,
      image: require('../assets/silvergun.png'),
    },
  ]);

  const numberOfCustomTuners = images.length; 
  const customTuners = Array.from(
    { length: numberOfCustomTuners },
    (_, customIndex) => (
      <CustomTuner key={customIndex} image={images[customIndex].image} name={images[customIndex].name} subject={images[customIndex].subject} favoriteCount={images[customIndex].favoriteCount} commentCount={images[customIndex].commentCount} onFavoritePress={() => {
        const newImages = [...images];
        newImages[customIndex].favoriteCount++;
        setImages(newImages);
      }} />
    )
  );

  return (
    <ScrollView
    style={{marginRight: 24, marginBottom: 12}}
      horizontal={true}
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{ overflow: 'hidden' }}
    >
      {customTuners}
    </ScrollView>
  );
};

export default MultipleCustomTuners;