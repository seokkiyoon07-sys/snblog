interface ColumnsProps {
  children: React.ReactNode;
  count?: 2 | 3;
  gap?: 'sm' | 'md' | 'lg';
}

export default function Columns({
  children,
  count = 2,
  gap = 'md',
}: ColumnsProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`my-6 grid ${gridClasses[count]} ${gapClasses[gap]}`}>
      {children}
    </div>
  );
}

export function Column({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      {children}
    </div>
  );
}
