import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { FlatList } from "react-native-gesture-handler";
import axios from 'axios';

const WriteScreen = () => {
  const categoryData = [
    { id: "1", title: "그룹모집" },
    { id: "2", title: "일상대화" },
    { id: "3", title: "학사공유" },
  ];
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState(''); // 카테고리 상태 추가
  const [open, setOpen] = useState(false);
  const [pressedId, setPressedId] = useState('');

  const handleGoToFeedScreen = () => {
    navigation.goBack();
  };
  const handlePress = (id) => {
    setPressedId(id);
    setCategory(categoryData.find(cat => cat.id === id).title);
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
  const pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const updatedImages = [...images];
      updatedImages[index] = result.uri;
      setImages(updatedImages);
    }
  };
  const uploadPost = async () => {
    try {
      const response = await axios.post('http://10.102.2.182:8000/api/board', {
        title, // 제목
        content, // 내용
        category, // 카테고리
        images, // 이미지 (이미지 업로드가 필요한 경우)
      });
  
      if (response.status === 200) {
        Alert.alert("게시글 업로드 성공");
        navigation.goBack();
      }
    } catch (error) {
      console.error("게시글 업로드 실패:", error);
      Alert.alert("게시글 업로드 실패");
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.writeTitle}>
        <TouchableOpacity onPress={handleGoToFeedScreen}>
          <Image
            source={require("../../../assets/exitbutton.png")}
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>글 작성</Text>
        </View>
        <View style={{ width: 28, height: 28, marginRight: 16 }} />
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#a4a4a4",
          marginTop: 12,
        }}
      ></View>

      {/* <View style={styles.imageContainer}>
        <View>
          <Text style={styles.imageText}>사진</Text>
        </View>
        <View style={styles.inputImage}>
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => pickImage(index)}>
              <View style={styles.imageBox}>
                {image ? (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 80, height: 80 }}
                  />
                ) : (
                  <Image
                    source={require("../../../assets/photo.png")}
                    style={{
                      width: 28,
                      height: 28,
                      marginLeft: 26,
                      marginTop: 18,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View> */}

      <View style={styles.titleContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>카테고리</Text>
          <View style={styles.categoryContainer}>
            <FlatList
              data={categoryData}
              renderItem={renderCategoryButton}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={styles.titleBox}>
          <Text style={styles.titleText}>제목</Text>
        </View>
        <View style={styles.inputTextContainer}>
          <TextInput
            style={{ marginLeft: 12 }}
            placeholder="제목을 입력하세요."
            onChangeText={setTitle} // 제목 입력 처리
            value={title}
          />
        </View>
      </View>
      <View style={styles.writeContainer}>
        <View style={styles.writeBox}>
          <Text style={styles.writeText}>상세글</Text>
        </View>
        <View style={styles.writeTextContainer}>
          <TextInput
            style={{ marginLeft: 12, marginTop: 12, marginRight: 12}}
            placeholder="욕설, 부적합한 내용은 삭제 될 수 있습니다."
            onChangeText={setContent} // 내용 입력 처리
            value={content}
            multiline
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={uploadPost}>
            <Text style={styles.buttonText}>작성완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WriteScreen;
