import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './Layouts/RootLayout.jsx'
import Home from './Pages/Home.jsx'
import Registration from './Pages/Registration.jsx'
import Login from './Pages/Login.jsx'
const router=createBrowserRouter([
  {path:'/',
    Component:RootLayout,
    children:[{
      index:true,
      Component:Home
    },
  {
    path:'/registration',
    Component:Registration
  },{
    path:'/login',
    Component:Login
  }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
