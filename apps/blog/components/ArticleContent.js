'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function ArticleContent({ content }) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, children, ...props }) => {
            const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <h1 id={id} {...props}>
                {children}
              </h1>
            );
          },
          h2: ({ node, children, ...props }) => {
            const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <h2 id={id} {...props}>
                {children}
              </h2>
            );
          },
          h3: ({ node, children, ...props }) => {
            const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <h3 id={id} {...props}>
                {children}
              </h3>
            );
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
