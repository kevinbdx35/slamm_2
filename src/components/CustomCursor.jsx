import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.matches('a, button, [role="button"]');
      const isTextElement = target.matches('input, textarea, [contenteditable]');
      setIsHovering(isInteractive);
      setIsText(isTextElement);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const style = {
    position: 'fixed',
    top: position.y - 10,
    left: position.x - 10,
    width: isText ? 2 : 20,
    height: isText ? 24 : 20,
    backgroundColor: isClicking ? '#ff6b35' : isHovering ? 'rgba(0, 255, 94, 0.3)' : '#00ff5e',
    borderRadius: isText ? '1px' : '50%',
    pointerEvents: 'none',
    zIndex: 10000,
    transition: 'all 0.15s cubic-bezier(0.23, 1, 0.320, 1)',
    mixBlendMode: 'difference',
    opacity: 0.8,
    transform: isClicking ? 'scale(0.8)' : isHovering ? 'scale(2)' : 'scale(1)',
    border: isHovering ? '2px solid #00ff5e' : 'none',
    animation: isHovering ? 'pulse 1s infinite' : isText ? 'blink 1s infinite' : 'none',
  };

  return <div style={style} />;
}
