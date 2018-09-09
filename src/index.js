import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// this block is to enable HMR without browser page reloading
if (module.hot) {
    module.hot.accept();
}

registerServiceWorker();
