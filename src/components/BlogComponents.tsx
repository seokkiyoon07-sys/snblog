"use client";
import { ReactNode, useEffect, useState, useRef } from "react";
import Image from "next/image";

// BlogLayout 컴포넌트
interface BlogLayoutProps {
  title: string;
  children: ReactNode;
}

export function BlogLayout({ title, children }: BlogLayoutProps) {
  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {children}
    </article>
  );
}

// BlogImage 컴포넌트
interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export function BlogImage({ src, alt, caption, priority = false }: BlogImageProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full h-auto">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          className="rounded-xl shadow-md mx-auto w-full h-auto object-contain"
          priority={priority}
          quality={85}
        />
      </div>
      {caption && (
        <figcaption className="text-center text-gray-500 mt-2 text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Quote 컴포넌트
export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 my-6">
      {children}
    </blockquote>
  );
}

// Highlight 컴포넌트
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
      {children}
    </div>
  );
}

// InfoBox 컴포넌트 (정보 박스)
export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          {children}
        </div>
      </div>
    </div>
  );
}

// WarningBox 컴포넌트 (경고 박스)
export function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          {children}
        </div>
      </div>
    </div>
  );
}

// SuccessBox 컴포넌트 (성공 박스)
export function SuccessBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          {children}
        </div>
      </div>
    </div>
  );
}

// Section 컴포넌트 (섹션 구분)
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="my-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      {children}
    </section>
  );
}

// FeatureList 컴포넌트 (기능 리스트)
export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-2 my-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

// TOC 컴포넌트 (목차)
export function TOC() {
  const [items, setItems] = useState<{ id: string; text: string; level: number }[]>([]);
  
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("article h2, article h3")) as HTMLHeadingElement[];
    const processedItems: { id: string; text: string; level: number }[] = [];
    
    headings.forEach((h, index) => {
      const text = h.innerText;
      let id = text.toLowerCase()
        .replace(/[^\w\s-]/g, '') // 특수문자 제거
        .replace(/\s+/g, '-') // 공백을 하이픈으로
        .replace(/--+/g, '-') // 연속된 하이픈 제거
        .trim();
      
      // 중복 방지를 위해 인덱스 추가
      if (id === '' || id === '-') {
        id = `heading-${index}`;
      } else {
        // 기존에 같은 ID가 있는지 확인하고 중복이면 인덱스 추가
        const existingIds = processedItems.map(item => item.id);
        let finalId = id;
        let counter = 1;
        while (existingIds.includes(finalId)) {
          finalId = `${id}-${counter}`;
          counter++;
        }
        id = finalId;
      }
      
      // ID 설정
      h.id = id;
      
      processedItems.push({ 
        id, 
        text, 
        level: h.tagName === "H2" ? 2 : 3 
      });
    });
    
    setItems(processedItems);
  }, []);
  
  return (
    <nav className="sticky top-24 hidden xl:block w-64 text-sm leading-6">
      <ul className="space-y-1">
        {items.map((h) => (
          <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
            <a 
              href={`#${h.id}`} 
              className="hover:underline text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// CodeBlock 컴포넌트 (코드 블록)
export function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
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

// Callout 컴포넌트 (콜아웃 박스)
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
  success: {
    container: "bg-green-50 border-green-200 text-green-900",
    icon: "text-green-500",
    iconSvg: (
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  },
} as const;

export function Callout({
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

// YouTubeEmbed 컴포넌트 (유튜브 임베드)
export function YouTubeEmbed({ 
  id, 
  title, 
  caption 
}: {
  id: string; 
  title?: string; 
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title ?? "YouTube video"}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}