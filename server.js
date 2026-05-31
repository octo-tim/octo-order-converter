const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공 (public/index.html = 주문 변환기)
app.use(express.static(path.join(__dirname, "public")));

// 헬스체크
app.get("/health", (_req, res) => res.status(200).send("ok"));

// 그 외 모든 경로는 변환기로
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`주문 변환기 running on port ${PORT}`);
});
