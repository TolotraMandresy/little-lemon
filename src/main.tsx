import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
// import PrimaryButton from './components/PrimaryButton/PrimaryButton'
// import Signup from './pages/Signup/Signup'
// import Login from './pages/Login/Login'
import WithHeader from './layout/WithHeader/WithHeader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WithHeader>

    </WithHeader>
    {/* <Login/> */}
    {/* <Signup/> */}
  </StrictMode>,
)