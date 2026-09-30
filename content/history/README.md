# SN History 콘텐츠 등록

- 채널: https://www.youtube.com/@SNHistory-lab
- 목록: /history, 상세: /history/{id}
- src/data/post-records.ts에 category: 'SN History'로 등록합니다.
- seriesOrder가 작은 순서대로 배치하고, 순서가 없으면 등록일 최신순으로 표시합니다.
- youtubeUrl에 Shorts, watch 또는 youtu.be 링크를 넣습니다.
- thumbnail은 세로형(9:16)을 권장합니다. 상세 글은 이 폴더의 {id}.html에 저장합니다.
- published: true인 콘텐츠가 목록·검색·사이트맵에 표시됩니다.

## 무오사화 시리즈

1~4화를 전달받은 순서로 등록했습니다. 4화(완결)는 https://www.youtube.com/shorts/3XjSVW-Yxfs 에 연결됩니다.

## 교과서로 읽는 한국사 (연재 중)

- 목차: `/history/korean-history`, 상세: `/history/korean-history-{회차}`.
- 공개 영상 정보: `src/data/korean-history-videos.json`. 회차, 영상 ID, 원제, 초 단위 재생시간, 시간대가 포함된 실제 공개일, 공개 설명을 기록합니다.
- 학습 정리: `src/data/korean-history.ts`의 `notes`에 같은 회차를 추가합니다. 주제·시대 구분·요약·개념·연표 또는 비교·질문과 답변을 작성합니다.
- 썸네일: `public/images/thumbnail/history/korean-history-{회차}.jpg` (세로형).
- 게시물·목차·메인 회차 수·최신 편 링크·이전/다음 이동·영상 사이트맵은 회차 데이터에서 생성됩니다. 새 회차 등록 시 `KOREAN_HISTORY_UPDATED`도 갱신합니다.
- 현재 1~8화가 등록되어 있습니다. 8화의 다음 주제는 영상 설명에 따라 삼국의 통일로 예고하며, 미등록 9화 링크는 만들지 않습니다.
- 2026-09-30 공개 YouTube 메타데이터와 설명을 확인했습니다. 학습 정리는 별도로 작성한 요약이며 자막 전사나 특정 교과서 인용이 아닙니다. 교과서 판본을 확인하기 전에는 단원 번호와 쪽수를 표시하지 않습니다.
