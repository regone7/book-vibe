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
import Booksditels from './pages/Booksditels';
import Errorpage from './components/Errorpage';
import PagesToReadchar from './pages/PagesToReadchar';
import Publicreaction from './components/Publicreaction';
import Quaris from './components/Quaris';
import Graphchart from './pages/Graphchart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
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
     {
      path: "/books/:bookId",
      element: <Booksditels></Booksditels>,
      loader: () => fetch('/mydata.json'),
     },
     {
      path: "/pagescharts",
      element: <PagesToReadchar></PagesToReadchar>,
     },
     {
      path: "/publicreaction",
      element: <Publicreaction></Publicreaction>,
     },
     {
      path: "/quaris",
      element: <Quaris></Quaris>,
     },
     {
      path: "/graph",
      element: <Graphchart></Graphchart>,
     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
