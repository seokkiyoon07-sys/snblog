export default function NoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // notice 폴더는 기본 layout의 Header/Sidebar를 사용하지 않음
  // 각 페이지가 자체 레이아웃을 관리
  return <>{children}</>;
}
