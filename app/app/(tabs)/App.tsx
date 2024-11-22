import React, { useRef } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const webviewRef = useRef<WebView>(null);

  // React Native → WebView (Next.js로 메시지 전송)
  const sendMessageToWebView = (message: string) => {
    if (webviewRef.current) {
      webviewRef.current.postMessage(message); // WebView로 메시지 전송
      console.log("React Native -> WebView 메시지 전송:", message);
    }
  };

  return (
    <View style={styles.container}>
      {/* WebView */}
      <WebView
        ref={webviewRef}
        source={{ uri: "http://192.168.10.17:3000" }} // Next.js URL
        onMessage={(event) => {
          const message = event.nativeEvent.data; // WebView에서 수신한 메시지
          console.log("WebView -> React Native 메시지 수신:", message);

          if (message === "pong") {
            Alert.alert("메시지", "WebView로부터 'pong' 메시지 수신");
          }
        }}
        style={styles.webview}
        originWhitelist={["*"]} // 모든 출처 허용
      />

      {/* React Native → WebView 메시지 전송 버튼 */}
      <Button
        title="Send 'ping' to WebView"
        onPress={() => sendMessageToWebView("ping")} // WebView로 'ping' 메시지 전송
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
});
