# 오디세이아 24부작: 구현 및 운영 메모

## 페이지 구성

- `/history`: 기존 무오사화 4편 + 오디세이아 24편, 시리즈별 필터와 대표 페이지 링크.
- `/history/odyssey`: 작품 정의, 전체 줄거리, 등장인물, 시청 순서, 질문과 답변, 출처를 모은 대표 URL.
- `/history/odyssey-1` ~ `/history/odyssey-24`: 영상이 중심인 시청 페이지. 편별 고유 해설과 원전 참고 권, 이전·다음 편 및 전체 목차.
- `/sitemap.xml`: 대표 페이지와 24개 시청 페이지.
- `/video-sitemap.xml`: 24개 VideoObject와 일치하는 영상 정보. robots.txt에 등록.

## 데이터 기준

`src/data/odyssey-episodes.json`의 ID·원제·업로드 시각·길이는 2026-09-21 공개 YouTube 채널과 각 watch 페이지에서 확인했다. 줄거리와 읽기 관점은 영상 설명을 참고한 편집 요약이며 자막 전문이 아니다. 원전의 권과 시리즈 부 번호는 일치하지 않는다. 영상 업로드 시각은 시간대를 포함한 원본 시각을 보존하고, 블로그 게시일은 별도로 관리한다.

썸네일은 해당 영상의 공개 표지를 로컬 파일로 저장한다. VideoObject와 영상 사이트맵은 같은 파일 URL을 사용한다. YouTube 페이지 URL을 실제 영상 파일을 뜻하는 contentUrl로 기입하지 않는다.

## SEO / AI 검색

- 대표 검색 의도: 오디세이아 줄거리, 등장인물, 결말, 24부작.
- 개별 검색 의도: 키르케, 세이렌, 폴뤼페모스, 칼립소, 페넬로페의 침대 등 각 장면.
- 고유 제목·설명·canonical·OG·Twitter, 서버 렌더링 본문·링크, BreadcrumbList, CollectionPage/ItemList/CreativeWorkSeries 및 실제 정보의 VideoObject.
- FAQ는 독자를 위한 본문이다. 일반 교육 블로그에 FAQ 리치 결과가 보장된다고 가정하지 않는다.
- 전용 AI 파일이나 특수 스키마가 노출을 보장하지 않는다. 정확한 답변, 출처, 접근 가능한 본문과 내부 링크를 우선한다.

공식 참고:

- https://developers.google.com/search/docs/appearance/video
- https://developers.google.com/search/docs/appearance/structured-data/video
- https://developers.google.com/search/docs/appearance/ai-features

## 공개 배포 후 확인

로컬 구현만으로 구글에 노출되지는 않는다. 공개 사이트 배포 이후 아래를 수행한다.

1. 공개 도메인의 대표 페이지, 개별 페이지, 썸네일, 두 사이트맵이 200을 반환하고 canonical이 공개 도메인을 가리키는지 확인.
2. Search Console에서 대표 URL과 첫·마지막 편을 URL 검사하고 색인 생성 요청. `/video-sitemap.xml` 제출. 기존 일반 사이트맵에도 25개 URL 포함 여부 확인.
3. Rich Results Test에서 실제 공개 시청 URL의 VideoObject를 검사. 동영상 색인 보고서에서 영상이 주 콘텐츠로 인식되는지 확인.
4. Search Console에서 오디세이아/오디세우스 및 인물·장면별 검색어의 노출·클릭을 관찰. 배포일을 기준으로 2~4주 이후 추세를 비교하되 수집 지연과 적은 표본을 감안.
5. 채널 운영 시 각 쇼츠 설명에서 해당 블로그 해설로 연결하면 시청자가 이어서 읽기 편해진다. 이번 구현은 YouTube 설명을 변경하지 않는다.

색인, 동영상 리치 결과, AI 답변 인용 및 특정 검색 순위는 보장할 수 없다. 이번 작업은 해당 노출을 위한 콘텐츠와 기술적 요건을 준비한다.

## 검증 명령

개발 서버 실행 후 `node scripts/verify-odyssey.cjs`로 24편의 SSR 본문, 임베드, canonical, 구조화 데이터, 썸네일, 두 사이트맵, robots, 기존 무오사화 페이지 및 잘못된 편 번호의 404를 검사한다. 다른 서버를 검사할 때는 두 번째 인자로 기본 URL을 전달한다.
