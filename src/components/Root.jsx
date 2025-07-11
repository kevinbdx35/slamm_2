import React, { useState, useEffect } from 'react'
import App from '../App.jsx'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { lightTheme, darkTheme } from '../theme.js'
import { HashRouter } from 'react-router-dom'
import CustomCursor from './CustomCursor.jsx'
import '../styles/cursor.css'

export default function Root() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? JSON.parse(saved) : prefersDark
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }, [isDark])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      const saved = localStorage.getItem('darkMode')
      if (saved === null) {
        setIsDark(e.matches)
      }
    }
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const toggleTheme = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsDark(!isDark)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 150)
  }

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isTransitioning 
              ? 'radial-gradient(circle at center, rgba(0,255,94,0.1) 0%, transparent 70%)'
              : 'transparent',
            opacity: isTransitioning ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            zIndex: 9999,
          }
        }}
      >
        <HashRouter>
          <CustomCursor />
          <App isDark={isDark} toggleTheme={toggleTheme} />
        </HashRouter>
      </Box>
    </ThemeProvider>
  )
}