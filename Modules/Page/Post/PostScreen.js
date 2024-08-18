import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import PostContainer from './PostContainer';
import CommentBox from './CommentBox';
import { ScrollView } from "react-native";
import { useData } from '../../DataContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import {useUser} from '../../UserContext/UserContext';

const PostScreen = ({ route }) => {
  const { updateFavoriteCount } = useData();
  const { user } = useUser(); // useUser 훅을 사용하여 user 객체 가져오기
  const username = user?.username; // user 객체에서 username 추출

  const navigation = useNavigation();
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

  const addCommentToServer = async (boardId, userId, content) => {
    try {
      const replySaveRequestDto = {
        boardId: boardId,
        userId: userId,
        content: content
      };
      await axios.post(`http://10.102.2.182:8000/api/board/${boardId}/reply`, replySaveRequestDto);
    } catch (error) {
      console.error("댓글 추가 실패:", error);
    }
  };
  
  const handleSendMessage = () => {
    if (commentInput.trim().length > 0 && user) { // 'user' 객체 사용하여 로그인 확인
      // 서버에 댓글 추가
      addCommentToServer(post.id, user.id, commentInput)
        .then(() => {
          // 로컬 상태에 댓글 추가
          const newComment = {
            name: username, // 'username' 사용
            content: commentInput
          };
          setComments([...comments, newComment]);
          setCommentInput("");
        })
        .catch(error => {
          console.error("댓글 추가 실패:", error);
        });
    } else if (!user) {
      console.error("로그인한 사용자 정보가 없습니다.");
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
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <Image
            source={require("../../../assets/sendIcon.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PostScreen;
