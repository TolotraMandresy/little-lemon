import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { useState } from 'react';
import Home from './pages/home/Home';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => setIsAuthenticated(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
                <Route path="/signup" element={isAuthenticated ? <Navigate to="/home" /> : <Signup onSignup={handleLogin} />} />
                <Route path="/home" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
