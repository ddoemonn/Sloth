import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { Route, RouteObject, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import SearchP from './pages/SearchP';


const routes:  RouteObject[] = createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='/' element={<Navbar />}>
            <Route path='/search' element={<SearchP />} />
        </Route>
        <Route path='/checkout' element={<Checkout />} >

        </Route>

        
        

    </Route>,
    
    
);

const router = createBrowserRouter(routes);


ReactDOM.createRoot(document.getElementById('root')!).render(

    <React.StrictMode>
            <RouterProvider router={router}  />
        <App />
    </React.StrictMode>

)