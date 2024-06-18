import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login_page';
import stores from "./pages/Reducer";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import AfterLogin from './pages/after_login';
let a = 3;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={stores}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/deshboard" element={<AfterLogin />}></Route>
      </Routes>


    </BrowserRouter>

  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
