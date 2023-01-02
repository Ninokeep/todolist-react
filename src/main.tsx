import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/app/App'
import './index.css'
import { makeServer } from './mock/index';

const environment = process.env.NODE_ENV;

if (environment !== 'production') {
  makeServer({ environment });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
