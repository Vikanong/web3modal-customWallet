import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { initWeb3Modal } from './config/Web3Modal'
import './index.less'

initWeb3Modal()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
