import { useEffect } from 'react';

export default function ScrollToTop({ trigger }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [trigger]); // déclenche le scroll en haut à chaque changement de `trigger`

  return null;
}
