import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './index.css';
import App from './pages/App/App';

ReactDOM.render(
  <BrowserRouter>
    <Route render={(props) =>
    <App {...props} />
    }/>
  </BrowserRouter>,
  document.getElementById('root')
);