interface CalloutBoxProps {
  type?: 'info' | 'warning' | 'success' | 'error' | 'note';
  emoji?: string;
  children: React.ReactNode;
}

export default function CalloutBox({
  type = 'info',
  emoji,
  children,
}: CalloutBoxProps) {
  const styles = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200 dark:border-blue-800',
      icon: '💡',
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-950/30',
      border: 'border-yellow-200 dark:border-yellow-800',
      icon: '⚠️',
    },
    success: {
      bg: 'bg-green-50 dark:bg-green-950/30',
      border: 'border-green-200 dark:border-green-800',
      icon: '✅',
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-950/30',
      border: 'border-red-200 dark:border-red-800',
      icon: '❌',
    },
    note: {
      bg: 'bg-gray-50 dark:bg-gray-800/50',
      border: 'border-gray-200 dark:border-gray-700',
      icon: '📝',
    },
  };

  const style = styles[type];
  const displayEmoji = emoji || style.icon;

  return (
    <div
      className={`${style.bg} ${style.border} border-l-4 rounded-r-lg p-4 my-4 flex gap-3`}
    >
      <span className="text-xl flex-shrink-0" role="img" aria-label={type}>
        {displayEmoji}
      </span>
      <div className="flex-1 text-sm lg:text-base text-gray-800 dark:text-gray-200">
        {children}
      </div>
    </div>
  );
}
