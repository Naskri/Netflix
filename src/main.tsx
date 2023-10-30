import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './styles/global.css'
import { initI18N } from './lib/i18n/i18n.ts'
import { LanguageContext } from './context/LanguageContext.tsx'
import { ModalContextProvider } from './context/ModalContext.tsx'

initI18N()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageContext>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </LanguageContext>
  </React.StrictMode>
)
