import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [postData, setPostData] = useState([
    {
        id: "1",
        category: "인기글",
        name: "신은호",
        date: "방금 전",
        content: "서양역사와 이해 같이 공부하실 분 모집합니다.",
        favoriteCount: 0,
        commentCount: 0,
      },
      {
        id: "2",
        category: "일상대화",
        name: "이민욱",
        date: "3분 전",
        content: "개강 얼마 안남았네요 ㅠㅠ 다들 방학때 뭐하셨나요?",
        favoriteCount: 0,
        commentCount: 0,
      },
      {
        id: "3",
        category: "학사공유",
        name: "신은총",
        date: "15분 전",
        content: "2학기 중간고사 10월 26일입니다. 이번엔 미리 공부합시다!",
        favoriteCount: 0,
        commentCount: 0,
      },
      {
        id: "4",
        category: "그룹모집",
        name: "신민총",
        date: "40분 전",
        content: "내일은 집에 있을거에용 우리집으로 오세용.",
        favoriteCount: 0,
        commentCount: 0,
      },
  ]);
  const updateFavoriteCount = (id, newCount) => {
    const updatedData = postData.map((post) => {
      if (post.id === id) {
        post.favoriteCount = newCount;
      }
      return post;
    });
    setPostData(updatedData);
  };

  return (
    <DataContext.Provider value={{ postData, setPostData, updateFavoriteCount }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

