// src/components/ArticleCard.jsx
import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function ArticleCard({ title, date, excerpt, url }) {
  return (
    <Box
      component={Link}
      href={url}
      target="_blank"
      rel="noopener"
      sx={{
        display: "block",
        border: "2px solid",
        borderColor: "primary.main",
        borderRadius: 0,
        p: 2,
        mb: 4,
        color: "text.primary",
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "action.hover",
          textDecoration: "underline",
        },
      }}
    >
      <Typography component="div" sx={{ fontSize: '1.125rem', fontWeight: 'bold', letterSpacing: '0.02em' }} gutterBottom>
        {title}
      </Typography>
      <Typography variant="caption" color="text.secondary" display="block" mb={1}>
        {date}
      </Typography>
      <Typography variant="body2" color="text.primary">
        {excerpt}
      </Typography>
    </Box>
  );
}
