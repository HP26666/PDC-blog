import { useState, useEffect } from 'react';

interface Props {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export default function Typewriter({ texts, speed = 80, deleteSpeed = 40, pause = 2000 }: Props) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    if (!deleting && charIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => setCharIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, texts, textIndex, speed, deleteSpeed, pause]);

  return (
    <span className="typewriter-cursor">
      {texts[textIndex].slice(0, charIndex)}
    </span>
  );
}
