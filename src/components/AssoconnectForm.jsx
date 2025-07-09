import { useEffect, useRef, useState } from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

export default function AssoconnectForm({ collectId }) {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

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
        document.body.appendChild(script);
      } else {
        if (window.__iframeCollect && typeof window.__iframeCollect.refresh === "function") {
          window.__iframeCollect.refresh();
          setIsLoading(false);
        } else {
          // En cas de chargement incomplet ou de lenteur
          setTimeout(() => setIsLoading(false), 2000);
        }
      }
    };

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
