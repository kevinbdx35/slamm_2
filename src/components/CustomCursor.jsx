import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détection mobile
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
      const isInteractive = target.matches('a, button, [role="button"], .MuiButton-root, .MuiIconButton-root, .MuiBottomNavigationAction-root, .MuiListItemButton-root');
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

  return (
    <Box
      sx={{
        position: 'fixed',
        top: position.y - 10,
        left: position.x - 10,
        width: 20,
        height: 20,
        backgroundColor: '#00ff5e',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 10000,
        transition: 'all 0.15s cubic-bezier(0.23, 1, 0.320, 1)',
        mixBlendMode: 'difference',
        opacity: 0.8,
        transform: isClicking 
          ? 'scale(0.8)' 
          : isHovering 
            ? 'scale(2)' 
            : 'scale(1)',
        ...(isHovering && {
          backgroundColor: 'rgba(0, 255, 94, 0.3)',
          border: '2px solid #00ff5e',
          animation: 'pulse 1s infinite',
        }),
        ...(isClicking && {
          backgroundColor: '#ff6b35',
          animation: 'click-ripple 0.3s ease',
        }),
        ...(isText && {
          width: 2,
          height: 24,
          borderRadius: 1,
          animation: 'blink 1s infinite',
        }),
        '@keyframes pulse': {
          '0%, 100%': { 
            transform: isHovering ? 'scale(2)' : 'scale(1)',
            opacity: 0.8 
          },
          '50%': { 
            transform: isHovering ? 'scale(2.2)' : 'scale(1.1)', 
            opacity: 0.6 
          },
        },
        '@keyframes click-ripple': {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.2)', opacity: 0.5 },
          '100%': { transform: 'scale(0.8)', opacity: 0.8 },
        },
        '@keyframes blink': {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
      }}
    />
  );
}