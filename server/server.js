// 필요한 모듈 가져오기
import fetch from 'node-fetch';
import axios from 'axios';

// Node 서버로 POST 요청을 보내는 함수
const submitToNodeServer = async (data) => {
  try {
    // fetch를 사용하여 요청을 보냄
    const response = await fetch('http://localhost:8081/idplz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ test: data }) // 데이터를 JSON 문자열로 변환
    });
    
    // 응답이 성공적인지 확인
    if (response.ok) {
      const jsonResponse = await response.json(); // 응답을 JSON으로 파싱
      console.log('성공:', jsonResponse);
    } else {
      console.error('서버 응답 에러', response.status);
    }
  } catch (error) {
    console.error('요청 실패:', error);
  }
};

// Spring Boot 서버로 GET 요청을 보내는 함수
const getDataFromSpringBootServer = async () => {
  try {
    // axios를 사용하여 요청을 보냄
    const response = await axios.get('http://localhost:8080/your-endpoint');
    console.log(response.data); // 응답 데이터 출력
  } catch (error) {
    console.error('요청 실패:', error);
  }
};

// 함수를 다른 파일에서 사용할 수 있도록 내보냄
module.exports = { submitToNodeServer, getDataFromSpringBootServer };
