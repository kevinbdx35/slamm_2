import { useEffect, useRef, useState } from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

export default function AssoconnectForm({ collectId }) {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const scriptId = "assoconnect-iframe-script";

    const loadScript = () => {
      const existingScript = document.getElementById(scriptId);

      if (!existingScript) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://slamm.assoconnect.com/public/build/js/iframe.js";
        script.async = true;
        script.onload = () => setIsLoading(false);
        script.onerror = () => {
          setIsLoading(false);
          setHasError(true);
        };
        document.body.appendChild(script);
      } else {
        if (window.__iframeCollect && typeof window.__iframeCollect.refresh === "function") {
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
    <Box sx={{ width: "100%", minHeight: 200, position: "relative" }}>
      {isLoading && (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <CircularProgress color="secondary" />
          <Typography variant="body2" sx={{ mt: 1 }}>
            Chargement du formulaire...
          </Typography>
        </Box>
      )}

      {hasError && (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="body2" color="error">
            Le formulaire n'a pas pu être chargé.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Contactez-nous directement par email à slamm35800@gmail.com
          </Typography>
        </Box>
      )}

      <div
        ref={containerRef}
        className="iframe-asc-container"
        data-type="collect"
        data-collect-id={collectId}
        style={{ display: isLoading ? "none" : "block" }}
      ></div>
    </Box>
  );
}
