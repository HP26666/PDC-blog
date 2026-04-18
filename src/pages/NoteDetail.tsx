import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const markdownFiles: Record<string, () => Promise<string>> = {
  compilers: () => fetch(new URL('../content/compilers.md', import.meta.url).href).then((r) => r.text()),
  'software-engineering': () => fetch(new URL('../content/software-engineering.md', import.meta.url).href).then((r) => r.text()),
};

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
    <div className="pt-24 pb-16 max-w-3xl mx-auto px-4">
      <Link
        to="/notes"
        className="inline-flex items-center gap-1 text-sm text-plasma hover:text-plasma-dim transition-colors mb-6"
      >
        ← Back to Notes
      </Link>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-plasma border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-fusion max-w-none"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {content}
          </ReactMarkdown>
        </motion.article>
      )}
    </div>
  );
}
