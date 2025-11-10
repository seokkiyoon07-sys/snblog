# 2025 수능 학생정보 검색 시스템 완전 가이드

## 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [시스템 아키텍처](#시스템-아키텍처)
3. [주요 기능](#주요-기능)
4. [파일 구조](#파일-구조)
5. [설정 방법](#설정-방법)
6. [사용 방법](#사용-방법)
7. [배포 가이드](#배포-가이드)
8. [보안](#보안)
9. [문제 해결](#문제-해결)

---

## 프로젝트 개요

### 목적

2025년 11월 13일 수능 당일, 학생과 학부모가 빠르게 고사장, 독서실, 기숙사 정보를 조회할 수 있도록 하는 검색 시스템입니다.

### 주요 특징

- **학생/학부모 모드**: 이름 + 전화번호 뒷자리 4자리로 본인 정보만 조회
- **선생님 모드**: 마스터 비밀번호로 전체 학생 목록 조회 및 검색
- **실시간 검색**: 선생님 모드에서 다중 필드 실시간 필터링
- **반응형 디자인**: 모바일/데스크톱 모두 지원
- **다크모드 지원**: 라이트/다크 테마 자동 전환

### 기술 스택

- **프레임워크**: Next.js 15.5.4 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **CSV 파싱**: PapaParse
- **배포**: Vercel

---

## 시스템 아키텍처

### 데이터 흐름

```
사용자 입력
    ↓
프론트엔드 (React)
    ↓
API 엔드포인트 (/api/students)
    ↓
환경변수 (STUDENTS_CSV_DATA)
    ↓
CSV 파싱 (PapaParse)
    ↓
학생 데이터 검색/필터링
    ↓
결과 반환
```

### 컴포넌트 구조

```
SuneungSearchPage (page.tsx)
├── 헤더 (선생님 로그인 버튼)
├── 마스터 비밀번호 입력 폼
├── 일반 검색 폼 (이름 + 전화번호)
├── 에러 메시지
├── 학생 정보 카드 (개별)
└── 전체 학생 목록 (테이블)
    ├── 검색 바
    └── 학생 목록 테이블
```

---

## 주요 기능

### 1. 일반 검색 (학생/학부모 모드)

**접근 방법**: [https://blog.snacademy.co.kr/notice/suneung-2025](https://blog.snacademy.co.kr/notice/suneung-2025)

**검색 방식**:

- 학생 이름 입력
- 전화번호 뒷자리 4자리 입력
- 정확히 일치하는 경우에만 결과 표시

**표시 정보**:

1. **학번 및 이름**
2. **수능응시 고사장**: 시험 보는 대학명
3. **독서실**: 독서실명 + 좌석 번호
4. **기숙사**: 건물(본관/별관) + 호실
5. **제2외국어 응시여부**: 응시 언어 또는 미응시
6. **기타**: 특이사항 (알레르기, 주의사항 등)

**보안**:

- 전화번호는 **\*-\*\***-1234 형식으로 마스킹
- 이름 + 전화번호 2단계 인증
- 본인 정보만 조회 가능

### 2. 선생님 모드

**접근 방법**:

1. 페이지 우측 상단 "선생님 로그인" 클릭
2. 비밀번호 입력 (기본값: `sn2025`)
3. 전체 학생 목록 표시

**기능**:

#### 2.1 전체 학생 목록 테이블

- 10개 컬럼: 학번, 이름, 전화번호, 고사장, 독서실, 자리, 기숙사, 호실, 제2외국어, 기타
- 가로 스크롤 지원 (많은 정보 표시)
- Hover 효과 (행 선택 시 배경색 변경)

#### 2.2 실시간 검색 기능

- **검색 필드**: 이름, 학번, 전화번호, 고사장, 독서실, 기숙사 건물, 기숙사 호실
- **검색 방식**: 부분 일치 (포함)
- **실시간 필터링**: 입력 즉시 결과 업데이트
- **카운터 표시**: "5명 / 20명" 형식으로 검색 결과 수 표시

**예시**:

- "홍길동" 입력 → 이름에 "홍길동" 포함된 학생만 표시
- "서울대" 입력 → 고사장이 "서울대학교"인 학생만 표시
- "대치" 입력 → 독서실이 "대치독서실"인 학생만 표시
- "본관" 입력 → 기숙사 건물이 "본관"인 학생만 표시

### 3. 디자인 시스템

**색상 테마**:

- **주 색상**: 옅은 녹색 (Green-300/400/600/700)
- **배경**: White / Dark Gray-800
- **텍스트**: Gray-900 / Gray-100
- **강조**: Blue (안내사항), Red (필독 배지)

**타이포그래피**:

- **제목**: 4xl (36px) - 페이지 제목
- **부제목**: 2xl (24px) - 학생 이름
- **본문**: base (16px) - 일반 텍스트

**간격**:

- **섹션 간격**: 2rem (32px)
- **요소 간격**: 1.5rem (24px)
- **카드 패딩**: 2rem (32px)

---

## 파일 구조

### 1. 프론트엔드

#### [src/app/notice/suneung-2025/page.tsx](src/app/notice/suneung-2025/page.tsx)

**역할**: 메인 검색 페이지 컴포넌트

**주요 State**:

```typescript
// 일반 검색
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [student, setStudent] = useState<Student | null>(null);

// 선생님 모드
const [students, setStudents] = useState<Student[]>([]); // 필터링된 목록
const [allStudents, setAllStudents] = useState<Student[]>([]); // 전체 목록
const [searchQuery, setSearchQuery] = useState(''); // 검색어
const [isMasterMode, setIsMasterMode] = useState(false);
const [masterPassword, setMasterPassword] = useState('');
const [showMasterInput, setShowMasterInput] = useState(false);

// 공통
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
```

**주요 함수**:

- `handleSearch()`: 일반 학생 검색 (이름 + 전화번호)
- `handleMasterLogin()`: 마스터 비밀번호 로그인
- `handleMasterSearch(query)`: 선생님 모드 실시간 검색
- `handleLogout()`: 로그아웃

**Student Interface**:

```typescript
interface Student {
  studentId: string; // 학번
  name: string; // 이름
  phone: string; // 전화번호 뒷자리 4자리
  examLocation: string; // 수능응시 고사장
  studyRoom: string; // 독서실
  studySeat: string; // 독서실 자리
  dormBuilding: string; // 기숙사 건물 (본관/별관)
  dormRoom: string; // 기숙사 호실
  secondLanguage: string; // 제2외국어 응시여부
  notes: string; // 기타
}
```

#### [src/app/notice/page.tsx](src/app/notice/page.tsx)

**역할**: 공지사항 목록 페이지

**추가 내용**:

- 수능 학생정보 검색 카드 (최상단 고정)
- 필독 배지 + 날짜 표시
- 그라디언트 배경 (Blue → Indigo)
- Hover 효과 + 화살표 아이콘

### 2. 백엔드

#### [src/app/api/students/route.ts](src/app/api/students/route.ts)

**역할**: 학생 정보 검색 API 엔드포인트

**엔드포인트**: `GET /api/students`

**쿼리 파라미터**:

1. **일반 검색**:
   - `name`: 학생 이름 (필수)
   - `phone`: 전화번호 뒷자리 4자리 (필수)

2. **마스터 조회**:
   - `master`: 마스터 비밀번호 (선택)

**응답**:

```typescript
// 일반 검색 성공
{
  studentId: "2021001",
  name: "홍길동",
  phone: "1234",
  examLocation: "서울대학교",
  studyRoom: "대치독서실",
  studySeat: "15",
  dormBuilding: "본관",
  dormRoom: "301",
  secondLanguage: "독일어",
  notes: ""
}

// 마스터 조회 성공
{
  students: [
    { /* Student 객체 1 */ },
    { /* Student 객체 2 */ },
    ...
  ]
}

// 오류
{
  error: "에러 메시지"
}
```

**검증 로직**:

1. 마스터 비밀번호 확인 (MASTER_PASSWORD 환경변수)
2. 일반 검색: 이름 + 전화번호 정확히 일치 확인
3. 전화번호 형식 검증 (숫자 4자리)
4. CSV 데이터 파싱 오류 처리

### 3. 데이터

#### [.env.local](.env.local)

**역할**: 환경변수 설정 (로컬 개발)

```env
# Notion (기존)
NOTION_TOKEN=ntn_xxxxx
NOTION_DATABASE_ID=xxxxx
JANDI_WEBHOOK_URL=https://wh.jandi.com/xxxxx

# 선생님 마스터 비밀번호
MASTER_PASSWORD=sn2025

# 수능 학생 정보 CSV 데이터
STUDENTS_CSV_DATA="studentId,name,phone,examLocation,studyRoom,studySeat,dormBuilding,dormRoom,secondLanguage,notes
2021001,홍길동,1234,서울대학교,대치독서실,15,본관,301,독일어,
2021002,김철수,5678,연세대학교,대치독서실,22,본관,305,일본어,
..."
```

**중요**: `.env.local`은 절대 Git에 커밋하지 마세요! (`.gitignore`에 이미 포함)

#### [public/students-data-template.csv](public/students-data-template.csv)

**역할**: CSV 템플릿 파일 (20명 샘플 데이터)

**컬럼 구조**:

```csv
studentId,name,phone,examLocation,studyRoom,studySeat,dormBuilding,dormRoom,secondLanguage,notes
```

**사용 방법**:

1. 엑셀에서 열기
2. 실제 학생 데이터 입력
3. CSV로 저장
4. 내용 복사하여 `.env.local`의 `STUDENTS_CSV_DATA`에 붙여넣기

### 4. 레이아웃

#### [src/app/notice/layout.tsx](src/app/notice/layout.tsx)

**역할**: 공지사항 섹션 전용 레이아웃

**목적**: 루트 레이아웃의 Header를 오버라이드하여 중복 방지

```typescript
export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

---

## 설정 방법

### 1. 로컬 개발 환경

#### Step 1: 환경변수 설정

```bash
# 프로젝트 루트에서
cp .env.example .env.local
```

`.env.local` 파일 수정:

```env
MASTER_PASSWORD=your_password_here

STUDENTS_CSV_DATA="studentId,name,phone,examLocation,studyRoom,studySeat,dormBuilding,dormRoom,secondLanguage,notes
2021001,홍길동,1234,서울대학교,대치독서실,15,본관,301,독일어,
2021002,김철수,5678,연세대학교,대치독서실,22,본관,305,일본어,
..."
```

#### Step 2: 의존성 설치

```bash
npm install
```

#### Step 3: 개발 서버 실행

```bash
npm run dev
```

#### Step 4: 브라우저에서 확인

```
http://localhost:3000/notice/suneung-2025
```

### 2. CSV 데이터 준비

#### 방법 1: Excel 사용

1. `public/students-data-template.csv` 다운로드
2. Excel에서 열기
3. 실제 학생 데이터 입력
4. "CSV (쉼표로 분리)" 형식으로 저장
5. 메모장으로 열기
6. 전체 복사 (Ctrl+A → Ctrl+C)
7. `.env.local`의 `STUDENTS_CSV_DATA` 값에 붙여넣기

#### 방법 2: 직접 입력

`.env.local` 파일에서 직접 편집:

```env
STUDENTS_CSV_DATA="studentId,name,phone,examLocation,studyRoom,studySeat,dormBuilding,dormRoom,secondLanguage,notes
2021001,홍길동,1234,서울대학교,대치독서실,15,본관,301,독일어,
2021002,김철수,5678,연세대학교,대치독서실,22,본관,305,일본어,"
```

**주의사항**:

- 콤마(`,`)는 구분자이므로 데이터에 포함 금지
- 데이터에 콤마 필요 시 큰따옴표로 감싸기: `"데이터, 콤마 포함"`
- 줄바꿈으로 학생 구분
- 빈 값은 그냥 빈 칸으로 남기기 (예: `홍길동,1234,서울대,,본관,301,독일어,`)

---

## 사용 방법

### 학생/학부모 사용법

#### 1. 페이지 접속

```
https://blog.snacademy.co.kr/notice/suneung-2025
```

또는 공지사항 페이지에서 "2025.11.13 수능 당일 학생정보 검색" 카드 클릭

#### 2. 정보 입력

- **학생 이름**: 정확한 이름 입력 (예: 홍길동)
- **전화번호 뒷자리 4자리**: 숫자만 입력 (예: 1234)

#### 3. 조회 버튼 클릭

"학생 정보 조회" 버튼 클릭

#### 4. 결과 확인

- **성공**: 학생 정보 카드 표시
  - 학번 및 이름
  - 수능응시 고사장
  - 독서실 + 좌석 번호
  - 기숙사 건물 + 호실
  - 제2외국어 응시여부
  - 기타 (있는 경우)

- **실패**: 에러 메시지 표시
  - "일치하는 학생 정보가 없습니다"
  - "이름과 전화번호를 입력해주세요"
  - "전화번호 뒷자리 4자리를 정확히 입력해주세요"

### 선생님 사용법

#### 1. 로그인

1. 페이지 우측 상단 "선생님 로그인" 클릭
2. 비밀번호 입력 (기본값: `sn2025`)
3. "전체 학생 목록 보기" 클릭

#### 2. 전체 학생 목록 확인

- 테이블 형식으로 모든 학생 정보 표시
- 가로 스크롤하여 모든 컬럼 확인
- "N명 / 전체명" 카운터 표시

#### 3. 학생 검색

검색창에 키워드 입력 (실시간 필터링):

- **이름 검색**: "홍길동"
- **학번 검색**: "2021001"
- **전화번호 검색**: "1234"
- **고사장 검색**: "서울대"
- **독서실 검색**: "대치"
- **기숙사 검색**: "본관", "301"

**팁**:

- 부분 일치로 검색됨 (예: "서울" 입력 → "서울대학교", "서울시립대학교" 모두 표시)
- 검색어 지우면 전체 목록 다시 표시
- 대소문자 구분 없음

#### 4. 로그아웃

우측 상단 "로그아웃" 클릭 → 일반 검색 모드로 전환

---

## 배포 가이드

### Vercel 배포

#### 1. Vercel 대시보드 접속

```
https://vercel.com
```

#### 2. 프로젝트 선택

`snblog` 프로젝트 선택

#### 3. 환경변수 설정

**Settings** → **Environment Variables**

추가할 환경변수:

```
Key: MASTER_PASSWORD
Value: your_password_here
Environments: Production, Preview, Development 모두 체크

Key: STUDENTS_CSV_DATA
Value: (전체 CSV 데이터 붙여넣기)
Environments: Production, Preview, Development 모두 체크
```

**중요**: CSV 데이터에 줄바꿈이 포함되어 있어야 합니다!

#### 4. 배포

1. **자동 배포**: GitHub에 push하면 자동으로 배포
2. **수동 배포**: Vercel 대시보드 → Deployments → Redeploy

#### 5. 확인

```
https://blog.snacademy.co.kr/notice/suneung-2025
```

### 환경변수 업데이트 후

**반드시 재배포 필요!**

1. Vercel 대시보드 → Deployments
2. 최신 배포 선택 → "Redeploy" 클릭

---

## 보안

### 1. 데이터 보안

#### CSV 데이터

- ❌ **절대 Git에 커밋하지 마세요**
- ✅ `.env.local`에만 저장 (`.gitignore`에 포함)
- ✅ Vercel 환경변수에 저장
- ⚠️ 개인정보가 포함되므로 접근 제한

#### 마스터 비밀번호

- ❌ 코드에 하드코딩 금지
- ✅ 환경변수로만 설정
- ✅ 강력한 비밀번호 사용
- ✅ 정기적으로 변경

### 2. API 보안

#### 입력 검증

- 전화번호: 숫자 4자리만 허용
- 이름: 빈 값 검증
- 마스터 비밀번호: 환경변수와 정확히 일치

#### 에러 처리

- 상세한 에러 정보는 서버 로그에만 기록
- 사용자에게는 일반적인 에러 메시지만 표시

#### CORS

- Next.js API Routes는 기본적으로 동일 출처만 허용
- 추가 CORS 설정 불필요

### 3. 프론트엔드 보안

#### 전화번호 마스킹

```typescript
전화번호: ***-****-{student.phone}
```

#### 2단계 인증

- 이름 + 전화번호 모두 일치해야 조회
- 무작위 대입 공격 방지

---

## 문제 해결

### 1. 일반적인 문제

#### Q: "학생 정보를 불러올 수 없습니다" 에러

**원인**: `STUDENTS_CSV_DATA` 환경변수가 설정되지 않음

**해결**:

1. `.env.local` 파일 확인
2. `STUDENTS_CSV_DATA` 값이 제대로 설정되었는지 확인
3. 개발 서버 재시작 (`Ctrl+C` → `npm run dev`)

#### Q: "일치하는 학생 정보가 없습니다" 에러

**원인**: 이름 또는 전화번호가 CSV 데이터와 일치하지 않음

**해결**:

1. 이름 정확히 입력 (띄어쓰기, 대소문자 주의)
2. 전화번호 뒷자리 4자리 정확히 입력
3. CSV 데이터에 해당 학생이 등록되어 있는지 확인

#### Q: "비밀번호가 올바르지 않습니다" 에러

**원인**: 마스터 비밀번호가 틀림

**해결**:

1. `.env.local`의 `MASTER_PASSWORD` 값 확인
2. 기본값: `sn2025`
3. Vercel 환경변수와 로컬 환경변수가 다를 수 있음

### 2. 개발 환경 문제

#### Q: 환경변수 변경이 반영되지 않음

**해결**:

1. 개발 서버 완전히 종료 (`Ctrl+C`)
2. 다시 시작 (`npm run dev`)
3. 브라우저 캐시 삭제 (Ctrl+Shift+R)

#### Q: CSV 파싱 오류

**원인**: CSV 형식이 올바르지 않음

**해결**:

1. 콤마 구분자 확인
2. 각 행이 정확히 10개 컬럼인지 확인
3. 헤더 행 포함 여부 확인
4. 빈 줄 제거

### 3. 배포 환경 문제

#### Q: Vercel에서 환경변수가 작동하지 않음

**해결**:

1. Vercel 대시보드 → Settings → Environment Variables
2. 환경변수가 Production에 체크되어 있는지 확인
3. 환경변수 수정 후 **반드시 Redeploy**

#### Q: 배포 후 404 에러

**원인**: 페이지 경로가 올바르지 않음

**확인**:

```
올바른 경로: /notice/suneung-2025
잘못된 경로: /notice/suneung-2025/
```

---

## 데이터 형식 가이드

### CSV 컬럼 상세 설명

| 컬럼명           | 타입   | 필수 | 설명                  | 예시                   |
| ---------------- | ------ | ---- | --------------------- | ---------------------- |
| `studentId`      | string | ✅   | 학번 (고유값)         | 2021001                |
| `name`           | string | ✅   | 학생 이름             | 홍길동                 |
| `phone`          | string | ✅   | 전화번호 뒷자리 4자리 | 1234                   |
| `examLocation`   | string | ✅   | 수능응시 고사장       | 서울대학교             |
| `studyRoom`      | string | ✅   | 독서실 이름           | 대치독서실             |
| `studySeat`      | string | ✅   | 독서실 좌석 번호      | 15                     |
| `dormBuilding`   | string | ✅   | 기숙사 건물           | 본관, 별관             |
| `dormRoom`       | string | ✅   | 기숙사 호실           | 301                    |
| `secondLanguage` | string | ✅   | 제2외국어 응시여부    | 독일어, 일본어, 미응시 |
| `notes`          | string | ❌   | 기타 특이사항         | 알레르기 있음, 등      |

### 데이터 입력 예시

**올바른 예시**:

```csv
studentId,name,phone,examLocation,studyRoom,studySeat,dormBuilding,dormRoom,secondLanguage,notes
2021001,홍길동,1234,서울대학교,대치독서실,15,본관,301,독일어,
2021002,김철수,5678,연세대학교,대치독서실,22,본관,305,일본어,
2021003,이영희,9012,고려대학교,노원독서실,8,별관,201,프랑스어,
2021004,박민수,3456,성균관대학교,대치독서실,33,본관,402,중국어,알레르기 있음
```

**잘못된 예시**:

```csv
# ❌ 콤마가 데이터에 포함
2021001,홍길동,1234,서울특별시, 강남구,대치독서실,15,본관,301,독일어,

# ❌ 컬럼 수가 맞지 않음
2021001,홍길동,1234,서울대학교

# ❌ 헤더 누락
2021001,홍길동,1234,서울대학교,대치독서실,15,본관,301,독일어,
```

---

## 유지보수 가이드

### 데이터 업데이트

#### 로컬 환경

1. `.env.local` 파일 수정
2. 개발 서버 재시작 (`Ctrl+C` → `npm run dev`)

#### 배포 환경 (Vercel)

1. Vercel 대시보드 → Settings → Environment Variables
2. `STUDENTS_CSV_DATA` 수정
3. Deployments → 최신 배포 → Redeploy

### 비밀번호 변경

#### 로컬 환경

`.env.local`:

```env
MASTER_PASSWORD=new_password_here
```

#### 배포 환경 (Vercel)

1. Vercel 대시보드 → Settings → Environment Variables
2. `MASTER_PASSWORD` 수정
3. Redeploy

### 디자인 수정

#### 색상 변경

`src/app/notice/suneung-2025/page.tsx`:

```tsx
// 현재: 녹색
border-green-300 dark:border-green-700
bg-green-400 dark:bg-green-600

// 다른 색상으로 변경
border-blue-300 dark:border-blue-700
bg-blue-400 dark:bg-blue-600
```

#### 테이블 컬럼 순서 변경

1. 헤더 순서 변경
2. 바디 순서 변경 (같은 순서로)

---

## 성능 최적화

### 현재 최적화 사항

1. **서버 사이드 렌더링**: Next.js App Router 사용
2. **클라이언트 사이드 필터링**: 선생님 모드 검색
3. **컴포넌트 최적화**: useState로 상태 관리
4. **스타일링 최적화**: Tailwind CSS (JIT 컴파일)

### 추가 최적화 아이디어

1. **대용량 데이터 처리**:
   - 학생 100명 이상 시 가상화 라이브러리 사용 (`react-window`)
   - 페이지네이션 추가

2. **검색 최적화**:
   - Debounce 적용 (입력 후 300ms 대기)
   - 인덱싱 (학번, 이름으로 Map 생성)

3. **캐싱**:
   - SWR 또는 React Query 사용
   - 마스터 모드 데이터 로컬 스토리지 캐싱

---

## 라이선스 및 연락처

**프로젝트**: SN독학기숙학원 블로그
**목적**: 2025 수능 학생정보 검색
**개발일**: 2025-11-10
**프레임워크**: Next.js 15.5.4
**배포**: Vercel

**문의사항**:

- 이메일: [contact@snacademy.co.kr](mailto:contact@snacademy.co.kr)
- 웹사이트: [https://blog.snacademy.co.kr](https://blog.snacademy.co.kr)

---

## 변경 이력

### 2025-11-10 (v1.0.0)

- ✅ 초기 시스템 구축
- ✅ 일반 검색 기능 (이름 + 전화번호)
- ✅ 선생님 모드 (마스터 비밀번호)
- ✅ 전체 학생 목록 테이블
- ✅ 실시간 검색 기능
- ✅ CSV 구조 변경 (9개 컬럼)
- ✅ 색상 디자인 최적화 (옅은 녹색)
- ✅ 반응형 디자인
- ✅ 다크모드 지원

---

**끝**
