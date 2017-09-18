import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
      <App/>
    </HashRouter>, 
    document.getElementById('root'));
});
