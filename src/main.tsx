import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import './styles/tokens.css'
// Scroll-reveal CSS hides targets only when JS is present (progressive enhancement).
document.documentElement.classList.add('js')
import './styles/base.css'
import './styles/logo.css'
import './styles/sections.css'
import './styles/motion.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
