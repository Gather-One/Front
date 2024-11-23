import React, { useRef } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

export default function App() {
  const webviewRef = useRef<WebView>(null);

  // React Native -> WebView로 메시지 보내기
  const sendMessageToWebView = (message: string) => {
    if (webviewRef.current) {
      webviewRef.current.postMessage(message); // message를 JSON 문자열로 전달
      console.log("React Native -> WebView 메시지 전송:", message);
    } else {
      console.warn("WebView 참조가 존재하지 않습니다.");
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: "http://10.100.201.172:3000" }} // 웹뷰의 URL
        onMessage={(event) => {
          // WebView -> React Native 메시지 수신
          const message = event.nativeEvent.data; // 수신된 메시지
          console.log("WebView -> React Native 메시지 수신:", message);

          // 메시지가 pong이라면 알림 표시
          if (message === "pong") {
            Alert.alert("메시지", "WebView로부터 'pong' 메시지 수신");
          }
        }}
        javaScriptEnabled
        domStorageEnabled
        originWhitelist={["*"]}
      />

      <Button
        title="Send 'ping' to WebView"
        onPress={() => sendMessageToWebView("ping")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
