"use client";
import { useEffect, useState } from "react";

export default function TOC() {
  const [items, setItems] = useState<{ id: string; text: string; level: number }[]>([]);
  
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("article h2, article h3")) as HTMLHeadingElement[];
    setItems(headings.map(h => ({ 
      id: h.id || h.textContent?.toLowerCase().replace(/\s+/g, '-') || '', 
      text: h.innerText, 
      level: h.tagName === "H2" ? 2 : 3 
    })));
  }, []);
  
  return (
    <nav className="sticky top-24 hidden xl:block w-64 text-sm leading-6">
      <h2 className="mb-3 font-semibold text-gray-800">On this page</h2>
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
