import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App.js';

import registerServiceWorker from './registerServiceWorker';
 

const rootDiv = document.getElementById('root');
console.log(rootDiv);
ReactDOM.render(<App />, rootDiv );
registerServiceWorker();
