import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Svg, { Rect } from "react-native-svg";
import PostContainer from "../Post/PostContainer";
import { useData } from "../../DataContext";
const FeedScreen = ({ navigation }) => {
  const categoryData = [
    { id: "1", title: "전체" },
    { id: "2", title: "인기" },
    { id: "3", title: "그룹모집" },
    { id: "4", title: "일상대화" },
    { id: "5", title: "학사공유" },
  ];

  const { postData, setPostData } = useData();

  const [pressedId, setPressedId] = useState(null);

  const handlePress = (id) => {
    setPressedId(id);
  };
  const handleFavorite = (id) => {
    const updatedData = postData.map((post) => {
      if (post.id === id) {
        post.favoriteCount += 1;
      }
      return post;
    });
    setPostData(updatedData);
  };
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
          <PostContainer
            key={post.id}
            post={post}
            navigation={navigation}
            onFavoritePress={() => handleFavorite(post.id)}
          />
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
