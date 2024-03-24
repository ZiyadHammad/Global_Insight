import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from './routes/Landing';
import Details from './routes/Details';

import './styles/global.css'

import countries from './assets/data.json'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing countries={countries} />,
  },
  {
    path: 'details',
    element: <Details countries={countries}  />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);