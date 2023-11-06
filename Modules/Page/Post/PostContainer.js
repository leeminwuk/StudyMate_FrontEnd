import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../Feed/styles";
import { SafeAreaView } from 'react-native-safe-area-context';

const PostContainer = ({ post, navigation, isTouchable = true, onFavoritePress }) => {
  const [favoriteCount, setFavoriteCount] = useState(0); // 초기값을 0으로 설정

  const Wrapper = isTouchable ? TouchableOpacity : View;
  const category = post.category;
  const categoryBorderColor = category === "인기글" ? "#5884E8" : "#5F5F5F";
  const categoryTextColor = category === "인기글" ? "#5884E8" : "#5F5F5F";

  const handleFavoritePress = () => {
    setFavoriteCount(favoriteCount + 1); // favoriteCount 증가
  };

  return (
    <Wrapper
    style={styles.postContainer}
    onPress={isTouchable ? () => navigation.navigate("Post", { post }) : null}
  >
      <View style={[styles.postCategory, { borderColor: categoryBorderColor }]}>
        <Text style={[styles.postText, { color: categoryTextColor }]}>
          {category}
        </Text>
      </View>
      <View style={styles.postTitle}>
        <Image
          source={require("../../../assets/profile.png")}
          style={styles.postImage}
        />
        <View style={styles.postTitleText}>
          <Text style={styles.postName}>{post.name}</Text>
          <Text style={styles.postDate}>{post.date}</Text>
        </View>
      </View>
      <View style={styles.postContent}>
        <Text style={styles.postContentText}>{post.content}</Text>
      </View>
      <View style={styles.hr}></View>

      <View style={styles.favoritecommentContainer}>
        <TouchableOpacity onPress={onFavoritePress} style={styles.favoriteContainer}>
          <Image
            source={require("../../../assets/favorite.png")}
            style={styles.favoriteImage}
          />
          <Text style={styles.favoriteText}>{post.favoriteCount}</Text>
        </TouchableOpacity>

        <View style={styles.commentContainer}>
          <Image
            source={require("../../../assets/comment.png")}
            style={styles.commentImage}
          />
          <Text style={styles.commentText}>{post.commentCount}</Text>
        </View>
      </View>
    </Wrapper>
  );
};

export default PostContainer;
