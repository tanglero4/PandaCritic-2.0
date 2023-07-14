import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginForm from './components/LoginForm';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import SignupForm from './components/SignupForm';
import Explore from './components/Explore';
import MyReviews from './components/MyReviews';
import Tea from './components/Tea'
import Restaurants from './components/Restaurants'
import Bars from './components/Bars'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signupform" element={<SignupForm />} />
      <Route path="/loginform" element={<LoginForm />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/myreviews" element={<MyReviews />} />
      <Route path="/tea" element={<Tea />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/bars" element={<Bars />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
