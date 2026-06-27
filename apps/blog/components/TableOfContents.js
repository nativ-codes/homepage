'use client';

import { useEffect, useState } from 'react';

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Extract all heading levels from markdown content
    // Matches #, ##, and ### headings
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const matches = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length; // 1 for #, 2 for ##, 3 for ###
      const text = match[2];
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      matches.push({ text, id, level });
    }
    
    setHeadings(matches);

    // Set up intersection observer for highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -60% 0%' }
    );

    // Observe all heading elements
    matches.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [content]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  // Calculate indentation based on heading level
  const getIndentClass = (level) => {
    switch (level) {
      case 1: return 'pl-0';
      case 2: return 'pl-3';
      case 3: return 'pl-6';
      default: return 'pl-0';
    }
  };

  // Calculate font size based on heading level
  const getFontClass = (level) => {
    switch (level) {
      case 1: return 'text-sm font-medium';
      case 2: return 'text-sm';
      case 3: return 'text-xs';
      default: return 'text-sm';
    }
  };

  return (
    <nav className="w-full">
      <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
        Contents
      </h3>
      <ul className="space-y-1">
        {headings.map(({ text, id, level }) => (
          <li key={id} className={getIndentClass(level)}>
            <button
              onClick={() => scrollToHeading(id)}
              className={`text-left transition-colors hover:text-primary ${getFontClass(level)} ${
                activeId === id 
                  ? 'text-primary font-medium' 
                  : 'text-gray-400'
              }`}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
