import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Delicacies from './Pages/Delicacies';
import Vendors from './Pages/Vendors';
import ContactUs from './Pages/ContactUs';
import Header from './Components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {path:"/home", element:<App />, children:[
    {path:"/home",element:<Home />}
  ]},
  {path:"/about-us", element:<App />, children:[
    {path:"/about-us",element:<AboutUs />}
  ]},
  {path:"/delicacies", element:<App />, children:[
    {path:"/delicacies",element:<Delicacies />}
  ]},
  {path:"/vendors", element:<App />, children:[
    {path:"/vendors",element:<Vendors />}
  ]},
  {path:"/contact-us", element:<App />, children:[
    {path:"/contact-us",element:<ContactUs />}
  ]},
  
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
