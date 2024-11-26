import React, { useRef } from "react";
import { StyleSheet, View, Button, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const WebViewScreen = () => {
  const webViewRef = useRef<any>(null);

  const sendMessageToWeb = () => {
    webViewRef.current.postMessage("Hello from React Native");
  };

  const onMessage = (event: any) => {
    const message = event.nativeEvent.data;
    console.log("Message from Web:", message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Send to Web" onPress={sendMessageToWeb} />

      <WebView
        ref={webViewRef}
        source={{ uri: "http://192.168.200.194:3000" }}
        onMessage={onMessage}
        javaScriptEnabled
        domStorageEnabled
        originWhitelist={["*"]} // 모든 도메인 허용
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
