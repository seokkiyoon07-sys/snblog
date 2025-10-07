interface DividerProps {
  type?: 'solid' | 'dashed' | 'dotted';
  spacing?: 'sm' | 'md' | 'lg';
}

export default function Divider({
  type = 'solid',
  spacing = 'md',
}: DividerProps) {
  const spacingClasses = {
    sm: 'my-4',
    md: 'my-8',
    lg: 'my-12',
  };

  const borderClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  return (
    <hr
      className={`${spacingClasses[spacing]} border-t ${borderClasses[type]} border-gray-300 dark:border-gray-700`}
    />
  );
}
