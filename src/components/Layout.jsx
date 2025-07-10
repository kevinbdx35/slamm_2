import React from "react";
import { Box } from "@mui/material";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import FloatingTrialButton from "./FloatingTrialButton.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default function Layout({ children, isDark, toggleTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <ScrollToTop />

      <Menu isDark={isDark} toggleTheme={toggleTheme} />

      <Box
        component="main"
        sx={{
          flex: 1,
          px: 3,
          py: 4,
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {children}
      </Box>

      <Footer />

      <FloatingTrialButton />
    </Box>
  );
}
