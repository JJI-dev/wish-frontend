# WISH - 위시리스트 웹사이트

갖고 싶은 상품들을 카테고리별로 정리하고 관리할 수 있는 위시리스트 플랫폼입니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Pretendard (CDN)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 프로젝트 구조

```
wish-frontend/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # 헤더 (WISH 로고)
│   │   ├── Footer.tsx          # 푸터 (JOYEJIN 로고)
│   │   └── ItemModal.tsx       # 상품 상세 모달
│   ├── data/
│   │   └── items.json          # 상품 데이터
│   ├── globals.css             # 전역 스타일
│   ├── layout.tsx              # 루트 레이아웃
│   └── page.tsx                # 메인 페이지
├── public/
│   └── images/                 # 이미지 폴더
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 디자인 스펙

### 폰트
- **서체**: Pretendard
- **크기 및 굵기**:
  - WISH 로고: 80px, Semibold
  - 네비게이션: 42px, Medium
  - 카테고리 라벨: 24px, Regular
  - 상품명: 30px, Medium
  - 모달 제목: 42px, Medium
  - 일반 텍스트: 20px, Regular
  - 작은 텍스트: 14px
- **자간**: -4% (피그마 기준)
- **줄간격**: 160%

### 색상
- 배경 사각형: `#EFEFEF`
- 기본 텍스트: `#000000`
- 비활성 텍스트: `#9B9B9B`
- GET 배지 배경: `rgba(0, 0, 0, 0.7)`
- GET 텍스트: `#FFFFFF`
- 모달 오버레이: `rgba(0, 0, 0, 0.4)`

### 레이아웃
- 그리드 아이템: 500 x 612px 비율
- 푸터 높이: 400px
- GET 배지: 64px, Regular

## 🛠️ 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/JJI-dev/wish-frontend.git
cd wish-frontend
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📝 데이터 관리

`app/data/items.json` 파일에서 상품 정보를 관리합니다:

```json
{
  "items": [
    {
      "id": "1",
      "title": "상품명",
      "category": "GOODS",
      "categoryLabel": "Design",
      "imageUrl": "이미지 URL",
      "price": 20000,
      "link": "https://...",
      "reason": "갖고 싶은 이유",
      "isGot": false
    }
  ]
}
```

### 상품 추가하기

1. `app/data/items.json` 파일 열기
2. `items` 배열에 새로운 객체 추가
3. 필수 필드 입력:
   - `id`: 고유 ID (문자열)
   - `title`: 상품명
   - `category`: "GOODS" | "CLOTHES" | "COSMETICS"
   - `categoryLabel`: 표시될 카테고리 라벨
   - `imageUrl`: 이미지 URL (외부 링크)
   - `price`: 가격 (숫자)
   - `link`: 상품 링크
   - `reason`: 갖고 싶은 이유
   - `isGot`: GET 상태 (true/false)

## 🌐 Vercel 배포

### 1. Vercel 프로젝트 생성

1. [vercel.com](https://vercel.com) 접속 후 로그인
2. "New Project" 클릭
3. GitHub 레포지토리 연결 (wish-frontend)
4. Import 클릭

### 2. 빌드 설정 (자동 감지됨)

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 3. 도메인 연결

1. Vercel 프로젝트 → Settings → Domains
2. `wish.jji.kr` 입력 후 Add
3. DNS 설정 (도메인 제공업체에서):
   - Type: CNAME
   - Name: wish
   - Value: cname.vercel-dns.com
4. DNS 전파 대기 (최대 24시간)

## 🎯 주요 기능

### 카테고리 필터링
- ALL: 모든 상품 표시
- GOODS: 굿즈/잡화
- CLOTHES: 의류
- COSMETICS: 화장품/뷰티

### 상품 그리드
- 반응형 그리드 레이아웃
- 호버 시 확대 효과
- GET 배지 표시
- 부드러운 애니메이션

### 상품 모달
- 오른쪽에서 슬라이드 인 애니메이션
- 상품 상세 정보 표시
- 외부 링크 연결
- 오버레이 배경

### 반응형 디자인
- 데스크톱: 3열 그리드
- 태블릿: 2열 그리드
- 모바일: 1열 그리드

## 📱 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 🔧 커스터마이징

### 색상 변경
`tailwind.config.ts` 파일에서 색상을 수정할 수 있습니다:

```typescript
colors: {
  'item-bg': '#EFEFEF',
  'text-muted': '#9B9B9B',
}
```

### 레이아웃 조정
`app/page.tsx`의 그리드 설정을 변경할 수 있습니다:

```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

---

**개발자**: JOYEJIN  
**버전**: 1.0.0  
**배포**: [wish.jji.kr](https://wish.jji.kr)