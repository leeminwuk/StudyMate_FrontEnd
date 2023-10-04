import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../Feed/styles";

const PostContainer = ({ post, navigation, isTouchable = true }) => {
  const Wrapper = isTouchable ? TouchableOpacity : View;
  const category = post.category;
  const categoryBorderColor = category === "인기글" ? "#5884E8" : "#5F5F5F";
  const categoryTextColor = category === "인기글" ? "#5884E8" : "#5F5F5F";

  return (
    <Wrapper
      style={styles.postContainer} // borderColor를 제거했습니다.
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
        <View style={styles.favoriteContainer}>
          <Image
            source={require("../../../assets/favorite.png")}
            style={styles.favoriteImage}
          />
          <Text style={styles.favoriteText}>{post.favoriteCount}</Text>
        </View>
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
