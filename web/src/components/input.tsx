import React from "react";

interface InputProps {
  type?: string; // input 타입 (e.g., text, password, email 등)
  placeholder?: string; // placeholder 텍스트
  value?: string; // 입력 값
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 변경 이벤트 핸들러
  name?: string; // input의 name 속성
  className?: string; // 추가적인 스타일 적용
  disabled?: boolean; // 비활성화 여부
  width: string;
  height: string;
}

const Input = ({
  type = "text", // 기본값은 text
  placeholder = "",
  value,
  onChange,
  name,
  className = "",
  disabled = false,
  width,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`input ${className}`} // 기본 클래스와 추가 클래스
      disabled={disabled}
      width={width}
      height="52px"
      style={{
        color: "#ACB2B5",
        padding: "17px",
        backgroundColor: "white",
        borderRadius: "4px",
        border: "1px solid #F0F0F3",
        width: "100%",
      }}
    />
  );
};

export default Input;
