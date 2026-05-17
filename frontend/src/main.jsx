import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import favicon from './assets/favicon/MEEKMUSIC-tr.png'

// ensure a favicon is present (imports handled by Vite)
const setFavicon = (href) => {
  try {
    let link = document.querySelector("link[rel*='icon']")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    link.href = href
  } catch (e) {
    // safe fallback — do nothing if DOM not available
  }
}

setFavicon(favicon)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
