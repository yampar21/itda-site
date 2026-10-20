# 잇Da V24 실험 브랜치

이 브랜치는 V22 안정 버전을 Cloudflare Pages 테스트 환경에 연결하기 위한 전용 브랜치입니다.

## 반드시 지킬 기준
- `www.잇da.com` 아임웹 도메인과 DNS를 변경하지 않습니다.
- 기존 Netlify 배포도 수정하지 않습니다.
- Cloudflare `*.pages.dev` 주소만 사용합니다.
- `main` 브랜치는 수정하지 않습니다.

## 필요한 파일
`index.html`, `assets/*.svg`, `_headers`, `package.json`, `README.md`.

V22 원본 기반 파일은 ChatGPT가 준비한 `itda-v24-cloudflare-ready.zip`에서 추출하여 이 브랜치에 업로드합니다.

## Cloudflare 연결 설정
Production branch: `experiment/v24-v22-baseline`
Build command: `npm run build`
Build output directory: `dist`

업로드가 완료되기 전까지는 이 브랜치를 Cloudflare에 배포하지 않습니다.
