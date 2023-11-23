import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../Feed/styles";

const PostContainer = ({ post, navigation, onFavoritePress }) => {
  const Wrapper = TouchableOpacity;
  const isPopular = post.likes >= 10;
  console.log("Username:", post.username);
  console.log("Date:", post.createDate);

  const calculateTimeDifference = (dateString) => {
    const now = new Date();
    const postedDate = new Date(dateString);
    const diffInSeconds = Math.floor((now - postedDate) / 1000);
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30; // 대략적인 월 계산

    if (diffInSeconds < minute) {
      return "방금전";
    } else if (diffInSeconds < hour) {
      return `${Math.floor(diffInSeconds / minute)}분 전`;
    } else if (diffInSeconds < day) {
      return `${Math.floor(diffInSeconds / hour)}시간 전`;
    } else if (diffInSeconds < week) {
      return `${Math.floor(diffInSeconds / day)}일 전`;
    } else if (diffInSeconds < month) {
      return `${Math.floor(diffInSeconds / week)}주 전`;
    } else {
      return `${Math.floor(diffInSeconds / month)}달 전`;
    }
  };

    // 인기글의 테두리 및 텍스트 색상
    const popularBorderColor = "#5884E8";
    const popularTextColor = "#5884E8";
  
    const username = post.user ? post.user.username : '알 수 없음';
  const rawDate = post.createDate; // createDate 참조 변경
  const timeDifference = rawDate
    ? calculateTimeDifference(rawDate)
    : "날짜 정보 없음";
    // 기존 카테고리의 테두리 및 텍스트 색상
    const categoryBorderColor = "#5F5F5F";
    const categoryTextColor = "#5F5F5F";
  const contentPreview = post.content.length > 30
  ? `${post.content.substring(0, 30)}...`
  : post.content;
  return (
    <Wrapper
      style={styles.postContainer}
      onPress={() => navigation.navigate("Post", { post })}
    >
      <View style={{flexDirection:"row", marginLeft:8}}>
        {isPopular && (
          <View
          style={[styles.postCategory, { borderColor: popularBorderColor }]}
        >
          <Text style={[styles.postText, { color: popularTextColor }]}>
            인기글
          </Text>
        </View>
        )}
        <View
          style={[styles.postCategory, { borderColor: categoryBorderColor }]}
        >
          <Text style={[styles.postText, { color: categoryTextColor }]}>
            {post.category}
          </Text>
        </View>
      </View>

      <View style={styles.postTitle}>
        <Image
          source={require("../../../assets/profile.png")}
          style={styles.postImage}
        />
        <View style={styles.postTitleText}>
        <Text style={styles.postName}>{username}</Text>
        <Text style={styles.postDate}>{timeDifference}</Text>
        </View>
      </View>
      <View style={styles.postContent}>
        <Text style={styles.postContentText}>{contentPreview}</Text>
      </View>
      <View style={styles.hr}></View>

      <View style={styles.favoritecommentContainer}>
        <TouchableOpacity
          onPress={() => onFavoritePress(post.id)}
          style={styles.favoriteContainer}
        >
          <Image
            source={require("../../../assets/favorite.png")}
            style={styles.favoriteImage}
          />
          <Text style={styles.favoriteText}>{post.likes}</Text>
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
