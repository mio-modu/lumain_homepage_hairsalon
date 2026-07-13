# 이미지 채우는 방법

이 폴더에 아래 파일명으로 이미지를 넣으면 각 페이지가 자동으로 인식해서 보여줍니다 (파일이 없으면 세이지그린 placeholder 박스가 대신 표시됩니다). 코드를 수정할 필요 없이 파일만 넣으면 됩니다.

## 진행 상황

### 완료 (index.html / program.html 공통 소재)

| 파일명 | 용도 | 상태 |
|---|---|---|
| `hero.jpg` | index.html Hero 관리실 전경 | ✅ 완료 |
| `program-basic.jpg` | 페이셜뷰티 카드/배너 | ✅ 완료 |
| `program-trouble.jpg` | 스킨솔루션 카드/배너 | ✅ 완료 |
| `program-antiaging.jpg` | 스페셜 카드/배너 | ✅ 완료 |
| `program-wedding.jpg` | 웨딩케어 카드/배너 | ✅ 완료 |
| `ba-before.jpg` / `ba-after.jpg` | index.html Before&After 미리보기 | ✅ 완료 |
| `esthetician-1/2/3.jpg` | 관리사 프로필 (현재 페이지엔 미노출, 추후 재사용 가능) | ✅ 완료 |
| `storefront.jpg` | 오시는 길 매장 외관 | ✅ 완료 |

### 완료 (review.html / community.html 소재 — 2차 생성분)

| 파일명 | 용도 | 상태 |
|---|---|---|
| `review-youtube.jpg` | 리뷰 그리드 큰 카드 (유튜브·스타) | ✅ 완료 |
| `review-instagram.jpg` | 리뷰 그리드 작은 카드 (인스타그램) | ✅ 완료 |
| `review-blog.jpg` | 리뷰 그리드 작은 카드 (블로그) | ✅ 완료 |
| `review-own.jpg` | 리뷰 그리드 작은 카드 (자체/홈페이지) — 원본에 깨진 글자가 박혀있어 텍스트 없는 영역만 크롭 | ✅ 완료 (크롭됨) |
| `community-blog.jpg` | 커뮤니티 계절 케어 팁 카드 — 원본 우측의 깨진 문구("HYDRATIONING ELEATIONS")를 잘라내고 인물 부분만 크롭 | ✅ 완료 (크롭됨) |
| `community-video.jpg` | 커뮤니티 인터뷰 영상 썸네일 — 원본 배경에 타 브랜드로 보이는 "DALIA" 로고가 찍혀있어 로고가 안 보이는 인물 중심으로 크롭 | ✅ 완료 (크롭됨) |
| `ba-wrinkle-before/after.jpg`, `ba-trouble-before/after.jpg`, `ba-contour-before/after.jpg` | review.html Before&After 3개 카드 (주름관리/트러블케어/윤곽관리) | ⚠️ 임시 — 현재는 `ba-before/after.jpg`를 복사해 재사용 중. 항목별로 다른 사진이 준비되면 같은 파일명으로 교체 |

### 미완성 — 추가 생성 필요

| 파일명 | 용도 | 프롬프트 |
|---|---|---|
| `program-body.jpg` | 바디케어 배너 | Editorial photo of a back massage treatment in progress, warm neutral tones, minimal spa setting, soft natural light, no visible face, sage green accent towel |
| `program-mens.jpg` | 맨즈뷰티 배너 | Close-up of men's skincare products and grooming tools arranged on a minimal charcoal-and-sage surface, editorial product photography, soft shadow |
| `program-premium.jpg` | 프리미엄 패키지 배너 | Luxurious minimal spa suite interior, soft gold and sage accents, ambient warm lighting, premium editorial photography, no visible people, 16:9 |
| `celebrity-1.jpg` ~ `celebrity-4.jpg` | Review 페이지 유명인 후기 카드 (실제 인물이 아닌 가상 이미지로) | Minimal signature-style card background, soft cream or sage tone, elegant blank space for handwritten-style text overlay, no identifiable face, editorial and clean |
| `community-gyeol-tv.jpg` | 커뮤니티 GYEOL TV 와이드 배너 | Dreamy editorial portrait of a Korean woman outdoors, soap bubbles floating in foreground catching golden hour light, soft bokeh greenery background, warm and ethereal mood, wide banner crop 21:9, space for text overlay on lower third |

`extra-serum-texture-unused.png`는 세럼 텍스처 클로즈업 이미지인데, 기획서 5-② "신뢰 지표 배경(선택)" 프롬프트로 생성된 여분 이미지입니다. 현재 페이지에는 해당 배경 슬롯이 없어 사용하지 않고 폴더에 남겨뒀습니다.

## 주의사항

- **AI 생성 이미지에 텍스트가 함께 박혀 나오는 경우가 있습니다.** 특히 손글씨 스타일/카피 문구를 요청하면 영어 스펠링이 깨지거나 의미 없는 문장이 나올 수 있어요. 이번에 `review-own.jpg`, `community-blog.jpg`는 텍스트 없는 영역만 잘라서 사용했습니다. 재생성하실 때는 "no text, no typography" 같은 문구를 프롬프트에 추가하시는 것을 권장합니다.
- **타 브랜드 로고/상호가 배경에 노출되지 않도록 확인해주세요.** `community-video.jpg` 원본에는 배경 유리벽에 "DALIA"라는 실제 화장품 브랜드로 추정되는 로고가 크게 찍혀 있어 로고가 안 보이는 부분만 크롭했습니다. 재생성 시 브랜드명이 들어가지 않는지 확인 부탁드려요.
- 지도는 AI 생성이 아니라 카카오맵/네이버맵에서 매장 위치를 캡처하거나, 지도 서비스 embed 코드로 교체하는 것을 권장합니다.
- 유명인 후기 카드는 실제 유명인의 성함·초상을 사용하지 않고 "OOO 배우님"처럼 익명으로 표기했습니다. 실제 후기로 교체 시 반드시 초상권 동의를 받은 콘텐츠만 사용해주세요.
