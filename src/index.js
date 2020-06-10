import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux' 
import { Provider } from 'react-redux'
import manageUsers from './reducers/manageUsers'
import App from './App'




// add imports and code
const store = createStore(manageUsers)


ReactDOM.render(

  <App />
  <Provider>,
  document.getElementById('root')
);
