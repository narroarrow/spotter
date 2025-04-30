import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BottomNav from './bottomNav.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <App />
    {/* Uncomment the line below to use the BottomNav component */}
  {/* <BottomNav /> */}
  </StrictMode>,
)
