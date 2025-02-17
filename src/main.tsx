import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
// import PrimaryButton from './components/PrimaryButton/PrimaryButton'
import Login from './pages/Login/Login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login/>
    {/* <PrimaryButton style={{'--max-width': '400px'}} label='Login' className="text-red-600"></PrimaryButton> */}
  </StrictMode>,
)