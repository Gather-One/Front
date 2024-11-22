"use client";

import React, { useEffect } from "react";

// WebView에서 React Native로 메시지 전송
const sendMessageToReactNative = (message: string) => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(message); // React Native로 메시지 전송
    console.log("WebView -> React Native 메시지 전송:", message);
  } else {
    console.warn("ReactNativeWebView가 정의되지 않음");
  }
};

export default function HomePage() {
  useEffect(() => {
    // React Native → WebView 메시지 수신
    const handleMessageFromReactNative = (event: MessageEvent) => {
      console.log("React Native -> WebView 메시지 수신:", event.data);

      // React Native로부터 'ping' 메시지를 받으면 응답 메시지 전송
      if (event.data === "ping") {
        sendMessageToReactNative("pong");
      }
    };

    // 메시지 수신 이벤트 리스너 등록
    window.addEventListener("message", handleMessageFromReactNative);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener("message", handleMessageFromReactNative);
    };
  }, []);

  return (
    <div>
      <h1>WebView 메시지 테스트</h1>
      <button onClick={() => sendMessageToReactNative("Hello from Web!")}>
        React Native로 메시지 전송
      </button>
    </div>
  );
}
