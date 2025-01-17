"use client";

import React from "react";
import Image from "next/image";

import logoColered from "@/image/logoColored.png";
import Input from "@/components/input";
import ConfirmBtn from "@/components/confirmBtn";
import Link from "next/link";
const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <Image src={logoColered} alt="" width={36}></Image>
        <p style={{ fontWeight: "600", fontSize: "42px" }}>movis</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "100%",
          marginBottom: "2vh",
          marginTop: "12vh",
        }}
      >
        <Input placeholder="아이디 입력" width="100%" height={""} />
        <Input placeholder="비밀번호 입력" width="100%" height={""} />
      </div>
      <ConfirmBtn
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        text={"로그인"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Link href="/register" style={{ textDecoration: "underline" }}>
          <p>회원가입</p>
        </Link>
        <Link href="/findPwd" style={{ textDecoration: "underline" }}>
          <p>비밀번호 찾기</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
