# 이미지 채우는 방법

이 폴더에 아래 파일명으로 이미지를 넣으면 `index.html`이 자동으로 인식해서 보여줍니다 (파일이 없으면 세이지그린 placeholder 박스가 대신 표시됩니다). 코드를 수정할 필요 없이 파일만 넣으면 됩니다.

Midjourney, DALL-E, Stable Diffusion 등 AI 이미지 생성 도구에 아래 프롬프트를 그대로 입력해서 생성한 뒤, 결과 파일을 지정된 이름으로 저장하세요.

## 진행 상황

| 파일명 | 용도 | 상태 |
|---|---|---|
| `hero.jpg` | Hero 관리실 전경 | ✅ 완료 |
| `program-basic.jpg` | 프로그램 카드 - 베이직 관리 | ✅ 완료 |
| `program-trouble.jpg` | 프로그램 카드 - 트러블 케어 | ✅ 완료 |
| `program-antiaging.jpg` | 프로그램 카드 - 안티에이징 | ✅ 완료 |
| `program-wedding.jpg` | 프로그램 카드 - 웨딩케어 | ✅ 완료 |
| `ba-before.jpg` | Before&After 슬라이더 - 관리 전 | ✅ 완료 |
| `ba-after.jpg` | Before&After 슬라이더 - 관리 과정 | ✅ 완료 (원본 합성 이미지의 텍스트/아이콘 영역을 잘라내고 우측 피부결 부분만 크롭) |
| `esthetician-1.jpg` | 관리사 프로필 1 (김서린 원장) | ✅ 완료 |
| `esthetician-2.jpg` | 관리사 프로필 2 (이하은 실장) | ✅ 완료 |
| `esthetician-3.jpg` | 관리사 프로필 3 (박수아 관리사) | ✅ 완료 |
| `storefront.jpg` | 오시는 길 - 매장 외관 | ✅ 완료 (지도 embed로 교체 권장은 유지) |

`extra-serum-texture-unused.png`는 세럼 텍스처 클로즈업 이미지인데, 기획서 5-② "신뢰 지표 배경(선택)" 프롬프트로 생성된 여분 이미지입니다. 현재 페이지에는 해당 배경 슬롯이 없어 사용하지 않고 폴더에 남겨뒀습니다.

## 프롬프트 표 (기획서 5번 항목 기준)

| 파일명 | 프롬프트 |
|---|---|
| `hero.jpg` | Minimalist skincare clinic interior, single treatment bed with white linen, soft diffused natural light from sheer curtains, sage green and warm white color palette, clean uncluttered composition, editorial beauty photography style, shallow depth of field, no visible people, 16:9 |
| `program-basic.jpg` | Close-up of hands performing gentle facial massage, soft natural skin tones, warm white background, minimal and calm, editorial beauty style |
| `program-trouble.jpg` | Close-up of clean skincare tools arranged minimally on white marble surface, sage green accent cloth, soft shadow, product photography |
| `program-antiaging.jpg` | Macro shot of collagen serum droplet on skin surface, soft golden-hour side lighting, luxury skincare campaign aesthetic |
| `program-wedding.jpg` | Soft-focus bridal-adjacent beauty shot, delicate white flowers beside skincare tools, romantic but minimal, warm natural light |
| `ba-before.jpg` / `ba-after.jpg` | Close-up of smooth clear skin texture on cheek area, soft natural light, minimal and clean, no visible face/identity, macro skin photography, warm neutral tones (전후 비교 대신 "관리 전 - 관리 과정" 두 장의 유사 톤 이미지로 준비) |
| `esthetician-1/2/3.jpg` | Editorial portrait of a 30s Korean female esthetician in white uniform, soft natural window light, calm professional expression, sage green blurred background, three-quarter angle, minimal beauty industry headshot style, square crop |
| `storefront.jpg` | Minimalist clinic storefront exterior, white and sage green signage, clean modern facade, soft morning light, minimal Korean street context, 4:3 crop |

## 참고

- `ba-before.jpg`, `ba-after.jpg`는 실제 고객 전후사진이 아닌, 저작권·초상권 문제가 없는 추상적 신뢰 요소(피부결 클로즈업 등)로 대체하는 것을 권장합니다 (기획서 5-④ 참고).
- 지도는 AI 생성이 아니라 카카오맵/네이버맵에서 매장 위치를 캡처하거나, 지도 서비스 embed 코드로 교체하는 것을 권장합니다.
- 관리사 사진은 실제 서비스 전환 시 매장 실사진으로 교체하는 것을 권장합니다.
