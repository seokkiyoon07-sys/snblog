interface CalloutBoxProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'info' | 'warning' | 'error' | 'success';
}

export default function CalloutBox({
  children,
  className = '',
  variant = 'info',
}: CalloutBoxProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200';
    }
  };

  return (
    <div
      className={`border rounded-lg p-3 my-4 text-xs sm:text-sm ${getVariantStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
