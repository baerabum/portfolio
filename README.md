# 배정윤 — Portfolio

서비스 기획자 배정윤의 개인 브랜딩 웹사이트. 빌드 도구 없는 정적 사이트(`index.html`, `styles.css`, `main.js`)로, GitHub Pages 등에 그대로 배포할 수 있습니다.

## 구조
1. Hero — 이름, 한 문장 소개, 대표 프로젝트(DOTORIT)
2. About — 소개, 커리어 경로, 핵심 역량 4가지, 경력·교육·도구
3. Selected Works — 5개 프로젝트 인덱스 + 그 밖의 작업
4. Project Detail — 프로젝트별 Background / Problem / My Role / Approach / Result / Learnings
5. Contact

## 이미지 넣기
각 커버는 이미지가 없으면 타이포그래피 타일로 보이고, 아래 경로에 파일을 넣으면 자동으로 이미지가 덮입니다.

| 파일 | 위치 |
| --- | --- |
| `assets/works/{mobile,dealer365,dotorit,hannip,topiki}-cover.jpg` | Works 목록 썸네일 / Hero(dotorit) |
| `assets/works/{mobile,dealer365,dotorit,hannip,topiki}-detail.jpg` | 각 Project Detail 상단 대표 이미지 |

권장 비율: cover 4:3, detail 21:9.

## 채워야 할 내용
페이지에서 주황색 `[… 추가 필요]` 표시를 찾아 수정하세요 (`grep -n "todo" index.html`).
