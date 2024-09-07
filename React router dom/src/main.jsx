
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './pages/Home.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Project from "./pages/Project.jsx"
import Contact from "./pages/Contact.jsx"


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "About",
        element : <About/>
      },
      {
        path : "Project",
        element : <Project/>
      },
      {
        path : "Contact",
        element : <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  
) 
