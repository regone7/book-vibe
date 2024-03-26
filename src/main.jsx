import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './layout/Root';
import Home from './pages/Home';
import Listedbooks from './pages/Listedbooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('/mydata.json'),
     },
     {
      path: "/listbooks",
      element: <Listedbooks></Listedbooks>,
     },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
