import React from 'react'
import ReactDOM from 'react-dom/client'

import Providers from './providers/index.tsx'

import './styles/app.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
)
