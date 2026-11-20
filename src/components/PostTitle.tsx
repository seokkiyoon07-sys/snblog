// 긴 글 제목을 읽기 좋게 두 줄로 나눈다.
// '앞부분: 뒷부분' 이면 앞은 큰 제목, 뒤는 한 단계 작은 부제로 보여 준다.
// 검색엔진용 <title> 은 원래 제목 그대로 두고, 화면의 h1 만 나눈다.
// 단어 중간에서 줄이 바뀌지 않도록 break-keep, 줄 길이를 고르게 text-balance 를 쓴다.
export default function PostTitle({ title }: { title: string }) {
  const split = title.indexOf(': ');
  if (title.includes('\n') || split < 0) {
    return (
      <span className="block whitespace-pre-line break-keep text-balance">
        {title}
      </span>
    );
  }
  return (
    <>
      <span className="block break-keep text-balance">
        {title.slice(0, split)}
      </span>
      <span className="mt-3 block break-keep text-balance text-[0.6em] font-semibold leading-snug text-slate-600 dark:text-slate-300">
        {title.slice(split + 2)}
      </span>
    </>
  );
}
