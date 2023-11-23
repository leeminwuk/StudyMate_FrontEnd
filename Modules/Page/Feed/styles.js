import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  titleText: {
    marginLeft: 4,
    color: "#000",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
  },
  categoryContainer: {
    marginTop: 16,
    marginLeft: 20,
    marginBottom: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  categoryButton: {
    backgroundColor: "#FFFFFF",
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight : Platform.OS === "ios" ? 10 : 12,
    paddingHorizontal: 12,
    borderColor: "#ADB5BD",
    borderWidth: 0.5,
  },
  categoryText: {
    color: "#484848",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.5,
  },
  postContainer: {
    marginTop: 16,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "left",
    alignItems: "left",
    backgroundColor: "#FFFFFF",
    width: "auto",
    height: 164,
    borderRadius: 12,
    borderColor: "#D0D0D0",
    borderWidth: 1,
  },
  postCategory: {
    marginTop: 16,
    marginLeft: 8,
    paddingHorizontal: 8,
    height: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#5884E8",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    alignSelf: 'flex-start',
  },
  postText: {
    color: "#5884E8",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: -0.5,
    marginBottom: Platform.OS === "ios" ? 0 : 2,
  },
  postTitle: {
    marginLeft: 16,
    marginTop: 16,
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
  },
  postImage: {
    width: 36,
    height: 36,
  },
  postTitleText: {
    marginLeft: 12,
  },
  postName: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: -0.5,
  },
  postDate: {
    marginTop: Platform.OS === "ios" ? 4 : 0,
    marginLeft: 2,
    color: "#5F5F5F",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: -0.5,
  },
  postContent: {
    marginTop: 12,
    marginLeft: 16,
    textAlign: "center",
  },
  postContentText: {
    color: "#5F5F5F",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: -0.5,
  },
  hr: {
    marginTop: 12,
    width: "100%",
    height: 1,
    backgroundColor: "#D0D0D0",
  },
  favoritecommentContainer: {
    marginTop: Platform.OS === "ios" ? 8 : 4,
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteText: {
    marginLeft: 4,
    color: "#5884E8",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 12,
    letterSpacing: -0.5,
  },
  favoriteImage: {
    width: 20,
    height: 20,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
  },
  commentImage: {
    width: 20,
    height: 20,
  },
  commentText: {
    marginLeft: 4,
    color: "#5884E8",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 12,
    letterSpacing: -0.5,
  },
  floatingButton: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "#5884E8",
    borderRadius: 30,
    zIndex: 100,
  },
  floatingButtonImage: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
});

export default styles;