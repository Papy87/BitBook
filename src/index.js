import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { HashRouter } from "react-router-dom"
import 'mdbreact/dist/css/mdb.css';




ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));

