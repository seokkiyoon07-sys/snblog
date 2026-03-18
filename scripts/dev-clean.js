/**
 * dev:clean — .next 캐시 삭제 + 3000 포트 kill + dev 서버 재시작
 * posts.ts 수정 후 webpack HMR 에러 발생 시 사용
 *
 * 사용법: npm run dev:clean
 */
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const NEXT_DIR = path.join(__dirname, '..', '.next');

// 1) 포트 점유 프로세스 kill
try {
  const result = execSync(
    `netstat -ano | findstr ":${PORT} " | findstr "LISTENING"`,
    {
      encoding: 'utf-8',
    }
  );
  const pids = [
    ...new Set(
      result
        .trim()
        .split('\n')
        .map(line => line.trim().split(/\s+/).pop())
        .filter(Boolean)
    ),
  ];
  for (const pid of pids) {
    try {
      execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' });
      console.log(`[dev:clean] Killed process ${pid} on port ${PORT}`);
    } catch {
      // already dead
    }
  }
} catch {
  console.log(`[dev:clean] Port ${PORT} is free`);
}

// 2) .next 캐시 삭제
if (fs.existsSync(NEXT_DIR)) {
  try {
    fs.rmSync(NEXT_DIR, { recursive: true, force: true });
    console.log('[dev:clean] Deleted .next cache');
  } catch {
    console.log(
      '[dev:clean] Warning: could not fully delete .next (may be locked)'
    );
  }
}

// 3) dev 서버 시작
console.log(`[dev:clean] Starting next dev on port ${PORT}...`);
const child = spawn('npx', ['next', 'dev', '-p', String(PORT)], {
  stdio: 'inherit',
  shell: true,
  cwd: path.join(__dirname, '..'),
});

child.on('error', err => {
  console.error('[dev:clean] Failed to start:', err.message);
  process.exit(1);
});

process.on('SIGINT', () => {
  child.kill('SIGINT');
  process.exit(0);
});
