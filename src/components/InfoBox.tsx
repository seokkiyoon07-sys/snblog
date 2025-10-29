interface InfoBoxProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent' | 'warning';
}

export default function InfoBox({
  children,
  className = '',
  variant = 'default',
}: InfoBoxProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'accent':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200';
      default:
        return 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div
      className={`border rounded-lg p-3 sm:p-4 my-3 text-sm sm:text-base ${getVariantStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
