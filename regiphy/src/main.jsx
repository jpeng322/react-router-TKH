import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Search from '../pages/search'
import Random from '../pages/random'
import Trending from '../pages/trending'
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
// function Layout() {
//   return (
//     <div>
//       <Tab />
//       <Outlet />
//     </div>
//   )
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: "trending",
      element: <Trending />
    },
    {
      path: "random",
      element: <Random />
    },
    {
      path: "search",
      element: <Search />
    }],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
