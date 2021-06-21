import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';

import Routes from './components/routes/Routes';


export default function App(){

  return(

    <HashRouter>

        <div className="app">

            <Routes />

        </div>

    </HashRouter>

  )
}