import React, { useState, useEffect } from "react";
import {
  View, Text, TouchableOpacity, Image,
  FlatList, ScrollView
} from "react-native";
import styles from "./styles";
import Svg, { Rect } from "react-native-svg";
import PostContainer from "../Post/PostContainer";
import { useData } from "../../DataContext";
import axios from 'axios';

const FeedScreen = ({ navigation }) => {
  const { postData, updateFavoriteCount } = useData();

  const categoryData = [
    { id: "1", title: "전체" },
    { id: "2", title: "인기" },
    { id: "3", title: "그룹모집" },
    { id: "4", title: "일상대화" },
    { id: "5", title: "학사공유" },
  ];

  const [allPosts, setAllPosts] = useState([]); // 모든 게시글 데이터
  const [filteredPosts, setFilteredPosts] = useState([]); // 필터링된 게시글 데이터
  const [pressedId, setPressedId] = useState("1");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/board/all');
        if (Array.isArray(response.data)) {
          setAllPosts(response.data);
          setFilteredPosts(response.data); // 초기 로드 시 모든 게시글 표시
        } else {
          console.error("API 응답 형식이 올바르지 않음:", response.data);
        }
      } catch (error) {
        console.error("게시글 데이터 로드 실패:", error);
      }
    };
    fetchPosts();
  }, []);

  const handlePress = (id) => {
    setPressedId(id);
};
const handleFavorite = async (id) => {
  try {
    // API를 호출하여 게시글의 좋아요를 업데이트
    await axios.post(`http://localhost:8000/api/board/${id}/like`);
    // 게시글 목록을 새로고침
    loadPosts();
  } catch (error) {
    console.error("좋아요 업데이트 실패:", error);
  }
};


  // 카테고리 버튼 렌더링 함수
  const renderCategoryButton = ({ item }) => {
    const isPressed = item.id === pressedId;
    const backgroundColor = isPressed ? "#5884E8" : "#FFFFFF";
    const borderColor = isPressed ? "#FFFFFF" : "#ADB5BD";
    const textColor = isPressed ? "#FFFFFF" : "#484848";

    return (
      <TouchableOpacity
        style={[styles.categoryButton, { backgroundColor, borderColor }]}
        onPress={() => handlePress(item.id)}
      >
        <Text style={[styles.categoryText, { color: textColor }]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleFloatingButtonPress = () => {
    navigation.navigate("WriteScreen");
  };

  const loadPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/board/all');
      if (Array.isArray(response.data)) {
        // 게시글을 createDate 기준으로 내림차순 정렬
        const sortedPosts = response.data.sort((a, b) => {
          return new Date(b.createDate) - new Date(a.createDate);
        });
        
        const updatedPosts = sortedPosts.map(post => {
          let categories = [post.category];
          if (post.likes >= 10) {
            categories.push('인기글');
          }
          return { ...post, categories };
        });
        setAllPosts(updatedPosts);
        setFilteredPosts(updatedPosts);
      } else {
        console.error("API 응답 형식이 올바르지 않음:", response.data);
      }
    } catch (error) {
      console.error("게시글 데이터 로드 실패:", error);
    }
  };
  
  
  

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadPosts);
    return unsubscribe;

  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Svg width="3" height="22">
          <Rect width="3" height="22" fill="#468CE7" stroke="#468CE7" strokeWidth="1" />
        </Svg>
        <Text style={styles.titleText}>커뮤니티</Text>
      </View>
      <View style={styles.categoryContainer}>
        <FlatList
          data={categoryData}
          renderItem={renderCategoryButton}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView style={{ flex: 1, marginBottom: 12 }} showsVerticalScrollIndicator={false}>
        {filteredPosts.map((post, index) => (
          <PostContainer
            key={index.toString()}
            post={post}
            username={post.username}
            navigation={navigation}
            onFavoritePress={() => handleFavorite(post.id)}
          />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton} onPress={handleFloatingButtonPress}>
        <Image source={require("../../../assets/write.png")} style={styles.floatingButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

export default FeedScreen;
