import React from "react";

interface ConfirmBtnProps {
  onClick: () => void; // 버튼 클릭 시 실행할 함수
  text: string; // 버튼에 표시될 텍스트
  disabled?: boolean; // 버튼 비활성화 상태 (기본값: false)
}

const ConfirmBtn = ({ onClick, text, disabled = false }: ConfirmBtnProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#828A8E" : "#5F47F1", // 비활성화 색상: #828A8E, 활성화 색상: #5F47F1
        color: "#FFFFFF", // 텍스트 색상
        width: "100%", // 버튼 너비
        height: "52px", // 버튼 높이
        border: "none", // 테두리 제거
        borderRadius: "8px", // 모서리 둥글게
        fontSize: "16px", // 텍스트 크기
        fontWeight: 600, // 텍스트 굵기
        cursor: disabled ? "not-allowed" : "pointer", // 비활성화 시 커서 변경
        marginBottom: "50px",
      }}
    >
      {text}
    </button>
  );
};

export default ConfirmBtn;
