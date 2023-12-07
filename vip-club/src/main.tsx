import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='process.env.VITE_GOOGLE_OAUTH_CLIENT_ID'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>

)
