// main.jsx
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from './theme.js'
import '@fontsource/roboto-mono'
import '@fontsource/cinzel/700.css'

function Root() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDark, setIsDark] = useState(prefersDark)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => setIsDark(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const toggleTheme = () => setIsDark(!isDark)
  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App isDark={isDark} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
