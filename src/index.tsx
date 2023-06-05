import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MeterTable from './meter/MeterTable';
import MeterDetailsPage from './meter/MeterDetailsPage';
import NewMeterPage from './meter/NewMeterPage';

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MeterTable />
  }, 
  {
    path: "/meter/new", 
    element: <NewMeterPage />
  },
  {
    path: "/meter/:id",
    element: <MeterDetailsPage />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={BrowserRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
