import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './components/App';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {

  const data = [
    {
      "project": "Superhero Feats App",
      "screenshot": './images/superhero_feats_app.jpg',
      "description": "This is an application I created entirely from scratch for users to check the po" +
          "wer levels and capabilities of superhero characters. The App includes an image g" +
          "allery, hero profile page, table to display heroes and their information, and a " +
          "search navigation to go to the hero’s page.",
      "tags": [
        "ReactJS+ES6",
        "ExpressJS",
        "Webpack 2",
        "Jest",
        "Enzyme",
        "Bootstrap",
        "SCSS"
      ]
    }, {
      "project": "React Boilerplate",
      "screenshot": './images/react_boilerplate.jpg',
      "description": "A boilerplate that I thought would be a good idea to create to have more control" +
          " when I kickstart my projects. This boilerplate was used to create the Superhero" +
          "-Feats-App. The boilerplate includes a basic React Component, ESLint, Webpack 2," +
          " and testing using Jest and Enzyme.",
      "tags": [
        "ReactJS+ES6",
        "ExpressJS",
        "Webpack 2",
        "Jest",
        "Enzyme",
        "SCSS"
      ]
    }, {
      "project": "Generator Not Another Boilerplate",
      "screenshot": './images/generator_not_another_react_boilerplate.jpg',
      "description": "I helped contribute a project from a developer, who created this boilerplate for" +
          " other developers to kickstart React+Redux projects. I used Redux and Redux Saga" +
          " to load a display, which fetches data from a JSON file. I also tested the funct" +
          "ionality using Redux and Redux-Saga.",
      "tags": ["ReactJS+ES6", "ExpressJS", "Redux", "Redux-Saga"]
    }, {
      "project": "Portfolio Website",
      "screenshot": './images/shurns_portfolio.jpg',
      "description": "My personal website I created to show off my projects using different technologi" +
          "es. This portfolio website contains three pages, which is Home Page, Projects, a" +
          "nd Contact. The navigation is implemented using React-Router.",
      "tags": ["ReactJS+ES6", "ExpressJS", "Webpack 3", "Bootstrap 4 Beta", "React-Router", "SCSS"]
    }
  ]
  ReactDOM.render(
  <HashRouter>
    <App data={data}/>
  </HashRouter>, document.getElementById('root'));
});
