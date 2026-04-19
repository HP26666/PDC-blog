import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const markdownFiles: Record<string, () => Promise<string>> = {
  'llm-vs-coding-agent': () =>
    fetch(new URL('../content/llm-vs-coding-agent.md', import.meta.url).href).then((r) => r.text()),
  'claude-code-guide': () =>
    fetch(new URL('../content/claude-code-guide.md', import.meta.url).href).then((r) => r.text()),
  'trae-guide': () =>
    fetch(new URL('../content/trae-guide.md', import.meta.url).href).then((r) => r.text()),
  'dev-environment-setup': () =>
    fetch(new URL('../content/dev-environment-setup.md', import.meta.url).href).then((r) => r.text()),
  'coding-agent-examples': () =>
    fetch(new URL('../content/coding-agent-examples.md', import.meta.url).href).then((r) => r.text()),
};

export default function ArticleDetail() {
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
      setContent('# 404\nArticle not found.');
      setLoading(false);
    }
  }, [slug]);

  return (
    <div className="pt-24 pb-16 max-w-3xl mx-auto px-4 relative">
      {/* Background grid */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-30" />

      <div className="relative z-10">
        <Link
          to="/articles"
          className="inline-flex items-center gap-1 text-sm text-plasma hover:text-plasma-dim transition-colors mb-6 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Articles
        </Link>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="relative">
              <div className="w-12 h-12 border-2 border-plasma/30 rounded-full animate-spin" style={{
                borderTopColor: '#00d2ff',
              }} />
              <div className="absolute inset-0 w-12 h-12 border-2 border-energy/20 rounded-full animate-spin" style={{
                borderBottomColor: '#9d50bb',
                animationDirection: 'reverse',
                animationDuration: '1.5s',
              }} />
            </div>
            <span className="text-sm font-mono text-gray-500">Loading article...</span>
          </div>
        ) : (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert prose-fusion max-w-none glass rounded-xl p-8 border-glow-animate"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {content}
            </ReactMarkdown>
          </motion.article>
        )}
      </div>
    </div>
  );
}
