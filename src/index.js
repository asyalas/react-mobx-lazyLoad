import React from 'react';
import ReactDOM from 'react-dom';
import 'utils/styles/index.scss';
import App from './pages/index.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
