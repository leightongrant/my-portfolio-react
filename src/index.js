import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import 'aos/dist/aos.css'
import { HelmetProvider } from 'react-helmet-async'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import AOS from 'aos'
import { useEffect } from 'react'

function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  return <>{children}</>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AosProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AosProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
