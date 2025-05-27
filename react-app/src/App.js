import React from 'react';
import './styles/templatemo-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async'; // <-- ADD THIS
import Home from './components/Home';
import Navbar from './components/Navbar'

function App() {
    return (
        <HelmetProvider> {/* <-- WRAP your app here */}
        
            <Home />
        </HelmetProvider>
    );
}

export default App;
