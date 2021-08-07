import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './Routes/Routes';

import './App.css'


function App() {
  return (
    <div>
        <BrowserRouter>
        <Header />

        <Routes/>

        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
