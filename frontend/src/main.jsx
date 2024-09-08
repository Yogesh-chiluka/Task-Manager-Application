import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './App/store.jsx'
import { Provider } from 'react-redux'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId = {googleClientId}>
    <Provider store={store}>
    <App />
    </Provider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
