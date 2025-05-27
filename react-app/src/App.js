// src/App.js
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/templatemo-style.css';

import Home from './components/Home';

function App() {
    return (
        <HelmetProvider>
            <HashRouter>
                <Home />
            </HashRouter>
        </HelmetProvider>
    );
}

export default App;
