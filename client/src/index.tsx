import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { Route, RouteObject, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Checkout from './pages/checkout/Checkout';
import SearchP from './pages/SearchP';
import { Providers } from './redux/provider';
import SearchedItemsP from './pages/SearchedItemsP';
import { QueryClient, QueryClientProvider } from 'react-query';
import ItemDetails from './pages/ItemDetailsP';
import Information from './pages/checkout/Information';
import Shipping from './pages/checkout/Shipping';

const queryClient = new QueryClient();

const routes:  RouteObject[] = createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='/' element={<Navbar />}>
            <Route path='/:id' element={<ItemDetails />} />
            <Route path='/search' element={<SearchP />} />
            <Route path='/search/:category' element={<SearchedItemsP />} />
        </Route>
        <Route path='/checkout' element={<Checkout />} >
            <Route  index element={<Information />} />
            <Route  path='/checkout/shipping' element={<Shipping />} />

        </Route>

        
        

    </Route>,
    
    
);

const router = createBrowserRouter(routes);


ReactDOM.createRoot(document.getElementById('root')!).render(

    <React.StrictMode>
        <QueryClientProvider client={queryClient} >
        <Providers>
        
            <RouterProvider router={router}  />
            <App />
        
        </Providers>
        </QueryClientProvider>

        
    </React.StrictMode>

)