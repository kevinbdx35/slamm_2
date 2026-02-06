import { useEffect, useRef, useState } from 'react';

export default function AssoconnectForm({ collectId }) {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const scriptId = 'assoconnect-iframe-script';

    const loadScript = () => {
      const existingScript = document.getElementById(scriptId);

      if (!existingScript) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://slamm.assoconnect.com/public/build/js/iframe.js';
        script.async = true;
        script.onload = () => setIsLoading(false);
        script.onerror = () => {
          setIsLoading(false);
          setHasError(true);
        };
        document.body.appendChild(script);
      } else {
        if (window.__iframeCollect && typeof window.__iframeCollect.refresh === 'function') {
          window.__iframeCollect.refresh();
          setIsLoading(false);
        } else {
          setTimeout(() => setIsLoading(false), 2000);
        }
      }
    };

    setHasError(false);
    setIsLoading(true);
    loadScript();
  }, [collectId]);

  return (
    <div className="w-full min-h-[200px] relative">
      {isLoading && (
        <div className="text-center py-8">
          <div className="inline-block w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <p className="text-sm mt-2 opacity-70">Chargement du formulaire...</p>
        </div>
      )}

      {hasError && (
        <div className="text-center py-8">
          <p className="text-sm text-error dark:text-error-dark">Le formulaire n'a pas pu être chargé.</p>
          <p className="text-sm mt-2 opacity-70">Contactez-nous directement par email à slamm35800@gmail.com</p>
        </div>
      )}

      <div
        ref={containerRef}
        className="iframe-asc-container"
        data-type="collect"
        data-collect-id={collectId}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
}
