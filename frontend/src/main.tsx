import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import Header from './Components/Header/Header'

const container = document.getElementById('root')

//@ts-ignore
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Header />
        <App />
    </React.StrictMode>
)
