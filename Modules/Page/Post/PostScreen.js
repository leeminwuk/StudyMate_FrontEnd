import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import PostContainer from './PostContainer';
import CommentBox from './CommentBox';
import { ScrollView } from "react-native";
import { useData } from '../../DataContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const PostScreen = ({ route }) => {
  const navigation = useNavigation();
  const { updateFavoriteCount } = useData();
  const { post } = route.params;
  const [favoriteCount, setFavoriteCount] = useState(post.favoriteCount);
  const [comments, setComments] = useState([]); 
  const [commentInput, setCommentInput] = useState("");
  const handleFavoritePress = () => {
    const newFavoriteCount = favoriteCount + 1;
    setFavoriteCount(newFavoriteCount);
    updateFavoriteCount(post.id, newFavoriteCount);
  };
  

  const handleGoToFeedScreen = () => {
    navigation.goBack();
  };

  const handleAddComment = () => {
    if (commentInput) {
      setComments([...comments, { name: "작성자 이름", content: commentInput }]);
      setCommentInput("");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.title}>
          <TouchableOpacity onPress={handleGoToFeedScreen}>
            <Image
              source={require("../../../assets/backbutton.png")}
              style={{ width: 16, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/kebabIcon.png")}
            style={styles.kebabIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.postContainer}>
        <PostContainer
          post={{ ...post, favoriteCount }}
          navigation={navigation}
          isTouchable={false}
          onFavoritePress={handleFavoritePress}
        />
      </View>
      <View style={styles.commentContainer}>
        {comments.length === 0 ? (
          <Text style={styles.placeholderText}>
            {"아직 댓글이 없어요!"}
            {"\n"}
            {"첫 댓글을 작성해주세요."}
          </Text>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {comments.map((comment, index) => (
              <CommentBox key={index} comment={comment} />
            ))}
          </ScrollView>
        )}
      </View>

      <View style={styles.commentInputContainer}>
        <TextInput
          style={{ marginLeft: 12 }}
          placeholder="댓글을 입력해주세요."
          value={commentInput}
          onChangeText={setCommentInput}
          onSubmitEditing={handleAddComment}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostScreen;
