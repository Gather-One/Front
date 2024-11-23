"use client";

import React, { useEffect } from "react";

const sendMessageToReactNative = (message: string) => {
  console.log("WebView -> React Native 메시지 전송 시도:", message);

  if (window.ReactNativeWebView) {
    // React Native로 메시지 전송
    window.ReactNativeWebView.postMessage(message);
  } else {
    console.warn(
      "ReactNativeWebView 객체가 정의되지 않았습니다. (브라우저 환경)"
    );
  }
};

export default function HomePage() {
  useEffect(() => {
    const handleMessageFromReactNative = (event: MessageEvent) => {
      console.log("React Native -> WebView 메시지 수신:", event.data);

      // 메시지가 "ping"일 경우 "pong" 메시지 전송
      if (event.data === "ping") {
        sendMessageToReactNative("pong");
      }
    };

    // React Native에서 오는 메시지를 수신
    window.addEventListener("message", handleMessageFromReactNative);

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
