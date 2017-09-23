import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {

  const data = [
    {
      "website": "Superhero Feats App",
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
      "website": "React Boilerplate",
      "description": "A boilerplate that I thought would be a good idea to create to have more control" +
          " when I kickstart my projects. This boilerplate was used to create the Superhero" +
          "-Feats-App. The boilerplate includes a basic React Component, ESLint, Webpack 2," +
          " and testing using Jest and Enzyme.",
      "tags": [
        "ReactJS+ES6",
        "ExpressJS",
        "Webpack",
        "Jest",
        "Enzyme",
        "SCSS"
      ]
    }, {
      "website": "Generator Not Another Boilerplate",
      "description": "I helped contribute a project from a developer, who created this boilerplate for" +
          " other developers to kickstart React+Redux projects. I used Redux and Redux Saga" +
          " to load a display, which fetches data from a JSON file. I also tested the funct" +
          "ionality using Redux and Redux-Saga.",
      "tags": ["ReactJS+ES6", "ExpressJS", "Bootstrap 4 beta", "React-Router", "SCSS"]
    }
  ]
  ReactDOM.render(
    <HashRouter>
    <App data={data}/>
  </HashRouter>, document.getElementById('root'));
});
