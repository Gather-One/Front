export interface WebViewMessage {
  type: string; // 메시지 타입 (예: "event", "action", "response" 등)
  payload?: string; // 추가 데이터
}
