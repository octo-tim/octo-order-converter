# 옥토아이앤씨 주문 변환기 (Order Converter)

셀러페이 / 네이버 스마트스토어 주문 파일을 업로드하면
**옥토아이앤씨 발주서**와 **이카운트 판매입력** 엑셀을 자동 생성하는 웹 도구.

모든 처리는 브라우저 안에서 이뤄지며(서버는 정적 파일만 제공), 주문 데이터는 외부로 전송되지 않는다.

## 주요 기능
- 셀러페이 / 네이버 스마트스토어 **양식 자동 감지**
- 네이버 암호화 파일(.xlsx, OLE2) **브라우저 내 복호화** (기본 암호 1111)
- 이카운트 품목코드 매핑
  - 네이버: 옵션관리코드 그대로 사용
  - 셀러페이: 내장 품목현황(약 2,000개)과 상품명·옵션 대조
  - 미확정 항목은 화면에서 직접 보정(브라우저에 저장)
- 거래처코드 자동 적용: 셀러페이 7808703064 / 네이버 12685
- 출하창고 00003 · 결재방식 온라인 공통
- 셀러페이 금액: 총결제금액 기준(다라인은 상품금액 비율 배분)
- 이카운트 규격 빈칸, 적요 = 네이버 상품주문번호 / 셀러페이 주문번호

## 로컬 실행
```bash
npm install
npm start
# http://localhost:3000
```

## Railway 배포
1. 이 저장소를 GitHub에 push
2. Railway → New Project → Deploy from GitHub repo → 이 저장소 선택
3. 빌드/실행은 railway.json + package.json(`npm start`)으로 자동 처리
4. 배포 후 Settings → Networking → Generate Domain 으로 공개 URL 생성

## 구성
- `public/index.html` — 변환기 본체(단일 HTML, 품목현황 내장)
- `server.js` — Express 정적 서버
- `railway.json` — Railway 빌드/헬스체크 설정
# octo-order-converter
# discount7
# discount7
