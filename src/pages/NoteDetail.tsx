import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

const markdownFiles: Record<string, () => Promise<string>> = {
  compilers: () => fetch(new URL('../content/compilers.md', import.meta.url).href).then((r) => r.text()),
  'software-engineering': () => fetch(new URL('../content/software-engineering.md', import.meta.url).href).then((r) => r.text()),
};

function CodeBlock({ node, className, children, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '');
  const lang = match ? match[1] : '';
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const text = String(children).replace(/\n$/, '');
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [children]);

  if (!className) {
    return <code className={className} {...props}>{children}</code>;
  }

  return (
    <div className="relative group">
      {lang && (
        <span className="absolute top-2 left-3 text-[10px] font-mono text-fg-muted uppercase select-none">
          {lang}
        </span>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono text-fg-muted hover:text-fg border border-[var(--border-glass)] hover:border-[var(--border-glass-hover)] bg-[var(--bg-glass)] opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        {copied ? '✓ copied' : 'copy'}
      </button>
      <code className={className} {...props}>{children}</code>
    </div>
  );
}

export default function NoteDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = slug ? markdownFiles[slug] : null;
    if (loader) {
      loader().then((text) => {
        setContent(text);
        setLoading(false);
      });
    } else {
      setContent('# 404\nNote not found.');
      setLoading(false);
    }
  }, [slug]);

  return (
    <div className="pt-20 sm:pt-24 pb-16 max-w-3xl mx-auto px-4">
      <Link
        to="/notes"
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm text-plasma bg-plasma/10 border border-plasma/20 hover:bg-plasma/20 transition-all duration-200 mb-6 group"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
        Back to Notes
      </Link>

      {loading ? (
        <div className="flex justify-center py-20 gap-2">
          <span className="w-2 h-2 rounded-full bg-plasma" style={{ animation: 'pulse-dot 1.4s ease-in-out infinite' }} />
          <span className="w-2 h-2 rounded-full bg-plasma" style={{ animation: 'pulse-dot 1.4s ease-in-out 0.2s infinite' }} />
          <span className="w-2 h-2 rounded-full bg-plasma" style={{ animation: 'pulse-dot 1.4s ease-in-out 0.4s infinite' }} />
        </div>
      ) : (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose dark:prose-invert prose-fusion max-w-none border-l-2 border-plasma/10 pl-3 sm:pl-6"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            components={{ code: CodeBlock }}
          >
            {content}
          </ReactMarkdown>
        </motion.article>
      )}
    </div>
  );
}
