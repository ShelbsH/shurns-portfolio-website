//=============================================
// Express
const express = require('express');
const app = express();

//=============================================
// Get Router middleware path
const emailRouter = require('./api/email');

//=============================================
// Dependency tools for express
const path = require('path');
const morgan = require('morgan');

//=============================================
// Port number for when the application is running
const PORT = 8000;

//=============================================
// Set the identifier to set different directories
const filePath = path.resolve(__dirname, 'dist/');
const imagePath = path.resolve(__dirname, 'images/');

//=============================================
// Standard tools to be used for the webpack
// middleware server
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  filePath: '/',
  contentBase: filePath,
  hot: true
}));

app.use(require("webpack-hot-middleware")(compiler));

morgan('dev');

//Sets the file path directory to load up scripts and styles from the HTML file.
app.use(express.static(filePath));

//Sets the image path directory.
app.use(express.static(imagePath));

//Send the HTML file on root index GET request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

//Load up the Route middleware upon root index GET request
app.use('/', emailRouter);

//Send image files based on GET request.
app.get(/^\/.*\.(png|jpg)$/, (req, res) => {
  const imgFile = req.url.slice(req.url.lastIndexOf('/') + 1);
  res.sendFile(path.join(__dirname, `images/${imgFile}`));
});

//Run the application on PORT, 8000.
app.listen(PORT, () => console.log('The port, ' + PORT + ' is running'));
