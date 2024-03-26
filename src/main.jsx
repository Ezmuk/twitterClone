import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Timeline from './components/Timeline.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Profil from './pages/Profil.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Timeline/>
      },
      {
        path:'/:username',
        element:<Profil/>
      }
    ]
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
