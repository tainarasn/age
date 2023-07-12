import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Modal } from './Components/Modal'

ReactDOM.render(
  <React.StrictMode>
    <Modal/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
