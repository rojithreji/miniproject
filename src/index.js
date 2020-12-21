import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './state/store';
import {BrowserRouter as Router } from 'react-router-dom'


const unsubscribe = store.subscribe(()=>{console.log("subscribe",store.getState())})


store.subscribe(()=>{console.log("subscribe",store.getState())})
unsubscribe()


console.log("store", store.getState())
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode> 
      <Router basename={process.env.PUBLIC_URL} > <App /></Router>
    </React.StrictMode></Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
