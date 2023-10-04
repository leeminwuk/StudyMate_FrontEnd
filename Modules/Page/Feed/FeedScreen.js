import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import Svg, { Rect } from 'react-native-svg';
import PostContainer from '../Post/PostContainer';

const FeedScreen = ({ navigation }) => {
  const categoryData = [
    { id: '1', title: '전체' },
    { id: '2', title: '인기' },
    { id: '3', title: '그룹모집' },
    { id: '4', title: '일상대화' },
    { id: '5', title: '학사공유' },
  ];

  const postData = [
    {
      id: "1",
      category: "인기글",
      name: "신은호",
      date: "방금 전",
      content: "서양역사와 이해 같이 공부하실 분 모집합니다.",
      favoriteCount: 12,
      commentCount: 3,
    },
    {
      id: "2",
      category: "일상대화",
      name: "이민욱",
      date: "3분 전",
      content: "개강 얼마 안남았네요 ㅠㅠ 다들 방학때 뭐하셨나요?",
      favoriteCount: 12,
      commentCount: 3,
    },
    {
      id: "3",
      category: "학사공유",
      name: "신은총",
      date: "15분 전",
      content: "2학기 중간고사 10월 26일입니다. 이번엔 미리 공부합시다!",
      favoriteCount: 12,
      commentCount: 3,
    },
    {
      id: "3",
      category: "학사공유",
      name: "신은총",
      date: "15분 전",
      content: "2학기 중간고사 10월 26일입니다. 이번엔 미리 공부합시다!",
      favoriteCount: 12,
      commentCount: 3,
    },
  ];

  const [pressedId, setPressedId] = useState(null);

  const handlePress = (id) => {
    setPressedId(id);
  };

  const renderCategoryButton = ({ item }) => {
    const isPressed = item.id === pressedId;
    const backgroundColor = isPressed ? '#5884E8' : '#FFFFFF';
    const borderColor = isPressed ? '#FFFFFF' : '#ADB5BD';
    const textColor = isPressed ? '#FFFFFF' : '#484848';
    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
          { backgroundColor, borderColor },
        ]}
        onPress={() => handlePress(item.id)}
      >
        <Text style={[styles.categoryText, { color: textColor }]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleFloatingButtonPress = () => {
    console.log("Floating Button Pressed");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Svg width="3" height="22">
          <Rect
            width="3"
            height="22"
            fill="#468CE7"
            stroke="#468CE7"
            strokeWidth="1"
          />
        </Svg>
        <Text style={styles.titleText}>커뮤니티</Text>
      </View>
      <View style={styles.categoryContainer}>
        <FlatList
          data={categoryData}
          renderItem={renderCategoryButton}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {postData.map((post) => (
          <PostContainer key={post.id} post={post} navigation={navigation} />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={handleFloatingButtonPress}
      >
        <Image
          source={require("../../../assets/write.png")}
          style={styles.floatingButtonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FeedScreen;
