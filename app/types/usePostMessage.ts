export interface WebViewMessage {
  type: string; // 메시지 타입 (예: "event" or "action")
  payload?: any; // 전달하려는 데이터
}
