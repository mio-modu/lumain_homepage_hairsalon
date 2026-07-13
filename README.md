# 헤어살롱 라움 — 랜딩페이지 + AI 챗봇 통합

크몽 포트폴리오용 원페이지 랜딩페이지 데모입니다. 순수 HTML/CSS/JS 단일 파일로 제작되어 별도 빌드 없이 바로 열람·배포할 수 있습니다.

## 미리보기

`index.html`을 브라우저로 열거나, GitHub Pages 배포 후 아래 주소에서 확인할 수 있습니다.

https://mio-modu.github.io/lumain_homepage_hairsalon/

## 구성

- Hero → About → 시술/가격 → 디자이너 소개 → 갤러리 → 리뷰 → 온라인 예약(캘린더+시간+시술 선택) → 오시는 길 → 푸터
- 우측 하단 플로팅 AI 챗봇: 키워드 매칭 방식으로 영업시간/가격/위치/예약 문의에 자동 응답 (데모 모드)
- 온라인 예약 섹션: 달력에서 날짜 선택(월요일 휴무 자동 비활성화) → 시간 슬롯 선택 → 시술 선택 → 확인

## 이미지 채워 넣기

`images/README.md`에 AI 이미지 생성 프롬프트와 파일명이 정리되어 있습니다. 해당 파일명으로 이미지를 `images/` 폴더에 넣으면 코드 수정 없이 자동으로 반영됩니다.

## 실 서비스로 전환하려면

1. 챗봇: `index.html` 안 `demoResponses` / `getDemoReply()`를 서버리스 함수(Vercel 등) + Claude/Gemini API 호출로 교체
2. 예약: 확인 버튼 클릭 시 실제 DB(Supabase 등)에 저장하도록 `confirmBtn` 클릭 핸들러를 API 호출로 교체
3. 지도: `images/map.jpg` 자리를 카카오맵/네이버맵 embed 코드로 교체
