"use client";

import React from "react";
import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import checkAnimation from "../../public/checkAnimation.json";

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
    console.log("Send Message to React");
    // React Native로 메시지 전송
    window.ReactNativeWebView?.postMessage("Hello from Web!");
  };

  return (
    <div>
      <h1>Next.js WebView 통신 테스트</h1>
      <div style={{ backgroundColor: "white" }}>
        <Player
          autoplay
          loop
          src={checkAnimation}
          style={{ height: "150px", width: "150px" }}
        />
      </div>
      <button onClick={sendMessageToReactNative}>
        Send Message to React Native
      </button>
    </div>
  );
};

export default Home;
