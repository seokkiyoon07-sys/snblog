#!/bin/bash

# SN Academy Blog 배포 스크립트
# 사용법: ./scripts/deploy.sh [vercel|docker|github]

set -e

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 로그 함수
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 환경 확인
check_environment() {
    log_info "환경을 확인하는 중..."
    
    # Node.js 확인
    if ! command -v node &> /dev/null; then
        log_error "Node.js가 설치되어 있지 않습니다."
        exit 1
    fi
    
    # npm 확인
    if ! command -v npm &> /dev/null; then
        log_error "npm이 설치되어 있지 않습니다."
        exit 1
    fi
    
    log_success "환경 확인 완료"
}

# 의존성 설치
install_dependencies() {
    log_info "의존성을 설치하는 중..."
    npm ci
    log_success "의존성 설치 완료"
}

# 빌드
build_project() {
    log_info "프로젝트를 빌드하는 중..."
    npm run build
    log_success "빌드 완료"
}

# GitHub에 푸시
deploy_github() {
    log_info "GitHub에 푸시하는 중..."
    
    # 변경사항 확인
    if [ -z "$(git status --porcelain)" ]; then
        log_warning "커밋할 변경사항이 없습니다."
        return
    fi
    
    # 변경사항 추가
    git add .
    
    # 커밋 메시지 생성
    COMMIT_MSG="Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MSG"
    
    # 푸시
    git push origin main
    
    log_success "GitHub 푸시 완료"
}

# Vercel 배포
deploy_vercel() {
    log_info "Vercel에 배포하는 중..."
    
    # Vercel CLI 확인
    if ! command -v vercel &> /dev/null; then
        log_warning "Vercel CLI가 설치되어 있지 않습니다. 설치 중..."
        npm install -g vercel
    fi
    
    # Vercel 배포
    vercel --prod
    
    log_success "Vercel 배포 완료"
}

# Docker 배포
deploy_docker() {
    log_info "Docker로 배포하는 중..."
    
    # Docker 확인
    if ! command -v docker &> /dev/null; then
        log_error "Docker가 설치되어 있지 않습니다."
        exit 1
    fi
    
    # Docker Compose 확인
    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose가 설치되어 있지 않습니다."
        exit 1
    fi
    
    # 기존 컨테이너 중지 및 제거
    docker-compose down
    
    # 이미지 빌드
    docker-compose build --no-cache
    
    # 컨테이너 시작
    docker-compose up -d
    
    log_success "Docker 배포 완료"
    log_info "서버가 http://localhost:3000 에서 실행 중입니다."
}

# 메인 함수
main() {
    local deploy_type=${1:-"vercel"}
    
    log_info "SN Academy Blog 배포를 시작합니다..."
    log_info "배포 타입: $deploy_type"
    
    check_environment
    install_dependencies
    build_project
    
    case $deploy_type in
        "github")
            deploy_github
            ;;
        "vercel")
            deploy_vercel
            ;;
        "docker")
            deploy_docker
            ;;
        "all")
            deploy_github
            deploy_vercel
            deploy_docker
            ;;
        *)
            log_error "알 수 없는 배포 타입: $deploy_type"
            log_info "사용 가능한 옵션: github, vercel, docker, all"
            exit 1
            ;;
    esac
    
    log_success "배포가 완료되었습니다! 🎉"
}

# 스크립트 실행
main "$@"
