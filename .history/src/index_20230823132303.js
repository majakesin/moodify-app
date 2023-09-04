import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import {router} from './router';
import reportWebVitals from './reportWebVitals';
import ThemeWrap from './pages/ThemeWrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeWrap>
    <RouterProvider router={router} />
    </ThemeWrap>
  </React.StrictMode>
);
