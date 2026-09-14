# 메티스AI GitHub · Vercel 업로드 안내

## 먼저 확인하세요
이 폴더는 GitHub 저장소와 Vercel 배포에 함께 사용하는 원본 프로젝트입니다. 기존 Sites 게시물은 변경하지 않았습니다. Git 기록, Sites 식별 정보, 인증 정보, PC 전용 검사 스크립트는 포함하지 않았습니다.

## 1. GitHub에 올리기
1. ZIP을 압축 해제합니다.
2. GitHub에서 새 저장소를 만듭니다. 처음에는 Private을 권장합니다.
3. 저장소의 파일 업로드 기능 또는 GitHub Desktop으로 이 폴더의 **내용 전체**를 업로드합니다. ZIP 파일 자체를 올리지 마세요.
4. 저장소 첫 화면에 package.json, vercel.json, src, scripts, public이 바로 보여야 합니다. 불필요한 상위 폴더를 한 겹 더 넣지 마세요.
5. .gitignore와 .env.example은 숨김 파일로 보일 수 있습니다. 함께 포함하세요.

## 2. Vercel에 연결하기
1. Vercel에 로그인한 뒤 새 프로젝트를 만들고 GitHub 저장소를 가져옵니다.
2. 해당 저장소 접근을 허용한 뒤 아래 설정을 확인합니다.

| 항목 | 설정 |
|---|---|
| Framework Preset | Other |
| Root Directory | 저장소 최상위 (기본값) |
| Build Command | npm run build |
| Output Directory | dist |
| Install Command | 기본값 유지 |
| Node.js | 22 이상 |

vercel.json에 빌드 명령과 출력 폴더 설정을 넣었습니다. Deploy를 누르면 9개 페이지를 생성합니다. 이후 GitHub에 수정 사항을 올리면 연결된 Vercel 프로젝트에서 새 배포가 이루어집니다.

## 3. 도메인과 검색 정보
기존 chatgpt.site 주소를 제거했습니다. Vercel에서는 제공되는 프로젝트 도메인 환경변수를 이용해 canonical 및 Open Graph 주소를 생성합니다. 개인 도메인을 사용하면 Vercel 환경변수에 SITE_URL을 https://로 시작하는 실제 주소로 설정하고 재배포하세요. .env.example은 설명용이며 자동으로 로드하지 않습니다. 로컬 빌드에서는 도메인 미설정 시 주소 메타데이터를 생략합니다.

## 4. 배포 후 확인
- /, /ebook/, /programs/, /resources/, /about/, /contact/, /terms/, /privacy/, /refund/ 페이지를 직접 열고 새로고침합니다.
- 모바일 메뉴, 구매 안내 모달, FAQ, 문의·신청 폼을 확인합니다.
- Vercel 접근 범위와 배포 보호 설정을 확인합니다. 기존 Sites의 비공개 설정이 Vercel로 이전되지는 않습니다.

## 5. 수정할 파일
| 내용 | 파일 |
|---|---|
| 상품명·가격·목차·FAQ·결제 URL | src/data.mjs |
| 페이지 본문과 공통 메뉴·푸터 | scripts/build.mjs |
| 색상·간격·모바일 레이아웃 | src/style.css |
| 메뉴·구매 모달·폼 동작 | src/app.js |
| 전자책 임시 목업 | public/assets/book.webp |

## 6. 실제 판매 전 준비
- config.checkoutUrl에 실제 외부 결제 주소 입력
- PDF 파일과 전달 방식 연결
- 문의·무료 자료·오픈 알림 API 및 이메일 발송 연결
- 운영자·사업자 정보와 실제 상품 목차·페이지 수 확인
- 이용약관·개인정보처리방침·환불 정책 검토 및 확정

현재 결제 버튼은 안내 모달을 표시합니다. 폼은 입력 검증만 수행하며 서버로 전송하거나 저장하지 않습니다. 무료 PDF와 강의는 준비 중입니다. config.formEndpoint는 예약 설정으로 아직 기능에 연결되지 않았습니다.

## 로컬 실행
Node.js 22 이상 설치 후 이 폴더에서 실행합니다. 별도 라이브러리 설치는 필요하지 않습니다.

```sh
node scripts/build.mjs
node scripts/check.mjs
node scripts/serve.mjs
```

http://127.0.0.1:4173 에서 확인합니다. HTML 파일을 더블클릭하는 방식은 절대 경로 링크 때문에 지원하지 않습니다.

## 참고 문서
- Vercel 설정: https://vercel.com/docs/project-configuration/vercel-json
- Vercel 빌드: https://vercel.com/docs/builds/configure-a-build

Vercel 실제 배포는 이 자료 준비 작업에서 수행하지 않았습니다.
