import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

import { HelmetProvider } from 'react-helmet-async'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import AosProvider from './components/aos/AosProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<HelmetProvider>
			<AosProvider>
				<App />
			</AosProvider>
		</HelmetProvider>
	</StrictMode>
)
