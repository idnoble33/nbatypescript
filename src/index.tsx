import React from 'react';
import ReactDOM from 'react-dom';
import { DivContainer } from './index.style';
import './index.css'
import App from './App';

ReactDOM.render(
  <DivContainer>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DivContainer>,
  document.getElementById('root')
);

