import { ReactNode } from "react";

interface BlogLayoutProps {
  title: string;
  children: ReactNode;
}

export default function BlogLayout({ title, children }: BlogLayoutProps) {
  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {children}
    </article>
  );
}
