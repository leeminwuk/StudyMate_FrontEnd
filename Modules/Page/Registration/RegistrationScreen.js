import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [images, setImages] = useState([null]);
  const [curriculumWeeks, setCurriculumWeeks] = useState([
    { week: 1, curriculum: "" },
    { week: 2, curriculum: "" },
    { week: 3, curriculum: "" },
    { week: 4, curriculum: "" },
    { week: 5, curriculum: "" },
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "강남대 - 복지융합학부", value: "weltech" },
    { label: "강남대 - 예체능학부", value: "art" },
    { label: "강남대 - 경영관리학부", value: "management" },
    { label: "강남대 - 글로벌인재학부", value: "global" },
    { label: "강남대 - 공과대학", value: "ict" },
    { label: "강남대 - 사범대학", value: "study" },
  ]);

  const updateCurriculum = (index, text) => {
    const updatedCurriculumWeeks = [...curriculumWeeks];
    updatedCurriculumWeeks[index].curriculum = text;
    setCurriculumWeeks(updatedCurriculumWeeks);
  };
  const handleGoToMoreScreen = () => {
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
    <SafeAreaView style={{ flex: 1 , marginBottom : 12}}>
      <View style={styles.writeTitle}>
        <TouchableOpacity onPress={handleGoToMoreScreen}>
          <Image
            source={require("../../../assets/exitbutton.png")}
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>튜터등록</Text>
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
      <ScrollView>
        <View style={styles.imageContainer}>
          <View>
            <Text style={styles.imageText}>프로필 사진</Text>
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
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>학부 선택</Text>
          </View>
        </View>
        <DropDownPicker
          placeholder="학부를 선택하세요."
          placeholderStyle={{
            color: "grey",
          }}
          style={{ borderColor: "#d0d0d0" }}
          containerStyle={styles.dropDownContainer}
          dropDownContainerStyle={styles.downContainer}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <View style={styles.writeContainer}>
          <View style={styles.subjectwriteBox}>
            <Text style={styles.subjectText}>튜터링 과목명</Text>
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              style={{ marginLeft: 12 }}
              placeholder="학부에 맞는 과목명을 입력하세요."
            />
          </View>
        </View>
        <View style={styles.writeContainer}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>튜터소개 글 작성</Text>
          </View>
          <View style={styles.writeTextContainer}>
            <TextInput
              style={{ marginLeft: 12 }}
              placeholder="욕설, 부적합한 내용은 삭제 될 수 있습니다."
            />
          </View>
        </View>
        <View style={styles.writeContainer}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>주차별 커리큘럼 작성</Text>
            {curriculumWeeks.map((item, index) => (
              <View key={index} style={styles.curriculumBox}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.weekText}>{`${item.week}주차`}</Text>
                </View>
                <View style={styles.curriculumContainer}>
                  <TextInput
                    style={styles.curriculumText}
                    placeholder={`${item.week}주차 커리큘럼을 작성하세요.`}
                    value={item.curriculum}
                    onChangeText={(text) => updateCurriculum(index, text)}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>작성완료</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
