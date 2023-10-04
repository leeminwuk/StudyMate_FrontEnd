import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
const WriteScreen = () => {
  const navigation = useNavigation();
  const [images, setImages] = useState([null, null, null]); 

const handleGoToFeedScreen = () => {
  navigation.goBack();
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
     <View style={styles.imageContainer}>
        <View>
          <Text style={styles.imageText}>사진</Text>
        </View>
        <View style={styles.inputImage}>
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => pickImage(index)}>
              <View style={styles.imageBox}>
                {image ? (
                  <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />
                ) : (
                  <Image
                    source={require('../../../assets/photo.png')}
                    style={{ width: 28, height: 28, marginLeft: 26, marginTop: 18 }}
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>제목</Text>
        </View>
        <View style={styles.inputTextContainer}>
          <TextInput style={{ marginLeft: 12 }} placeholder="제목을 입력하세요." />
        </View>
      </View>
      <View style={styles.writeContainer}>
        <View style={styles.writeBox}>
          <Text style={styles.writeText}>상세글</Text>
        </View>
        <View style={styles.writeTextContainer}>
          <TextInput
            style={{ marginLeft: 12, marginTop: 16 }}
            placeholder="욕설, 부적합한 내용은 삭제 될 수 있습니다."
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>작성완료</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WriteScreen;
