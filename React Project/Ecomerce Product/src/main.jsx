import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Screen/Home.jsx';
import About from './Screen/About.jsx';
import Contact from './Screen/Contact.jsx';
import Singleproduct from './Screen/Singleproduct.jsx';
import NotFound from './Screen/NotFound.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : 'about',
        element : <About />
      },
      {
        path : 'contact',
        element : <Contact />
      },
      {
        path : 'singleproduct',
        element : <Singleproduct />
      },
      {
        path : '*',
        element : <NotFound />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
