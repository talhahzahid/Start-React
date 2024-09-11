import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './pages/Home.jsx'
import Singleuser from './pages/Singleuser.jsx'

const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                path : '',
                element : <Home/>
            },
            {
                path : "/Singleuser/:id",
                element : <Singleuser/>
            },
            {
                path : '*',
                element : <h1>Not Found</h1>,
            }

        ]
    }
])

createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
     

)
