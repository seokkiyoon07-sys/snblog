#!/bin/bash

# 가상서버 설정 스크립트
# Ubuntu/CentOS 서버에서 실행

set -e

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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

# 시스템 업데이트
update_system() {
    log_info "시스템을 업데이트하는 중..."
    
    if command -v apt-get &> /dev/null; then
        # Ubuntu/Debian
        sudo apt-get update
        sudo apt-get upgrade -y
    elif command -v yum &> /dev/null; then
        # CentOS/RHEL
        sudo yum update -y
    else
        log_error "지원되지 않는 패키지 매니저입니다."
        exit 1
    fi
    
    log_success "시스템 업데이트 완료"
}

# Docker 설치
install_docker() {
    log_info "Docker를 설치하는 중..."
    
    if command -v docker &> /dev/null; then
        log_warning "Docker가 이미 설치되어 있습니다."
        return
    fi
    
    # Docker 설치 스크립트 실행
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    
    # Docker Compose 설치
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    
    log_success "Docker 설치 완료"
}

# Nginx 설치
install_nginx() {
    log_info "Nginx를 설치하는 중..."
    
    if command -v nginx &> /dev/null; then
        log_warning "Nginx가 이미 설치되어 있습니다."
        return
    fi
    
    if command -v apt-get &> /dev/null; then
        sudo apt-get install -y nginx
    elif command -v yum &> /dev/null; then
        sudo yum install -y nginx
    fi
    
    sudo systemctl enable nginx
    sudo systemctl start nginx
    
    log_success "Nginx 설치 완료"
}

# SSL 인증서 설정 (Let's Encrypt)
setup_ssl() {
    log_info "SSL 인증서를 설정하는 중..."
    
    # Certbot 설치
    if command -v apt-get &> /dev/null; then
        sudo apt-get install -y certbot python3-certbot-nginx
    elif command -v yum &> /dev/null; then
        sudo yum install -y certbot python3-certbot-nginx
    fi
    
    # 도메인 입력 받기
    read -p "도메인을 입력하세요 (예: blog.snacademy.co.kr): " DOMAIN
    
    if [ -z "$DOMAIN" ]; then
        log_warning "도메인이 입력되지 않았습니다. SSL 설정을 건너뜁니다."
        return
    fi
    
    # SSL 인증서 발급
    sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
    
    # 자동 갱신 설정
    echo "0 12 * * * /usr/bin/certbot renew --quiet" | sudo crontab -
    
    log_success "SSL 인증서 설정 완료"
}

# 방화벽 설정
setup_firewall() {
    log_info "방화벽을 설정하는 중..."
    
    if command -v ufw &> /dev/null; then
        # UFW (Ubuntu)
        sudo ufw allow 22/tcp
        sudo ufw allow 80/tcp
        sudo ufw allow 443/tcp
        sudo ufw --force enable
    elif command -v firewall-cmd &> /dev/null; then
        # firewalld (CentOS)
        sudo firewall-cmd --permanent --add-service=ssh
        sudo firewall-cmd --permanent --add-service=http
        sudo firewall-cmd --permanent --add-service=https
        sudo firewall-cmd --reload
    fi
    
    log_success "방화벽 설정 완료"
}

# 프로젝트 클론 및 설정
setup_project() {
    log_info "프로젝트를 설정하는 중..."
    
    # 프로젝트 디렉토리 생성
    PROJECT_DIR="/opt/snblog"
    sudo mkdir -p $PROJECT_DIR
    sudo chown $USER:$USER $PROJECT_DIR
    
    # Git 저장소 클론 (GitHub 저장소 URL 필요)
    read -p "GitHub 저장소 URL을 입력하세요: " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        log_warning "저장소 URL이 입력되지 않았습니다. 수동으로 설정해주세요."
        return
    fi
    
    git clone $REPO_URL $PROJECT_DIR
    cd $PROJECT_DIR
    
    # Docker Compose로 서비스 시작
    docker-compose up -d
    
    log_success "프로젝트 설정 완료"
}

# 모니터링 설정
setup_monitoring() {
    log_info "모니터링을 설정하는 중..."
    
    # htop 설치
    if command -v apt-get &> /dev/null; then
        sudo apt-get install -y htop
    elif command -v yum &> /dev/null; then
        sudo yum install -y htop
    fi
    
    # 로그 로테이션 설정
    sudo tee /etc/logrotate.d/snblog > /dev/null <<EOF
/var/log/nginx/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 640 nginx adm
    sharedscripts
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 \$(cat /var/run/nginx.pid)
        fi
    endscript
}
EOF
    
    log_success "모니터링 설정 완료"
}

# 메인 함수
main() {
    log_info "가상서버 설정을 시작합니다..."
    
    update_system
    install_docker
    install_nginx
    setup_ssl
    setup_firewall
    setup_project
    setup_monitoring
    
    log_success "가상서버 설정이 완료되었습니다! 🎉"
    log_info "다음 명령어로 서비스를 관리할 수 있습니다:"
    log_info "  - 서비스 시작: cd /opt/snblog && docker-compose up -d"
    log_info "  - 서비스 중지: cd /opt/snblog && docker-compose down"
    log_info "  - 로그 확인: cd /opt/snblog && docker-compose logs -f"
    log_info "  - 서비스 상태: cd /opt/snblog && docker-compose ps"
}

# 스크립트 실행
main "$@"
