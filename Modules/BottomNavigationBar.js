import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Page/Home/HomeScreen';
import SubjectScreen from './Page/Subject/SubjectScreen';
import MessageScreen from './Page/Message/MessageScreen';
import FeedScreen from './Page/Feed/FeedScreen';
import MypageScreen from './Page/Mypage/MypageScreen';

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let customIconStyle;

          switch (route.name) {
            case 'Home':
              iconName = focused
                ? require('../assets/press_home.png')
                : require('../assets/unpress_home.png');
              break;
            case 'Subject':
              iconName = focused
                ? require('../assets/press_subject.png')
                : require('../assets/unpress_subject.png');
              break;
            case 'Message':
              iconName = require('../assets/send_message.png');
              customIconStyle = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                backgroundColor: "#4C8EE8",
                width: 56,
                height: 56,
                marginTop: 10 // 이 부분을 추가합니다.
              };
              break;
            case 'Feed':
              iconName = focused
                ? require('../assets/press_feed.png')
                : require('../assets/unpress_feed.png');
              break;
            case 'Mypage':
              iconName = focused
                ? require('../assets/press_mypage.png')
                : require('../assets/unpress_mypage.png');
              break;
          }

          if (customIconStyle) {
            return (
              <View style={customIconStyle}>
                <Image source={iconName} style={{ width: 24, height: 24 }} />
              </View>
            );
          }

          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Subject" component={SubjectScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Mypage" component={MypageScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
