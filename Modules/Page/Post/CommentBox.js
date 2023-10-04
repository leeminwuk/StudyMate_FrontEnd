import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const CommentBox = ({ comment }) => {
  return (
    <View style={styles.commentBar}>
      <View style={styles.commentInnerBar}>
        <View style={styles.commentImage}>
          <Image
            source={require("../../../assets/profile.png")}
            style={{ width: 28, height: 28 }}
          />
        </View>
        <View style={styles.commentComponent}>
          <View style={styles.commentName}>
            <Text style={styles.commentNameText}>{comment.name}</Text>
          </View>
          <View style={styles.commentDetail}>
            <Text style={styles.commentDetailText}>{comment.content}</Text>
          </View>
        </View>
      </View>
      <View style={styles.commentFavorite}>
        <Image
          source={require("../../../assets/favoriteblack.png")}
          style={{ width: 16, height: 16 }}
        />
        <Text style={styles.commentfavoriteText}>1</Text>
      </View>
    </View>
  );
};

export default CommentBox;
