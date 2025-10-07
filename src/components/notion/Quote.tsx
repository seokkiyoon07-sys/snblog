interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  source?: string;
}

export default function Quote({ children, author, source }: QuoteProps) {
  return (
    <blockquote className="my-6 border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 italic">
      <div className="text-lg text-gray-700 dark:text-gray-300">{children}</div>
      {(author || source) && (
        <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400 not-italic">
          {author && <cite className="font-medium">— {author}</cite>}
          {author && source && <span>, </span>}
          {source && (
            <span className="text-gray-500 dark:text-gray-500">{source}</span>
          )}
        </footer>
      )}
    </blockquote>
  );
}
