import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import Home from './pages/home/Home'
// import PrimaryButton from './components/PrimaryButton/PrimaryButton'
// import Signup from './pages/Signup/Signup'
// import Login from './pages/Login/Login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home></Home>
    {/* <Login/> */}
    {/* <Signup/> */}
  </StrictMode>,
)