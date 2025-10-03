const VARIANTS = {
  info: {
    container: "bg-blue-50 border-blue-200 text-blue-900",
    icon: "text-blue-500",
    iconSvg: (
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    )
  },
  tip: {
    container: "bg-emerald-50 border-emerald-200 text-emerald-900",
    icon: "text-emerald-500",
    iconSvg: (
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  },
  warning: {
    container: "bg-amber-50 border-amber-200 text-amber-900",
    icon: "text-amber-500",
    iconSvg: (
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    )
  },
  danger: {
    container: "bg-rose-50 border-rose-200 text-rose-900",
    icon: "text-rose-500",
    iconSvg: (
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    )
  },
} as const;

export default function Callout({
  children, 
  variant = "info", 
  title,
}: { 
  children: React.ReactNode; 
  variant?: keyof typeof VARIANTS; 
  title?: string; 
}) {
  const variantStyle = VARIANTS[variant];
  
  return (
    <div className={`my-6 rounded-xl border p-4 ${variantStyle.container}`}>
      <div className="flex items-start">
        <div className={`flex-shrink-0 mr-3 ${variantStyle.icon}`}>
          {variantStyle.iconSvg}
        </div>
        <div className="flex-1">
          {title && <div className="mb-2 font-semibold text-sm">{title}</div>}
          <div className="text-sm leading-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

