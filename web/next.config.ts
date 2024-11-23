/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // 모든 경로에 대해 CORS 설정
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // 모든 도메인 허용
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
