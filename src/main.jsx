import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ResultContextProvider } from './contexts/ResultContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResultContextProvider>
    <App />
    </ResultContextProvider>
  </StrictMode>,
)
