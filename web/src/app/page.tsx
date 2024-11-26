"use client";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // WebView에서 수신한 메시지 처리
    const handleMessage = (event: MessageEvent) => {
      console.log("Message from React Native:", event.data);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const sendMessageToReactNative = () => {
    // React Native로 메시지 전송
    (window as any).ReactNativeWebView?.postMessage("Hello from Web!");
  };

  return (
    <div>
      <h1>Next.js WebView 통신 테스트</h1>
      <button onClick={sendMessageToReactNative}>
        Send Message to React Native
      </button>
    </div>
  );
};

export default Home;
