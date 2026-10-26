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
- 현재 본편 1~30화와 25화 외전이 등록되어 있습니다. 본편 30화의 다음 주제는 영상 설명에 따라 임진왜란으로 예고하며, 미등록 31화 링크는 만들지 않습니다.
- 외전 메타데이터: `src/data/history-supplement-videos.json`, 게시물: `src/data/history-supplements.ts`. 외전은 본편 회차에 포함하지 않고 별도 목록으로 표시하며, 본편 25화에서 연결합니다.
- 썸네일은 YouTube의 세로형 썸네일(`oardefault.jpg`, 없으면 `oar2.jpg`)을 저장합니다.
- 2026-09-30(1~8화), 2026-10-18(9~23화) 공개 YouTube 메타데이터와 설명을 확인했습니다. 학습 정리는 별도로 작성한 요약이며 자막 전사나 특정 교과서 인용이 아닙니다. 교과서 판본을 확인하기 전에는 단원 번호와 쪽수를 표시하지 않습니다.

## 2026-10-26 업데이트

- 공개 채널의 최신순 Shorts 목록과 영상별 공개 설명·공개일·재생시간을 확인했습니다.
- 한국사 본편 24~30화의 학습 정리와 세로 썸네일을 추가했습니다. 조선 전기 목차를 신설했습니다.
- 한국사 25화 외전과 운영전 1~2부를 등록했습니다. 운영전은 별도 완결 시리즈로 표시합니다.
- 운영전 영상은 소설 속 사건과 역사적 사실을 구분한 채널 설명을 함께 제공합니다.
