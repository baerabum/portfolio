# 배정윤 — Portfolio

서비스 기획자 배정윤의 개인 브랜딩 웹사이트. 빌드 도구 없는 정적 사이트(`index.html`, `styles.css`, `main.js`)로, GitHub Pages 등에 그대로 배포할 수 있습니다.

## 구조
서비스 기획 관점의 케이스 스터디 중심 구성입니다.

1. Hero — 이름, 한 문장 소개, 케이스별 핵심 질문 목록
2. About — 소개, 커리어 경로, 기획 원칙(How I plan), 핵심 역량(아이디어·적응력), 경력·교육·도구
3. Case Studies — 프로젝트별 발견한 문제 / 핵심 판단 / 결과 인덱스 + 그 밖의 작업
4. Case Study Detail — Context(배경·역할) → Problem(발견한 문제) → Decision(판단과 근거) → Solution(해결 방식) → Result → Learnings
5. Contact

## 이미지 넣기
아래 경로에 파일을 넣으면 각 케이스의 Solution 섹션에 이미지가 표시됩니다. 파일이 없으면 자리 자체가 보이지 않습니다.

| 파일 | 위치 |
| --- | --- |
| `assets/works/{mobile,dealer365,dotorit,hannip,topiki}-detail.jpg` | 각 케이스 Solution 섹션 (화면설계서, 앱 화면 등) |

가로 1600px 이상을 권장합니다.

## 채워야 할 내용
페이지에서 주황색 `[… 추가 필요]` 표시를 찾아 수정하세요 (`grep -n "todo" index.html`).
