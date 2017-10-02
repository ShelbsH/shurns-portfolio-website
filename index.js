import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './components/App';
import {getJSON} from './components/utils';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {

  getJSON('api/projectData').then((res) => {
    ReactDOM.render(
      <HashRouter>
      <App data={res}/>
    </HashRouter>, document.getElementById('root'));
  });
});
