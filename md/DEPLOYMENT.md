# SN Academy Blog 배포 가이드

이 문서는 SN Academy Blog의 배포 방법을 설명합니다.

## 🚀 배포 옵션

### 1. Vercel 배포 (권장)

Vercel은 Next.js에 최적화된 플랫폼으로 가장 간단한 배포 방법입니다.

#### 자동 배포 설정

1. GitHub 저장소를 생성하고 코드를 푸시
2. [Vercel](https://vercel.com)에 가입
3. GitHub 저장소를 연결
4. 자동 배포 완료!

#### 수동 배포

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel --prod
```

### 2. Docker 배포

#### 로컬 Docker 실행

```bash
# Docker 이미지 빌드
npm run docker:build

# Docker 컨테이너 실행
npm run docker:run

# 또는 Docker Compose 사용
npm run docker:compose
```

#### 서버 배포

```bash
# 서버 설정 스크립트 실행
./scripts/setup-server.sh

# 프로젝트 배포
./scripts/deploy.sh docker
```

### 3. GitHub Actions 자동 배포

GitHub Actions를 통해 자동으로 Vercel과 Docker 서버에 배포됩니다.

#### 필요한 Secrets 설정

GitHub 저장소 Settings > Secrets and variables > Actions에서 다음을 설정:

- `VERCEL_TOKEN`: Vercel API 토큰
- `VERCEL_ORG_ID`: Vercel 조직 ID
- `VERCEL_PROJECT_ID`: Vercel 프로젝트 ID
- `DOCKER_USERNAME`: Docker Hub 사용자명
- `DOCKER_PASSWORD`: Docker Hub 비밀번호
- `SERVER_HOST`: 서버 IP 주소
- `SERVER_USERNAME`: 서버 사용자명
- `SERVER_SSH_KEY`: 서버 SSH 개인키

## 🛠️ 개발 환경 설정

### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

### 프로덕션 빌드 테스트

```bash
# 빌드
npm run build

# 프로덕션 서버 시작
npm run start
```

## 📁 프로젝트 구조

```
snblog/
├── src/                    # 소스 코드
├── public/                 # 정적 파일
├── scripts/               # 배포 스크립트
├── .github/workflows/     # GitHub Actions
├── Dockerfile            # Docker 설정
├── docker-compose.yml    # Docker Compose 설정
├── nginx.conf            # Nginx 설정
├── vercel.json           # Vercel 설정
└── DEPLOYMENT.md         # 이 파일
```

## 🔧 환경 변수

### 로컬 개발

`.env.local` 파일 생성:

```env
NODE_ENV=development
```

### 프로덕션

Vercel 또는 서버에서 환경 변수 설정:

```env
NODE_ENV=production
```

## 📊 모니터링

### Docker 서비스 모니터링

```bash
# 서비스 상태 확인
docker-compose ps

# 로그 확인
docker-compose logs -f

# 리소스 사용량 확인
docker stats
```

### Nginx 로그

```bash
# 액세스 로그
sudo tail -f /var/log/nginx/access.log

# 에러 로그
sudo tail -f /var/log/nginx/error.log
```

## 🔄 업데이트 및 배포

### 코드 업데이트 후 배포

```bash
# 변경사항 커밋
git add .
git commit -m "Update: 설명"

# GitHub에 푸시 (자동 배포)
git push origin main

# 또는 수동 배포
npm run deploy
```

### Docker 이미지 업데이트

```bash
# 이미지 재빌드
docker-compose build --no-cache

# 서비스 재시작
docker-compose up -d
```

## 🚨 문제 해결

### 빌드 실패

```bash
# 캐시 정리
rm -rf .next node_modules
npm install
npm run build
```

### Docker 문제

```bash
# 컨테이너 정리
docker-compose down
docker system prune -f

# 재시작
docker-compose up -d
```

### Vercel 배포 실패

1. Vercel 대시보드에서 로그 확인
2. 환경 변수 설정 확인
3. 빌드 설정 확인

## 📞 지원

문제가 발생하면 다음을 확인하세요:

1. 로그 파일 확인
2. 환경 변수 설정
3. 의존성 버전 호환성
4. 서버 리소스 사용량

---

**Happy Deploying! 🎉**
