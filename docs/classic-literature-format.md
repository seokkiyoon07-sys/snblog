# SN Originals 고전문학 원문+해설 작성 가이드

## 개요

이 문서는 SN Originals 고전문학 시리즈에서 원문과 현대어 해설을 작성할 때 사용하는 표준 형식을 정의합니다.

---

## 1. Click-to-Reveal (Blur) 섹션

각 구절마다 원문과 현대어 해석을 함께 표시하고, 현대어 해석은 blur 처리되어 클릭하면 보이는 형식입니다.

### 형식

```html
<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
[원문 - 옛한글]
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
[현대어 해석]
</div>
</details>
```

### 예시 (사미인곡 1연)

```html
<details class="group border border-gray-200 dark:border-gray-700 rounded-lg my-4 overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800">
<p class="text-gray-900 dark:text-white leading-relaxed whitespace-pre-line">
이 몸 삼기실 제 님을 조차 삼기시니,
ᄒᆞᆫᄉᆡᆼ 緣分(연분)이며 하ᄂᆞᆯ 모ᄅᆞᆯ 일이런가.
나 ᄒᆞ나 졈어 닛고 님 ᄒᆞ나 날 괴시니,
이 ᄆᆞ음 이 ᄉᆞ랑 견졸 ᄃᆡ 노여 업다.
平生(평ᄉᆡᆼ)애 願(원)ᄒᆞ요ᄃᆡ ᄒᆞᆫᄃᆡ 녜자 ᄒᆞ얏더니,
늙거야 므ᄉᆞ 일로 외오 두고 글이ᄂᆞᆫ고.
</p>
</summary>
<div class="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
이 몸 생겼을 때 임을 좇아 생겼으니,
한평생의 연분임을 하늘이 모를 일이던가.
나 하나 젊어 있고 임 하나 날 사랑하시니,
이 마음 이 사랑 견줄 데가 전혀 없다.
평생에 원하오되 함께 지내자 하였더니
늙어서야 무슨 일로 외로이 두고 그리는고.
</div>
</details>
```

### 주의사항

- `class="group"` 필수: 이 클래스가 있어야 blur 효과가 적용됨
- 원문은 `<summary>` 안에, 현대어는 `<div>` 안에 배치
- 옛한글은 자동으로 `NanumBarunGothic YetHangul` 폰트 적용됨
- CSS에서 토글 화살표와 bold 자동 제거됨

---

## 2. 원문 전체 보기 (PDF 인쇄 가능, Blur 없음)

전체 원문을 한눈에 보고 PDF로 인쇄할 수 있는 섹션입니다.

### 형식

```html
<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 font-semibold text-gray-900 dark:text-white transition-colors">
📜 원문 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-stone-900">
<div data-print-button data-content-id="[작품ID]-original" data-title="[작품명] 원문" data-button-text="원문 PDF 인쇄"></div>
</div>
<div id="[작품ID]-original" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line font-yethangul">

[원문 전체 - 단락별 빈 줄로 구분]

</div>
</details>
```

### 예시 (사미인곡)

```html
<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 font-semibold text-gray-900 dark:text-white transition-colors">
📜 원문 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-stone-900">
<div data-print-button data-content-id="samieungok-original" data-title="사미인곡 원문" data-button-text="원문 PDF 인쇄"></div>
</div>
<div id="samieungok-original" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line font-yethangul">

이 몸 삼기실 제 님을 조차 삼기시니,
ᄒᆞᆫᄉᆡᆼ 緣分(연분)이며 하ᄂᆞᆯ 모ᄅᆞᆯ 일이런가.
나 ᄒᆞ나 졈어 닛고 님 ᄒᆞ나 날 괴시니,
이 ᄆᆞ음 이 ᄉᆞ랑 견졸 ᄃᆡ 노여 업다.
平生(평ᄉᆡᆼ)애 願(원)ᄒᆞ요ᄃᆡ ᄒᆞᆫᄃᆡ 녜자 ᄒᆞ얏더니,
늙거야 므ᄉᆞ 일로 외오 두고 글이ᄂᆞᆫ고.

엇그제 님을 뫼셔 廣寒殿(광한뎐)의 올낫더니,
... (이하 생략)

</div>
</details>
```

### 주의사항

- `class="group"` 없음: blur 효과 적용 안 됨
- `font-yethangul` 클래스로 옛한글 폰트 적용
- `data-print-button` 속성으로 PDF 인쇄 버튼 자동 생성
- `data-content-id`와 `id` 값이 일치해야 함
- 단락별로 빈 줄 추가하여 가독성 향상

---

## 3. 현대어 해석 전체 보기 (PDF 인쇄 가능, Blur 없음)

### 형식

```html
<details class="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
<summary class="cursor-pointer p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white transition-colors">
📖 현대어 해석 전체 보기
</summary>
<div class="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
<div data-print-button data-content-id="[작품ID]-modern" data-title="[작품명] 현대어 해석" data-button-text="현대어 해석 PDF 인쇄"></div>
</div>
<div id="[작품ID]-modern" class="p-6 bg-white dark:bg-gray-900 text-sm leading-relaxed whitespace-pre-line">

[현대어 해석 전체 - 단락별 빈 줄로 구분]

</div>
</details>
```

### 주의사항

- 원문과 배경색 다름: `bg-gray-50` (원문은 `bg-stone-100`)
- `font-yethangul` 클래스 없음 (현대어이므로)

---

## 4. 전체 문서 구조

```markdown
## 📜 원문 + 현대어 해설

[각 연/단락별 Click-to-Reveal 섹션들]

---

## 📜 원문 전체 보기 / 현대어 해석 전체 보기

[원문 전체 보기 details]

[현대어 해석 전체 보기 details]

---

## 「작품명」- 작품 소개/해설

[작품에 대한 해설 내용]
```

---

## 5. 단락 구분 기준

원문과 현대어 해석에서 빈 줄로 구분하는 단락 기준:

### 가사 작품 (사미인곡, 관동별곡 등)
- 서사 (도입부)
- 본사 각 계절/주제별
- 결사 (마무리)

### 시조
- 초장
- 중장
- 종장

### 향가
- 각 연(聯)별

---

## 6. ID 명명 규칙

| 작품 | 원문 ID | 현대어 ID |
|------|---------|-----------|
| 사미인곡 | `samieungok-original` | `samieungok-modern` |
| 관동별곡 | `gwandong-original` | `gwandong-modern` |
| 속미인곡 | `sokmieungok-original` | `sokmieungok-modern` |
| 면앙정가 | `myeonangjungga-original` | `myeonangjungga-modern` |

규칙: `[포스트ID]-original` / `[포스트ID]-modern`

---

## 7. 체크리스트

새 작품 추가 시 확인사항:

- [ ] Click-to-Reveal 섹션에 `class="group"` 포함
- [ ] 원문 전체 보기에 `class="group"` 없음
- [ ] 현대어 전체 보기에 `class="group"` 없음
- [ ] `data-content-id`와 `id` 값 일치
- [ ] 원문에 `font-yethangul` 클래스 적용
- [ ] 단락별 빈 줄 추가
- [ ] 토글 화살표/bold 제거됨 (CSS 자동 처리)
