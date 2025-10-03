"use client";
import { useRef, useState } from "react";

export default function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  
  const onCopy = async () => {
    const text = ref.current?.innerText ?? code;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  return (
    <div className="relative my-6 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {language}
        </span>
        <button 
          onClick={onCopy} 
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md border border-gray-300 bg-white px-2 py-1 text-xs hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre ref={ref} className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100 text-sm leading-relaxed">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
