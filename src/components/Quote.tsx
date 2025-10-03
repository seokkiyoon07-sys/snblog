export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 my-6">
      {children}
    </blockquote>
  );
}

