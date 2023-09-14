import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from './styles'; // Import styles from styles.js

const NestedCustomTuner = () => {
  return (
    <View>
      <View style={styles.nestedContainer}>
        <Image
          source={require('../assets/eunho.png')}
          style={{ width: 60, height: 75 }}
        />
      </View>
    </View>
  );
};

const CustomTuner = ({ numberOfNestedCustomTuners = 3 }) => {
  const nestedCustomTuners = Array.from(
    { length: numberOfNestedCustomTuners },
    (nestedIndex) => (
      <NestedCustomTuner key={nestedIndex} />
    )
  );

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ overflow: 'hidden' }} // Add this style to hide the scrollbar
    >
      <View style={styles.customTuner}>{nestedCustomTuners}</View>
    </ScrollView>
  );
};

const MultipleCustomTuners = ({ numberOfCustomTuners = 3, numberOfNestedCustomTuners = 3 }) => {
  const customTuners = Array.from(
    { length: numberOfCustomTuners },
    (customIndex) => (
      <CustomTuner key={customIndex} numberOfNestedCustomTuners={numberOfNestedCustomTuners} />
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
