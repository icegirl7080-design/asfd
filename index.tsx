import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// HTML 파일의 root 요소 확인
const rootElement = document.getElementById('root');

if (!rootElement) {
  // 배포 환경에서 디버깅을 돕기 위한 명확한 에러 메시지
  throw new Error("Failed to find the root element. Please check if 'index.html' contains <div id='root'></div>.");
}

// React 18 createRoot API 사용
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);