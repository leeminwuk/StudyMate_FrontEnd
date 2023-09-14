import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StatusBar, Platform } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import styles from '../../styles'; // Import styles from styles.js
import ProgressBar from '../../ProgressBar'; // Import the ProgressBar component
import SearchBar from '../../SearchBar'; // Import the SearchBar component
import CustomTuner from '../../CustomTuner';

import BottomNavigationBar from '../../BottomNavigationBar';

const HomeScreen = ({ navigation }) => {
  const progressLevel = 80; 

  const handleSearch = () => {
    navigation.navigate('Search');
  };

  const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.header, { paddingTop: statusBarHeight }]}>
          <Text style={styles.greeting}>안녕하세요! 이민욱님</Text>
          <Image
            source={require('../../../assets/profile.png')}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.centeredImageContainer}>
          <Image
            source={require('../../../assets/homesearch.png')}
            style={styles.homeSearchImage}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SearchBar />
        </View>

        <View style={styles.searchContainer}>
          <Svg width="3" height="22">
            <Rect width="3" height="22" fill="#468CE7" stroke="#468CE7" strokeWidth="1" />
          </Svg>
          <Text style={styles.searchText}>나의 학습레벨</Text>
        </View>

        <View style={styles.studylevel}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../../assets/levelup.png')}
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

        <View style={styles.searchContainer}>
          <Svg width="3" height="22">
            <Rect width="3" height="22" fill="#468CE7" stroke="#468CE7" strokeWidth="1" />
          </Svg>
          <Text style={styles.searchText}>나에게 맞는 튜터추천</Text>
          <TouchableOpacity onPress={handleSearch}>
            <Text style={styles.moreHome}>더보기</Text>
          </TouchableOpacity>
        </View>

        {/* Include the CustomTuner component */}
        <CustomTuner />
      </ScrollView>

      {/* Include the BottomNavigationBar component */}
      <BottomNavigationBar />
    </View>
  );
};

export default HomeScreen;
